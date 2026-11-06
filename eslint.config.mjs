/**
 * eslint.config.mjs: quy tắc kiểm tra code, chạy bằng `npm run lint`.
 *
 * Lưu ý: `next build` KHÔNG chạy ESLint, nên hãy tự chạy `npm run lint`.
 * Bộ quy tắc gồm cả luật của React Hooks, ví dụ:
 *   - react-hooks/purity: không gọi hàm không thuần (Date.now, Math.random) lúc render
 *   - react-hooks/set-state-in-effect: tránh setState đồng bộ trong useEffect
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals"; // Luật của Next.js + React + React Hooks
import nextTs from "eslint-config-next/typescript"; // Luật dành cho TypeScript

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  // Các thư mục do công cụ tự sinh, không cần kiểm tra:
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
