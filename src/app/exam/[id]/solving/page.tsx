/**
 * URL: /exam/[id]/solving, ví dụ /exam/de-mau-01/solving
 *
 * Server Component (không có 'use client'): chỉ chạy trên server.
 * Nhiệm vụ duy nhất: tìm đề theo id rồi giao cho Client Component ExamSolving.
 * Mọi tương tác (state, click, đồng hồ) nằm trong src/components/ExamSolving.tsx.
 */
import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';
import ExamSolving from '@/components/ExamSolving';

interface Props {
  // Next.js 16: params là Promise, bắt buộc phải await (xem docs/04, mục 2)
  params: Promise<{ id: string }>;
}

export default async function SolvingPage({ params }: Props) {
  const { id } = await params; // Lấy phần [id] trên URL
  const exam = getExamById(id);

  if (!exam) {
    notFound(); // Hiện src/app/not-found.tsx với HTTP 404. Kiểu trả về `never` giúp TS biết exam chắc chắn tồn tại ở dưới
  }

  // Prop `exam` được tuần tự hoá vào HTML (RSC payload), nên ai cũng đọc được trong page source
  return <ExamSolving exam={exam} />;
}
