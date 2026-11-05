# 08. Phân tích VocabularyPractice

> **Câu hỏi cốt lõi:** Component này rất giống `ExamSolving`, vậy vì sao nó phải hiện spinner và tạo câu hỏi trong `useEffect`?
>
> **File nguồn:** [src/components/VocabularyPractice.tsx](../src/components/VocabularyPractice.tsx). Nên đọc file 05 và 07 trước.

## 1. Khác gì so với ExamSolving?

Phần lớn logic giống hệt nhau, nên ta chỉ tập trung vào phần khác biệt.

| | ExamSolving | VocabularyPractice |
|---|---|---|
| **Câu hỏi đến từ** | `exam.questions`, có sẵn | Tạo mới trong lúc chạy |
| **Thứ tự** | Cố định | **Ngẫu nhiên** |
| **State thêm** | Không | `questions`, `isReady` |
| **HTML từ server** | Có câu hỏi | **Chỉ có spinner** |
| **`answerState`** | `unanswered`, `answered` | `unanswered`, `correct`, `incorrect` |
| **Vị trí đáp án đúng** | `correctAnswer` trong dữ liệu | `correctIndex`, tính lúc chạy |
| **Chi tiết từng câu ở kết quả** | Có | Không |

![Ôn từ vựng sau khi trả lời](images/08-tu-vung-chu-thich.png)

1. Từ cần hỏi lấy từ `currentQuestion.word`.
2. Đáp án đúng là `currentQuestion.correctIndex`, không cố định giữa các lần chơi.
3. Phản hồi hiện câu ví dụ thay vì lời giải thích.

**Đã kiểm tra:** hai lần mở liên tiếp cùng một đề cho từ đầu tiên khác nhau, lần đầu là `roller coaster`, lần sau là `assistant`.

## 2. Vấn đề: ngẫu nhiên và SSR không hợp nhau

Cách viết tự nhiên nhất là xáo luôn lúc khởi tạo state:

```tsx
const [questions] = useState(() => shuffleArray(exam.vocabulary).map(...));
```

Có vẻ ổn, nhưng hãy nhớ lại file 05: **Client Component chạy hai lần, một lần trên server và một lần trong trình duyệt.**

```text
Server:      Math.random() → thứ tự A, C, B → HTML hiển thị từ "A"
Trình duyệt: Math.random() → thứ tự B, A, C → React tính ra từ "B"
```

Hydration yêu cầu kết quả render ở trình duyệt phải **khớp** với HTML từ server. Hai bên khác nhau gọi là **hydration mismatch**.

### Đã thử nghiệm thật

Tôi đã sửa một bản sao của dự án theo cách trên rồi chạy ở chế độ dev. Trình duyệt báo đúng lỗi:

```text
Hydration failed because the server rendered text didn't match the client.
As a result this tree will be regenerated on the client.
This can happen if a SSR-ed Client Component used:
...
- Variable input such as `Date.now()` or `Math.random()` which changes
  each time it's called.
```

Khi đó React phải bỏ HTML của server và dựng lại phía client, tức là đánh mất lợi ích của SSR.

## 3. Lời giải của dự án: đợi đến khi mount

`useEffect` **chỉ chạy trong trình duyệt và sau hydration**. Đây là chỗ an toàn để làm việc ngẫu nhiên:

```tsx
const [questions, setQuestions] = useState<VocabQuestion[]>([]);
const [isReady, setIsReady] = useState(false);

useEffect(() => {
  const shuffled = shuffleArray(exam.vocabulary);
  const qs = shuffled.map((word) => {
    const { options, correctIndex } = createVocabMultipleChoice(word);
    return { /* ... */ options, correctIndex };
  });
  setQuestions(qs);
  setIsReady(true);
}, [exam.vocabulary]);
```

![Trình tự khởi tạo](images/08-khoi-tao-tu-vung.png)

Mấu chốt nằm ở bước 3: lần render đầu trong trình duyệt **cũng** có `isReady = false`, y như trên server. Hai bên khớp nhau nên hydration thành công. Sau đó effect mới xáo và render lại.

Bạn có thể tự kiểm chứng bằng cách tắt JavaScript, trang chỉ hiện spinner:

![Từ vựng khi có và không có JavaScript](images/05-tu-vung-co-va-khong-js.png)

**Cái giá phải trả:** người dùng thấy spinner trong chốc lát, và HTML từ server không có nội dung câu hỏi. ESLint cũng báo lỗi cách viết này, xem mục 6.

> **Quy tắc chung:** mọi thứ cho kết quả khác nhau giữa server và client đều không được dùng trong lần render đầu. Ví dụ: `Math.random()`, `Date.now()`, `localStorage`, hay định dạng ngày theo múi giờ.

### Thế `Date.now()` trong ExamSolving thì sao?

```tsx
const startTimeRef = useRef<number>(Date.now());
```

Giá trị này không gây mismatch vì **không xuất hiện trong JSX**. Giao diện hiện `elapsed`, ban đầu là 0 ở cả hai phía. Dù vậy ESLint vẫn báo đây là hàm không thuần được gọi lúc render. `VocabularyPractice` đã viết đúng hơn với `useRef<number>(0)`.

## 4. Rules of Hooks trong thực tế

```tsx
useEffect(...);                     // Tạo câu hỏi
const [currentIndex, ...] = useState(0);
// ... các hook khác ...

const currentQuestion = questions[currentIndex];

if (!isReady) {
  return <Spinner />;               // Return sớm, nằm SAU mọi hook
}
```

**Vì sao mọi hook phải đứng trước `return` sớm?** React nhận biết hook theo **thứ tự gọi**. Nếu đặt một `useState` sau `if (!isReady) return`, lần render đầu sẽ gọi ít hook hơn lần sau, và React không còn khớp được state với hook.

**Một cái bẫy khác.** Khi chưa sẵn sàng, `questions[0]` là `undefined`, nhưng TypeScript vẫn coi kiểu là `VocabQuestion`, vì mặc định nó không kiểm tra truy cập chỉ số mảng. Code chạy đúng chỉ vì `return` sớm chặn lại trước khi dùng `currentQuestion.word`. Nếu xoá khối `if (!isReady)`, app sẽ crash mà `tsc` vẫn không báo lỗi. Tuỳ chọn `noUncheckedIndexedAccess` trong `tsconfig` có thể giúp bắt loại lỗi này.

## 5. Strict Mode: effect chạy hai lần

Next.js bật Strict Mode mặc định cho App Router, nhưng **chỉ có tác dụng ở dev**. **Log đo được** khi mở trang ở dev:

```text
PROBE effect mount
PROBE effect cleanup
PROBE effect mount
```

React cố tình **mount, gỡ, rồi mount lại** để phát hiện effect thiếu cleanup. Áp dụng vào dự án:

| Effect | Chạy hai lần có sao không? | Vì sao |
|--------|----------------------------|--------|
| Tạo câu hỏi | Không | Chỉ xáo thêm một lần, kết quả cuối vẫn hợp lệ |
| Đồng hồ | Không | Cleanup đã dọn interval đầu tiên |

Đó là lý do cleanup rất quan trọng. Nếu đồng hồ thiếu cleanup, ở dev sẽ có hai interval chạy song song. **Đừng tắt Strict Mode khi thấy effect chạy hai lần**, đó là công cụ tìm lỗi đang làm đúng việc.

## 6. Một cách viết tốt hơn?

ESLint báo tại dòng 71:

```text
error  Calling setState synchronously within an effect can trigger cascading renders
react-hooks/set-state-in-effect
```

Cảnh báo này có lý: gọi `setState` đồng bộ trong effect tạo thêm một lượt render. Vấn đề là ở đây effect đang được dùng như một cách lách để tránh mismatch. Có một phương án sạch hơn: **xáo trên server rồi truyền xuống qua prop**.

```tsx
// page.tsx (Server Component): chạy một lần cho mỗi request
const questions = buildVocabQuestions(exam.vocabulary);
return <VocabularyPractice exam={exam} initialQuestions={questions} />;
```

HTML và lần render đầu ở client dùng **cùng một dữ liệu** từ payload, nên không có mismatch và cũng không cần spinner. Nếu trang là dynamic, mỗi request sẽ cho một thứ tự khác. Đây là bài tập nâng cao ở file 11, hãy tự thử và kiểm chứng.

## 7. Trùng lặp code

`VocabularyPractice` và `ExamSolving` giống nhau ở rất nhiều phần: đồng hồ, thanh tiến độ, đếm điểm, phản hồi, kết quả. Ngay trong file này, đoạn tạo câu hỏi cũng lặp lại ở effect (dòng 56-70) và `handleRestart` (dòng 136-145).

Hệ quả có thật: file 07 đã chỉ ra lỗi animation, và lỗi đó **xuất hiện ở cả hai file**, nên phải sửa hai lần. File 11 có các bài tập tách `useTimer` và `buildQuestions`.

Tuy vậy, trùng lặp không phải lúc nào cũng xấu: với app nhỏ, hai file độc lập rất dễ đọc. Thông thường, hãy đợi đến khi thấy rõ phần nào thực sự chung rồi mới tách.

## 8. Thử ngay

1. Làm lại thí nghiệm ở mục 2 và đọc lỗi trong Console. Hoàn tác sau khi thử.
2. Thêm `console.log('effect')` vào effect tạo câu hỏi. So sánh số lần log giữa `npm run dev` và `npm run build && npm start`.
3. Xoá khối `if (!isReady)` để thấy lỗi crash, rồi chạy `npx tsc --noEmit` để thấy TypeScript không báo gì. Hoàn tác sau khi thử.

## 9. Tự kiểm tra

1. Vì sao không được gọi `Math.random()` trong lần render đầu của component có SSR?
2. Vì sao lần render đầu trong trình duyệt vẫn phải hiện spinner?
3. Vì sao `if (!isReady) return` phải nằm sau mọi hook?
4. Strict Mode làm gì với effect, và ở môi trường nào?
5. Kể ba thứ khác cũng có thể gây hydration mismatch.

<details>
<summary>Đáp án</summary>

1. Server và client sẽ cho kết quả khác nhau, gây hydration mismatch.
2. Để khớp với HTML từ server. Hydrate xong thì effect mới đổi nội dung.
3. React nhận biết hook theo thứ tự gọi, nên thứ tự này phải giống nhau ở mọi lần render.
4. Mount, cleanup, rồi mount lại, chỉ ở dev, nhằm phát hiện effect thiếu cleanup.
5. `Date.now()`, `localStorage`, nhánh `typeof window`, định dạng ngày theo locale, hoặc lồng thẻ HTML sai.

</details>

**Tiếp theo:** [09. Tailwind và giao diện](09-tailwind-va-giao-dien.md)
