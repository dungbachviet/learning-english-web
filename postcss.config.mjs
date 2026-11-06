/**
 * postcss.config.mjs: nối Tailwind CSS vào quy trình build.
 *
 * Luồng: src/app/globals.css (có `@import "tailwindcss"`)
 *        → PostCSS chạy plugin @tailwindcss/postcss
 *        → Tailwind quét các file .tsx tìm tên class đã dùng
 *        → sinh ra một file CSS chỉ chứa các class đó.
 *
 * Tailwind v4 không cần tailwind.config.js; cấu hình (nếu có) viết thẳng trong CSS.
 * Giải thích: docs/09-tailwind-va-giao-dien.md
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
