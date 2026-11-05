/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cho phép mở dev server qua IP mạng LAN (vd: 192.168.0.102:3000, từ điện thoại...).
  // Nếu thiếu, Next.js chặn tài nguyên dev và trang không hydrate được: click không có tác dụng.
  // Chỉ có hiệu lực với `next dev`. Dùng wildcard vì IP do DHCP cấp có thể thay đổi.
  allowedDevOrigins: ['192.168.*.*'],
};

module.exports = nextConfig;
