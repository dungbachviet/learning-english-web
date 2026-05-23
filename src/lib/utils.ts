import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Xáo trộn mảng (Fisher-Yates shuffle)
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Tạo câu hỏi trắc nghiệm từ từ vựng
export function createVocabMultipleChoice(
  word: { definition: string; wrongOptions: string[] },
) {
  const options = shuffleArray([word.definition, ...word.wrongOptions]);
  const correctIndex = options.indexOf(word.definition);
  return { options, correctIndex };
}

// Tính phần trăm
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

// Xếp loại kết quả
export function getGrade(percentage: number): { label: string; color: string } {
  if (percentage >= 90) return { label: 'Xuất sắc! 🏆', color: 'text-yellow-500' };
  if (percentage >= 80) return { label: 'Giỏi! 🌟', color: 'text-green-500' };
  if (percentage >= 70) return { label: 'Khá! 👍', color: 'text-blue-500' };
  if (percentage >= 60) return { label: 'Trung bình 📚', color: 'text-orange-500' };
  return { label: 'Cần cố gắng hơn! 💪', color: 'text-red-500' };
}
