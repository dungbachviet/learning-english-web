import Link from 'next/link';
import { exams } from '@/data/exams';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          <span>🎯</span>
          <span>Luyện thi vào lớp 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Chọn đề thi để bắt đầu luyện tập
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          Mỗi đề có 2 chế độ: <strong>Ôn từ vựng</strong> và <strong>Giải đề</strong>. Chăm chỉ luyện tập để đạt điểm cao!
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">{exams.length}</div>
          <div className="text-xs text-gray-500 mt-0.5">Đề thi</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600">
            {exams.reduce((sum, e) => sum + e.vocabulary.length, 0)}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">Từ vựng</div>
        </div>
        <div className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-purple-600">
            {exams.reduce((sum, e) => sum + e.questions.length, 0)}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">Câu hỏi</div>
        </div>
      </div>

      {/* Exam list */}
      <div className="grid gap-3 sm:grid-cols-2">
        {exams.map((exam, index) => (
          <Link key={exam.id} href={`/exam/${exam.id}`} className="block group">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">{exam.title}</h3>
                    {exam.year && (
                      <span className="text-xs text-gray-400">{exam.year}</span>
                    )}
                  </div>
                </div>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>

              {exam.school && (
                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                  <span>🏫</span> {exam.school}
                </p>
              )}

              <div className="flex gap-2">
                <div className="flex-1 bg-green-50 rounded-lg px-2.5 py-1.5 text-center">
                  <div className="text-green-700 font-semibold text-sm">{exam.vocabulary.length}</div>
                  <div className="text-green-600 text-xs">Từ vựng</div>
                </div>
                <div className="flex-1 bg-purple-50 rounded-lg px-2.5 py-1.5 text-center">
                  <div className="text-purple-700 font-semibold text-sm">{exam.questions.length}</div>
                  <div className="text-purple-600 text-xs">Câu hỏi</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips section */}
      <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          <span>💡</span> Mẹo học hiệu quả
        </h3>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>✅ Học từ vựng trước khi giải đề để hiểu câu hỏi tốt hơn</li>
          <li>✅ Đọc kỹ giải thích sau mỗi câu hỏi để hiểu sâu</li>
          <li>✅ Luyện mỗi đề thi ít nhất 2-3 lần cho đến khi đạt trên 80%</li>
          <li>✅ Ôn lại các từ sai ngay sau khi hoàn thành bài</li>
        </ul>
      </div>
    </div>
  );
}
