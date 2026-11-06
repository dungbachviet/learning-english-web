/**
 * types/index.ts: hình dạng dữ liệu của cả app. NÊN ĐỌC FILE NÀY ĐẦU TIÊN.
 *
 *   Exam ──┬── vocabulary: VocabularyWord[]  → dùng cho chế độ "Ôn từ vựng"
 *          └── questions:  ExamQuestion[]    → dùng cho chế độ "Giải đề"
 *
 *   VocabularyWord ──buildVocabQuestions()──▶ VocabQuestion (đã xáo đáp án, đúng dạng UI cần)
 *
 * Dấu `?` = trường tuỳ chọn (kiểu thực tế là `string | undefined`), phải kiểm tra trước khi dùng.
 * Giải thích chi tiết: docs/06-du-lieu-va-typescript.md
 */

// Từ vựng trong đề thi
export interface VocabularyWord {
  id: string;
  word: string; // Từ tiếng Anh
  pronunciation?: string; // Phiên âm
  partOfSpeech?: string; // Loại từ: n, v, adj, adv
  definition: string; // Nghĩa tiếng Việt (= đáp án đúng, lưu bằng NỘI DUNG vì đáp án sẽ bị xáo)
  exampleSentence: string; // Câu ví dụ tiếng Anh
  exampleTranslation: string; // Dịch nghĩa câu ví dụ
  wrongOptions: string[]; // 3 đáp án sai (nghĩa tiếng Việt)
}

// Một câu hỏi trắc nghiệm từ vựng, đã xáo đáp án (tạo bởi buildVocabQuestions)
export interface VocabQuestion {
  wordId: string; // Hiện chưa được dùng ở đâu
  word: string;
  pronunciation?: string;
  partOfSpeech?: string;
  definition: string;
  exampleSentence: string;
  exampleTranslation: string;
  options: string[]; // 4 đáp án đã xáo
  correctIndex: number; // Vị trí đáp án đúng trong options, tính lúc xáo
}

// Câu hỏi trong đề thi (phần giải đề)
export interface ExamQuestion {
  id: string;
  questionNumber: number;
  type: 'grammar' | 'vocabulary' | 'reading' | 'writing'; // Union: gõ sai giá trị là TS báo lỗi
  passage?: string; // Đoạn văn (nếu có). Hiện chưa đề nào dùng
  questionText: string; // Nội dung câu hỏi, hỗ trợ **đậm** và xuống dòng \n
  options: string[]; // [A, B, C, D], giữ nguyên thứ tự như đề gốc
  correctAnswer: number; // Index 0-3 (lưu bằng VỊ TRÍ vì đáp án không bị xáo)
  explanation: string; // Giải thích đáp án, hỗ trợ **đậm** và xuống dòng \n
}

// Đề thi
export interface Exam {
  id: string; // Cũng là phần [id] trên URL, ví dụ 'de-mau-01'
  title: string;
  year?: string;
  school?: string;
  description?: string; // Hiện UI chưa hiển thị
  totalQuestions: number; // Lưu ý: UI không dùng trường này mà tính từ questions.length (dữ liệu đang sai, xem docs/06)
  vocabulary: VocabularyWord[];
  questions: ExamQuestion[];
}

// ─── Hai kiểu dưới đây chưa được dùng ở đâu (có thể để dành cho tính năng lưu kết quả) ───

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
