# 11. Đánh giá và bài tập

> **Câu hỏi cốt lõi:** Dự án tốt ở đâu, còn thiếu ở đâu? Làm sao biến những gì đã đọc thành kỹ năng của bạn?
>
> Đọc hiểu chưa phải là biết làm. **Phần bài tập này là bước quan trọng nhất của cả lộ trình.**

## 1. Những điều nên học theo

| Điểm tốt | Ở đâu | Vì sao đáng học |
|----------|-------|-----------------|
| Ranh giới server/client gọn | `page.tsx` chỉ tìm dữ liệu, component lo tương tác | Bundle không bị dữ liệu làm phình lên |
| Dùng derived state | `correctCount`, `lastResult` | Không có hai nguồn dữ liệu lệch nhau |
| Tách dữ liệu khỏi giao diện | `src/data`, `src/types` | Thêm đề không phải sửa UI |
| Xử lý trường hợp thiếu | `getExamById` trả về `undefined`, kèm `notFound()` | HTTP 404 chuẩn, TypeScript buộc phải xử lý |
| Cleanup effect đầy đủ | Đồng hồ | Chạy đúng cả dưới Strict Mode |
| Đồng hồ tính từ mốc thời gian | `Date.now() - start` | Không bị sai khi tab ở nền |
| Không dùng `dangerouslySetInnerHTML` | `renderBoldText` | An toàn với XSS |
| Âm thanh lỗi không ảnh hưởng app | `try/catch` trong `sound.ts` | Tính năng phụ không làm hỏng tính năng chính |

## 2. Những điểm cần cải thiện

Tất cả đều đã được kiểm chứng trên code thật. Xếp theo mức độ ảnh hưởng đến người dùng.

### Ảnh hưởng tới người dùng

| Vấn đề | Bằng chứng | Bài tập |
|--------|-----------|---------|
| Nền gradient không hiển thị | `background-image: none` đo trong trình duyệt | 1.1 |
| Dark mode làm chữ khó đọc | [Ảnh chụp](images/09-dark-mode.png) | 1.1 |
| F5 là mất tiến độ | Không có cơ chế lưu | 3.4 |
| Animation không chạy khi sang câu mới | Không có `animationstart` | 2.1 |
| Tên trường bị lặp từ | "Trường THCS Trường THCS" | 1.4 |

### Lỗi ESLint

`npx eslint src` hiện báo **4 lỗi**:

| Vị trí | Luật | Vấn đề | Bài tập |
|--------|------|--------|---------|
| `ExamSolving.tsx:87` | `react-hooks/purity` | `Date.now()` gọi trong lúc render | 1.2 |
| `VocabularyPractice.tsx:71` | `react-hooks/set-state-in-effect` | `setState` đồng bộ trong effect | 3.6 |
| `VocabularyPractice.tsx:388` (2 lỗi) | `react/no-unescaped-entities` | Dấu `"` trong JSX | 1.2 |

### Nợ kỹ thuật

| Vấn đề | Chi tiết | Bài tập |
|--------|----------|---------|
| Code lặp | Đồng hồ, kết quả, phản hồi lặp ở hai component lớn | 2.3, 3.1 |
| State thừa | `answerState` suy ra được từ `selectedAnswer` | 2.2 |
| Dữ liệu sai | `totalQuestions` sai ở cả 22 đề | 1.3 |
| Code và thư viện thừa | `lucide-react`, SVG trong `public/`, `UserAnswer`, `SessionResult`, `wordId` | 1.3 |
| Prop thừa | Trang giải đề nhận cả `vocabulary` | 2.5 |
| Trang có thể static nhưng đang dynamic | Không có `generateStaticParams` | 2.6 |
| README lỗi thời | Sai cách thêm đề, thiếu `sound.ts` | 1.5 |
| Không có test | Hàm thuần trong `utils.ts` rất dễ test | 3.5 |

> **Nhìn nhận công bằng:** đây là app cá nhân nhỏ và đang chạy đúng mục đích. Các điểm trên không có nghĩa dự án tệ. Chúng hữu ích vì là **tình huống thật để bạn luyện tập**.

## 3. Bài tập

**Cách làm:** tạo nhánh riêng với `git checkout -b bai-tap/ten-bai`. Sau mỗi bài, chạy `npx tsc --noEmit` và `npm run lint`, rồi bấm thử trên giao diện. Hãy tự làm trước khi đọc gợi ý.

### Cấp 1: Làm quen (15 đến 30 phút mỗi bài)

**1.1. Sửa nền và dark mode.** Sửa `globals.css` để gradient hiển thị và dark mode không làm hỏng chữ.
*Tiêu chí:* so sánh với [ảnh mẫu](images/09-gradient-sau-khi-sua.png), và không còn chữ khó đọc khi giả lập dark mode.

**1.2. Hết lỗi ESLint dễ.** Sửa lỗi ở `ExamSolving.tsx:87` và hai lỗi dấu ngoặc kép.
<details><summary>Gợi ý</summary>

Xem `VocabularyPractice` đã khởi tạo `startTimeRef` thế nào. Lưu ý effect đã gán lại giá trị này. Với dấu ngoặc kép, dùng `&ldquo;` và `&rdquo;`.
</details>

**1.3. Dọn dẹp.** Gỡ `lucide-react`, các kiểu và trường không dùng. Cân nhắc xoá hẳn `totalQuestions`: TypeScript sẽ chỉ ra tất cả nơi cần sửa.

**1.4. Sửa dữ liệu.** Sửa "Trường THCS Trường THCS" trên toàn bộ các đề. Dùng tìm kiếm toàn dự án và kiểm tra lại kết quả.

**1.5. Cập nhật README.** Sửa phần cấu trúc thư mục và cách thêm đề cho khớp code.

### Cấp 2: Hiểu sâu React (30 đến 60 phút mỗi bài)

**2.1. Animation câu hỏi mới.** Dùng `key` để câu mới có animation, ở cả hai component. Hãy giải thích được vì sao cách đó có tác dụng.

**2.2. Bỏ state thừa.** Xoá `answerState` khỏi `ExamSolving` và suy ra từ `selectedAnswer`.
*Tiêu chí:* số lượng `useState` giảm đi, mọi hành vi vẫn giữ nguyên.

**2.3. Tách `buildQuestions`.** Gom đoạn tạo câu hỏi đang lặp trong `VocabularyPractice` vào một hàm dùng chung.

**2.4. Hiển thị xem lại câu sai.** Trên màn hình kết quả, cho phép bấm vào ô C1, C2... để xem lại câu đó. `results[i].selected` đã có sẵn.

**2.5. Truyền ít prop hơn.** Trang giải đề chỉ truyền thứ cần dùng. Đo kích thước HTML trước và sau để chứng minh hiệu quả.
<details><summary>Gợi ý</summary>

`const { vocabulary, ...rest } = exam;` rồi sửa kiểu Props bằng `Omit<Exam, 'vocabulary'>`. Đo bằng `curl -s URL | wc -c` trên bản `next start`. Mốc ban đầu: 35.314 byte.
</details>

**2.6. Render sẵn các trang đề.** Thêm `generateStaticParams` cho các route `[id]`, rồi xem ký hiệu trong bảng route thay đổi thế nào khi chạy `npm run build`.
<details><summary>Gợi ý</summary>

```tsx
export function generateStaticParams() {
  return exams.map((exam) => ({ id: exam.id }));
}
```
Đọc thêm: `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-static-params.md`.
</details>

**2.7. Thêm `loading.tsx`.** Thêm giao diện chờ cho route `exam/[id]`. Dùng chế độ Slow 3G trong DevTools để quan sát.

### Cấp 3: Thiết kế (vài giờ mỗi bài)

**3.1. Custom hook `useTimer`.** Tách toàn bộ logic đồng hồ:

```ts
const { elapsed, stop, restart } = useTimer();
```

Nếu làm đúng, `handleRestart` không còn tự gọi `setInterval`, và cả hai component đều ngắn hơn.

**3.2. Làm lại bằng `key`.** `handleRestart` đang đặt lại từng state thủ công. Thay vào đó, hãy dùng một `key` tăng dần để React huỷ và tạo lại component. So sánh ưu nhược điểm hai cách.

**3.3. Component dùng chung.** Tách `QuizHeader`, `TimerDisplay`, `ResultScreen`. Cân nhắc kỹ: phần nào thực sự giống nhau, và tách đến mức nào thì vừa?

**3.4. Lưu tiến độ.** F5 không làm mất bài. Đây là bài rất hay vì bạn sẽ **gặp lại đúng bẫy hydration**: `localStorage` không tồn tại trên server, nên không được đọc trong lần render đầu.
*Tiêu chí:* không có lỗi hydration trong Console, và F5 ở câu 10 vẫn quay về câu 10.

**3.5. Viết test.** Cài Vitest và viết test cho `calculatePercentage`, `getGrade`, `shuffleArray`. Với `shuffleArray`, hãy test: độ dài giữ nguyên, phần tử giữ nguyên, và mảng gốc không bị đổi.

**3.6. Xáo trên server.** Xoá `isReady` và spinner bằng cách xáo trong Server Component, rồi truyền xuống qua prop. Xem [file 08, mục 6](08-vocabulary-practice.md#6-một-cách-viết-tốt-hơn).
*Tiêu chí:* HTML từ server có sẵn câu hỏi khi tắt JS, không có lỗi hydration, lỗi ESLint dòng 71 biến mất. Lưu ý xử lý trường hợp "Làm lại".

**3.7. Script kiểm tra dữ liệu.** Viết script tự kiểm tra mọi đề: đủ 4 đáp án, `correctAnswer` hợp lệ, không trùng `id`. Thêm vào `package.json` thành `npm run check-data`.

## 4. Quy trình đọc một dự án mới

Đây là cách làm bạn vừa thực hành, có thể áp dụng cho dự án tiếp theo:

| Bước | Việc cần làm | Câu hỏi | Trong dự án này |
|------|--------------|---------|-----------------|
| 1 | Chạy và bấm thử mọi màn hình | App làm gì? | File 01 |
| 2 | Đọc `package.json` và cấu hình | Dùng công cụ gì? | File 03 |
| 3 | Xem cấu trúc thư mục, tìm route | Có những trang nào? | File 04 |
| 4 | Tìm ranh giới server và client | Code chạy ở đâu? | File 05 |
| 5 | Đọc kiểu dữ liệu | Dữ liệu có hình dạng gì? | File 06 |
| 6 | Lần theo một luồng từ đầu đến cuối | Một hành động đi qua những đâu? | File 07 |
| 7 | Vẽ sơ đồ trạng thái cho component khó | Có những trạng thái nào? | File 07 |
| 8 | Chạy `lint`, `tsc`, `build` | Sức khoẻ dự án ra sao? | File 03, 11 |
| 9 | Sửa một thứ nhỏ để kiểm chứng | Mình hiểu đúng chưa? | Phần "Thử ngay" |

**Cách tìm vị trí code nhanh:** tìm một chuỗi đang hiện trên giao diện trong toàn dự án. Ví dụ tìm "Câu tiếp theo" sẽ đưa bạn thẳng tới nút tương ứng.

## 5. Chẩn đoán nhanh các triệu chứng

| Triệu chứng | Nghi ngờ đầu tiên | Xem ở |
|-------------|-------------------|-------|
| Trang hiện đầy đủ nhưng bấm không có tác dụng | Chưa hydrate | File 05, mục 7 |
| Lỗi `Hydration failed` | Giá trị khác nhau giữa server và client | File 08, mục 2 |
| Effect chạy hai lần ở dev | Strict Mode, bình thường | File 08, mục 5 |
| `window is not defined` | Dùng API trình duyệt lúc render trên server | File 05, mục 8 |
| Class Tailwind không có tác dụng | CSS ngoài layer đè lên, hoặc tên class ghép động | File 09 |
| Giao diện không đổi dù state đã đổi | Sửa trực tiếp mảng hoặc object | File 07, mục 5 |
| Animation không chạy lại | DOM node được tái sử dụng, cần `key` | File 07, mục 7 |
| Có lỗi khi dùng `useState` trong trang | Thiếu `'use client'` | File 05, mục 2 |
| Tài liệu trên mạng không khớp | Khác phiên bản, đọc `node_modules/next/dist/docs/` | File 04 |

## 6. Bảng thuật ngữ

| Thuật ngữ | Nghĩa ngắn gọn |
|-----------|----------------|
| **App Router** | Hệ thống routing của Next.js dựa trên thư mục `app` |
| **Server Component** | Component chỉ chạy trên server, code không gửi xuống trình duyệt |
| **Client Component** | Component có `'use client'`, được hydrate và tương tác ở trình duyệt |
| **SSR** | Tạo HTML trên server tại thời điểm có request |
| **Prerender (static)** | Tạo HTML sẵn lúc build |
| **RSC payload** | Dữ liệu mô tả kết quả render của Server Components, kèm prop cho Client Components |
| **Hydration** | Gắn event handler vào HTML đã có, làm trang tương tác được |
| **Hydration mismatch** | Kết quả render ở client khác với HTML từ server |
| **Derived state** | Giá trị tính từ state hoặc prop, không cần lưu riêng |
| **Batching** | React gom nhiều lần `setState` thành một lần render |
| **Reconciliation** | React so sánh cây cũ và mới để quyết định phần cần cập nhật |
| **Strict Mode** | Chế độ chỉ có ở dev, chạy lặp một số việc để lộ lỗi |
| **Cascade layer** | Cơ chế của CSS (`@layer`) xếp thứ tự ưu tiên giữa các nhóm CSS |
| **Hàm thuần** | Cùng đầu vào cho cùng đầu ra, không có tác dụng phụ |
| **Prefetch** | Tải trước trang đích để chuyển trang nhanh hơn |

## 7. Bước tiếp theo

Sau khi xong Cấp 1 và Cấp 2, hãy thử mở rộng bằng những tính năng buộc bạn học thêm:

- **Lưu kết quả lên server:** Route Handlers, Server Actions, database.
- **Đăng nhập nhiều học sinh:** xác thực, session.
- **Quản trị đề thi:** form, validation, CRUD.
- **Thống kê câu hay sai:** xử lý dữ liệu, biểu đồ.

Với mỗi tính năng, hãy đọc tài liệu trong `node_modules/next/dist/docs/` trước khi code, vì đó là tài liệu đúng phiên bản bạn đang dùng.

**Chúc bạn học chắc và đọc nhanh hơn ở dự án tiếp theo!**
