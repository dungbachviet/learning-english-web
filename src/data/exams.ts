/**
 * src/data/exams.ts — Index file tổng hợp tất cả đề thi
 *
 * Cách thêm đề thi mới:
 *   1. Tạo file mới trong src/data/exams/de-XX.ts
 *   2. Export default một object kiểu Exam
 *   3. Import và thêm vào mảng `allExams` bên dưới
 *
 * Thứ tự trong mảng = thứ tự hiển thị trên trang chủ.
 */
import { Exam } from '@/types';

import deMau01 from './exams/de-mau-01';
import deMau02 from './exams/de-mau-02';
import deMau03 from './exams/de-mau-03';

export const exams: Exam[] = [
  deMau01,
  deMau02,
  deMau03,
];

export const getExamById = (id: string): Exam | undefined => {
  return exams.find((exam) => exam.id === id);
};
