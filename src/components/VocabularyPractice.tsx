'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Exam } from '@/types';
import { shuffleArray, createVocabMultipleChoice, calculatePercentage, getGrade } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface Props {
  exam: Exam;
}

interface VocabQuestion {
  wordId: string;
  word: string;
  pronunciation?: string;
  partOfSpeech?: string;
  definition: string;
  exampleSentence: string;
  exampleTranslation: string;
  options: string[];
  correctIndex: number;
}

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

export default function VocabularyPractice({ exam }: Props) {
  // Dùng useState + useEffect thay vì useMemo để tránh hydration mismatch
  // (Math.random() cho kết quả khác nhau giữa server và client)
  const [questions, setQuestions] = useState<VocabQuestion[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(exam.vocabulary);
    const qs = shuffled.map((word) => {
      const { options, correctIndex } = createVocabMultipleChoice(word);
      return {
        wordId: word.id,
        word: word.word,
        pronunciation: word.pronunciation,
        partOfSpeech: word.partOfSpeech,
        definition: word.definition,
        exampleSentence: word.exampleSentence,
        exampleTranslation: word.exampleTranslation,
        options,
        correctIndex,
      };
    });
    setQuestions(qs);
    setIsReady(true);
  }, [exam.vocabulary]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');
  const [results, setResults] = useState<Array<{ correct: boolean }>>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Ref để auto-scroll đến phần phản hồi trên mobile
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answerState !== 'unanswered' && feedbackRef.current) {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  }, [answerState]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const correctCount = results.filter((r) => r.correct).length;

  const handleSelectAnswer = (optionIndex: number) => {
    if (answerState !== 'unanswered') return;

    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setResults((prev) => [...prev, { correct: isCorrect }]);
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
    // Shuffle lại câu hỏi khi làm lại
    const shuffled = shuffleArray(exam.vocabulary);
    const qs = shuffled.map((word) => {
      const { options, correctIndex } = createVocabMultipleChoice(word);
      return {
        wordId: word.id,
        word: word.word,
        pronunciation: word.pronunciation,
        partOfSpeech: word.partOfSpeech,
        definition: word.definition,
        exampleSentence: word.exampleSentence,
        exampleTranslation: word.exampleTranslation,
        options,
        correctIndex,
      };
    });
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerState('unanswered');
    setResults([]);
    setIsFinished(false);
  };

  // Chờ client-side shuffle xong
  if (!isReady) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Đang chuẩn bị câu hỏi...</p>
      </div>
    );
  }

  // Màn hình kết quả cuối cùng
  if (isFinished) {
    const percentage = calculatePercentage(correctCount, questions.length);
    const grade = getGrade(percentage);
    return (
      <div className="animate-bounce-in">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center mb-4">
          <div className="text-6xl mb-3">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{grade.label}</h2>
          <p className="text-gray-500 text-sm mb-5">Bạn đã hoàn thành bài ôn từ vựng</p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-5">
            <div className="text-4xl font-bold text-blue-600 mb-1">
              {correctCount}/{questions.length}
            </div>
            <div className="text-blue-500 text-sm">câu trả lời đúng</div>
            <div className="mt-2 bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className={cn('mt-1 font-bold text-lg', grade.color)}>
              {percentage}%
            </div>
          </div>

          {/* Phân tích kết quả */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-green-600">{correctCount}</div>
              <div className="text-xs text-green-600">Câu đúng ✅</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-2xl font-bold text-red-500">{questions.length - correctCount}</div>
              <div className="text-xs text-red-500">Câu sai ❌</div>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={handleRestart}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl py-3 transition-colors"
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

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link href={`/exam/${exam.id}`} className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm group">
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Quay lại</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
            🔤 Ôn từ vựng
          </span>
          <span className="text-xs text-gray-500">
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
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
        {/* Word */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-2xl px-4 py-2 mb-2">
            {currentQuestion.partOfSpeech && (
              <span className="text-xs bg-blue-200 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                {currentQuestion.partOfSpeech}
              </span>
            )}
            <span className="text-2xl font-bold text-blue-700">{currentQuestion.word}</span>
          </div>
          {currentQuestion.pronunciation && (
            <p className="text-sm text-gray-400">{currentQuestion.pronunciation}</p>
          )}
          <p className="text-sm text-gray-600 mt-2 font-medium">Từ này có nghĩa là gì?</p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentQuestion.options.map((option, index) => {
            let buttonStyle = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300';

            if (answerState !== 'unanswered') {
              if (index === currentQuestion.correctIndex) {
                buttonStyle = 'bg-green-50 border-green-400 text-green-700';
              } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
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
                  'w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                  buttonStyle,
                  answerState === 'unanswered' && 'cursor-pointer',
                  answerState !== 'unanswered' && 'cursor-default',
                )}
              >
                <span className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0',
                  answerState === 'unanswered' ? 'bg-gray-200 text-gray-600' :
                  index === currentQuestion.correctIndex ? 'bg-green-500 text-white' :
                  index === selectedAnswer ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'
                )}>
                  {answerState !== 'unanswered' && index === currentQuestion.correctIndex ? '✓' :
                   answerState !== 'unanswered' && index === selectedAnswer ? '✗' :
                   optionLabels[index]}
                </span>
                <span className="text-sm leading-relaxed">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation (show after answering) — ref để auto-scroll trên mobile */}
      {answerState !== 'unanswered' && (
        <div ref={feedbackRef} className={cn(
          'rounded-2xl p-4 mb-4 animate-slide-up border-2',
          answerState === 'correct'
            ? 'bg-green-50 border-green-200'
            : 'bg-red-50 border-red-200'
        )}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{answerState === 'correct' ? '🎉' : '😅'}</span>
            <span className={cn(
              'font-bold',
              answerState === 'correct' ? 'text-green-700' : 'text-red-600'
            )}>
              {answerState === 'correct' ? 'Chính xác!' : 'Sai rồi!'}
            </span>
            {answerState === 'incorrect' && (
              <span className="text-sm text-gray-600">
                Đáp án đúng: <strong className="text-green-700">{currentQuestion.definition}</strong>
              </span>
            )}
          </div>

          {/* Example sentence */}
          <div className="bg-white rounded-xl p-3 border border-gray-100">
            <p className="text-xs text-gray-400 font-medium mb-1">📝 Ví dụ:</p>
            <p className="text-sm text-gray-700 italic mb-1">"{currentQuestion.exampleSentence}"</p>
            <p className="text-xs text-gray-500">➜ {currentQuestion.exampleTranslation}</p>
          </div>
        </div>
      )}

      {/* Next button */}
      {answerState !== 'unanswered' && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl py-3.5 transition-all shadow-sm animate-slide-up"
        >
          {isLastQuestion ? '🏁 Xem kết quả' : 'Câu tiếp theo →'}
        </button>
      )}
    </div>
  );
}
