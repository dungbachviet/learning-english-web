import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ôn Thi Tiếng Anh — Nhã Phương',
  description: 'App ôn thi tiếng Anh vào lớp 10 của Nhã Phương',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-violet-50">
        <header className="bg-white shadow-sm border-b border-pink-100 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3">
            {/* Click vào logo/title → về trang chủ */}
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-violet-500 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-800 text-base leading-tight">Ôn Thi Tiếng Anh Lớp 10</h1>
                <p className="text-pink-400 text-xs font-medium">Cùng Nhã Phương chinh phục kỳ thi! 🌸</p>
              </div>
            </Link>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="text-center py-5 text-sm text-gray-400 mt-8">
          💪 Nhã Phương ơi, cố lên! Lớp 10 đang chờ bạn! 🎉
        </footer>
      </body>
    </html>
  );
}
