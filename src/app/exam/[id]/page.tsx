import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExamById } from '@/data/exams';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ExamDetailPage({ params }: Props) {
  const { id } = await params;
  const exam = getExamById(id);

  if (!exam) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      {/* Back button */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm mb-5 group">
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        <span>Quay lại danh sách đề</span>
      </Link>

      {/* Exam info */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-sm">
            📄
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{exam.title}</h2>
            <p className="text-sm text-gray-500">
              {exam.school} {exam.year && `• ${exam.year}`}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-600">{exam.vocabulary.length}</div>
            <div className="text-xs text-green-600 font-medium">Từ vựng</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">{exam.questions.length}</div>
            <div className="text-xs text-purple-600 font-medium">Câu hỏi giải đề</div>
          </div>
        </div>
      </div>

      {/* Mode selection */}
      <h3 className="text-base font-bold text-gray-700 mb-3">Chọn chế độ học:</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Vocabulary mode */}
        <Link href={`/exam/${exam.id}/vocabulary`} className="block group">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5 h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                🔤
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Ôn Từ Vựng</h4>
                <p className="text-xs text-gray-500">{exam.vocabulary.length} từ vựng</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Trắc nghiệm {exam.vocabulary.length} từ vựng trong đề thi này. Chọn nghĩa đúng cho mỗi từ tiếng Anh.
            </p>
            <div className="space-y-1.5 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                Trả lời A, B, C, D
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                Biết ngay kết quả đúng/sai
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
                Ví dụ câu để nhớ từ
              </div>
            </div>
            <div className="mt-4 bg-green-500 text-white text-sm font-medium rounded-xl py-2.5 text-center group-hover:bg-green-600 transition-colors">
              Bắt đầu ôn từ vựng →
            </div>
          </div>
        </Link>

        {/* Exam solving mode */}
        <Link href={`/exam/${exam.id}/solving`} className="block group">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5 h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                ✍️
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Giải Đề Thi</h4>
                <p className="text-xs text-gray-500">{exam.questions.length} câu hỏi</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Làm từng câu trong đề thi và nhận giải thích chi tiết sau mỗi câu trả lời.
            </p>
            <div className="space-y-1.5 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">✓</span>
                Làm từng câu một
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">✓</span>
                Giải thích chi tiết sau mỗi câu
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">✓</span>
                Tổng kết điểm cuối bài
              </div>
            </div>
            <div className="mt-4 bg-purple-500 text-white text-sm font-medium rounded-xl py-2.5 text-center group-hover:bg-purple-600 transition-colors">
              Bắt đầu giải đề →
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
