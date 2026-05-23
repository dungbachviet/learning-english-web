import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';
import ExamSolving from '@/components/ExamSolving';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function SolvingPage({ params }: Props) {
  const { id } = await params;
  const exam = getExamById(id);

  if (!exam) {
    notFound();
  }

  return <ExamSolving exam={exam} />;
}
