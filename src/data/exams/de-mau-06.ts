
import { Exam } from '@/types';

const deMau06: Exam = {
  id: 'de-mau-06',
  title: 'Đề Mẫu Số 6',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 23',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de23-v01',
    word: 'angry',
    pronunciation: '/ˈæŋɡri/',
    partOfSpeech: 'adj',
    definition: 'tức giận',
    exampleSentence: 'She was angry because she lost her phone.',
    exampleTranslation: 'Cô ấy tức giận vì làm mất điện thoại.',
    wrongOptions: ['vui vẻ', 'hào hứng', 'thư giãn'],
  },
  {
    id: 'de23-v02',
    word: 'educate',
    pronunciation: '/ˈedʒukeɪt/',
    partOfSpeech: 'v',
    definition: 'giáo dục',
    exampleSentence: 'Teachers educate students at school.',
    exampleTranslation: 'Giáo viên giáo dục học sinh ở trường.',
    wrongOptions: ['trừng phạt', 'giải trí', 'phỏng vấn'],
  },
  {
    id: 'de23-v03',
    word: 'stranger',
    pronunciation: '/ˈstreɪndʒə(r)/',
    partOfSpeech: 'n',
    definition: 'người lạ',
    exampleSentence: 'Do not talk to strangers at night.',
    exampleTranslation: 'Đừng nói chuyện với người lạ vào ban đêm.',
    wrongOptions: ['bạn thân', 'hàng xóm', 'thầy giáo'],
  },
  {
    id: 'de23-v04',
    word: 'dangerous',
    pronunciation: '/ˈdeɪndʒərəs/',
    partOfSpeech: 'adj',
    definition: 'nguy hiểm',
    exampleSentence: 'It is dangerous to swim during a storm.',
    exampleTranslation: 'Bơi trong cơn bão rất nguy hiểm.',
    wrongOptions: ['an toàn', 'thú vị', 'thoải mái'],
  },
  {
    id: 'de23-v05',
    word: 'garage',
    pronunciation: '/ˈɡærɑːʒ/',
    partOfSpeech: 'n',
    definition: 'ga-ra',
    exampleSentence: 'My father parks his car in the garage.',
    exampleTranslation: 'Bố tôi đỗ xe trong ga-ra.',
    wrongOptions: ['nhà bếp', 'siêu thị', 'phòng ngủ'],
  },
  {
    id: 'de23-v06',
    word: 'passenger',
    pronunciation: '/ˈpæsɪndʒə(r)/',
    partOfSpeech: 'n',
    definition: 'hành khách',
    exampleSentence: 'The passengers waited for the train.',
    exampleTranslation: 'Các hành khách chờ tàu.',
    wrongOptions: ['phi công', 'tài xế', 'cảnh sát'],
  },
  {
    id: 'de23-v07',
    word: 'provide',
    pronunciation: '/prəˈvaɪd/',
    partOfSpeech: 'v',
    definition: 'cung cấp',
    exampleSentence: 'The hotel provides free breakfast.',
    exampleTranslation: 'Khách sạn cung cấp bữa sáng miễn phí.',
    wrongOptions: ['phá hủy', 'đánh cắp', 'bỏ qua'],
  },
  {
    id: 'de23-v08',
    word: 'pursue',
    pronunciation: '/pəˈsjuː/',
    partOfSpeech: 'v',
    definition: 'theo đuổi',
    exampleSentence: 'She wants to pursue her dream career.',
    exampleTranslation: 'Cô ấy muốn theo đuổi nghề nghiệp mơ ước.',
    wrongOptions: ['từ bỏ', 'che giấu', 'trì hoãn'],
  },
  {
    id: 'de23-v09',
    word: 'succeed',
    pronunciation: '/səkˈsiːd/',
    partOfSpeech: 'v',
    definition: 'thành công',
    exampleSentence: 'If you work hard, you will succeed.',
    exampleTranslation: 'Nếu bạn chăm chỉ, bạn sẽ thành công.',
    wrongOptions: ['thất bại', 'bỏ cuộc', 'trốn tránh'],
  },
  {
    id: 'de23-v10',
    word: 'broaden',
    pronunciation: '/ˈbrɔːdn/',
    partOfSpeech: 'v',
    definition: 'mở rộng',
    exampleSentence: 'Traveling helps broaden your knowledge.',
    exampleTranslation: 'Du lịch giúp mở rộng kiến thức của bạn.',
    wrongOptions: ['thu hẹp', 'xóa bỏ', 'làm giảm'],
  },
  {
    id: 'de23-v11',
    word: 'essential',
    pronunciation: '/ɪˈsenʃl/',
    partOfSpeech: 'adj',
    definition: 'thiết yếu',
    exampleSentence: 'Water is essential for life.',
    exampleTranslation: 'Nước rất thiết yếu cho sự sống.',
    wrongOptions: ['không cần thiết', 'nguy hiểm', 'xa xỉ'],
  },
  {
    id: 'de23-v12',
    word: 'digital',
    pronunciation: '/ˈdɪdʒɪtl/',
    partOfSpeech: 'adj',
    definition: 'kỹ thuật số',
    exampleSentence: 'Most students use digital devices today.',
    exampleTranslation: 'Hầu hết học sinh ngày nay dùng thiết bị kỹ thuật số.',
    wrongOptions: ['thủ công', 'cổ điển', 'truyền thống'],
  },
  {
    id: 'de23-v13',
    word: 'generous',
    pronunciation: '/ˈdʒenərəs/',
    partOfSpeech: 'adj',
    definition: 'hào phóng',
    exampleSentence: 'He is generous to poor children.',
    exampleTranslation: 'Anh ấy hào phóng với trẻ em nghèo.',
    wrongOptions: ['ích kỷ', 'keo kiệt', 'lười biếng'],
  },
  {
    id: 'de23-v14',
    word: 'talented',
    pronunciation: '/ˈtæləntɪd/',
    partOfSpeech: 'adj',
    definition: 'tài năng',
    exampleSentence: 'She is a talented musician.',
    exampleTranslation: 'Cô ấy là một nhạc sĩ tài năng.',
    wrongOptions: ['vụng về', 'nhút nhát', 'chậm chạp'],
  },
  {
    id: 'de23-v15',
    word: 'regulation',
    pronunciation: '/ˌreɡjuˈleɪʃn/',
    partOfSpeech: 'n',
    definition: 'quy định',
    exampleSentence: 'Students must follow school regulations.',
    exampleTranslation: 'Học sinh phải tuân theo quy định của trường.',
    wrongOptions: ['lời khuyên', 'kế hoạch', 'thử thách'],
  },
  {
    id: 'de23-v16',
    word: 'hard-working',
    pronunciation: '/ˌhɑːd ˈwɜːkɪŋ/',
    partOfSpeech: 'adj',
    definition: 'chăm chỉ',
    exampleSentence: 'Lan is a hard-working student.',
    exampleTranslation: 'Lan là một học sinh chăm chỉ.',
    wrongOptions: ['lười biếng', 'ồn ào', 'nóng tính'],
  },
  {
    id: 'de23-v17',
    word: 'handicraft',
    pronunciation: '/ˈhændikrɑːft/',
    partOfSpeech: 'n',
    definition: 'đồ thủ công',
    exampleSentence: 'Tourists bought many handicrafts in the village.',
    exampleTranslation: 'Khách du lịch đã mua nhiều đồ thủ công ở ngôi làng.',
    wrongOptions: ['thiết bị điện tử', 'đồ thể thao', 'đồ nội thất'],
  },
  {
    id: 'de23-v18',
    word: 'polluted',
    pronunciation: '/pəˈluːtɪd/',
    partOfSpeech: 'adj',
    definition: 'ô nhiễm',
    exampleSentence: 'The river is heavily polluted.',
    exampleTranslation: 'Con sông bị ô nhiễm nặng.',
    wrongOptions: ['trong lành', 'yên tĩnh', 'rộng lớn'],
  },
  {
    id: 'de23-v19',
    word: 'crowded',
    pronunciation: '/ˈkraʊdɪd/',
    partOfSpeech: 'adj',
    definition: 'đông đúc',
    exampleSentence: 'The market was crowded on Sunday.',
    exampleTranslation: 'Khu chợ rất đông đúc vào Chủ nhật.',
    wrongOptions: ['vắng vẻ', 'sạch sẽ', 'hiện đại'],
  },
  {
    id: 'de23-v20',
    word: 'habitat',
    pronunciation: '/ˈhæbɪtæt/',
    partOfSpeech: 'n',
    definition: 'môi trường sống',
    exampleSentence: 'Forests are natural habitats for many animals.',
    exampleTranslation: 'Rừng là môi trường sống tự nhiên của nhiều loài động vật.',
    wrongOptions: ['khu mua sắm', 'sân chơi trẻ em', 'trạm xe lửa'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de23-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThey _____ dinner when the lights suddenly went out.',
    options: ['have', 'were having', 'had', 'are having'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Họ đang ăn tối thì đèn đột nhiên tắt."\n\n✅ **B. were having** — hành động đang diễn ra trong quá khứ thì có hành động khác xen vào.\n\n❌ **A/C/D** — sai thì.\n\n💡 Past continuous + past simple.',
  },

  {
    id: 'de23-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe has studied English _____ five years.',
    options: ['since', 'for', 'from', 'at'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy đã học tiếng Anh được 5 năm."\n\n✅ **B. for** — dùng với khoảng thời gian.\n\n❌ **A. since** — dùng với mốc thời gian.\n❌ **C/D** — sai ngữ pháp.\n\n💡 for + period of time.',
  },

  {
    id: 'de23-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nStudents _____ wear uniforms at this school.',
    options: ['must', 'mustn’t', 'could', 'might'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Học sinh phải mặc đồng phục ở trường này."\n\n✅ **A. must** — diễn tả sự bắt buộc.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 must = phải.',
  },

  {
    id: 'de23-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct form:\nThe baby smiled _____ at her mother.',
    options: ['happy', 'happily', 'happiness', 'unhappy'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Em bé mỉm cười vui vẻ với mẹ."\n\n✅ **B. happily** — cần trạng từ để bổ nghĩa cho động từ "smiled".\n\n❌ **A/C/D** — sai từ loại.\n\n💡 Verb + adverb.',
  },

  {
    id: 'de23-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nIt was generous _____ him to donate money to the poor.',
    options: ['for', 'with', 'of', 'to'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy thật hào phóng khi quyên góp tiền cho người nghèo."\n\n✅ **C. of** — cấu trúc: It is + adjective + of someone + to V.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 It’s kind/generous of someone to do something.',
  },

  {
    id: 'de23-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct comparative form:\nMai is _____ student in my class.',
    options: ['hard-working', 'more hard-working', 'the most hard-working', 'as hard-working'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Mai là học sinh chăm chỉ nhất lớp tôi."\n\n✅ **C. the most hard-working** — so sánh nhất.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 the most + adjective.',
  },

  {
    id: 'de23-q07',
    questionNumber: 7,
    type: 'vocabulary',
    questionText:
      'Choose the correct word:\nTourists often buy local _____ as souvenirs.',
    options: ['handicrafts', 'drivers', 'passengers', 'villages'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Khách du lịch thường mua đồ thủ công địa phương làm quà lưu niệm."\n\n✅ **A. handicrafts** — đồ thủ công.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 handicrafts = handmade products.',
  },

  {
    id: 'de23-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the best response:\n"Your presentation was excellent!"',
    options: [
      'Thanks a lot.',
      'No, I don’t.',
      'That’s impossible.',
      'Never mind.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bài thuyết trình của bạn thật xuất sắc!"\n\n✅ **A. Thanks a lot.** — đáp lại lời khen phù hợp.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 Compliment → Thank you.',
  },

  {
    id: 'de23-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe city is crowded, _____ many tourists still visit it every year.',
    options: ['because', 'but', 'so', 'although'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Thành phố đông đúc nhưng nhiều khách du lịch vẫn ghé thăm mỗi năm."\n\n✅ **B. but** — diễn tả sự tương phản.\n\n❌ **A/C/D** — không phù hợp logic.\n\n💡 but = nhưng.',
  },

  {
    id: 'de23-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct quantifier:\nThere are _____ interesting places to visit in Bangkok.',
    options: ['much', 'a little', 'plenty of', 'any'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Có rất nhiều nơi thú vị để tham quan ở Bangkok."\n\n✅ **C. plenty of** — dùng với danh từ số nhiều.\n\n❌ **A/B/D** — không phù hợp.\n\n💡 plenty of = rất nhiều.',
  },

  {
    id: 'de23-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct verb form:\nMy father enjoys _____ coffee every morning.',
    options: ['drink', 'drinks', 'drinking', 'to drinking'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bố tôi thích uống cà phê mỗi sáng."\n\n✅ **C. drinking** — sau "enjoy" dùng V-ing.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de23-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nJapan is one of _____ leading countries in robot technology.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nhật Bản là một trong những quốc gia hàng đầu về công nghệ robot."\n\n✅ **C. the** — dùng với so sánh nhất: the leading countries.\n\n❌ **A/B/D** — sai ngữ pháp.\n\n💡 the + superlative.',
  },

  {
    id: 'de23-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nEnglish _____ in many countries.',
    options: ['speak', 'is spoken', 'speaks', 'spoken'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói ở nhiều quốc gia."\n\n✅ **B. is spoken** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 Passive: is/am/are + V3.',
  },

  {
    id: 'de23-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct sentence:\nHe wishes he _____ French well.',
    options: ['can speak', 'could speak', 'spoke', 'will speak'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh ấy ước mình có thể nói tiếng Pháp giỏi."\n\n✅ **B. could speak** — wish ở hiện tại → quá khứ đơn/could.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 wish + past simple/could.',
  },

  {
    id: 'de23-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe road was blocked, _____ we arrived late.',
    options: ['because', 'although', 'so', 'unless'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Con đường bị chặn nên chúng tôi đến muộn."\n\n✅ **C. so** — diễn tả kết quả.\n\n❌ **A/B/D** — không phù hợp.\n\n💡 so = vì vậy.',
  },

  {
    id: 'de23-q16',
    questionNumber: 16,
    type: 'vocabulary',
    questionText:
      'Choose the word closest in meaning to "stress".',
    options: ['pressure', 'calmness', 'comfort', 'pleasure'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ gần nghĩa với stress."\n\n✅ **A. pressure** — stress = áp lực/căng thẳng.\n\n❌ **B/C/D** — trái hoặc sai nghĩa.\n\n💡 stress = pressure.',
  },

  {
    id: 'de23-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nplaying / children / the park / are / in / the',
    options: [
      'The children are playing in the park.',
      'Children the are playing in the park.',
      'Are the children playing in the park.',
      'The children playing are in the park.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Những đứa trẻ đang chơi trong công viên."\n\n✅ **A. The children are playing in the park.** — đúng trật tự từ.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 Subject + be + V-ing.',
  },

  {
    id: 'de23-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nbecause / stayed / it / raining / home / we / was',
    options: [
      'We stayed home because it was raining.',
      'Because it raining was we stayed home.',
      'We because stayed home it was raining.',
      'Stayed we home because it was raining.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Chúng tôi ở nhà vì trời đang mưa."\n\n✅ **A. We stayed home because it was raining.** — đúng cấu trúc.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 because + clause.',
  },

  {
    id: 'de23-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"How long have you lived here?"',
    options: [
      'For ten years.',
      'In a big house.',
      'Last summer.',
      'With my parents.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn đã sống ở đây bao lâu rồi?"\n\n✅ **A. For ten years.** — trả lời khoảng thời gian.\n\n❌ **B/C/D** — không trả lời đúng trọng tâm.\n\n💡 How long → for/since.',
  },

  {
    id: 'de23-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe villagers live a peaceful and _____ life.',
    options: ['comfort', 'comfortable', 'comfortably', 'uncomfortable'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Người dân làng sống một cuộc sống yên bình và thoải mái."\n\n✅ **B. comfortable** — tính từ bổ nghĩa cho "life".\n\n❌ **A/C/D** — sai từ loại hoặc sai nghĩa.\n\n💡 adjective + noun.',
  },
]
};

export default deMau06;
