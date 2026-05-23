
import { Exam } from '@/types';

const deMau11: Exam = {
  id: 'de-mau-11',
  title: 'Đề Mẫu Số 11',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 25',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-v41',
    word: 'acquaintance',
    pronunciation: '/əˈkweɪntəns/',
    partOfSpeech: 'n',
    definition: 'người quen',
    exampleSentence: 'He met an old acquaintance at the station.',
    exampleTranslation: 'Anh ấy gặp một người quen cũ ở nhà ga.',
    wrongOptions: ['bạn thân', 'hàng xóm', 'giáo viên'],
  },
  {
    id: 'de25-v42',
    word: 'talkative',
    pronunciation: '/ˈtɔːkətɪv/',
    partOfSpeech: 'adj',
    definition: 'hay nói',
    exampleSentence: 'My little sister is very talkative.',
    exampleTranslation: 'Em gái tôi rất hay nói.',
    wrongOptions: ['im lặng', 'lười biếng', 'nhút nhát'],
  },
  {
    id: 'de25-v43',
    word: 'luxury',
    pronunciation: '/ˈlʌkʃəri/',
    partOfSpeech: 'n',
    definition: 'sự xa xỉ',
    exampleSentence: 'Staying in a five-star hotel is a luxury.',
    exampleTranslation: 'Ở khách sạn năm sao là một sự xa xỉ.',
    wrongOptions: ['sự nghèo khó', 'công việc', 'thói quen'],
  },
  {
    id: 'de25-v44',
    word: 'charity',
    pronunciation: '/ˈtʃærəti/',
    partOfSpeech: 'n',
    definition: 'tổ chức từ thiện',
    exampleSentence: 'They donated money to a local charity.',
    exampleTranslation: 'Họ quyên góp tiền cho một tổ chức từ thiện địa phương.',
    wrongOptions: ['trường học', 'bệnh viện', 'công ty'],
  },
  {
    id: 'de25-v45',
    word: 'pollution',
    pronunciation: '/pəˈluːʃn/',
    partOfSpeech: 'n',
    definition: 'ô nhiễm',
    exampleSentence: 'Air pollution is a serious problem in cities.',
    exampleTranslation: 'Ô nhiễm không khí là một vấn đề nghiêm trọng ở các thành phố.',
    wrongOptions: ['sự phát triển', 'sự bảo vệ', 'sự sạch sẽ'],
  },
  {
    id: 'de25-v46',
    word: 'reduce',
    pronunciation: '/rɪˈdjuːs/',
    partOfSpeech: 'v',
    definition: 'giảm',
    exampleSentence: 'We should reduce the use of plastic bags.',
    exampleTranslation: 'Chúng ta nên giảm việc sử dụng túi nhựa.',
    wrongOptions: ['tăng lên', 'duy trì', 'mở rộng'],
  },
  {
    id: 'de25-v47',
    word: 'energy',
    pronunciation: '/ˈenədʒi/',
    partOfSpeech: 'n',
    definition: 'năng lượng',
    exampleSentence: 'Solar energy is environmentally friendly.',
    exampleTranslation: 'Năng lượng mặt trời thân thiện với môi trường.',
    wrongOptions: ['khói bụi', 'rác thải', 'nước mưa'],
  },
  {
    id: 'de25-v48',
    word: 'ensuite',
    pronunciation: '/ˌɒnˈswiːt/',
    partOfSpeech: 'adj',
    definition: 'có phòng tắm riêng',
    exampleSentence: 'The hotel offers ensuite rooms for guests.',
    exampleTranslation: 'Khách sạn cung cấp các phòng có phòng tắm riêng cho khách.',
    wrongOptions: ['không có cửa sổ', 'có ban công', 'giá rẻ'],
  },
  {
    id: 'de25-v49',
    word: 'housemate',
    pronunciation: '/ˈhaʊsmeɪt/',
    partOfSpeech: 'n',
    definition: 'bạn cùng nhà',
    exampleSentence: 'My housemates are very friendly and helpful.',
    exampleTranslation: 'Những người ở cùng nhà với tôi rất thân thiện và hữu ích.',
    wrongOptions: ['họ hàng', 'hàng xóm', 'đồng nghiệp'],
  },
  {
    id: 'de25-v50',
    word: 'excluding',
    pronunciation: '/ɪkˈskluːdɪŋ/',
    partOfSpeech: 'prep',
    definition: 'không bao gồm',
    exampleSentence: 'The price is $500 excluding tax.',
    exampleTranslation: 'Giá là 500 đô la chưa bao gồm thuế.',
    wrongOptions: ['bao gồm', 'cộng thêm', 'liên quan đến'],
  },
  {
    id: 'de25-v51',
    word: 'viewing',
    pronunciation: '/ˈvjuːɪŋ/',
    partOfSpeech: 'n',
    definition: 'buổi xem nhà',
    exampleSentence: 'We arranged a viewing for the apartment.',
    exampleTranslation: 'Chúng tôi đã sắp xếp một buổi xem căn hộ.',
    wrongOptions: ['buổi họp', 'bữa tiệc', 'kỳ nghỉ'],
  },
  {
    id: 'de25-v52',
    word: 'campsite',
    pronunciation: '/ˈkæmpsaɪt/',
    partOfSpeech: 'n',
    definition: 'khu cắm trại',
    exampleSentence: 'The campsite was near a beautiful lake.',
    exampleTranslation: 'Khu cắm trại ở gần một hồ nước đẹp.',
    wrongOptions: ['trung tâm thương mại', 'bãi biển', 'ga tàu'],
  },
  {
    id: 'de25-v53',
    word: 'surroundings',
    pronunciation: '/səˈraʊndɪŋz/',
    partOfSpeech: 'n',
    definition: 'khung cảnh xung quanh',
    exampleSentence: 'We enjoyed the peaceful surroundings.',
    exampleTranslation: 'Chúng tôi tận hưởng khung cảnh yên bình xung quanh.',
    wrongOptions: ['đồ ăn', 'thời tiết', 'âm nhạc'],
  },
  {
    id: 'de25-v54',
    word: 'breathtaking',
    pronunciation: '/ˈbreθteɪkɪŋ/',
    partOfSpeech: 'adj',
    definition: 'ngoạn mục',
    exampleSentence: 'The mountain view was breathtaking.',
    exampleTranslation: 'Khung cảnh núi non thật ngoạn mục.',
    wrongOptions: ['nhàm chán', 'tối tăm', 'ồn ào'],
  },
  {
    id: 'de25-v55',
    word: 'lush',
    pronunciation: '/lʌʃ/',
    partOfSpeech: 'adj',
    definition: 'xanh tươi',
    exampleSentence: 'The area is famous for its lush forests.',
    exampleTranslation: 'Khu vực này nổi tiếng với những cánh rừng xanh tươi.',
    wrongOptions: ['khô cằn', 'bụi bặm', 'đông đúc'],
  },
  {
    id: 'de25-v56',
    word: 'towering',
    pronunciation: '/ˈtaʊərɪŋ/',
    partOfSpeech: 'adj',
    definition: 'cao chót vót',
    exampleSentence: 'Towering mountains surrounded the village.',
    exampleTranslation: 'Những ngọn núi cao chót vót bao quanh ngôi làng.',
    wrongOptions: ['thấp bé', 'bằng phẳng', 'yếu ớt'],
  },
  {
    id: 'de25-v57',
    word: 'marshmallow',
    pronunciation: '/mɑːʃˈmæləʊ/',
    partOfSpeech: 'n',
    definition: 'kẹo dẻo marshmallow',
    exampleSentence: 'The children roasted marshmallows over the fire.',
    exampleTranslation: 'Bọn trẻ nướng kẹo marshmallow trên lửa.',
    wrongOptions: ['bánh mì', 'kẹo cao su', 'kem lạnh'],
  },
  {
    id: 'de25-v58',
    word: 'campfire',
    pronunciation: '/ˈkæmpfaɪə(r)/',
    partOfSpeech: 'n',
    definition: 'lửa trại',
    exampleSentence: 'We sang songs around the campfire.',
    exampleTranslation: 'Chúng tôi hát quanh đống lửa trại.',
    wrongOptions: ['đèn pin', 'bếp ga', 'máy phát điện'],
  },
  {
    id: 'de25-v59',
    word: 'atmosphere',
    pronunciation: '/ˈætməsfɪə(r)/',
    partOfSpeech: 'n',
    definition: 'bầu không khí',
    exampleSentence: 'The restaurant has a relaxing atmosphere.',
    exampleTranslation: 'Nhà hàng có bầu không khí thư giãn.',
    wrongOptions: ['mùi hương', 'nhiệt độ', 'âm thanh'],
  },
  {
    id: 'de25-v60',
    word: 'disconnect',
    pronunciation: '/ˌdɪskəˈnekt/',
    partOfSpeech: 'v',
    definition: 'tách khỏi',
    exampleSentence: 'Camping helps people disconnect from technology.',
    exampleTranslation: 'Cắm trại giúp mọi người tách khỏi công nghệ.',
    wrongOptions: ['kết nối', 'chia sẻ', 'khởi động'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de25-q21',
    questionNumber: 21,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMy father enjoys ______ newspapers in the morning.',
    options: ['read', 'to read', 'reading', 'reads'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bố tôi thích đọc báo vào buổi sáng."\n\n✅ **C. reading** — enjoy + V-ing.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 enjoy + gerund.',
  },
  {
    id: 'de25-q22',
    questionNumber: 22,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe students ______ when the teacher entered the classroom.',
    options: ['talk', 'talked', 'were talking', 'are talking'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Học sinh đang nói chuyện khi giáo viên bước vào lớp."\n\n✅ **C. were talking** — quá khứ tiếp diễn.\n\n💡 while/when + past continuous.',
  },
  {
    id: 'de25-q23',
    questionNumber: 23,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe is afraid ______ flying.',
    options: ['of', 'to', 'with', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy sợ bay."\n\n✅ **A. of** — afraid of + V-ing.\n\n💡 afraid of = sợ.',
  },
  {
    id: 'de25-q24',
    questionNumber: 24,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWe have lived in this city ______ ten years.',
    options: ['since', 'for', 'from', 'by'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Chúng tôi đã sống ở thành phố này 10 năm."\n\n✅ **B. for** — khoảng thời gian.\n\n💡 for + duration.',
  },
  {
    id: 'de25-q25',
    questionNumber: 25,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou ______ study harder if you want to pass the exam.',
    options: ['should', 'mustn’t', 'can’t', 'might not'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn nên học chăm hơn nếu muốn đỗ kỳ thi."\n\n✅ **A. should** — lời khuyên.\n\n💡 should = nên.',
  },
  {
    id: 'de25-q26',
    questionNumber: 26,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere are ______ apples in the basket.',
    options: ['much', 'many', 'a little', 'little'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Có nhiều quả táo trong giỏ."\n\n✅ **B. many** — danh từ đếm được số nhiều.\n\n💡 many + countable noun.',
  },
  {
    id: 'de25-q27',
    questionNumber: 27,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nI ______ my homework yet.',
    options: ['don’t finish', 'didn’t finish', 'haven’t finished', 'am not finishing'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Tôi vẫn chưa làm xong bài tập."\n\n✅ **C. haven’t finished** — hiện tại hoàn thành.\n\n💡 yet → present perfect.',
  },
  {
    id: 'de25-q28',
    questionNumber: 28,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe speaks English ______ than her brother.',
    options: ['good', 'well', 'better', 'best'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy nói tiếng Anh tốt hơn anh trai."\n\n✅ **C. better** — so sánh hơn của well/good.\n\n💡 comparative form.',
  },
  {
    id: 'de25-q29',
    questionNumber: 29,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe suggested ______ to the cinema.',
    options: ['go', 'going', 'to go', 'went'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh ấy gợi ý đi xem phim."\n\n✅ **B. going** — suggest + V-ing.\n\n💡 suggest + gerund.',
  },
  {
    id: 'de25-q30',
    questionNumber: 30,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nI was tired, ______ I went to bed early.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi mệt nên đi ngủ sớm."\n\n✅ **A. so** — kết quả.\n\n💡 so = therefore.',
  },

  {
    id: 'de25-q31',
    questionNumber: 31,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nusually / my / at / 6 a.m. / gets up / sister',
    options: [
      'My sister usually gets up at 6 a.m.',
      'Usually my sister gets up at 6 a.m.',
      'My sister gets usually up at 6 a.m.',
      'At 6 a.m. my sister usually gets up.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chị tôi thường dậy lúc 6 giờ sáng."\n\n💡 trạng từ tần suất đứng trước động từ chính.',
  },
  {
    id: 'de25-q32',
    questionNumber: 32,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nvery / this / is / book / interesting',
    options: [
      'This book is very interesting.',
      'This is book very interesting.',
      'Very this book is interesting.',
      'This is very book interesting.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cuốn sách này rất thú vị."\n\n💡 S + be + very + adj.',
  },
  {
    id: 'de25-q33',
    questionNumber: 33,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nnext week / are / they / going / travel / to Da Nang',
    options: [
      'They are going to travel to Da Nang next week.',
      'They going are to travel Da Nang next week.',
      'They are travel going to Da Nang next week.',
      'They will going to travel Da Nang next week.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Họ sẽ đi Đà Nẵng vào tuần tới."\n\n💡 be going to + V.',
  },
  {
    id: 'de25-q34',
    questionNumber: 34,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nwas / the / park / crowded / yesterday',
    options: [
      'The park was crowded yesterday.',
      'The crowded park was yesterday.',
      'Yesterday was the park crowded.',
      'The park crowded was yesterday.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Công viên hôm qua rất đông."\n\n💡 S + was + adj + time.',
  },
  {
    id: 'de25-q35',
    questionNumber: 35,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nhe / football / plays / every / Sunday',
    options: [
      'He plays football every Sunday.',
      'He football plays every Sunday.',
      'Every Sunday he football plays.',
      'He every Sunday plays football.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy chơi bóng đá mỗi Chủ nhật."\n\n💡 S + V + O + time.',
  },
  {
    id: 'de25-q36',
    questionNumber: 36,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nthis / the / most / hotel / is / expensive',
    options: [
      'This is the most expensive hotel.',
      'This hotel is the most expensive.',
      'The most expensive is this hotel.',
      'Is this the most expensive hotel.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đây là khách sạn đắt nhất."\n\n💡 superlative: the most + adj.',
  },
  {
    id: 'de25-q37',
    questionNumber: 37,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nmy / I / friends / met / yesterday',
    options: [
      'I met my friends yesterday.',
      'My friends I met yesterday.',
      'Yesterday I friends met my.',
      'I yesterday met friends my.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi đã gặp bạn tôi hôm qua."\n\n💡 S + V + O + time.',
  },
  {
    id: 'de25-q38',
    questionNumber: 38,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nbe / you / careful / should / more',
    options: [
      'You should be more careful.',
      'You be should more careful.',
      'Should you be more careful.',
      'You more should be careful.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn nên cẩn thận hơn."\n\n💡 should + be + adj.',
  },
  {
    id: 'de25-q39',
    questionNumber: 39,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nnot / she / likes / coffee',
    options: [
      'She does not like coffee.',
      'She not likes coffee.',
      'Not she likes coffee.',
      'She likes not coffee.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy không thích cà phê."\n\n💡 do/does + not + V.',
  },
  {
    id: 'de25-q40',
    questionNumber: 40,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\na / we / had / great / time',
    options: [
      'We had a great time.',
      'We a great time had.',
      'Had we a great time.',
      'We great a time had.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi đã có khoảng thời gian tuyệt vời."\n\n💡 S + V + O.',
  },
]
};

export default deMau11;
