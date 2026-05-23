// Từ vựng trong đề thi
export interface VocabularyWord {
  id: string;
  word: string; // Từ tiếng Anh
  pronunciation?: string; // Phiên âm
  partOfSpeech?: string; // Loại từ: n, v, adj, adv
  definition: string; // Nghĩa tiếng Việt
  exampleSentence: string; // Câu ví dụ tiếng Anh
  exampleTranslation: string; // Dịch nghĩa câu ví dụ
  wrongOptions: string[]; // 3 đáp án sai (nghĩa tiếng Việt)
}

// Câu hỏi trong đề thi (phần giải đề)
export interface ExamQuestion {
  id: string;
  questionNumber: number;
  type: 'grammar' | 'vocabulary' | 'reading' | 'writing';
  passage?: string; // Đoạn văn (nếu có)
  questionText: string; // Nội dung câu hỏi
  options: string[]; // [A, B, C, D]
  correctAnswer: number; // Index 0-3
  explanation: string; // Giải thích đáp án
}

// Đề thi
export interface Exam {
  id: string;
  title: string;
  year?: string;
  school?: string;
  description?: string;
  totalQuestions: number;
  vocabulary: VocabularyWord[];
  questions: ExamQuestion[];
}

// Kết quả trả lời của người dùng
export interface UserAnswer {
  questionId: string;
  selectedOption: number | null;
  isCorrect: boolean;
  timeSpent?: number;
}

// Kết quả phiên học
export interface SessionResult {
  examId: string;
  mode: 'vocabulary' | 'solving';
  totalQuestions: number;
  correctAnswers: number;
  answers: UserAnswer[];
  completedAt: Date;
}
