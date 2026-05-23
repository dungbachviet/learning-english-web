'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Exam } from '@/types';
import { calculatePercentage, getGrade, cn } from '@/lib/utils';
import { playCorrectSound, playIncorrectSound } from '@/lib/sound';

interface Props {
  exam: Exam;
}

type AnswerState = 'unanswered' | 'answered';

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

// Tin nhắn cổ vũ Nhã Phương
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

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function ExamSolving({ exam }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [results, setResults] = useState<Array<{ correct: boolean; selected: number }>>([]);
  const [isFinished, setIsFinished] = useState(false);

  // ⏱ Đồng hồ đếm giờ
  const [elapsed, setElapsed] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (isFinished && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [isFinished]);

  // Scroll đến phần phản hồi trên mobile
  const feedbackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (answerState === 'answered' && feedbackRef.current) {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [answerState]);

  const currentQuestion = exam.questions[currentIndex];
  const isLastQuestion = currentIndex === exam.questions.length - 1;
  const correctCount = results.filter((r) => r.correct).length;
  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleSelectAnswer = (optionIndex: number) => {
    if (answerState !== 'unanswered') return;
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) playCorrectSound(); else playIncorrectSound();
    setAnswerState('answered');
    setResults((prev) => [...prev, { correct: isCorrect, selected: optionIndex }]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerState('unanswered');
    }
  };

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

  // Màn hình kết quả
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
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-4">
          <div className="text-6xl mb-3">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🌟' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{grade.label}</h2>
          <p className={`text-base font-medium mb-5 ${resultMsg.color}`}>{resultMsg.text}</p>

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

          {/* Chi tiết từng câu */}
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

  const correctMsg = correctMessages[currentIndex % correctMessages.length];
  const incorrectMsg = incorrectMessages[currentIndex % incorrectMessages.length];
  const lastResult = results[results.length - 1];

  return (
    <div className="animate-fade-in">
      {/* Header */}
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

      {/* ⏱ Đồng hồ nổi bật — đổi màu theo thời gian */}
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

      {/* Progress bar */}
      <div className="bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-violet-400 to-pink-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / exam.questions.length) * 100}%` }}
        />
      </div>

      {/* Score tracker */}
      <div className="flex gap-2 mb-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          ✅ {results.filter((r) => r.correct).length} đúng
        </span>
        <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
          ❌ {results.filter((r) => !r.correct).length} sai
        </span>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 animate-slide-up">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1 rounded-lg">
            Câu {currentQuestion.questionNumber}
          </span>
          <span className={cn('text-sm px-2.5 py-1 rounded-lg font-medium', typeColors[currentQuestion.type])}>
            {typeLabels[currentQuestion.type]}
          </span>
        </div>

        {currentQuestion.passage && (
          <div className="bg-blue-50 rounded-xl p-4 mb-4 border-l-4 border-blue-400">
            <p className="text-sm text-blue-600 font-medium mb-2">📖 Đọc đoạn văn sau:</p>
            <p className="text-base text-gray-700 leading-relaxed italic">{currentQuestion.passage}</p>
          </div>
        )}

        <p className="text-lg text-gray-800 font-medium mb-5 leading-relaxed">
          {currentQuestion.questionText}
        </p>

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

      {/* Phản hồi — cổ vũ Nhã Phương */}
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
            <p className="text-base text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      {/* Next button */}
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
