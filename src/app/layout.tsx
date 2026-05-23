import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ôn Thi Tiếng Anh Lớp 10',
  description: 'Ứng dụng ôn thi tiếng Anh vào lớp 10 - Học từ vựng và giải đề thi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white text-lg">📚</span>
            </div>
            <div>
              <h1 className="font-bold text-blue-900 text-base leading-tight">Ôn Thi Tiếng Anh Lớp 10</h1>
              <p className="text-blue-400 text-xs">Học từ vựng &amp; Giải đề thi</p>
            </div>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="text-center py-4 text-xs text-gray-400 mt-8">
          Cố lên! Bạn sẽ đỗ vào lớp 10! 🎉
        </footer>
      </body>
    </html>
  );
}
