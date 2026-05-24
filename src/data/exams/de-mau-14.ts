
import { Exam } from '@/types';

const deMau14: Exam = {
  id: 'de-mau-14',
  title: 'Đề Mẫu Số 14',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề dự đoán 01',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-v01',
    word: 'exhilarating',
    pronunciation: '/ɪɡˈzɪləreɪtɪŋ/',
    partOfSpeech: 'adj',
    definition: 'làm phấn khích',
    exampleSentence: 'Riding a roller coaster is exhilarating.',
    exampleTranslation: 'Đi tàu lượn siêu tốc rất phấn khích.',
    wrongOptions: ['nhàm chán', 'nguy hiểm', 'yên tĩnh'],
  },
  {
    id: 'de25-v02',
    word: 'shopaholic',
    pronunciation: '/ˌʃɒpəˈhɒlɪk/',
    partOfSpeech: 'n',
    definition: 'người nghiện mua sắm',
    exampleSentence: 'My aunt is a real shopaholic.',
    exampleTranslation: 'Dì tôi là một người rất nghiện mua sắm.',
    wrongOptions: ['người tiết kiệm', 'người bán hàng', 'khách du lịch'],
  },
  {
    id: 'de25-v03',
    word: 'household',
    pronunciation: '/ˈhaʊshəʊld/',
    partOfSpeech: 'n',
    definition: 'hộ gia đình',
    exampleSentence: 'Every household should save electricity.',
    exampleTranslation: 'Mỗi hộ gia đình nên tiết kiệm điện.',
    wrongOptions: ['trường học', 'cửa hàng', 'khách sạn'],
  },
  {
    id: 'de25-v04',
    word: 'knowledge',
    pronunciation: '/ˈnɒlɪdʒ/',
    partOfSpeech: 'n',
    definition: 'kiến thức',
    exampleSentence: 'Reading books improves your knowledge.',
    exampleTranslation: 'Đọc sách giúp cải thiện kiến thức.',
    wrongOptions: ['sức khỏe', 'kinh nghiệm', 'kỹ năng'],
  },
  {
    id: 'de25-v05',
    word: 'narrow',
    pronunciation: '/ˈnærəʊ/',
    partOfSpeech: 'adj',
    definition: 'hẹp',
    exampleSentence: 'The street is too narrow for cars.',
    exampleTranslation: 'Con đường quá hẹp cho ô tô.',
    wrongOptions: ['rộng', 'dài', 'cao'],
  },
  {
    id: 'de25-v06',
    word: 'structure',
    pronunciation: '/ˈstrʌktʃə(r)/',
    partOfSpeech: 'n',
    definition: 'cấu trúc',
    exampleSentence: 'Students should learn sentence structure carefully.',
    exampleTranslation: 'Học sinh nên học kỹ cấu trúc câu.',
    wrongOptions: ['âm thanh', 'màu sắc', 'hình dạng'],
  },
  {
    id: 'de25-v07',
    word: 'fascinating',
    pronunciation: '/ˈfæsɪneɪtɪŋ/',
    partOfSpeech: 'adj',
    definition: 'hấp dẫn',
    exampleSentence: 'The documentary was fascinating.',
    exampleTranslation: 'Bộ phim tài liệu rất hấp dẫn.',
    wrongOptions: ['nhàm chán', 'ồn ào', 'đắt đỏ'],
  },
  {
    id: 'de25-v08',
    word: 'engineering',
    pronunciation: '/ˌendʒɪˈnɪərɪŋ/',
    partOfSpeech: 'n',
    definition: 'ngành kỹ thuật',
    exampleSentence: 'She wants to study engineering at university.',
    exampleTranslation: 'Cô ấy muốn học ngành kỹ thuật ở đại học.',
    wrongOptions: ['y học', 'âm nhạc', 'du lịch'],
  },
  {
    id: 'de25-v09',
    word: 'popularity',
    pronunciation: '/ˌpɒpjəˈlærəti/',
    partOfSpeech: 'n',
    definition: 'sự phổ biến',
    exampleSentence: 'The singer gained popularity quickly.',
    exampleTranslation: 'Ca sĩ đó nhanh chóng trở nên nổi tiếng.',
    wrongOptions: ['sự thất bại', 'sự im lặng', 'sự nghèo khó'],
  },
  {
    id: 'de25-v10',
    word: 'generation',
    pronunciation: '/ˌdʒenəˈreɪʃn/',
    partOfSpeech: 'n',
    definition: 'thế hệ',
    exampleSentence: 'Young people are the future generation.',
    exampleTranslation: 'Người trẻ là thế hệ tương lai.',
    wrongOptions: ['quốc gia', 'gia đình', 'cộng đồng'],
  },
  {
    id: 'de25-v11',
    word: 'collect',
    pronunciation: '/kəˈlekt/',
    partOfSpeech: 'v',
    definition: 'sưu tầm',
    exampleSentence: 'He likes to collect stamps.',
    exampleTranslation: 'Anh ấy thích sưu tầm tem.',
    wrongOptions: ['vứt bỏ', 'mua bán', 'sửa chữa'],
  },
  {
    id: 'de25-v12',
    word: 'travelled',
    pronunciation: '/ˈtrævld/',
    partOfSpeech: 'v',
    definition: 'đã du lịch',
    exampleSentence: 'She travelled to Japan last year.',
    exampleTranslation: 'Cô ấy đã du lịch Nhật Bản năm ngoái.',
    wrongOptions: ['ở lại', 'làm việc', 'học tập'],
  },
  {
    id: 'de25-v13',
    word: 'climber',
    pronunciation: '/ˈklaɪmə(r)/',
    partOfSpeech: 'n',
    definition: 'người leo núi',
    exampleSentence: 'The climbers reached the top safely.',
    exampleTranslation: 'Những người leo núi đã lên đỉnh an toàn.',
    wrongOptions: ['người lái xe', 'người câu cá', 'người bơi'],
  },
  {
    id: 'de25-v14',
    word: 'concentrate',
    pronunciation: '/ˈkɒnsntreɪt/',
    partOfSpeech: 'v',
    definition: 'tập trung',
    exampleSentence: 'Please concentrate on your homework.',
    exampleTranslation: 'Hãy tập trung vào bài tập của bạn.',
    wrongOptions: ['thư giãn', 'la hét', 'di chuyển'],
  },
  {
    id: 'de25-v15',
    word: 'borrowed',
    pronunciation: '/ˈbɒrəʊd/',
    partOfSpeech: 'adj',
    definition: 'được vay mượn',
    exampleSentence: 'English has many borrowed words.',
    exampleTranslation: 'Tiếng Anh có nhiều từ vay mượn.',
    wrongOptions: ['nguyên bản', 'khó hiểu', 'hiện đại'],
  },
  {
    id: 'de25-v16',
    word: 'anxious',
    pronunciation: '/ˈæŋkʃəs/',
    partOfSpeech: 'adj',
    definition: 'lo lắng',
    exampleSentence: 'She felt anxious before the exam.',
    exampleTranslation: 'Cô ấy cảm thấy lo lắng trước kỳ thi.',
    wrongOptions: ['vui vẻ', 'tự tin', 'thoải mái'],
  },
  {
    id: 'de25-v17',
    word: 'portable',
    pronunciation: '/ˈpɔːtəbl/',
    partOfSpeech: 'adj',
    definition: 'xách tay, di động',
    exampleSentence: 'He bought a portable speaker.',
    exampleTranslation: 'Anh ấy đã mua một chiếc loa di động.',
    wrongOptions: ['cố định', 'nặng nề', 'đắt tiền'],
  },
  {
    id: 'de25-v18',
    word: 'durable',
    pronunciation: '/ˈdjʊərəbl/',
    partOfSpeech: 'adj',
    definition: 'bền',
    exampleSentence: 'This backpack is very durable.',
    exampleTranslation: 'Chiếc ba lô này rất bền.',
    wrongOptions: ['dễ vỡ', 'mỏng', 'cũ kỹ'],
  },
  {
    id: 'de25-v19',
    word: 'laboratory',
    pronunciation: '/ləˈbɒrətri/',
    partOfSpeech: 'n',
    definition: 'phòng thí nghiệm',
    exampleSentence: 'Students are working in the laboratory.',
    exampleTranslation: 'Các học sinh đang làm việc trong phòng thí nghiệm.',
    wrongOptions: ['thư viện', 'nhà ăn', 'sân vận động'],
  },
  {
    id: 'de25-v20',
    word: 'scholarship',
    pronunciation: '/ˈskɒləʃɪp/',
    partOfSpeech: 'n',
    definition: 'học bổng',
    exampleSentence: 'She won a scholarship to study abroad.',
    exampleTranslation: 'Cô ấy đã giành học bổng du học.',
    wrongOptions: ['giải thưởng', 'chứng chỉ', 'hợp đồng'],
  },
  {
    id: 'de25-v21',
    word: 'announcement',
    pronunciation: '/əˈnaʊnsmənt/',
    partOfSpeech: 'n',
    definition: 'thông báo',
    exampleSentence: 'The airport made an important announcement.',
    exampleTranslation: 'Sân bay đã đưa ra một thông báo quan trọng.',
    wrongOptions: ['cuộc thi', 'bài hát', 'trò chơi'],
  },
  {
    id: 'de25-v22',
    word: 'etiquette',
    pronunciation: '/ˈetɪket/',
    partOfSpeech: 'n',
    definition: 'phép xã giao',
    exampleSentence: 'Students should learn table etiquette.',
    exampleTranslation: 'Học sinh nên học phép lịch sự trên bàn ăn.',
    wrongOptions: ['thời trang', 'thói quen', 'trò đùa'],
  },
  {
    id: 'de25-v23',
    word: 'reserve',
    pronunciation: '/rɪˈzɜːv/',
    partOfSpeech: 'n',
    definition: 'khu bảo tồn',
    exampleSentence: 'Many rare animals live in this nature reserve.',
    exampleTranslation: 'Nhiều động vật quý hiếm sống trong khu bảo tồn này.',
    wrongOptions: ['thành phố', 'bãi biển', 'nhà máy'],
  },
  {
    id: 'de25-v24',
    word: 'wildlife',
    pronunciation: '/ˈwaɪldlaɪf/',
    partOfSpeech: 'n',
    definition: 'động vật hoang dã',
    exampleSentence: 'We should protect wildlife.',
    exampleTranslation: 'Chúng ta nên bảo vệ động vật hoang dã.',
    wrongOptions: ['cây cối', 'xe cộ', 'đồ điện tử'],
  },
  {
    id: 'de25-v25',
    word: 'conserve',
    pronunciation: '/kənˈsɜːv/',
    partOfSpeech: 'v',
    definition: 'bảo tồn',
    exampleSentence: 'People must conserve natural resources.',
    exampleTranslation: 'Mọi người phải bảo tồn tài nguyên thiên nhiên.',
    wrongOptions: ['phá hủy', 'mở rộng', 'thay đổi'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de11-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy brother is interested _____ collecting stamps.',
    options: ['on', 'at', 'in', 'for'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh trai tôi thích sưu tầm tem."\n\n✅ **C. in** — cấu trúc cố định: interested in.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 interested in + noun/V-ing.',
  },

  {
    id: 'de11-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe _____ the weather is, the happier the children feel.',
    options: [
      'sunny',
      'sunnier',
      'more sunny',
      'most sunny',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Thời tiết càng nắng thì lũ trẻ càng vui."\n\n✅ **B. sunnier** — cấu trúc so sánh kép: The + comparative, the + comparative.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 The + comparative, the + comparative = càng... càng...',
  },

  {
    id: 'de11-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nWould you mind _____ the window? It’s a bit hot in here.',
    options: ['open', 'opening', 'to open', 'opened'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn có phiền mở cửa sổ không? Trong này hơi nóng."\n\n✅ **B. opening** — sau "Would you mind" dùng V-ing.\n\n❌ **A/C/D** — sai cấu trúc ngữ pháp.\n\n💡 would you mind + V-ing.',
  },

  {
    id: 'de11-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct vocabulary:\nEnglish contains many _____ from other languages.',
    options: [
      'borrowed words',
      'traffic signs',
      'natural disasters',
      'electronic devices',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tiếng Anh chứa nhiều từ vay mượn từ các ngôn ngữ khác."\n\n✅ **A. borrowed words** — từ vay mượn.\n\n❌ **B/C/D** — không phù hợp nghĩa.\n\n💡 borrowed words = words taken from another language.',
  },

  {
    id: 'de11-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nI _____ my exam results yet.',
    options: [
      'haven’t received',
      'didn’t receive',
      'received',
      'receive',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi vẫn chưa nhận được kết quả thi."\n\n✅ **A. haven’t received** — hiện tại hoàn thành dùng với "yet".\n\n❌ **B/C/D** — sai thì.\n\n💡 yet thường đi với present perfect.',
  },

  {
    id: 'de11-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nWe brought a _____ stove for the camping trip.',
    options: ['portable', 'fragile', 'crowded', 'harmful'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi mang theo một bếp di động cho chuyến cắm trại."\n\n✅ **A. portable** — có thể mang theo.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 portable = easy to carry.',
  },

  {
    id: 'de11-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct article:\n_____ laboratory can be _____ dangerous place.',
    options: [
      'The / the',
      'A / the',
      'The / a',
      'A / a',
    ],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Một phòng thí nghiệm có thể là một nơi nguy hiểm."\n\n✅ **D. A / a** — nói chung chung, chưa xác định.\n\n❌ **A/B/C** — dùng mạo từ không phù hợp.\n\n💡 a/an dùng khi nhắc lần đầu.',
  },

  {
    id: 'de11-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"I hope your presentation goes well today."',
    options: [
      'Thanks a lot. I hope so, too.',
      'Never mind.',
      'I’m afraid not.',
      'That’s impossible.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch: "Tôi hy vọng bài thuyết trình của bạn hôm nay sẽ tốt."\n\n✅ **A. Thanks a lot. I hope so, too.** — đáp lại lời chúc phù hợp.\n\n❌ **B/C/D** — không hợp ngữ cảnh.\n\n💡 Khi ai đó chúc may mắn → cảm ơn.',
  },

  {
    id: 'de11-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nAvoid touching wild animals _____ you are trained to do so.',
    options: ['unless', 'although', 'because', 'despite'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tránh chạm vào động vật hoang dã trừ khi bạn được đào tạo."\n\n✅ **A. unless** — trừ khi.\n\n❌ **B/C/D** — sai logic hoặc sai cấu trúc.\n\n💡 unless = if not.',
  },

  {
    id: 'de11-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct pronoun:\nWild animals may attack to defend _____.',
    options: ['themselves', 'ourselves', 'yourself', 'myself'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Động vật hoang dã có thể tấn công để tự vệ."\n\n✅ **A. themselves** — đại từ phản thân số nhiều.\n\n❌ **B/C/D** — không phù hợp chủ ngữ.\n\n💡 themselves dùng cho "animals".',
  },

  {
    id: 'de11-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nSea turtles may not _____ long outside their natural habitat.',
    options: ['survive', 'observe', 'damage', 'threaten'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Rùa biển có thể không sống sót lâu ngoài môi trường tự nhiên."\n\n✅ **A. survive** — sống sót.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 survive = continue to live.',
  },

  {
    id: 'de11-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct relative pronoun:\nThe materials _____ are used in this product are recyclable.',
    options: ['who', 'whose', 'which', 'where'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Những vật liệu được dùng trong sản phẩm này có thể tái chế."\n\n✅ **C. which** — thay cho vật.\n\n❌ **A/B/D** — sai đại từ quan hệ.\n\n💡 which = dùng cho things.',
  },

  {
    id: 'de11-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct collocation:\nTechnology plays an important _____ in modern education.',
    options: ['game', 'role', 'task', 'effect'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Công nghệ đóng vai trò quan trọng trong giáo dục hiện đại."\n\n✅ **B. role** — collocation: play an important role.\n\n❌ **A/C/D** — không đi với play.\n\n💡 play a role = đóng vai trò.',
  },

  {
    id: 'de11-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nMany companies now use _____ devices to reduce pollution.',
    options: [
      'energy-saving',
      'low-quality',
      'broken',
      'expensive',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nhiều công ty hiện nay sử dụng thiết bị tiết kiệm năng lượng để giảm ô nhiễm."\n\n✅ **A. energy-saving** — tiết kiệm năng lượng.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 energy-saving = uses less energy.',
  },

  {
    id: 'de11-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe roads were flooded, _____ many people stayed at home.',
    options: ['so', 'although', 'because', 'but'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đường bị ngập nên nhiều người ở nhà."\n\n✅ **A. so** — diễn tả kết quả.\n\n❌ **B/C/D** — không hợp logic.\n\n💡 so = therefore.',
  },

  {
    id: 'de11-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nClimate change has caused many people to _____ their homes.',
    options: ['protect', 'flee', 'observe', 'build'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Biến đổi khí hậu đã khiến nhiều người phải chạy khỏi nhà."\n\n✅ **B. flee** — chạy trốn.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 flee = escape from danger.',
  },

  {
    id: 'de11-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nHeavy rainfall can _____ rivers and cause floods.',
    options: ['overwhelm', 'repair', 'reduce', 'collect'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Lượng mưa lớn có thể làm sông quá tải và gây lũ lụt."\n\n✅ **A. overwhelm** — áp đảo, làm quá tải.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 overwhelm = too much for something to handle.',
  },

  {
    id: 'de11-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nPeople living near rivers are often the most _____.',
    options: ['modern', 'vulnerable', 'careless', 'stylish'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Những người sống gần sông thường dễ bị tổn thương nhất."\n\n✅ **B. vulnerable** — dễ bị ảnh hưởng.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 vulnerable = easily harmed.',
  },

  {
    id: 'de11-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nScientists are trying to develop more _____ products.',
    options: [
      'sustainable',
      'traditional',
      'ordinary',
      'fragile',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Các nhà khoa học đang cố gắng phát triển những sản phẩm bền vững hơn."\n\n✅ **A. sustainable** — bền vững.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 sustainable = environmentally friendly long-term.',
  },

  {
    id: 'de11-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nimportant / plays / technology / role / an / education / in',
    options: [
      'Technology plays an important role in education.',
      'Technology an important role plays in education.',
      'An important technology plays role in education.',
      'Technology plays in education an important role.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Công nghệ đóng vai trò quan trọng trong giáo dục."\n\n✅ **A. Technology plays an important role in education.** — đúng trật tự từ và collocation.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 play an important role = cụm cố định.',
  },

  {
    id: 'de11-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nwe / if / environment / protect / should / the / recycle / want to',
    options: [
      'We should recycle if we want to protect the environment.',
      'We recycle should if want to protect the environment.',
      'If we should recycle want to protect the environment.',
      'Protect the environment we should if recycle.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Chúng ta nên tái chế nếu muốn bảo vệ môi trường."\n\n✅ **A. We should recycle if we want to protect the environment.** — đúng cấu trúc câu điều kiện.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 if + present simple.',
  },

  {
    id: 'de11-q22',
    questionNumber: 22,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe volunteers gained hands-on _____ while working at the rescue center.',
    options: ['experience', 'danger', 'equipment', 'pollution'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Các tình nguyện viên có được kinh nghiệm thực tế khi làm việc tại trung tâm cứu hộ."\n\n✅ **A. experience** — kinh nghiệm.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 hands-on experience = practical experience.',
  },

  {
    id: 'de11-q23',
    questionNumber: 23,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe rescue team provided better _____ for people during the flood.',
    options: ['shelters', 'mountains', 'vehicles', 'factories'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đội cứu hộ đã cung cấp nơi trú ẩn tốt hơn cho người dân trong trận lũ."\n\n✅ **A. shelters** — nơi trú ẩn.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 shelter = safe place.',
  },

  {
    id: 'de11-q24',
    questionNumber: 24,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMany rare animals are threatened by illegal wildlife _____.',
    options: ['trade', 'education', 'traffic', 'industry'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nhiều loài động vật quý hiếm bị đe dọa bởi việc buôn bán động vật hoang dã trái phép."\n\n✅ **A. trade** — buôn bán.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 wildlife trade = buying and selling wild animals.',
  },

  {
    id: 'de11-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nmore / should / trees / plant / flooding / reduce / to / we',
    options: [
      'We should plant more trees to reduce flooding.',
      'We plant should more trees to reduce flooding.',
      'More trees should plant we to reduce flooding.',
      'To reduce flooding should we plant more trees.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Chúng ta nên trồng thêm cây để giảm lũ lụt."\n\n✅ **A. We should plant more trees to reduce flooding.** — đúng cấu trúc.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 should + V; to V = chỉ mục đích.',
  },
]
};

export default deMau14;
