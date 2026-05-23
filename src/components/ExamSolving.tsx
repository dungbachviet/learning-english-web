'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Exam } from '@/types';
import { calculatePercentage, getGrade, cn } from '@/lib/utils';

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

export default function ExamSolving({ exam }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [results, setResults] = useState<Array<{ correct: boolean; selected: number }>>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Ref để auto-scroll đến phần phản hồi trên mobile
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
  };

  // Màn hình kết quả cuối cùng
  if (isFinished) {
    const percentage = calculatePercentage(correctCount, exam.questions.length);
    const grade = getGrade(percentage);

    return (
      <div className="animate-bounce-in">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-4">
          <div className="text-6xl mb-3">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{grade.label}</h2>
          <p className="text-gray-500 text-sm mb-5">Bạn đã hoàn thành đề thi</p>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-4 mb-5">
            <div className="text-4xl font-bold text-purple-600 mb-1">
              {correctCount}/{exam.questions.length}
            </div>
            <div className="text-purple-500 text-sm">câu trả lời đúng</div>
            <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-violet-500 h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className={cn('mt-1 font-bold text-lg', grade.color)}>
              {percentage}%
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-green-600">{correctCount}</div>
              <div className="text-xs text-green-600">Câu đúng ✅</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-red-500">{exam.questions.length - correctCount}</div>
              <div className="text-xs text-red-500">Câu sai ❌</div>
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
                    'rounded-lg py-1.5 text-center text-xs font-bold',
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
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl py-3 transition-colors"
            >
              🔄 Làm lại bài
            </button>
            <Link
              href={`/exam/${exam.id}`}
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl py-3 transition-colors"
            >
              ← Quay lại đề thi
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href={`/exam/${exam.id}`} className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm group">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Quay lại</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">
            ✍️ Giải đề
          </span>
          <span className="text-xs text-gray-500">
            {currentIndex + 1}/{exam.questions.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-400 to-violet-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentIndex / exam.questions.length) * 100}%` }}
        />
      </div>

      {/* Score tracker */}
      <div className="flex gap-2 mb-4 text-xs">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
          ✅ {results.filter((r) => r.correct).length} đúng
        </span>
        <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full font-medium">
          ❌ {results.filter((r) => !r.correct).length} sai
        </span>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 animate-slide-up">
        {/* Question header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2.5 py-1 rounded-lg">
            Câu {currentQuestion.questionNumber}
          </span>
          <span className={cn('text-xs px-2 py-1 rounded-lg font-medium', typeColors[currentQuestion.type])}>
            {typeLabels[currentQuestion.type]}
          </span>
        </div>

        {/* Reading passage (if any) */}
        {currentQuestion.passage && (
          <div className="bg-blue-50 rounded-xl p-3 mb-3 border-l-4 border-blue-400">
            <p className="text-xs text-blue-600 font-medium mb-1.5">📖 Đọc đoạn văn sau:</p>
            <p className="text-sm text-gray-700 leading-relaxed italic">{currentQuestion.passage}</p>
          </div>
        )}

        {/* Question text */}
        <p className="text-base text-gray-800 font-medium mb-4 leading-relaxed">
          {currentQuestion.questionText}
        </p>

        {/* Options */}
        <div className="space-y-2.5">
          {currentQuestion.options.map((option, index) => {
            let buttonStyle = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-300';

            if (answerState === 'answered') {
              if (index === currentQuestion.correctAnswer) {
                buttonStyle = 'bg-green-50 border-green-400 text-green-700';
              } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
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
                  'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                  buttonStyle,
                  answerState === 'unanswered' && 'cursor-pointer',
                  answerState === 'answered' && 'cursor-default',
                )}
              >
                <span className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0',
                  answerState === 'unanswered' ? 'bg-gray-200 text-gray-600' :
                  index === currentQuestion.correctAnswer ? 'bg-green-500 text-white' :
                  index === selectedAnswer ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'
                )}>
                  {answerState === 'answered' && index === currentQuestion.correctAnswer ? '✓' :
                   answerState === 'answered' && index === selectedAnswer ? '✗' :
                   optionLabels[index]}
                </span>
                <span className="text-sm leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation (show after answering) — ref để auto-scroll trên mobile */}
      {answerState === 'answered' && (
        <div ref={feedbackRef} className={cn(
          'rounded-2xl p-4 mb-4 animate-slide-up border-2',
          results[results.length - 1]?.correct
            ? 'bg-green-50 border-green-200'
            : 'bg-red-50 border-red-200'
        )}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">
              {results[results.length - 1]?.correct ? '🎉' : '😅'}
            </span>
            <span className={cn(
              'font-bold',
              results[results.length - 1]?.correct ? 'text-green-700' : 'text-red-600'
            )}>
              {results[results.length - 1]?.correct ? 'Chính xác!' : 'Sai rồi!'}
            </span>
          </div>
          {!results[results.length - 1]?.correct && (
            <p className="text-sm text-gray-600 mb-2">
              Đáp án đúng: <strong className="text-green-700">
                {optionLabels[currentQuestion.correctAnswer]}. {currentQuestion.options[currentQuestion.correctAnswer]}
              </strong>
            </p>
          )}
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-xs text-gray-400 font-medium mb-1">💡 Giải thích:</p>
            <p className="text-sm text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
          </div>
        </div>
      )}

      {/* Next button */}
      {answerState === 'answered' && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-medium rounded-xl py-3.5 transition-all shadow-sm animate-slide-up"
        >
          {isLastQuestion ? '🏁 Xem kết quả' : 'Câu tiếp theo →'}
        </button>
      )}
    </div>
  );
}
