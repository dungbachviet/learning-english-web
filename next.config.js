/**
 * next.config.js: cấu hình của Next.js.
 *
 * - Được đọc khi chạy `next dev`, `next build`, `next start`.
 * - Khi sửa file này lúc đang chạy `next dev`, server tự khởi động lại.
 * - Tài liệu đúng phiên bản: node_modules/next/dist/docs/01-app/03-api-reference/05-config/
 * - Giải thích trong dự án: docs/03-chay-du-an-va-cau-hinh.md, docs/05 (mục 7)
 */

/** @type {import('next').NextConfig} */ // Dòng này giúp editor gợi ý và kiểm tra kiểu cho object bên dưới
const nextConfig = {
  // Cho phép mở dev server qua IP mạng LAN (vd: 192.168.0.102:3000, từ điện thoại...).
  // Nếu thiếu, Next.js chặn tài nguyên dev và trang không hydrate được: click không có tác dụng.
  // Chỉ có hiệu lực với `next dev`. Dùng wildcard vì IP do DHCP cấp có thể thay đổi.
  allowedDevOrigins: ['192.168.*.*'],
};

module.exports = nextConfig;
