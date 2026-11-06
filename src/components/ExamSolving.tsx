'use client'; // Client Component: cần state, effect, onClick. Vẫn được render trước trên server ở lần tải đầu

/**
 * ExamSolving: màn hình "Giải đề" (URL /exam/[id]/solving).
 * Nhận prop `exam` từ Server Component src/app/exam/[id]/solving/page.tsx.
 *
 * MÁY TRẠNG THÁI (docs/07, mục 3):
 *   [Chưa trả lời] ──chọn đáp án──▶ [Đã trả lời] ──"Câu tiếp theo"──▶ [Chưa trả lời] (câu kế)
 *                                        └──câu cuối──▶ [Kết quả] ──"Làm lại"──▶ [Chưa trả lời] (câu 1)
 *
 * BẢN ĐỒ FILE:
 *   §1 Hằng số và hàm phụ   (ngoài component → không bị tạo lại mỗi lần render)
 *   §2 State, ref, effect
 *   §3 Giá trị suy ra       (derived state, KHÔNG dùng useState)
 *   §4 Event handler        (nơi duy nhất state thay đổi)
 *   §5 UI màn hình KẾT QUẢ  (return sớm khi isFinished)
 *   §6 UI màn hình LÀM BÀI  (vùng ①..⑦ khớp ảnh docs/images/07-giai-de-chu-thich.png)
 *
 * Giải thích chi tiết: docs/07-exam-solving.md
 */
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Exam } from '@/types';
import { calculatePercentage, getGrade, cn } from '@/lib/utils';
import { playCorrectSound, playIncorrectSound } from '@/lib/sound';

interface Props {
  exam: Exam;
}

type AnswerState = 'unanswered' | 'answered';

// ═════════════════════════════════════════════════════════════════════
// §1 HẰNG SỐ VÀ HÀM PHỤ
// ═════════════════════════════════════════════════════════════════════

// Nhãn và màu cho từng loại câu hỏi (hiện ở góc thẻ câu hỏi)
const typeLabels: Record<string, string> = {
  grammar: '📐 Ngữ pháp',
  vocabulary: '🔤 Từ vựng',
  reading: '📖 Đọc hiểu',
  writing: '✍️ Viết',
};

const typeColors: Record<string, string> = {
  grammar: 'bg-blue-100 text-blue-700',
  vocabulary: 'bg-green-100 text-green-700',
  reading: 'bg-orange-100 text-orange-700',
  writing: 'bg-purple-100 text-purple-700',
};

// Tin nhắn cổ vũ Nhã Phương, chọn theo `currentIndex % length` (xác định, không random → không lo hydration mismatch)
const correctMessages = [
  { main: '🌟 Giỏi lắm Nhã Phương!', sub: 'Cứ thế này là đỗ lớp 10 thôi!' },
  { main: '🎉 Chính xác rồi!', sub: 'Nhã Phương thông minh quá!' },
  { main: '✨ Tuyệt vời!', sub: 'Nhã Phương đang tiến bộ từng ngày!' },
  { main: '🏆 Xuất sắc!', sub: 'Cô gái học giỏi quá!' },
  { main: '💫 Perfect!', sub: 'Câu này Nhã Phương nhớ rồi nhé!' },
  { main: '🌈 Đỉnh quá!', sub: 'Nhã Phương làm được mà!' },
];

const incorrectMessages = [
  { main: '💪 Không sao Nhã Phương!', sub: 'Đọc giải thích để nhớ lâu hơn nè!' },
  { main: '😊 Cố lên nha!', sub: 'Nhã Phương sẽ nhớ lần sau thôi!' },
  { main: '💕 Tiếp tục cố gắng!', sub: 'Hiểu giải thích là không quên nữa!' },
  { main: '🌸 Không sao!', sub: 'Lần này sai, lần sau nhớ mãi!' },
];

// 125 → "02:05"
function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

/**
 * Render text with **bold** markdown support and newline → <br/> support.
 * Dùng cho questionText, passage, explanation.
 * Ví dụ: "l**ea**f" → l<strong>ea</strong>f
 *
 * Không dùng dangerouslySetInnerHTML → nội dung luôn là văn bản, an toàn với XSS.
 */
function renderBoldText(text: string) {
  const lines = text.split('\n'); // Mỗi dòng → một <span>, từ dòng thứ 2 có <br /> phía trước
  return (
    <>
      {lines.map((line, lineIdx) => {
        // Nhóm bắt ( ) giúp split GIỮ LẠI phần khớp:
        // '**D. cost** — đúng' → ['', '**D. cost**', ' — đúng']
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={lineIdx}>
            {lineIdx > 0 && <br />}
            {parts.map((part, i) =>
              part.startsWith('**') && part.endsWith('**') && part.length > 4
                ? <strong key={i}>{part.slice(2, -2)}</strong>
                : part
            )}
          </span>
        );
      })}
    </>
  );
}

export default function ExamSolving({ exam }: Props) {
  // ═════════════════════════════════════════════════════════════════════
  // §2 STATE, REF, EFFECT  (mọi hook phải đứng trước các lệnh `return` sớm)
  // ═════════════════════════════════════════════════════════════════════

  const [currentIndex, setCurrentIndex] = useState(0); // Đang ở câu thứ mấy (0-based)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Đáp án đã chọn, null = chưa chọn
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered'); // Ghi chú: suy ra được từ selectedAnswer !== null
  const [results, setResults] = useState<Array<{ correct: boolean; selected: number }>>([]); // Kết quả từng câu đã làm
  const [isFinished, setIsFinished] = useState(false); // true → hiện màn hình kết quả

  // ⏱ Đồng hồ đếm giờ
  // elapsed: hiện trên màn hình → STATE (đổi thì phải render lại)
  // startTimeRef, timerRef: chỉ dùng trong logic → REF (đổi không cần render lại)
  const [elapsed, setElapsed] = useState(0);
  // Giá trị thật được gán trong useEffect bên dưới (không gọi Date.now() lúc render)
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Bắt đầu đồng hồ khi component mount (chỉ chạy ở trình duyệt, sau hydration).
  // Tính từ mốc Date.now() thay vì cộng dồn +1: setInterval không chính xác khi tab ở nền.
  useEffect(() => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    // Cleanup khi rời trang. Đọc timerRef.current TẠI LÚC cleanup nên dừng được cả interval do handleRestart tạo
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // Dừng đồng hồ khi làm xong bài
  useEffect(() => {
    if (isFinished && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [isFinished]);

  // Scroll đến phần phản hồi trên mobile
  // feedbackRef là ref trỏ tới DOM (hộp phản hồi ⑥). Effect chạy SAU khi DOM cập nhật nên ref đã có giá trị
  const feedbackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (answerState === 'answered' && feedbackRef.current) {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [answerState]);

  // ═════════════════════════════════════════════════════════════════════
  // §3 GIÁ TRỊ SUY RA: tính lại mỗi lần render, không lưu vào state
  //    (lưu riêng sẽ dễ lệch với `results`, xem docs/07, mục 4)
  // ═════════════════════════════════════════════════════════════════════

  const currentQuestion = exam.questions[currentIndex];
  const isLastQuestion = currentIndex === exam.questions.length - 1;
  const correctCount = results.filter((r) => r.correct).length;
  const optionLabels = ['A', 'B', 'C', 'D'];

  // ═════════════════════════════════════════════════════════════════════
  // §4 EVENT HANDLER
  // ═════════════════════════════════════════════════════════════════════

  // Bấm một đáp án. Ba lần set... bên dưới chỉ gây MỘT lần render (React batching)
  const handleSelectAnswer = (optionIndex: number) => {
    if (answerState !== 'unanswered') return; // Chặn trả lời 2 lần (thêm một lớp ngoài thuộc tính disabled)
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) playCorrectSound(); else playIncorrectSound(); // Hiệu ứng phụ do hành động → đặt trong handler, không cần effect
    setAnswerState('answered');
    // Dạng hàm (prev) => ... + tạo mảng MỚI (không push) để React nhận ra thay đổi
    setResults((prev) => [...prev, { correct: isCorrect, selected: optionIndex }]);
  };

  // Bấm "Câu tiếp theo" hoặc "Xem kết quả"
  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerState('unanswered');
    }
  };

  // Bấm "Làm lại bài": đặt mọi state về ban đầu và tự khởi động lại đồng hồ
  // (effect đồng hồ có deps [] nên không tự chạy lại)
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerState('unanswered');
    setResults([]);
    setIsFinished(false);
    setElapsed(0);
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
  };

  // ═════════════════════════════════════════════════════════════════════
  // §5 UI MÀN HÌNH KẾT QUẢ (cùng URL, chỉ khác state isFinished)
  //    Vùng ①..④ khớp ảnh docs/images/07-ket-qua-chu-thich.png
  // ═════════════════════════════════════════════════════════════════════
  if (isFinished) {
    const percentage = calculatePercentage(correctCount, exam.questions.length);
    const grade = getGrade(percentage);
    const resultMsg = percentage >= 80
      ? { text: 'Nhã Phương giỏi quá! Đỗ lớp 10 chắc luôn! 🎊', color: 'text-green-600' }
      : percentage >= 60
      ? { text: 'Làm tốt lắm Nhã Phương! Ôn thêm chút nữa nhé! 💪', color: 'text-blue-600' }
      : { text: 'Không sao Nhã Phương! Làm lại là nhớ thêm liền! 🌸', color: 'text-pink-600' };

    return (
      <div className="animate-bounce-in">
        {/* Thông tin đề thi */}
        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 mb-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-pink-500 rounded-xl flex items-center justify-center text-white text-lg shadow-sm shrink-0">
            📄
          </div>
          <div className="text-left min-w-0">
            <p className="font-bold text-gray-800 text-base leading-tight truncate">{exam.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {[exam.school, exam.year].filter(Boolean).join(' · ')}
            </p>
          </div>
          <span className="ml-auto text-xs bg-violet-100 text-violet-600 font-semibold px-2.5 py-1 rounded-lg shrink-0">
            ✍️ Giải đề
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-4">
          <div className="text-6xl mb-3">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🌟' : '💪'}
          </div>
          {/* ① Xếp loại + lời nhắn */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{grade.label}</h2>
          <p className={`text-base font-medium mb-5 ${resultMsg.color}`}>{resultMsg.text}</p>

          {/* ② Điểm: số câu đúng, thanh %, phần trăm */}
          <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-2xl p-5 mb-5">
            <div className="text-5xl font-bold text-violet-500 mb-1">
              {correctCount}/{exam.questions.length}
            </div>
            <div className="text-gray-500 text-base mb-3">câu trả lời đúng</div>
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-violet-400 to-pink-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className={cn('mt-2 font-bold text-xl', grade.color)}>{percentage}%</div>
          </div>

          {/* Thời gian hoàn thành */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 mb-5 text-gray-600">
            <span className="text-lg">⏱</span>
            <span className="text-base font-medium">Thời gian hoàn thành: <strong>{formatTime(elapsed)}</strong></span>
          </div>

          {/* Ô số câu đúng / sai */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-3xl font-bold text-green-500">{correctCount}</div>
              <div className="text-sm text-green-600 font-medium">Câu đúng ✅</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-3xl font-bold text-red-400">{exam.questions.length - correctCount}</div>
              <div className="text-sm text-red-500 font-medium">Câu sai ❌</div>
            </div>
          </div>

          {/* ③ Chi tiết từng câu: C1, C2... xanh/đỏ, vẽ từ mảng results */}
          <div className="text-left mb-5">
            <h3 className="font-bold text-gray-700 mb-2 text-sm">Chi tiết từng câu:</h3>
            <div className="grid grid-cols-5 gap-1.5">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'rounded-xl py-2 text-center text-sm font-bold',
                    result.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                  )}
                >
                  <div>C{idx + 1}</div>
                  <div>{result.correct ? '✅' : '❌'}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ④ Nút làm lại + quay lại đề */}
          <div className="space-y-2">
            <button
              onClick={handleRestart}
              className="w-full bg-gradient-to-r from-violet-400 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl py-3.5 text-base transition-all"
            >
              🔄 Làm lại bài
            </button>
            <Link
              href={`/exam/${exam.id}`}
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl py-3.5 text-base transition-colors text-center"
            >
              ← Quay lại đề thi
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ═════════════════════════════════════════════════════════════════════
  // §6 UI MÀN HÌNH LÀM BÀI
  //    Vùng ①..⑦ khớp ảnh docs/images/07-giai-de-chu-thich.png
  // ═════════════════════════════════════════════════════════════════════

  const correctMsg = correctMessages[currentIndex % correctMessages.length];
  const incorrectMsg = incorrectMessages[currentIndex % incorrectMessages.length];
  const lastResult = results[results.length - 1]; // Kết quả của câu vừa trả lời (dùng cho hộp phản hồi ⑥)

  return (
    <div className="animate-fade-in">
      {/* Thanh trên cùng: nút quay lại + "Câu x/y" */}
      <div className="flex items-center justify-between mb-3">
        <Link
          href={`/exam/${exam.id}`}
          className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-violet-600 hover:text-violet-700 font-medium rounded-xl px-4 py-2.5 shadow-sm transition-all duration-200 group"
        >
          <span className="text-lg group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Quay lại</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-violet-50 text-violet-700 px-3 py-1.5 rounded-full font-medium">✍️ Giải đề</span>
          <span className="text-sm font-semibold text-gray-600">{currentIndex + 1}/{exam.questions.length}</span>
        </div>
      </div>

      {/* ═══ ① ĐỒNG HỒ: xanh < 2 phút, vàng < 5 phút, đỏ nhấp nháy từ 5 phút ═══ */}
      <div className={cn(
        'flex items-center justify-center gap-2 rounded-2xl py-3 mb-4 border-2 transition-colors duration-1000',
        elapsed < 120
          ? 'bg-emerald-50 border-emerald-300 text-emerald-600'
          : elapsed < 300
          ? 'bg-amber-50 border-amber-400 text-amber-600'
          : 'bg-red-50 border-red-500 text-red-600 animate-pulse',
      )}>
        <span className="text-2xl">{elapsed < 120 ? '⏱' : elapsed < 300 ? '⚡' : '🔥'}</span>
        <span className="text-4xl font-bold font-mono tracking-widest">{formatTime(elapsed)}</span>
      </div>

      {/* ═══ ② THANH TIẾN ĐỘ: độ rộng động → dùng style, không dùng class Tailwind ═══ */}
      <div className="bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-violet-400 to-pink-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / exam.questions.length) * 100}%` }}
        />
      </div>

      {/* ═══ ③ ĐẾM ĐÚNG / SAI ═══ */}
      <div className="flex gap-2 mb-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          ✅ {results.filter((r) => r.correct).length} đúng
        </span>
        <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
          ❌ {results.filter((r) => !r.correct).length} sai
        </span>
      </div>

      {/* ═══ ④ THẺ CÂU HỎI: nhãn câu + loại, đoạn văn (nếu có), nội dung, các đáp án ═══
          Lưu ý: div này không có `key`, nên sang câu mới React dùng lại DOM cũ và
          animate-slide-up KHÔNG chạy lại (xem docs/07, mục 7) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1 rounded-lg">
            Câu {currentQuestion.questionNumber}
          </span>
          <span className={cn('text-sm px-2.5 py-1 rounded-lg font-medium', typeColors[currentQuestion.type])}>
            {typeLabels[currentQuestion.type]}
          </span>
        </div>

        {/* Đoạn văn chỉ hiện khi có `passage` (trường tuỳ chọn). Hiện chưa đề nào dùng */}
        {currentQuestion.passage && (
          <div className="bg-blue-50 rounded-xl p-4 mb-4 border-l-4 border-blue-400">
            <p className="text-sm text-blue-600 font-medium mb-2">📖 Read the following passage:</p>
            <p className="text-base text-gray-700 leading-relaxed">{renderBoldText(currentQuestion.passage)}</p>
          </div>
        )}

        <p className="text-lg text-gray-800 font-medium mb-5 leading-relaxed">
          {renderBoldText(currentQuestion.questionText)}
        </p>

        {/* ⑤ CÁC NÚT ĐÁP ÁN. Mỗi nút luôn thuộc 1 trong 4 trường hợp:
              chưa trả lời → xám | đáp án đúng → xanh ✓ | đáp án chọn sai → đỏ ✗ | còn lại → xám nhạt */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonStyle = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-violet-50 hover:border-violet-300';
            if (answerState === 'answered') {
              if (index === currentQuestion.correctAnswer) {
                buttonStyle = 'bg-green-50 border-green-400 text-green-700';
              } else if (index === selectedAnswer) {
                buttonStyle = 'bg-red-50 border-red-400 text-red-600';
              } else {
                buttonStyle = 'bg-gray-50 border-gray-200 text-gray-400';
              }
            }
            return (
              <button
                key={index}
                // Truyền một HÀM; viết onClick={handleSelectAnswer(index)} sẽ gọi ngay lúc render
                onClick={() => handleSelectAnswer(index)}
                disabled={answerState === 'answered'}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className={cn(
                  'w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                  buttonStyle,
                  answerState === 'unanswered' && 'cursor-pointer',
                  answerState === 'answered' && 'cursor-default',
                )}
              >
                <span className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0',
                  answerState === 'unanswered' ? 'bg-gray-200 text-gray-600' :
                  index === currentQuestion.correctAnswer ? 'bg-green-500 text-white' :
                  index === selectedAnswer ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'
                )}>
                  {answerState === 'answered' && index === currentQuestion.correctAnswer ? '✓' :
                   answerState === 'answered' && index === selectedAnswer ? '✗' :
                   optionLabels[index]}
                </span>
                <span className="text-base leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ ⑥ HỘP PHẢN HỒI: lời động viên + đáp án đúng (nếu sai) + giải thích.
              Chỉ render khi đã trả lời → mỗi lần xuất hiện là phần tử mới → animation chạy ═══ */}
      {answerState === 'answered' && (
        <div
          ref={feedbackRef}
          className={cn(
            'rounded-2xl p-4 mb-4 animate-slide-up border-2',
            lastResult?.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          )}
        >
          <div className="mb-2">
            <p className={cn('font-bold text-lg', lastResult?.correct ? 'text-green-700' : 'text-red-600')}>
              {lastResult?.correct ? correctMsg.main : incorrectMsg.main}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">
              {lastResult?.correct ? correctMsg.sub : incorrectMsg.sub}
            </p>
            {!lastResult?.correct && (
              <p className="text-sm text-gray-600 mt-1.5">
                Đáp án đúng: <strong className="text-green-700">
                  {optionLabels[currentQuestion.correctAnswer]}. {currentQuestion.options[currentQuestion.correctAnswer]}
                </strong>
              </p>
            )}
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-sm text-gray-400 font-medium mb-1">💡 Giải thích:</p>
            <p className="text-base text-gray-700 leading-relaxed">{renderBoldText(currentQuestion.explanation)}</p>
          </div>
        </div>
      )}

      {/* ═══ ⑦ NÚT TIẾP THEO: câu cuối thì đổi chữ thành "Xem kết quả" ═══ */}
      {answerState === 'answered' && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-violet-400 to-pink-500 hover:opacity-90 text-white font-semibold rounded-xl py-4 text-base transition-all shadow-sm animate-slide-up"
        >
          {isLastQuestion ? '🏁 Xem kết quả' : 'Câu tiếp theo →'}
        </button>
      )}
    </div>
  );
}
