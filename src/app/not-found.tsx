/**
 * Trang 404. Tên file `not-found.tsx` có ý nghĩa đặc biệt với Next.js, được hiện khi:
 *   - URL không khớp route nào, hoặc
 *   - một page gọi notFound() (ví dụ /exam/khong-ton-tai).
 * Trả về HTTP 404 thật, không chỉ là giao diện báo lỗi.
 */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-16 animate-bounce-in">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Không tìm thấy!</h2>
      <p className="text-gray-500 mb-6">Đề thi này không tồn tại hoặc đã bị xóa.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl px-5 py-3 transition-colors"
      >
        ← Quay về trang chủ
      </Link>
    </div>
  );
}
