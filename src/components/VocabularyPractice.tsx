'use client'; // Client Component: cần state, effect, onClick. Vẫn được render trước trên server ở lần tải đầu

/**
 * VocabularyPractice: màn hình "Ôn từ vựng" (URL /exam/[id]/vocabulary).
 * Nhận prop từ Server Component src/app/exam/[id]/vocabulary/page.tsx:
 *   - exam:             để hiện tiêu đề và để xáo lại khi "Làm lại"
 *   - initialQuestions: bộ câu hỏi ĐÃ XÁO SẴN trên server (xem docs/08, mục 3)
 *
 * Cấu trúc và máy trạng thái giống hệt ExamSolving.tsx (đọc file đó trước). Khác biệt chính:
 *   - Câu hỏi đến từ prop đã xáo, không có sẵn trong dữ liệu
 *   - answerState có 3 giá trị: unanswered | correct | incorrect
 *   - Phản hồi hiện câu ví dụ thay vì lời giải thích
 *   - Màn hình kết quả không có ô chi tiết từng câu
 *
 * BẢN ĐỒ FILE: §1 Hằng số · §2 State/ref/effect · §3 Giá trị suy ra · §4 Event handler
 *              §5 UI KẾT QUẢ · §6 UI LÀM BÀI (vùng ①..⑦ giống ExamSolving)
 * Ảnh minh hoạ: docs/images/08-tu-vung-chu-thich.png
 * Giải thích chi tiết: docs/08-vocabulary-practice.md
 */
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Exam, VocabQuestion } from '@/types';
import { buildVocabQuestions, calculatePercentage, getGrade, cn } from '@/lib/utils';
import { playCorrectSound, playIncorrectSound } from '@/lib/sound';

interface Props {
  exam: Exam;
  // Đã được xáo sẵn trên server (xem app/exam/[id]/vocabulary/page.tsx)
  initialQuestions: VocabQuestion[];
}

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

// ═════════════════════════════════════════════════════════════════════
// §1 HẰNG SỐ VÀ HÀM PHỤ
// ═════════════════════════════════════════════════════════════════════

// Tin nhắn cổ vũ Nhã Phương (xoay vòng theo index câu hỏi)
const correctMessages = [
  { main: '🌟 Giỏi lắm Nhã Phương!', sub: 'Cứ thế này là đỗ lớp 10 thôi!' },
  { main: '🎉 Chính xác rồi!', sub: 'Nhã Phương thông minh quá!' },
  { main: '✨ Tuyệt vời!', sub: 'Nhã Phương đang tiến bộ từng ngày!' },
  { main: '🏆 Xuất sắc!', sub: 'Cô gái học giỏi quá!' },
  { main: '💫 Perfect!', sub: 'Từ này Nhã Phương nhớ rồi nhé!' },
  { main: '🌈 Đỉnh quá!', sub: 'Nhã Phương làm được mà!' },
];

const incorrectMessages = [
  { main: '💪 Không sao Nhã Phương!', sub: 'Sai để nhớ lâu hơn nè!' },
  { main: '😊 Cố lên nha!', sub: 'Nhã Phương sẽ nhớ lần sau thôi!' },
  { main: '💕 Tiếp tục cố gắng!', sub: 'Học thêm từ này là xong!' },
  { main: '🌸 Không sao!', sub: 'Lần này sai, lần sau nhớ mãi!' },
];

// 125 → "02:05"
function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function VocabularyPractice({ exam, initialQuestions }: Props) {
  // ═════════════════════════════════════════════════════════════════════
  // §2 STATE, REF, EFFECT  (mọi hook phải đứng trước các lệnh `return` sớm)
  // ═════════════════════════════════════════════════════════════════════

  // Prop chỉ dùng làm giá trị khởi tạo; "Làm lại" sẽ xáo bộ mới bằng setQuestions
  // KHÔNG xáo ở đây (kể cả useState(() => ...)): chạy cả trên server lẫn trình duyệt → hydration mismatch
  const [questions, setQuestions] = useState<VocabQuestion[]>(initialQuestions);

  const [currentIndex, setCurrentIndex] = useState(0); // Đang ở câu thứ mấy (0-based)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Đáp án đã chọn, null = chưa chọn
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [results, setResults] = useState<Array<{ correct: boolean }>>([]); // Kết quả từng câu đã làm
  const [isFinished, setIsFinished] = useState(false); // true → hiện màn hình kết quả

  // ⏱ Đồng hồ đếm giờ (giải thích chi tiết ở ExamSolving.tsx và docs/07, mục 8)
  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Bắt đầu đồng hồ khi mount. Ở dev, Strict Mode chạy mount → cleanup → mount (xem docs/08, mục 7)
  useEffect(() => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
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
  const feedbackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (answerState !== 'unanswered' && feedbackRef.current) {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [answerState]);

  // ═════════════════════════════════════════════════════════════════════
  // §3 GIÁ TRỊ SUY RA: tính lại mỗi lần render, không lưu vào state
  // ═════════════════════════════════════════════════════════════════════

  // Lưu ý: nếu một đề có vocabulary rỗng, currentQuestion sẽ là undefined mà TS không báo (docs/08, mục 6)
  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const correctCount = results.filter((r) => r.correct).length;

  // ═════════════════════════════════════════════════════════════════════
  // §4 EVENT HANDLER
  // ═════════════════════════════════════════════════════════════════════

  // Bấm một đáp án. Các lần set... bên dưới chỉ gây MỘT lần render (React batching)
  const handleSelectAnswer = (optionIndex: number) => {
    if (answerState !== 'unanswered') return;
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) playCorrectSound(); else playIncorrectSound();
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setResults((prev) => [...prev, { correct: isCorrect }]);
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

  // Bấm "Làm lại bài": xáo bộ câu mới, đặt mọi state về ban đầu, khởi động lại đồng hồ
  const handleRestart = () => {
    // Event handler chỉ chạy ở trình duyệt, nên gọi hàm ngẫu nhiên ở đây là an toàn
    setQuestions(buildVocabQuestions(exam.vocabulary));
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
  // ═════════════════════════════════════════════════════════════════════
  if (isFinished) {
    const percentage = calculatePercentage(correctCount, questions.length);
    const grade = getGrade(percentage);
    const resultMsg = percentage >= 80
      ? { text: `Nhã Phương giỏi quá! Đỗ lớp 10 chắc luôn! 🎊`, color: 'text-green-600' }
      : percentage >= 60
      ? { text: 'Làm tốt lắm Nhã Phương! Ôn thêm chút nữa nhé! 💪', color: 'text-blue-600' }
      : { text: 'Không sao Nhã Phương! Làm lại là nhớ thêm liền! 🌸', color: 'text-pink-600' };

    return (
      <div className="animate-bounce-in">
        {/* Thông tin đề thi */}
        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 mb-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg shadow-sm shrink-0">
            🔤
          </div>
          <div className="text-left min-w-0">
            <p className="font-bold text-gray-800 text-base leading-tight truncate">{exam.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {[exam.school, exam.year].filter(Boolean).join(' · ')}
            </p>
          </div>
          <span className="ml-auto text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-lg shrink-0">
            🔤 Từ vựng
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-4">
          <div className="text-6xl mb-3">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🌟' : '💪'}
          </div>
          {/* Xếp loại + lời nhắn */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{grade.label}</h2>
          <p className={`text-base font-medium mb-5 ${resultMsg.color}`}>{resultMsg.text}</p>

          {/* Điểm: số câu đúng, thanh %, phần trăm */}
          <div className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-2xl p-5 mb-5">
            <div className="text-5xl font-bold text-pink-500 mb-1">
              {correctCount}/{questions.length}
            </div>
            <div className="text-gray-500 text-base mb-3">câu trả lời đúng</div>
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-400 to-violet-500 h-3 rounded-full transition-all duration-700"
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

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-3xl font-bold text-green-500">{correctCount}</div>
              <div className="text-sm text-green-600 font-medium">Câu đúng ✅</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-3xl font-bold text-red-400">{questions.length - correctCount}</div>
              <div className="text-sm text-red-500 font-medium">Câu sai ❌</div>
            </div>
          </div>

          {/* Nút làm lại + quay lại đề */}
          <div className="space-y-2">
            <button
              onClick={handleRestart}
              className="w-full bg-gradient-to-r from-pink-400 to-violet-500 hover:opacity-90 text-white font-semibold rounded-xl py-3.5 text-base transition-all"
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
  // §6 UI MÀN HÌNH LÀM BÀI (vùng ①..⑦ giống ExamSolving)
  // ═════════════════════════════════════════════════════════════════════

  const optionLabels = ['A', 'B', 'C', 'D'];
  const correctMsg = correctMessages[currentIndex % correctMessages.length];
  const incorrectMsg = incorrectMessages[currentIndex % incorrectMessages.length];

  return (
    <div className="animate-fade-in">
      {/* Thanh trên cùng: nút quay lại + "Câu x/y" */}
      <div className="flex items-center justify-between mb-3">
        <Link
          href={`/exam/${exam.id}`}
          className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-pink-300 hover:bg-pink-50 text-pink-600 hover:text-pink-700 font-medium rounded-xl px-4 py-2.5 shadow-sm transition-all duration-200 group"
        >
          <span className="text-lg group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Quay lại</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium">🔤 Từ vựng</span>
          <span className="text-sm font-semibold text-gray-600">{currentIndex + 1}/{questions.length}</span>
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

      {/* ═══ ② THANH TIẾN ĐỘ ═══ */}
      <div className="bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-400 to-violet-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / questions.length) * 100}%` }}
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

      {/* ═══ ④ THẺ CÂU HỎI: loại từ + từ tiếng Anh + phiên âm, rồi 4 đáp án ═══ */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 animate-slide-up">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-violet-50 border border-pink-100 rounded-2xl px-5 py-3 mb-2">
            {currentQuestion.partOfSpeech && (
              <span className="text-sm bg-pink-200 text-pink-700 px-2 py-0.5 rounded-lg font-medium">
                {currentQuestion.partOfSpeech}
              </span>
            )}
            <span className="text-3xl font-bold text-gray-800">{currentQuestion.word}</span>
          </div>
          {currentQuestion.pronunciation && (
            <p className="text-base text-gray-400">{currentQuestion.pronunciation}</p>
          )}
          <p className="text-base text-gray-600 mt-2 font-medium">Từ này có nghĩa là gì?</p>
        </div>

        {/* ⑤ CÁC NÚT ĐÁP ÁN: đúng → xanh ✓, chọn sai → đỏ ✗ (logic giống ExamSolving, dùng correctIndex) */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonStyle = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-pink-50 hover:border-pink-300';
            if (answerState !== 'unanswered') {
              if (index === currentQuestion.correctIndex) {
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
                onClick={() => handleSelectAnswer(index)}
                disabled={answerState !== 'unanswered'}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                className={cn(
                  'w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                  buttonStyle,
                  answerState === 'unanswered' && 'cursor-pointer',
                  answerState !== 'unanswered' && 'cursor-default',
                )}
              >
                <span className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0',
                  answerState === 'unanswered' ? 'bg-gray-200 text-gray-600' :
                  index === currentQuestion.correctIndex ? 'bg-green-500 text-white' :
                  index === selectedAnswer ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'
                )}>
                  {answerState !== 'unanswered' && index === currentQuestion.correctIndex ? '✓' :
                   answerState !== 'unanswered' && index === selectedAnswer ? '✗' :
                   optionLabels[index]}
                </span>
                <span className="text-base leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ ⑥ HỘP PHẢN HỒI: lời động viên + nghĩa đúng (nếu sai) + câu ví dụ ═══ */}
      {answerState !== 'unanswered' && (
        <div
          ref={feedbackRef}
          className={cn(
            'rounded-2xl p-4 mb-4 animate-slide-up border-2',
            answerState === 'correct' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          )}
        >
          <div className="mb-2">
            <p className={cn('font-bold text-lg', answerState === 'correct' ? 'text-green-700' : 'text-red-600')}>
              {answerState === 'correct' ? correctMsg.main : incorrectMsg.main}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">
              {answerState === 'correct' ? correctMsg.sub : incorrectMsg.sub}
            </p>
            {answerState === 'incorrect' && (
              <p className="text-sm text-gray-600 mt-1.5">
                Đáp án đúng: <strong className="text-green-700">{currentQuestion.definition}</strong>
              </p>
            )}
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-sm text-gray-400 font-medium mb-1">📝 Ví dụ:</p>
            <p className="text-base text-gray-700 italic mb-1">&ldquo;{currentQuestion.exampleSentence}&rdquo;</p>
            <p className="text-sm text-gray-500">➜ {currentQuestion.exampleTranslation}</p>
          </div>
        </div>
      )}

      {/* ═══ ⑦ NÚT TIẾP THEO ═══ */}
      {answerState !== 'unanswered' && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-pink-400 to-violet-500 hover:opacity-90 text-white font-semibold rounded-xl py-4 text-base transition-all shadow-sm animate-slide-up"
        >
          {isLastQuestion ? '🏁 Xem kết quả' : 'Câu tiếp theo →'}
        </button>
      )}
    </div>
  );
}
