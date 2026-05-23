
import { Exam } from '@/types';

const deMau05: Exam = {
  id: 'de-mau-05',
  title: 'Đề Mẫu Số 5',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 22',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de22-v01',
    word: 'landmark',
    pronunciation: '/ˈlændmɑːk/',
    partOfSpeech: 'n',
    definition: 'địa danh nổi tiếng',
    exampleSentence: 'The Eiffel Tower is a famous landmark in Paris.',
    exampleTranslation: 'Tháp Eiffel là một địa danh nổi tiếng ở Paris.',
    wrongOptions: ['khu mua sắm lớn', 'sân vận động quốc gia', 'trạm xe buýt'],
  },
  {
    id: 'de22-v02',
    word: 'desert',
    pronunciation: '/ˈdezət/',
    partOfSpeech: 'n',
    definition: 'sa mạc',
    exampleSentence: 'Camels can survive in the desert.',
    exampleTranslation: 'Lạc đà có thể sống sót trong sa mạc.',
    wrongOptions: ['rừng nhiệt đới', 'dòng sông lớn', 'thung lũng xanh'],
  },
  {
    id: 'de22-v03',
    word: 'inhabitant',
    pronunciation: '/ɪnˈhæbɪtənt/',
    partOfSpeech: 'n',
    definition: 'cư dân',
    exampleSentence: 'The island has only a few inhabitants.',
    exampleTranslation: 'Hòn đảo chỉ có một vài cư dân.',
    wrongOptions: ['khách du lịch', 'nhà khoa học', 'cảnh sát giao thông'],
  },
  {
    id: 'de22-v04',
    word: 'explorer',
    pronunciation: '/ɪkˈsplɔːrə(r)/',
    partOfSpeech: 'n',
    definition: 'nhà thám hiểm',
    exampleSentence: 'The explorer traveled across Africa.',
    exampleTranslation: 'Nhà thám hiểm đã đi khắp châu Phi.',
    wrongOptions: ['ca sĩ nổi tiếng', 'vận động viên trẻ', 'đầu bếp chuyên nghiệp'],
  },
  {
    id: 'de22-v05',
    word: 'tourist',
    pronunciation: '/ˈtʊərɪst/',
    partOfSpeech: 'n',
    definition: 'khách du lịch',
    exampleSentence: 'Many tourists visit Ha Long Bay every year.',
    exampleTranslation: 'Nhiều khách du lịch đến thăm Vịnh Hạ Long mỗi năm.',
    wrongOptions: ['giáo viên trung học', 'bác sĩ bệnh viện', 'nhân viên ngân hàng'],
  },
  {
    id: 'de22-v06',
    word: 'amazing',
    pronunciation: '/əˈmeɪzɪŋ/',
    partOfSpeech: 'adj',
    definition: 'tuyệt vời',
    exampleSentence: 'We had an amazing holiday last summer.',
    exampleTranslation: 'Chúng tôi có một kỳ nghỉ tuyệt vời mùa hè năm ngoái.',
    wrongOptions: ['rất buồn tẻ', 'quá đắt đỏ', 'khó hiểu vô cùng'],
  },
  {
    id: 'de22-v07',
    word: 'cave',
    pronunciation: '/keɪv/',
    partOfSpeech: 'n',
    definition: 'hang động',
    exampleSentence: 'The cave is thousands of years old.',
    exampleTranslation: 'Hang động này đã hàng nghìn năm tuổi.',
    wrongOptions: ['ngọn núi cao', 'con đường dài', 'hồ nước sâu'],
  },
  {
    id: 'de22-v08',
    word: 'painting',
    pronunciation: '/ˈpeɪntɪŋ/',
    partOfSpeech: 'n',
    definition: 'tranh vẽ',
    exampleSentence: 'The museum displays beautiful paintings.',
    exampleTranslation: 'Bảo tàng trưng bày những bức tranh đẹp.',
    wrongOptions: ['bài hát nổi tiếng', 'cuốn tiểu thuyết', 'vở kịch hài'],
  },
  {
    id: 'de22-v09',
    word: 'report',
    pronunciation: '/rɪˈpɔːt/',
    partOfSpeech: 'v',
    definition: 'báo cáo, tường thuật',
    exampleSentence: 'The news reported a big storm yesterday.',
    exampleTranslation: 'Bản tin đã tường thuật một cơn bão lớn hôm qua.',
    wrongOptions: ['che giấu sự thật', 'vẽ tranh nghệ thuật', 'bán sản phẩm mới'],
  },
  {
    id: 'de22-v10',
    word: 'accompany',
    pronunciation: '/əˈkʌmpəni/',
    partOfSpeech: 'v',
    definition: 'đi cùng',
    exampleSentence: 'Children must be accompanied by an adult.',
    exampleTranslation: 'Trẻ em phải được người lớn đi cùng.',
    wrongOptions: ['ở nhà một mình', 'chạy thật nhanh', 'đọc sách yên lặng'],
  },
  {
    id: 'de22-v11',
    word: 'spirit',
    pronunciation: '/ˈspɪrɪt/',
    partOfSpeech: 'n',
    definition: 'linh hồn, ma quỷ',
    exampleSentence: 'Some people believe bad spirits bring bad luck.',
    exampleTranslation: 'Một số người tin rằng ma quỷ mang lại điều xui xẻo.',
    wrongOptions: ['món ăn truyền thống', 'thiết bị điện tử', 'bài học lịch sử'],
  },
  {
    id: 'de22-v12',
    word: 'envelope',
    pronunciation: '/ˈenvələʊp/',
    partOfSpeech: 'n',
    definition: 'phong bì',
    exampleSentence: 'She put the letter into an envelope.',
    exampleTranslation: 'Cô ấy đặt lá thư vào phong bì.',
    wrongOptions: ['chiếc vali lớn', 'cuốn từ điển', 'hộp quà sinh nhật'],
  },
  {
    id: 'de22-v13',
    word: 'sweep',
    pronunciation: '/swiːp/',
    partOfSpeech: 'v',
    definition: 'quét',
    exampleSentence: 'He sweeps the floor every morning.',
    exampleTranslation: 'Anh ấy quét sàn mỗi sáng.',
    wrongOptions: ['lau cửa kính', 'nấu bữa tối', 'tưới cây cảnh'],
  },
  {
    id: 'de22-v14',
    word: 'previous',
    pronunciation: '/ˈpriːviəs/',
    partOfSpeech: 'adj',
    definition: 'trước đó',
    exampleSentence: 'I met her on a previous trip.',
    exampleTranslation: 'Tôi đã gặp cô ấy trong chuyến đi trước đó.',
    wrongOptions: ['trong tương lai', 'hiện tại ngay bây giờ', 'cực kỳ hiện đại'],
  },
  {
    id: 'de22-v15',
    word: 'relative',
    pronunciation: '/ˈrelətɪv/',
    partOfSpeech: 'n',
    definition: 'họ hàng',
    exampleSentence: 'We visited our relatives during Tet.',
    exampleTranslation: 'Chúng tôi thăm họ hàng vào dịp Tết.',
    wrongOptions: ['bạn học cũ', 'đồng nghiệp công ty', 'người hàng xóm'],
  },
  {
    id: 'de22-v16',
    word: 'calligrapher',
    pronunciation: '/kəˈlɪɡrəfə(r)/',
    partOfSpeech: 'n',
    definition: 'người viết thư pháp',
    exampleSentence: 'The calligrapher wrote beautiful poems.',
    exampleTranslation: 'Ông đồ đã viết những bài thơ đẹp.',
    wrongOptions: ['nhạc sĩ nổi tiếng', 'thợ sửa xe', 'người bán hoa'],
  },
  {
    id: 'de22-v17',
    word: 'stress',
    pronunciation: '/stres/',
    partOfSpeech: 'n',
    definition: 'căng thẳng',
    exampleSentence: 'Too much stress is bad for your health.',
    exampleTranslation: 'Quá nhiều căng thẳng có hại cho sức khỏe.',
    wrongOptions: ['niềm vui bất ngờ', 'thói quen ăn uống', 'kỹ năng giao tiếp'],
  },
  {
    id: 'de22-v18',
    word: 'strategy',
    pronunciation: '/ˈstrætədʒi/',
    partOfSpeech: 'n',
    definition: 'chiến lược',
    exampleSentence: 'We need a good strategy to win the game.',
    exampleTranslation: 'Chúng ta cần một chiến lược tốt để thắng trận đấu.',
    wrongOptions: ['bài hát mới', 'một món quà', 'thói quen xấu'],
  },
  {
    id: 'de22-v19',
    word: 'relaxed',
    pronunciation: '/rɪˈlækst/',
    partOfSpeech: 'adj',
    definition: 'thư giãn, thoải mái',
    exampleSentence: 'I feel relaxed after listening to music.',
    exampleTranslation: 'Tôi cảm thấy thư giãn sau khi nghe nhạc.',
    wrongOptions: ['cực kỳ lo lắng', 'rất tức giận', 'quá mệt mỏi'],
  },
  {
    id: 'de22-v20',
    word: 'nature',
    pronunciation: '/ˈneɪtʃə(r)/',
    partOfSpeech: 'n',
    definition: 'thiên nhiên',
    exampleSentence: 'Spending time in nature helps reduce stress.',
    exampleTranslation: 'Dành thời gian với thiên nhiên giúp giảm căng thẳng.',
    wrongOptions: ['trò chơi điện tử', 'trung tâm thương mại', 'phim hành động'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de22b-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nMy sister wants to become _____ engineer in the future.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Chị gái tôi muốn trở thành một kỹ sư trong tương lai."\n\n✅ **B. an** — "engineer" bắt đầu bằng nguyên âm.\n\n❌ **A/C/D** — sai cách dùng mạo từ.\n\n💡 an + vowel sound.',
  },

  {
    id: 'de22b-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nStudents _____ bring dictionaries into the exam room.',
    options: ['must', 'might', 'could', 'would'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Học sinh phải mang từ điển vào phòng thi."\n\n✅ **A. must** — diễn tả sự bắt buộc.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 must = phải.',
  },

  {
    id: 'de22b-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct quantifier:\nWe don’t have _____ milk left in the fridge.',
    options: ['many', 'a few', 'much', 'several'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Chúng tôi không còn nhiều sữa trong tủ lạnh."\n\n✅ **C. much** — dùng với danh từ không đếm được.\n\n❌ **A/B/D** — dùng sai loại danh từ.\n\n💡 much + uncountable noun.',
  },

  {
    id: 'de22b-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct verb form:\nShe decided _____ abroad next year.',
    options: ['study', 'studying', 'to study', 'studies'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy quyết định đi du học vào năm tới."\n\n✅ **C. to study** — sau "decide" dùng to-V.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 decide + to V.',
  },

  {
    id: 'de22b-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct tag question:\nYour parents visited Da Nang last summer, _____?',
    options: ['did they', 'didn’t they', 'were they', 'weren’t they'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bố mẹ bạn đã đến Đà Nẵng mùa hè trước, phải không?"\n\n✅ **B. didn’t they** — câu khẳng định → tag phủ định.\n\n❌ **A/C/D** — sai trợ động từ.\n\n💡 Past simple → did/didn’t.',
  },

  {
    id: 'de22b-q06',
    questionNumber: 6,
    type: 'vocabulary',
    questionText:
      'Choose the correct word:\nMany people travel by _____ transport to save money.',
    options: ['private', 'public', 'personal', 'secret'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nhiều người đi bằng phương tiện công cộng để tiết kiệm tiền."\n\n✅ **B. public** — public transport = phương tiện công cộng.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 Common phrase: public transport.',
  },

  {
    id: 'de22b-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the best response:\n"Congratulations on your exam results!"',
    options: [
      'Thank you very much.',
      'I’m not sure.',
      'That’s impossible.',
      'Never mind.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúc mừng kết quả thi của bạn!"\n\n✅ **A. Thank you very much.** — đáp lại lời chúc mừng phù hợp.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 congratulations → thank you.',
  },

  {
    id: 'de22b-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe cat is hiding _____ the table.',
    options: ['under', 'between', 'through', 'across'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Con mèo đang trốn dưới cái bàn."\n\n✅ **A. under** — under the table = dưới bàn.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 under = phía dưới.',
  },

  {
    id: 'de22b-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nI _____ my homework before dinner yesterday.',
    options: ['finish', 'finished', 'had finished', 'am finishing'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Tôi đã hoàn thành bài tập trước bữa tối hôm qua."\n\n✅ **C. had finished** — hành động xảy ra trước một thời điểm trong quá khứ.\n\n❌ **A/B/D** — sai thì.\n\n💡 Past perfect = had + V3.',
  },

  {
    id: 'de22b-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nShe was tired, _____ she continued working.',
    options: ['so', 'because', 'but', 'therefore'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy mệt nhưng vẫn tiếp tục làm việc."\n\n✅ **C. but** — diễn tả sự tương phản.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 but = nhưng.',
  },

  {
    id: 'de22b-q11',
    questionNumber: 11,
    type: 'vocabulary',
    questionText:
      'Choose the word closest in meaning to "dangerous".',
    options: ['safe', 'risky', 'quiet', 'helpful'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ gần nghĩa nhất với dangerous."\n\n✅ **B. risky** — dangerous = nguy hiểm.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 dangerous = risky.',
  },

  {
    id: 'de22b-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere _____ a supermarket near my house.',
    options: ['are', 'were', 'is', 'be'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Có một siêu thị gần nhà tôi."\n\n✅ **C. is** — "a supermarket" là danh từ số ít.\n\n❌ **A/B/D** — sai ngữ pháp.\n\n💡 there is + singular noun.',
  },

  {
    id: 'de22b-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct comparative form:\nMy new phone is _____ than my old one.',
    options: ['modern', 'more modern', 'most modern', 'modernest'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Điện thoại mới của tôi hiện đại hơn cái cũ."\n\n✅ **B. more modern** — so sánh hơn với tính từ hai âm tiết.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 more + adjective + than.',
  },

  {
    id: 'de22b-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct verb form:\nIf she studies harder, she _____ the scholarship.',
    options: ['gets', 'got', 'will get', 'is getting'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu cô ấy học chăm hơn, cô ấy sẽ nhận được học bổng."\n\n✅ **C. will get** — câu điều kiện loại 1.\n\n❌ **A/B/D** — sai thì.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de22b-q15',
    questionNumber: 15,
    type: 'vocabulary',
    questionText:
      'Choose the opposite meaning of "successful".',
    options: ['popular', 'hard-working', 'unsuccessful', 'talented'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ trái nghĩa với successful."\n\n✅ **C. unsuccessful** — successful ↔ unsuccessful.\n\n❌ **A/B/D** — không phải trái nghĩa.\n\n💡 successful = thành công.',
  },

  {
    id: 'de22b-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nEnglish _____ in many countries around the world.',
    options: ['speaks', 'is spoken', 'spoke', 'is speaking'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói ở nhiều quốc gia trên thế giới."\n\n✅ **B. is spoken** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 Passive voice: is/am/are + V3.',
  },

  {
    id: 'de22b-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nusually / breakfast / at 7 a.m / has / my brother',
    options: [
      'My brother usually has breakfast at 7 a.m.',
      'Usually my brother breakfast has at 7 a.m.',
      'My brother has usually breakfast at 7 a.m.',
      'Has my brother usually breakfast at 7 a.m.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Anh trai tôi thường ăn sáng lúc 7 giờ."\n\n✅ **A. My brother usually has breakfast at 7 a.m.** — đúng trật tự từ.\n\n❌ **B/C/D** — sai vị trí trạng từ hoặc ngữ pháp.\n\n💡 Subject + adverb + verb.',
  },

  {
    id: 'de22b-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nbecause / late / missed / we / the bus / we / woke up',
    options: [
      'We missed the bus because we woke up late.',
      'Because we woke up late missed we the bus.',
      'We because woke up late missed the bus.',
      'Missed we the bus because we woke up late.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Chúng tôi lỡ xe buýt vì dậy muộn."\n\n✅ **A. We missed the bus because we woke up late.** — đúng ngữ pháp.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 because + clause.',
  },

  {
    id: 'de22b-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"What do you usually do in your free time?"',
    options: [
      'I often read books.',
      'For two hours.',
      'At the library.',
      'Last weekend.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn thường làm gì vào thời gian rảnh?"\n\n✅ **A. I often read books.** — trả lời đúng nội dung câu hỏi.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 What do you do...? → hành động/thói quen.',
  },

  {
    id: 'de22b-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe weather was cold, _____ we stayed inside all day.',
    options: ['because', 'so', 'although', 'unless'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Thời tiết lạnh nên chúng tôi ở trong nhà cả ngày."\n\n✅ **B. so** — diễn tả kết quả.\n\n❌ **A/C/D** — không phù hợp logic.\n\n💡 so = vì vậy.',
  },
]
};

export default deMau05;
