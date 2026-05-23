// Tạo âm thanh bằng Web Audio API — không cần file nhạc

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtx = new AudioCtx();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  } catch {
    return null;
  }
}

/**
 * 🎵 Âm thanh ĐÚNG — Arpeggio C major đi lên (C5 → E5 → G5 → C6)
 * Mỗi nốt có 2 oscillator (sine chính + harmonic) → nghe như chuông thắng lợi
 */
export function playCorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const t = ctx.currentTime;

  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6

  notes.forEach((freq, i) => {
    const delay = i * 0.1;

    // Oscillator chính
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t + delay);
    gain.gain.linearRampToValueAtTime(0.3, t + delay + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.38);
    osc.start(t + delay);
    osc.stop(t + delay + 0.42);

    // Harmonic (octave trên) — thêm độ sáng
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2;
    gain2.gain.setValueAtTime(0, t + delay);
    gain2.gain.linearRampToValueAtTime(0.08, t + delay + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.14);
    osc2.start(t + delay);
    osc2.stop(t + delay + 0.18);
  });
}

/**
 * ❌ Âm thanh SAI — 3 lớp chồng nhau để nghe dày, ấn tượng
 *
 * Layer 1 — Sub-bass punch: Tiếng "thụp" nặng ở tần số thấp (100→40 Hz), decay nhanh
 * Layer 2 — Noise crack: Burst tạp âm ngắn qua bandpass filter → tiếng "xoẹt" đầu
 * Layer 3 — Dual detuned sawtooth: 2 oscillator lệch nhau ±12 cents tạo hiệu ứng
 *           chorus dày, pitch trượt từ 260Hz xuống 100Hz qua lowpass filter → "Waahhh"
 */
export function playIncorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const t = ctx.currentTime;

  // ── Layer 1: Sub-bass punch ──────────────────────────────────────────
  {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(100, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.18);
    gain.gain.setValueAtTime(0.55, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  // ── Layer 2: Noise crack (texture đầu) ──────────────────────────────
  {
    const bufLen = Math.floor(ctx.sampleRate * 0.09);
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;

    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = buf;

    const bpf = ctx.createBiquadFilter();
    bpf.type = 'bandpass';
    bpf.frequency.value = 350;
    bpf.Q.value = 1.2;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    noiseSrc.connect(bpf);
    bpf.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSrc.start(t);
  }

  // ── Layer 3: Dual detuned sawtooth → dày & descending "Waahh" ───────
  {
    // Lowpass filter trượt xuống → tạo hiệu ứng "tắt dần"
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.setValueAtTime(1600, t + 0.02);
    lpf.frequency.exponentialRampToValueAtTime(350, t + 0.62);
    lpf.connect(ctx.destination);

    // 2 oscillator lệch nhau ±12 cents = hiệu ứng chorus → âm dày
    [-12, 12].forEach((detune) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(lpf);

      osc.type = 'sawtooth';
      osc.detune.value = detune;
      // Pitch trượt từ 260Hz → 95Hz
      osc.frequency.setValueAtTime(260, t + 0.02);
      osc.frequency.linearRampToValueAtTime(95, t + 0.62);

      // Attack ngắn, giữ volume, rồi fade
      gain.gain.setValueAtTime(0, t + 0.02);
      gain.gain.linearRampToValueAtTime(0.26, t + 0.07);
      gain.gain.setValueAtTime(0.26, t + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.62);

      osc.start(t + 0.02);
      osc.stop(t + 0.68);
    });
  }
}
