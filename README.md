# 📚 Ôn Thi Tiếng Anh Lớp 10

Web app học tiếng Anh để ôn luyện thi vào lớp 10 — hỗ trợ **ôn từ vựng** và **giải đề thi** với phản hồi ngay lập tức sau mỗi câu.

---

## 🚀 Cách chạy app

### 1. Cài đặt dependencies (chỉ cần làm lần đầu)

```bash
npm install
```

### 2. Chạy môi trường phát triển

```bash
npm run dev
```

Mở trình duyệt và vào địa chỉ: **http://localhost:3000**

### 3. Build bản production (tuỳ chọn)

```bash
npm run build
npm start
```

---

## ✨ Tính năng chính

| Tính năng | Mô tả |
|---|---|
| 🏠 **Trang chủ** | Danh sách tất cả đề thi, hiển thị số từ vựng & câu hỏi của mỗi đề |
| 🔤 **Ôn từ vựng** | Trắc nghiệm A/B/C/D, thứ tự xáo trộn ngẫu nhiên mỗi lần, hiển thị câu ví dụ và giải nghĩa sau mỗi câu |
| ✍️ **Giải đề thi** | Làm từng câu, nhận giải thích chi tiết ngay sau khi trả lời, hỗ trợ bài đọc hiểu có đoạn văn |
| 📊 **Kết quả** | Điểm số theo %, xếp loại (Xuất sắc / Giỏi / Khá / TB), thống kê chi tiết từng câu đúng/sai |
| 📱 **Responsive** | Giao diện tương thích cả điện thoại lẫn laptop |

---

## 🗂️ Cấu trúc thư mục

```
src/
├── app/
│   ├── page.tsx                     ← Trang chủ: danh sách đề thi
│   ├── layout.tsx                   ← Layout chung (header, footer)
│   ├── not-found.tsx                ← Trang 404
│   └── exam/[id]/
│       ├── page.tsx                 ← Chi tiết đề thi (chọn chế độ học)
│       ├── vocabulary/page.tsx      ← Chế độ ôn từ vựng
│       └── solving/page.tsx         ← Chế độ giải đề
├── components/
│   ├── VocabularyPractice.tsx       ← Toàn bộ logic & UI ôn từ vựng
│   └── ExamSolving.tsx              ← Toàn bộ logic & UI giải đề
├── data/
│   └── exams.ts                     ← ⭐ Dữ liệu tất cả đề thi (thêm đề mới tại đây)
├── types/
│   └── index.ts                     ← TypeScript interfaces
└── lib/
    └── utils.ts                     ← Hàm tiện ích (xáo trộn, tính điểm,...)
```

---

## 📝 Cách thêm đề thi mới

Mở file `src/data/exams.ts` và thêm một object vào mảng `exams` theo cấu trúc sau:

```typescript
{
  id: 'de-thi-06',           // ID duy nhất, không được trùng
  title: 'Đề thi số 6',
  year: '2024',              // Năm (tuỳ chọn)
  school: 'Tên trường',      // Tên trường (tuỳ chọn)
  description: 'Mô tả ngắn',
  totalQuestions: 40,

  // --- Danh sách từ vựng ---
  vocabulary: [
    {
      id: 'v6-1',                         // ID duy nhất trong đề
      word: 'từ tiếng anh',               // Từ cần học
      pronunciation: '/phiên âm/',         // Phiên âm IPA (tuỳ chọn)
      partOfSpeech: 'adj',                // Loại từ: n, v, adj, adv (tuỳ chọn)
      definition: 'nghĩa tiếng việt',     // Nghĩa đúng → đây là đáp án đúng
      exampleSentence: 'Câu ví dụ tiếng Anh có dùng từ này.',
      exampleTranslation: 'Dịch nghĩa câu ví dụ sang tiếng Việt.',
      wrongOptions: [                     // 3 đáp án sai (nghĩa tiếng Việt)
        'đáp án sai 1',
        'đáp án sai 2',
        'đáp án sai 3',
      ],
    },
    // ... thêm từ khác
  ],

  // --- Danh sách câu hỏi giải đề ---
  questions: [
    {
      id: 'q6-1',
      questionNumber: 1,
      type: 'grammar',        // Loại câu: grammar | vocabulary | reading | writing
      // passage: '...',      // Đoạn văn (chỉ dùng cho type: 'reading')
      questionText: 'Nội dung câu hỏi...',
      options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
      correctAnswer: 0,       // Vị trí đáp án đúng: 0=A, 1=B, 2=C, 3=D
      explanation: 'Giải thích tại sao đáp án này đúng...',
    },
    // ... thêm câu hỏi khác
  ],
}
```

---

## 🔄 Luồng hoạt động của app

```
Trang chủ (/)
    │
    └─→ Chọn đề thi → /exam/[id]
            │
            ├─→ [Ôn từ vựng] → /exam/[id]/vocabulary
            │       ├─ Hiển thị từ tiếng Anh
            │       ├─ Chọn A/B/C/D (nghĩa tiếng Việt)
            │       ├─ Phản hồi đúng/sai + câu ví dụ ngay lập tức
            │       └─ Kết quả tổng kết cuối bài
            │
            └─→ [Giải đề] → /exam/[id]/solving
                    ├─ Hiển thị từng câu hỏi (+ đoạn văn nếu có)
                    ├─ Chọn A/B/C/D
                    ├─ Phản hồi đúng/sai + giải thích chi tiết ngay lập tức
                    └─ Kết quả tổng kết cuối bài
```

---

## 🛠️ Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons/UI:** Lucide React, clsx
