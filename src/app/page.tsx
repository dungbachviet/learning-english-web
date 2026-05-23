import Link from 'next/link';
import { exams } from '@/data/exams';

// Màu sắc xoay vòng cho từng thẻ đề thi
const cardThemes = [
  {
    topBar: 'from-rose-400 to-pink-500',
    badge: 'from-rose-400 to-pink-500',
    border: 'border-rose-100 hover:border-rose-300',
    vocabBg: 'bg-rose-50', vocabText: 'text-rose-700',
    qBg: 'bg-pink-50', qText: 'text-pink-700',
    arrow: 'text-rose-300 group-hover:text-rose-500',
    emoji: '🌸',
  },
  {
    topBar: 'from-orange-400 to-amber-400',
    badge: 'from-orange-400 to-amber-400',
    border: 'border-orange-100 hover:border-orange-300',
    vocabBg: 'bg-orange-50', vocabText: 'text-orange-700',
    qBg: 'bg-amber-50', qText: 'text-amber-700',
    arrow: 'text-orange-300 group-hover:text-orange-500',
    emoji: '🍀',
  },
  {
    topBar: 'from-emerald-400 to-teal-500',
    badge: 'from-emerald-400 to-teal-500',
    border: 'border-emerald-100 hover:border-emerald-300',
    vocabBg: 'bg-emerald-50', vocabText: 'text-emerald-700',
    qBg: 'bg-teal-50', qText: 'text-teal-700',
    arrow: 'text-emerald-300 group-hover:text-emerald-500',
    emoji: '⭐',
  },
  {
    topBar: 'from-sky-400 to-blue-500',
    badge: 'from-sky-400 to-blue-500',
    border: 'border-sky-100 hover:border-sky-300',
    vocabBg: 'bg-sky-50', vocabText: 'text-sky-700',
    qBg: 'bg-blue-50', qText: 'text-blue-700',
    arrow: 'text-sky-300 group-hover:text-sky-500',
    emoji: '💙',
  },
  {
    topBar: 'from-violet-400 to-purple-500',
    badge: 'from-violet-400 to-purple-500',
    border: 'border-violet-100 hover:border-violet-300',
    vocabBg: 'bg-violet-50', vocabText: 'text-violet-700',
    qBg: 'bg-purple-50', qText: 'text-purple-700',
    arrow: 'text-violet-300 group-hover:text-violet-500',
    emoji: '🦋',
  },
];

export default function HomePage() {
  const totalVocab = exams.reduce((sum, e) => sum + e.vocabulary.length, 0);
  const totalQuestions = exams.reduce((sum, e) => sum + e.questions.length, 0);

  return (
    <div className="animate-fade-in">
      {/* Hero — cá nhân hoá cho Nhã Phương */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🌸</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Chào <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Nhã Phương</span>!
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-sm mx-auto leading-relaxed">
          Hôm nay mình ôn đề nào nhỉ? 💪<br />
          <span className="text-sm text-pink-400 font-medium">Lớp 10 đang chờ Nhã Phương chinh phục!</span>
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-pink-100">
          <div className="text-3xl font-bold text-pink-500">{exams.length}</div>
          <div className="text-sm text-gray-500 mt-1 font-medium">Đề thi</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-emerald-100">
          <div className="text-3xl font-bold text-emerald-500">{totalVocab}</div>
          <div className="text-sm text-gray-500 mt-1 font-medium">Từ vựng</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-violet-100">
          <div className="text-3xl font-bold text-violet-500">{totalQuestions}</div>
          <div className="text-sm text-gray-500 mt-1 font-medium">Câu hỏi</div>
        </div>
      </div>

      {/* Exam list */}
      <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
        <span>📋</span> Chọn đề để luyện tập:
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {exams.map((exam, index) => {
          const theme = cardThemes[index % cardThemes.length];
          return (
            <Link key={exam.id} href={`/exam/${exam.id}`} className="block group">
              <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border ${theme.border} hover:shadow-md transition-all duration-200 group-hover:-translate-y-1`}>
                {/* Dải màu trên đầu card */}
                <div className={`h-2 bg-gradient-to-r ${theme.topBar}`} />

                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Badge số thứ tự */}
                      <div className={`w-11 h-11 bg-gradient-to-br ${theme.badge} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-base leading-tight">{exam.title}</h3>
                        {exam.year && (
                          <span className="text-sm text-gray-400">{exam.year}</span>
                        )}
                      </div>
                    </div>
                    <span className={`text-xl ${theme.arrow} group-hover:translate-x-1 transition-transform`}>→</span>
                  </div>

                  {exam.school && (
                    <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                      <span>🏫</span> {exam.school}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <div className={`flex-1 ${theme.vocabBg} rounded-xl px-3 py-2 text-center`}>
                      <div className={`${theme.vocabText} font-bold text-base`}>{exam.vocabulary.length}</div>
                      <div className={`${theme.vocabText} text-xs opacity-80`}>Từ vựng</div>
                    </div>
                    <div className={`flex-1 ${theme.qBg} rounded-xl px-3 py-2 text-center`}>
                      <div className={`${theme.qText} font-bold text-base`}>{exam.questions.length}</div>
                      <div className={`${theme.qText} text-xs opacity-80`}>Câu hỏi</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Động viên */}
      <div className="mt-8 bg-gradient-to-r from-pink-50 to-violet-50 rounded-2xl p-5 border border-pink-100">
        <h3 className="font-bold text-pink-700 mb-3 flex items-center gap-2 text-base">
          <span>💡</span> Mẹo cho Nhã Phương
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2"><span>🔤</span><span>Ôn <strong>từ vựng</strong> trước khi giải đề để hiểu câu hỏi tốt hơn</span></li>
          <li className="flex items-start gap-2"><span>📖</span><span>Đọc kỹ <strong>giải thích</strong> sau mỗi câu để hiểu sâu, không chỉ học vẹt</span></li>
          <li className="flex items-start gap-2"><span>🔄</span><span>Luyện mỗi đề <strong>ít nhất 2 lần</strong> cho đến khi đạt trên 80%</span></li>
          <li className="flex items-start gap-2"><span>💪</span><span>Đừng nản khi sai — <strong>sai để nhớ lâu hơn</strong> đó Nhã Phương ơi!</span></li>
        </ul>
      </div>
    </div>
  );
}
