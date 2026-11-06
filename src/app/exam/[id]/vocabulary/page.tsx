/**
 * URL: /exam/[id]/vocabulary, ví dụ /exam/de-mau-01/vocabulary
 *
 * Server Component: tìm đề, XÁO câu hỏi trên server, rồi giao cho VocabularyPractice.
 * Vì sao xáo ở đây mà không xáo trong component? Xem docs/08-vocabulary-practice.md.
 */
import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';
import { buildVocabQuestions } from '@/lib/utils';
import VocabularyPractice from '@/components/VocabularyPractice';

interface Props {
  // Next.js 16: params là Promise, bắt buộc phải await (xem docs/04, mục 2)
  params: Promise<{ id: string }>;
}

export default async function VocabularyPage({ params }: Props) {
  const { id } = await params;
  const exam = getExamById(id);

  if (!exam) {
    notFound();
  }

  // Xáo câu hỏi trên server (mỗi request một thứ tự mới) rồi truyền xuống qua prop.
  // HTML từ server và lần render đầu ở trình duyệt dùng CÙNG dữ liệu này,
  // nên không bị hydration mismatch và không cần xáo trong useEffect.
  const initialQuestions = buildVocabQuestions(exam.vocabulary);

  // key={exam.id}: sang đề khác thì React tạo component mới, state khởi tạo lại từ đầu.
  return <VocabularyPractice key={exam.id} exam={exam} initialQuestions={initialQuestions} />;
}
