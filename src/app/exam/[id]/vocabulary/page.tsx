import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';
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

  return <VocabularyPractice exam={exam} />;
}
