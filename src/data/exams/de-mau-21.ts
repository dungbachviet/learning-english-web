
import { Exam } from '@/types';

const deMau21: Exam = {
  id: 'de-mau-21',
  title: 'Đề Mẫu Số 21',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề thật 2024',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de120-v01',
    word: 'purpose',
    pronunciation: '/ˈpɜːpəs/',
    partOfSpeech: 'n',
    definition: 'mục đích',
    exampleSentence: 'The purpose of this meeting is to discuss the project.',
    exampleTranslation: 'Mục đích của cuộc họp này là thảo luận về dự án.',
    wrongOptions: ['kế hoạch', 'tai nạn', 'bí mật'],
  },
  {
    id: 'de120-v02',
    word: 'electronic devices',
    pronunciation: '/ɪˌlekˈtrɒnɪk dɪˈvaɪsɪz/',
    partOfSpeech: 'n.phr',
    definition: 'thiết bị điện tử',
    exampleSentence: 'Many teenagers spend too much time using electronic devices.',
    exampleTranslation: 'Nhiều thanh thiếu niên dành quá nhiều thời gian sử dụng thiết bị điện tử.',
    wrongOptions: ['đồ ăn nhanh', 'sách giáo khoa', 'dụng cụ thể thao'],
  },
  {
    id: 'de120-v03',
    word: 'contact',
    pronunciation: '/ˈkɒntækt/',
    partOfSpeech: 'v',
    definition: 'liên lạc',
    exampleSentence: 'You can contact me by email.',
    exampleTranslation: 'Bạn có thể liên lạc với tôi qua email.',
    wrongOptions: ['tránh né', 'chỉ trích', 'quên mất'],
  },
  {
    id: 'de120-v04',
    word: 'messaging app',
    pronunciation: '/ˈmesɪdʒɪŋ æp/',
    partOfSpeech: 'n.phr',
    definition: 'ứng dụng nhắn tin',
    exampleSentence: 'They often chat through a messaging app.',
    exampleTranslation: 'Họ thường trò chuyện qua ứng dụng nhắn tin.',
    wrongOptions: ['ứng dụng học tập', 'máy tính bảng', 'trò chơi điện tử'],
  },
  {
    id: 'de120-v05',
    word: 'research',
    pronunciation: '/rɪˈsɜːtʃ/',
    partOfSpeech: 'n',
    definition: 'nghiên cứu',
    exampleSentence: 'Students use the internet for research.',
    exampleTranslation: 'Học sinh sử dụng internet để nghiên cứu.',
    wrongOptions: ['giải trí', 'thi đấu', 'nghỉ ngơi'],
  },
  {
    id: 'de120-v06',
    word: 'improve',
    pronunciation: '/ɪmˈpruːv/',
    partOfSpeech: 'v',
    definition: 'cải thiện',
    exampleSentence: 'Reading books can improve your vocabulary.',
    exampleTranslation: 'Đọc sách có thể cải thiện vốn từ vựng của bạn.',
    wrongOptions: ['phá hủy', 'bỏ qua', 'sao chép'],
  },
  {
    id: 'de120-v07',
    word: 'negative effects',
    pronunciation: '/ˈneɡətɪv ɪˈfekts/',
    partOfSpeech: 'n.phr',
    definition: 'ảnh hưởng tiêu cực',
    exampleSentence: 'Too much screen time may cause negative effects.',
    exampleTranslation: 'Quá nhiều thời gian nhìn màn hình có thể gây ảnh hưởng tiêu cực.',
    wrongOptions: ['lợi ích lớn', 'kết quả tốt', 'món quà thú vị'],
  },
  {
    id: 'de120-v08',
    word: 'social media',
    pronunciation: '/ˌsəʊʃl ˈmiːdiə/',
    partOfSpeech: 'n',
    definition: 'mạng xã hội',
    exampleSentence: 'Young people spend hours on social media every day.',
    exampleTranslation: 'Người trẻ dành hàng giờ trên mạng xã hội mỗi ngày.',
    wrongOptions: ['thư viện', 'lớp học', 'sân vận động'],
  },
  {
    id: 'de120-v09',
    word: 'attention span',
    pronunciation: '/əˈtenʃn spæn/',
    partOfSpeech: 'n.phr',
    definition: 'khả năng tập trung',
    exampleSentence: 'Video games may reduce children’s attention span.',
    exampleTranslation: 'Trò chơi điện tử có thể làm giảm khả năng tập trung của trẻ em.',
    wrongOptions: ['trí nhớ', 'sức khỏe', 'thị lực'],
  },
  {
    id: 'de120-v10',
    word: 'social skills',
    pronunciation: '/ˈsəʊʃl skɪlz/',
    partOfSpeech: 'n.phr',
    definition: 'kỹ năng xã hội',
    exampleSentence: 'Group work helps students develop social skills.',
    exampleTranslation: 'Làm việc nhóm giúp học sinh phát triển kỹ năng xã hội.',
    wrongOptions: ['kỹ năng toán học', 'kỹ năng nấu ăn', 'kỹ năng lái xe'],
  },
  {
    id: 'de120-v11',
    word: 'gaining weight',
    pronunciation: '/ˈɡeɪnɪŋ weɪt/',
    partOfSpeech: 'v.phr',
    definition: 'tăng cân',
    exampleSentence: 'Eating too much fast food may lead to gaining weight.',
    exampleTranslation: 'Ăn quá nhiều đồ ăn nhanh có thể dẫn đến tăng cân.',
    wrongOptions: ['giảm căng thẳng', 'tập thể dục', 'ngủ ngon'],
  },
  {
    id: 'de120-v12',
    word: 'wasting time',
    pronunciation: '/ˈweɪstɪŋ taɪm/',
    partOfSpeech: 'v.phr',
    definition: 'lãng phí thời gian',
    exampleSentence: 'He spends too much time wasting time online.',
    exampleTranslation: 'Anh ấy dành quá nhiều thời gian lãng phí trên mạng.',
    wrongOptions: ['tiết kiệm tiền', 'học chăm chỉ', 'làm việc nhóm'],
  },
  {
    id: 'de120-v13',
    word: 'scholarship',
    pronunciation: '/ˈskɒləʃɪp/',
    partOfSpeech: 'n',
    definition: 'học bổng',
    exampleSentence: 'She won a scholarship to study abroad.',
    exampleTranslation: 'Cô ấy giành được học bổng để du học.',
    wrongOptions: ['cuộc thi', 'chứng chỉ', 'bằng lái'],
  },
  {
    id: 'de120-v14',
    word: 'limitation',
    pronunciation: '/ˌlɪmɪˈteɪʃn/',
    partOfSpeech: 'n',
    definition: 'sự giới hạn',
    exampleSentence: 'Every system has its own limitations.',
    exampleTranslation: 'Mỗi hệ thống đều có những giới hạn riêng.',
    wrongOptions: ['cơ hội', 'thành công', 'sự tự do'],
  },
  {
    id: 'de120-v15',
    word: 'emotional',
    pronunciation: '/ɪˈməʊʃənl/',
    partOfSpeech: 'adj',
    definition: 'xúc động / thuộc cảm xúc',
    exampleSentence: 'The movie had an emotional ending.',
    exampleTranslation: 'Bộ phim có cái kết đầy cảm xúc.',
    wrongOptions: ['hài hước', 'nguy hiểm', 'ồn ào'],
  },
  {
    id: 'de120-v16',
    word: 'environment',
    pronunciation: '/ɪnˈvaɪrənmənt/',
    partOfSpeech: 'n',
    definition: 'môi trường',
    exampleSentence: 'We should protect the environment.',
    exampleTranslation: 'Chúng ta nên bảo vệ môi trường.',
    wrongOptions: ['văn hóa', 'sức khỏe', 'thành phố'],
  },
  {
    id: 'de120-v17',
    word: 'pollution',
    pronunciation: '/pəˈluːʃn/',
    partOfSpeech: 'n',
    definition: 'ô nhiễm',
    exampleSentence: 'Air pollution is a serious problem in big cities.',
    exampleTranslation: 'Ô nhiễm không khí là vấn đề nghiêm trọng ở các thành phố lớn.',
    wrongOptions: ['du lịch', 'giáo dục', 'âm nhạc'],
  },
  {
    id: 'de120-v18',
    word: 'volunteer',
    pronunciation: '/ˌvɒlənˈtɪə(r)/',
    partOfSpeech: 'n',
    definition: 'tình nguyện viên',
    exampleSentence: 'Many volunteers helped clean the beach.',
    exampleTranslation: 'Nhiều tình nguyện viên đã giúp dọn sạch bãi biển.',
    wrongOptions: ['khách du lịch', 'bác sĩ', 'người quản lý'],
  },
  {
    id: 'de120-v19',
    word: 'historic',
    pronunciation: '/hɪˈstɒrɪk/',
    partOfSpeech: 'adj',
    definition: 'mang tính lịch sử',
    exampleSentence: 'Hue is famous for its historic buildings.',
    exampleTranslation: 'Huế nổi tiếng với những công trình mang tính lịch sử.',
    wrongOptions: ['hiện đại', 'bí mật', 'thân thiện'],
  },
  {
    id: 'de120-v20',
    word: 'pottery',
    pronunciation: '/ˈpɒtəri/',
    partOfSpeech: 'n',
    definition: 'đồ gốm',
    exampleSentence: 'The children learned how to make pottery.',
    exampleTranslation: 'Bọn trẻ học cách làm đồ gốm.',
    wrongOptions: ['đồ gỗ', 'đồ điện tử', 'tranh vẽ'],
  },
  {
    id: 'de120-v21',
    word: 'photography',
    pronunciation: '/fəˈtɒɡrəfi/',
    partOfSpeech: 'n',
    definition: 'nhiếp ảnh',
    exampleSentence: 'She wants to take a photography class.',
    exampleTranslation: 'Cô ấy muốn tham gia lớp học nhiếp ảnh.',
    wrongOptions: ['âm nhạc', 'nấu ăn', 'bóng đá'],
  },
  {
    id: 'de120-v22',
    word: 'flashcards',
    pronunciation: '/ˈflæʃkɑːdz/',
    partOfSpeech: 'n',
    definition: 'thẻ ghi nhớ',
    exampleSentence: 'Flashcards are useful for learning vocabulary.',
    exampleTranslation: 'Thẻ ghi nhớ hữu ích cho việc học từ vựng.',
    wrongOptions: ['máy tính', 'sách truyện', 'bút màu'],
  },
  {
    id: 'de120-v23',
    word: 'tour guide',
    pronunciation: '/tʊə ɡaɪd/',
    partOfSpeech: 'n.phr',
    definition: 'hướng dẫn viên du lịch',
    exampleSentence: 'The tour guide showed us around the old town.',
    exampleTranslation: 'Hướng dẫn viên đã đưa chúng tôi tham quan phố cổ.',
    wrongOptions: ['phi công', 'đầu bếp', 'giáo viên'],
  },
  {
    id: 'de120-v24',
    word: 'tourists',
    pronunciation: '/ˈtʊərɪsts/',
    partOfSpeech: 'n',
    definition: 'khách du lịch',
    exampleSentence: 'Many tourists visit Ha Long Bay every year.',
    exampleTranslation: 'Nhiều khách du lịch đến thăm Vịnh Hạ Long mỗi năm.',
    wrongOptions: ['học sinh', 'công nhân', 'nông dân'],
  },
  {
    id: 'de120-v25',
    word: 'stunning',
    pronunciation: '/ˈstʌnɪŋ/',
    partOfSpeech: 'adj',
    definition: 'tuyệt đẹp',
    exampleSentence: 'The beach has stunning natural scenery.',
    exampleTranslation: 'Bãi biển có phong cảnh thiên nhiên tuyệt đẹp.',
    wrongOptions: ['tẻ nhạt', 'bẩn thỉu', 'ồn ào'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de120-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nThe students are looking forward _____ a holiday after the final exam.',
    options: ['having', 'to having', 'to have', 'have'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Các học sinh đang mong chờ một kỳ nghỉ sau kỳ thi cuối kỳ."\n\n✅ **B. to having** — cấu trúc đúng là: look forward to + V-ing.\n\n❌ **A/C/D** — sai cấu trúc sau giới từ “to”.\n\n💡 look forward to + V-ing = mong chờ làm gì.',
  },

  {
    id: 'de120-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nTheir family had lunch _____ the river bank last Sunday.',
    options: ['in', 'between', 'on', 'at'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Gia đình họ đã ăn trưa bên bờ sông vào Chủ nhật tuần trước."\n\n✅ **C. on** — đúng cụm: on the river bank.\n\n❌ **A/B/D** — sai giới từ đi với địa điểm.\n\n💡 on the river bank = ở bờ sông.',
  },

  {
    id: 'de120-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nIt is the first time she _____ pottery in a workshop.',
    options: ['made', 'makes', 'has made', 'had made'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Đây là lần đầu tiên cô ấy làm đồ gốm trong một buổi workshop."\n\n✅ **C. has made** — sau “It is the first time” dùng hiện tại hoàn thành.\n\n❌ **A/B/D** — sai thì.\n\n💡 It is the first time + present perfect.',
  },

  {
    id: 'de120-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct form:\nI wish I _____ more free time to join the photography club.',
    options: ['have', 'had', 'will have', 'having'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tôi ước mình có nhiều thời gian rảnh hơn để tham gia câu lạc bộ nhiếp ảnh."\n\n✅ **B. had** — sau “wish” dùng quá khứ đơn để diễn tả điều không có thật ở hiện tại.\n\n❌ **A/C/D** — sai cấu trúc wish.\n\n💡 wish + past simple = ước điều trái với hiện tại.',
  },

  {
    id: 'de120-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct adverb:\nFlashcards can help students learn vocabulary _____.',
    options: ['effective', 'effectively', 'effectiveness', 'more effective'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Flashcards có thể giúp học sinh học từ vựng hiệu quả."\n\n✅ **B. effectively** — cần trạng từ để bổ nghĩa cho động từ “learn”.\n\n❌ **A/C/D** — sai loại từ hoặc sai cấu trúc.\n\n💡 động từ thường đi với trạng từ.',
  },

  {
    id: 'de120-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct conditional sentence:\nIf he _____ younger, he would join the football team.',
    options: ['is', 'was', 'were', 'will be'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu anh ấy trẻ hơn, anh ấy sẽ tham gia đội bóng."\n\n✅ **C. were** — câu điều kiện loại 2 dùng “were” cho mọi ngôi.\n\n❌ **A/B/D** — sai thì động từ.\n\n💡 If + S + were, S + would + V.',
  },

  {
    id: 'de120-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct quantifier:\nThere is _____ useful information about IELTS online.',
    options: ['many', 'few', 'a lot of', 'little'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Có rất nhiều thông tin hữu ích về IELTS trên mạng."\n\n✅ **C. a lot of** — dùng được với danh từ không đếm được “information”.\n\n❌ **A/B/D** — dùng sai với danh từ không đếm được.\n\n💡 information là danh từ không đếm được.',
  },

  {
    id: 'de120-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nThe teacher told us _____ noisy during the lesson.',
    options: ['not be', 'don’t be', 'not being', 'not to be'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Giáo viên bảo chúng tôi không được ồn ào trong giờ học."\n\n✅ **D. not to be** — tell/ask somebody not to do something.\n\n❌ **A/B/C** — sai cấu trúc.\n\n💡 tell somebody not to + V.',
  },

  {
    id: 'de120-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct relative pronoun:\nHa Long Bay, _____ attracts millions of tourists, is a UNESCO World Heritage Site.',
    options: ['which', 'where', 'what', 'that'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Vịnh Hạ Long, nơi thu hút hàng triệu khách du lịch, là di sản thế giới UNESCO."\n\n✅ **A. which** — dùng trong mệnh đề quan hệ không xác định.\n\n❌ **B/C/D** — không phù hợp cấu trúc.\n\n💡 which dùng để thay thế vật/sự việc.',
  },

  {
    id: 'de120-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nStories about space travel are always _____.',
    options: ['amazingly', 'amaze', 'amazed', 'amazing'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Những câu chuyện về du hành vũ trụ luôn rất thú vị."\n\n✅ **D. amazing** — dùng để miêu tả tính chất của sự vật.\n\n❌ **A/B/C** — sai loại từ hoặc sai nghĩa.\n\n💡 amazing = gây thú vị.',
  },

  {
    id: 'de120-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the opposite meaning:\nMai was over the moon after winning the science competition.',
    options: ['excited', 'delighted', 'depressed', 'proud'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Mai cực kỳ hạnh phúc sau khi thắng cuộc thi khoa học."\n\n✅ **C. depressed** — trái nghĩa với “over the moon”.\n\n❌ **A/B/D** — đều mang nghĩa tích cực.\n\n💡 over the moon = rất vui sướng.',
  },

  {
    id: 'de120-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the closest meaning:\nMany students get pleasure from reading comic books.',
    options: ['experience', 'fun', 'improvement', 'participation'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nhiều học sinh cảm thấy vui thích khi đọc truyện tranh."\n\n✅ **B. fun** — gần nghĩa nhất với “pleasure”.\n\n❌ **A/C/D** — không cùng nghĩa.\n\n💡 pleasure = enjoyment/fun.',
  },

  {
    id: 'de120-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nStudents can make rapid _____ in English if they practise regularly.',
    options: ['progress', 'ability', 'difficulty', 'activity'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Học sinh có thể tiến bộ nhanh trong tiếng Anh nếu luyện tập thường xuyên."\n\n✅ **A. progress** — collocation đúng: make progress.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 make progress = tiến bộ.',
  },

  {
    id: 'de120-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nShe is taking _____ 15-hour English course this summer.',
    options: ['a', 'an', 'the', 'Ø (no article)'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy đang tham gia một khóa tiếng Anh 15 giờ vào mùa hè này."\n\n✅ **B. an** — “15-hour” bắt đầu bằng âm nguyên âm /fɪfˈtiːn/.\n\n❌ **A/C/D** — không phù hợp.\n\n💡 dùng “an” trước âm nguyên âm.',
  },

  {
    id: 'de120-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct pronoun:\nThe teacher gives attention to _____ student in the class.',
    options: ['none', 'all', 'each', 'both'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Giáo viên quan tâm đến từng học sinh trong lớp."\n\n✅ **C. each** — đi với danh từ số ít.\n\n❌ **A/B/D** — không phù hợp nghĩa.\n\n💡 each + singular noun.',
  },

  {
    id: 'de120-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe students studied English _____ small groups.',
    options: ['up', 'under', 'along', 'in'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Các học sinh học tiếng Anh theo các nhóm nhỏ."\n\n✅ **D. in** — đúng cụm: in groups.\n\n❌ **A/B/C** — sai giới từ.\n\n💡 in groups = theo nhóm.',
  },

  {
    id: 'de120-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct noun:\nThe school offers many indoor and outdoor _____.',
    options: ['activities', 'abilities', 'possibilities', 'difficulties'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Trường cung cấp nhiều hoạt động trong nhà và ngoài trời."\n\n✅ **A. activities** — phù hợp nghĩa trong ngữ cảnh trường học.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 indoor/outdoor activities = hoạt động trong/ngoài trời.',
  },

  {
    id: 'de120-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the sentence closest in meaning:\nUnless we protect forests, many animals will disappear.',
    options: [
      'If we protect forests, many animals will disappear.',
      'If we do not protect forests, many animals will disappear.',
      'If we protected forests, many animals disappear.',
      'If we will not protect forests, many animals disappear.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nếu chúng ta không bảo vệ rừng, nhiều loài động vật sẽ biến mất."\n\n✅ **B** — đúng nghĩa của “unless”.\n\n❌ **A/C/D** — sai nghĩa hoặc sai cấu trúc.\n\n💡 unless = if ... not.',
  },

  {
    id: 'de120-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct passive structure:\nPeople believe that exercise improves mental health.',
    options: [
      'It is believed that exercise improves mental health.',
      'Exercise is believed improve mental health.',
      'It believed that exercise improves mental health.',
      'Exercise believed to improve mental health.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Người ta tin rằng tập thể dục cải thiện sức khỏe tinh thần."\n\n✅ **A** — đúng cấu trúc bị động với “People believe that ...”.\n\n❌ **B/C/D** — thiếu động từ hoặc sai ngữ pháp.\n\n💡 It is believed that + clause.',
  },

  {
    id: 'de120-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct comparison:\nI didn’t make _____ mistakes as my brother did.',
    options: ['as much', 'many', 'as many', 'more'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Tôi không mắc nhiều lỗi như anh trai tôi."\n\n✅ **C. as many** — mistakes là danh từ đếm được số nhiều.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 as many + plural noun + as.',
  },

  {
    id: 'de120-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nNam / ask / me / not / use / smartphone / class.',
    options: [
      'Nam asked me not using my smartphone in class.',
      'Nam asked me not to use my smartphone in class.',
      'Nam asked me to not use my smartphone in class.',
      'Nam asked not to use my smartphone in class.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nam bảo tôi không sử dụng điện thoại trong lớp."\n\n✅ **B** — đúng cấu trúc: ask somebody not to do something.\n\n❌ **A/C/D** — sai cấu trúc hoặc thiếu tân ngữ.\n\n💡 ask + O + not to + V.',
  },

  {
    id: 'de120-q22',
    questionNumber: 22,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nIt / important / students / protect / environment.',
    options: [
      'It is important students protecting the environment.',
      'It important for students protect the environment.',
      'It is important for students to protect the environment.',
      'It is important students to protect the environment.',
    ],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Điều quan trọng là học sinh phải bảo vệ môi trường."\n\n✅ **C** — đúng cấu trúc: It is important for somebody to do something.\n\n❌ **A/B/D** — thiếu giới từ hoặc sai động từ.\n\n💡 It is + adj + for O + to V.',
  },

  {
    id: 'de120-q23',
    questionNumber: 23,
    type: 'writing',
    questionText:
      'Arrange the words into a meaningful sentence:\nmy friends / enjoy / taking photos / during trips',
    options: [
      'My friends enjoy taking photos during trips.',
      'My friends taking photos enjoy during trips.',
      'Enjoy my friends taking photos during trips.',
      'My friends enjoy photos taking during trips.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Bạn bè tôi thích chụp ảnh trong các chuyến đi."\n\n✅ **A** — đúng trật tự câu tiếng Anh.\n\n❌ **B/C/D** — sai vị trí động từ hoặc cụm từ.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de120-q24',
    questionNumber: 24,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nYou / should / travel / bus / instead / motorbike.',
    options: [
      'You should travelling by bus instead of motorbike.',
      'You should travel by bus instead of motorbike.',
      'You should travel bus instead of by motorbike.',
      'You should to travel by bus instead of motorbike.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn nên đi bằng xe buýt thay vì xe máy."\n\n✅ **B** — đúng cấu trúc sau “should”.\n\n❌ **A/C/D** — sai dạng động từ hoặc thiếu giới từ.\n\n💡 should + V nguyên mẫu.',
  },

  {
    id: 'de120-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nMost / students / find / science documentaries / educational / interesting.',
    options: [
      'Most students finds science documentaries educational and interesting.',
      'Most of students find science documentaries educational and interesting.',
      'Most students find science documentaries educational and interesting.',
      'Most students finds science documentaries are educational and interesting.',
    ],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Hầu hết học sinh thấy các bộ phim tài liệu khoa học mang tính giáo dục và thú vị."\n\n✅ **C** — đúng hòa hợp chủ ngữ - động từ và cấu trúc câu.\n\n❌ **A/B/D** — sai chia động từ hoặc cấu trúc.\n\n💡 Most students + find + object + adjective.',
  },
]
};

export default deMau21;
