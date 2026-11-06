/**
 * utils.ts: các hàm nhỏ, độc lập với React. Dùng được ở cả server lẫn trình duyệt.
 *
 *   cn                        ghép chuỗi class Tailwind theo điều kiện      (thuần)
 *   shuffleArray              xáo mảng bằng Fisher-Yates                    (KHÔNG thuần: Math.random)
 *   createVocabMultipleChoice xáo 4 đáp án của 1 từ, tìm vị trí đáp án đúng (KHÔNG thuần)
 *   buildVocabQuestions       tạo cả bộ câu hỏi từ vựng đã xáo              (KHÔNG thuần)
 *   calculatePercentage       tính % làm tròn                               (thuần)
 *   getGrade                  xếp loại theo %                               (thuần)
 *
 * Hàm KHÔNG thuần chỉ gọi ở Server Component hoặc event handler,
 * không gọi lúc render của Client Component (xem docs/08, mục 4).
 * Giải thích chi tiết: docs/10-tien-ich-va-am-thanh.md
 */
import { clsx, type ClassValue } from 'clsx';
import type { VocabQuestion, VocabularyWord } from '@/types';

// Ví dụ: cn('p-4', isError && 'text-red-500') → 'p-4' hoặc 'p-4 text-red-500'
// clsx tự bỏ qua false, null, undefined
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Xáo trộn mảng (Fisher-Yates shuffle)
// Generic <T>: truyền vào mảng kiểu gì thì trả ra mảng kiểu đó
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // Sao chép: KHÔNG sửa mảng gốc (dữ liệu đề dùng chung cho mọi request)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // j trong [0, i], cho phép giữ nguyên vị trí
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Đổi chỗ bằng destructuring
  }
  return arr;
}

// Tạo câu hỏi trắc nghiệm từ từ vựng
// Tham số chỉ đòi đúng 2 trường cần dùng (structural typing), không đòi cả VocabularyWord
export function createVocabMultipleChoice(
  word: { definition: string; wrongOptions: string[] },
) {
  const options = shuffleArray([word.definition, ...word.wrongOptions]); // 1 đúng + 3 sai
  const correctIndex = options.indexOf(word.definition); // Sau khi xáo, tìm lại vị trí đáp án đúng
  return { options, correctIndex };
}

// Tạo bộ câu hỏi từ vựng: xáo thứ tự từ và thứ tự đáp án của từng từ.
// Kết quả ngẫu nhiên, nên chỉ gọi ở Server Component (mỗi request) hoặc trong event handler,
// không gọi trong lúc render của Client Component (sẽ gây hydration mismatch).
// Đang được gọi ở: app/exam/[id]/vocabulary/page.tsx và handleRestart của VocabularyPractice.
export function buildVocabQuestions(vocabulary: VocabularyWord[]): VocabQuestion[] {
  return shuffleArray(vocabulary).map((word) => {
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
}

// Tính phần trăm
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0; // Tránh chia cho 0
  return Math.round((correct / total) * 100);
}

// Xếp loại kết quả
// Các `if` có `return` theo thứ tự giảm dần: tới dòng >= 80 nghĩa là chắc chắn < 90
export function getGrade(percentage: number): { label: string; color: string } {
  if (percentage >= 90) return { label: 'Xuất sắc! 🏆', color: 'text-yellow-500' };
  if (percentage >= 80) return { label: 'Giỏi! 🌟', color: 'text-green-500' };
  if (percentage >= 70) return { label: 'Khá! 👍', color: 'text-blue-500' };
  if (percentage >= 60) return { label: 'Trung bình 📚', color: 'text-orange-500' };
  return { label: 'Cần cố gắng hơn! 💪', color: 'text-red-500' };
}
