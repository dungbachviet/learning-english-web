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
import deMau04 from './exams/de-mau-04';
import deMau05 from './exams/de-mau-05';
import deMau06 from './exams/de-mau-06';
import deMau07 from './exams/de-mau-07';
import deMau08 from './exams/de-mau-08';
import deMau09 from './exams/de-mau-09';
import deMau10 from './exams/de-mau-10';
import deMau11 from './exams/de-mau-11';
import deMau12 from './exams/de-mau-12';
import deMau13 from './exams/de-mau-13';
import deMau14 from './exams/de-mau-14';
import deMau15 from './exams/de-mau-15';
import deMau16 from './exams/de-mau-16';
import deMau17 from './exams/de-mau-17';

export const exams: Exam[] = [
  deMau01,
  deMau02,
  deMau03,
  deMau04,
  deMau05,
  deMau06,
  deMau07,
  deMau08,
  deMau09,
  deMau10,
  deMau11,
  deMau12,
  deMau13,
  deMau14,
  deMau15,
  deMau16,
  deMau17,
];

export const getExamById = (id: string): Exam | undefined => {
  return exams.find((exam) => exam.id === id);
};
