import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';
import { buildVocabQuestions } from '@/lib/utils';
import VocabularyPractice from '@/components/VocabularyPractice';

interface Props {
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
