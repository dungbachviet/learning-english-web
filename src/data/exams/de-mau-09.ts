
import { Exam } from '@/types';

const deMau09: Exam = {
  id: 'de-mau-09',
  title: 'Đề Mẫu Số 9',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 24',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de24-v21',
    word: 'kidney',
    pronunciation: '/ˈkɪdni/',
    partOfSpeech: 'n',
    definition: 'thận',
    exampleSentence: 'Drinking enough water is good for your kidneys.',
    exampleTranslation: 'Uống đủ nước tốt cho thận của bạn.',
    wrongOptions: ['lá phổi', 'dạ dày', 'bộ não'],
  },
  {
    id: 'de24-v22',
    word: 'digestion',
    pronunciation: '/daɪˈdʒestʃən/',
    partOfSpeech: 'n',
    definition: 'sự tiêu hóa',
    exampleSentence: 'Warm water helps improve digestion.',
    exampleTranslation: 'Nước ấm giúp cải thiện tiêu hóa.',
    wrongOptions: ['hô hấp', 'tuần hoàn máu', 'thị lực'],
  },
  {
    id: 'de24-v23',
    word: 'intestine',
    pronunciation: '/ɪnˈtestɪn/',
    partOfSpeech: 'n',
    definition: 'ruột',
    exampleSentence: 'The intestines help absorb nutrients from food.',
    exampleTranslation: 'Ruột giúp hấp thụ chất dinh dưỡng từ thức ăn.',
    wrongOptions: ['xương sống', 'lá gan', 'tim'],
  },
  {
    id: 'de24-v24',
    word: 'nutrient',
    pronunciation: '/ˈnjuːtriənt/',
    partOfSpeech: 'n',
    definition: 'chất dinh dưỡng',
    exampleSentence: 'Vegetables contain many important nutrients.',
    exampleTranslation: 'Rau củ chứa nhiều chất dinh dưỡng quan trọng.',
    wrongOptions: ['vi khuẩn', 'hóa chất độc', 'gia vị'],
  },
  {
    id: 'de24-v25',
    word: 'millilitre',
    pronunciation: '/ˈmɪlɪliːtə(r)/',
    partOfSpeech: 'n',
    definition: 'mililit',
    exampleSentence: 'You should drink 1600 millilitres of water daily.',
    exampleTranslation: 'Bạn nên uống 1600 mililit nước mỗi ngày.',
    wrongOptions: ['kilôgam', 'mét vuông', 'độ C'],
  },
  {
    id: 'de24-v26',
    word: 'eliminate',
    pronunciation: '/ɪˈlɪmɪneɪt/',
    partOfSpeech: 'v',
    definition: 'loại bỏ',
    exampleSentence: 'The body eliminates waste through the kidneys.',
    exampleTranslation: 'Cơ thể loại bỏ chất thải qua thận.',
    wrongOptions: ['giữ lại', 'thu thập', 'trang trí'],
  },
  {
    id: 'de24-v27',
    word: 'dilute',
    pronunciation: '/daɪˈluːt/',
    partOfSpeech: 'v',
    definition: 'pha loãng',
    exampleSentence: 'Too much water may dilute stomach juices.',
    exampleTranslation: 'Quá nhiều nước có thể làm loãng dịch dạ dày.',
    wrongOptions: ['đun sôi', 'đóng băng', 'làm nóng'],
  },
  {
    id: 'de24-v28',
    word: 'interfere',
    pronunciation: '/ˌɪntəˈfɪə(r)/',
    partOfSpeech: 'v',
    definition: 'cản trở',
    exampleSentence: 'Noise can interfere with your concentration.',
    exampleTranslation: 'Tiếng ồn có thể cản trở sự tập trung của bạn.',
    wrongOptions: ['hỗ trợ', 'khuyến khích', 'thúc đẩy'],
  },
  {
    id: 'de24-v29',
    word: 'peaceful',
    pronunciation: '/ˈpiːsfl/',
    partOfSpeech: 'adj',
    definition: 'yên bình',
    exampleSentence: 'They live in a peaceful countryside village.',
    exampleTranslation: 'Họ sống trong một ngôi làng quê yên bình.',
    wrongOptions: ['ồn ào', 'nguy hiểm', 'đông đúc'],
  },
  {
    id: 'de24-v30',
    word: 'leisure activity',
    pronunciation: '/ˈleʒə(r) ækˈtɪvəti/',
    partOfSpeech: 'n phrase',
    definition: 'hoạt động giải trí',
    exampleSentence: 'Reading books is my favourite leisure activity.',
    exampleTranslation: 'Đọc sách là hoạt động giải trí yêu thích của tôi.',
    wrongOptions: ['công việc nhà', 'bài kiểm tra', 'buổi họp lớp'],
  },
  {
    id: 'de24-v31',
    word: 'connect',
    pronunciation: '/kəˈnekt/',
    partOfSpeech: 'v',
    definition: 'gắn kết',
    exampleSentence: 'Traveling together helps families connect.',
    exampleTranslation: 'Đi du lịch cùng nhau giúp gia đình gắn kết.',
    wrongOptions: ['tranh cãi', 'xa lánh', 'phớt lờ'],
  },
  {
    id: 'de24-v32',
    word: 'nearby',
    pronunciation: '/ˌnɪəˈbaɪ/',
    partOfSpeech: 'adj',
    definition: 'gần đó',
    exampleSentence: 'We visited some nearby villages by bike.',
    exampleTranslation: 'Chúng tôi đã ghé thăm vài ngôi làng gần đó bằng xe đạp.',
    wrongOptions: ['xa xôi', 'nước ngoài', 'hiện đại'],
  },
  {
    id: 'de24-v33',
    word: 'recipe',
    pronunciation: '/ˈresəpi/',
    partOfSpeech: 'n',
    definition: 'công thức nấu ăn',
    exampleSentence: 'My brother found a recipe online.',
    exampleTranslation: 'Anh trai tôi tìm được một công thức nấu ăn trên mạng.',
    wrongOptions: ['bài thơ', 'quyển truyện', 'bản đồ du lịch'],
  },
  {
    id: 'de24-v34',
    word: 'ingredient',
    pronunciation: '/ɪnˈɡriːdiənt/',
    partOfSpeech: 'n',
    definition: 'nguyên liệu',
    exampleSentence: 'We bought fresh ingredients for dinner.',
    exampleTranslation: 'Chúng tôi mua nguyên liệu tươi cho bữa tối.',
    wrongOptions: ['đồ nội thất', 'quần áo', 'dụng cụ học tập'],
  },
  {
    id: 'de24-v35',
    word: 'DIY project',
    pronunciation: '/ˌdiː aɪ ˈwaɪ ˈprɒdʒekt/',
    partOfSpeech: 'n phrase',
    definition: 'dự án tự làm',
    exampleSentence: 'She enjoys doing DIY projects at home.',
    exampleTranslation: 'Cô ấy thích làm các dự án tự làm tại nhà.',
    wrongOptions: ['trò chơi điện tử', 'buổi hòa nhạc', 'bài tập toán'],
  },
  {
    id: 'de24-v36',
    word: 'costume',
    pronunciation: '/ˈkɒstjuːm/',
    partOfSpeech: 'n',
    definition: 'trang phục hóa trang',
    exampleSentence: 'He wore a pirate costume at the festival.',
    exampleTranslation: 'Anh ấy mặc trang phục cướp biển tại lễ hội.',
    wrongOptions: ['đồng hồ đeo tay', 'đôi giày thể thao', 'cặp sách'],
  },
  {
    id: 'de24-v37',
    word: 'contest',
    pronunciation: '/ˈkɒntest/',
    partOfSpeech: 'n',
    definition: 'cuộc thi',
    exampleSentence: 'She won first prize in the singing contest.',
    exampleTranslation: 'Cô ấy giành giải nhất trong cuộc thi hát.',
    wrongOptions: ['buổi dã ngoại', 'cuộc họp', 'trận đấu giao hữu'],
  },
  {
    id: 'de24-v38',
    word: 'adapt',
    pronunciation: '/əˈdæpt/',
    partOfSpeech: 'v',
    definition: 'thích nghi',
    exampleSentence: 'Students need time to adapt to a new school.',
    exampleTranslation: 'Học sinh cần thời gian để thích nghi với trường mới.',
    wrongOptions: ['từ chối', 'phàn nàn', 'trốn tránh'],
  },
  {
    id: 'de24-v39',
    word: 'challenging',
    pronunciation: '/ˈtʃælɪndʒɪŋ/',
    partOfSpeech: 'adj',
    definition: 'đầy thử thách',
    exampleSentence: 'Learning a new language can be challenging.',
    exampleTranslation: 'Học một ngôn ngữ mới có thể đầy thử thách.',
    wrongOptions: ['dễ dàng', 'nhàm chán', 'vô nghĩa'],
  },
  {
    id: 'de24-v40',
    word: 'opportunity',
    pronunciation: '/ˌɒpəˈtjuːnəti/',
    partOfSpeech: 'n',
    definition: 'cơ hội',
    exampleSentence: 'The internship gave me a great opportunity to learn.',
    exampleTranslation: 'Kỳ thực tập cho tôi một cơ hội tuyệt vời để học hỏi.',
    wrongOptions: ['tai nạn', 'nguy cơ', 'bí mật'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de24b-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe children laughed happily _____ the funny story.',
    options: ['because', 'because of', 'although', 'despite'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bọn trẻ cười vui vẻ vì câu chuyện hài hước."\n\n✅ **B. because of** — theo sau cụm danh từ.\n\n❌ **A/C/D** — sai cấu trúc hoặc nghĩa.\n\n💡 because of + noun phrase.',
  },

  {
    id: 'de24b-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nPlease _____ your shoes before entering the house.',
    options: ['put on', 'take off', 'turn on', 'look for'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Vui lòng cởi giày trước khi vào nhà."\n\n✅ **B. take off** — cởi ra.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 take off = cởi bỏ.',
  },

  {
    id: 'de24b-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nIf they _____ enough money, they will travel abroad.',
    options: ['save', 'saved', 'will save', 'would save'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu họ tiết kiệm đủ tiền, họ sẽ đi du lịch nước ngoài."\n\n✅ **A. save** — câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de24b-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nI felt very _____ after hearing the good news.',
    options: ['exciting', 'excited', 'excite', 'excitement'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tôi cảm thấy rất phấn khích sau khi nghe tin tốt."\n\n✅ **B. excited** — mô tả cảm xúc con người.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 excited = cảm thấy phấn khích.',
  },

  {
    id: 'de24b-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe picture is hanging _____ the wall.',
    options: ['in', 'on', 'at', 'under'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bức tranh đang treo trên tường."\n\n✅ **B. on** — dùng với bề mặt.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 on the wall.',
  },

  {
    id: 'de24b-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe studies very hard _____ she wants to pass the exam.',
    options: ['so', 'because', 'although', 'but'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy học rất chăm vì muốn đỗ kỳ thi."\n\n✅ **B. because** — diễn tả nguyên nhân.\n\n❌ **A/C/D** — không phù hợp logic.\n\n💡 because + clause.',
  },

  {
    id: 'de24b-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou _____ smoke in the hospital.',
    options: ['must', 'mustn’t', 'should', 'can'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn không được hút thuốc trong bệnh viện."\n\n✅ **B. mustn’t** — cấm làm gì.\n\n❌ **A/C/D** — không đúng nghĩa.\n\n💡 mustn’t = không được phép.',
  },

  {
    id: 'de24b-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nThe students listened _____ to the teacher.',
    options: ['careful', 'carefully', 'care', 'careless'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Các học sinh lắng nghe giáo viên một cách cẩn thận."\n\n✅ **B. carefully** — trạng từ bổ nghĩa cho động từ.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 Verb + adverb.',
  },

  {
    id: 'de24b-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe weather was cold, _____ we still went camping.',
    options: ['because', 'so', 'but', 'therefore'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Thời tiết lạnh nhưng chúng tôi vẫn đi cắm trại."\n\n✅ **C. but** — diễn tả sự tương phản.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 but = nhưng.',
  },

  {
    id: 'de24b-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe soup is _____ hot for the children to eat.',
    options: ['enough', 'too', 'so', 'such'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Món súp quá nóng để bọn trẻ ăn."\n\n✅ **B. too** — too + adjective + to V.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 too + adj + to infinitive.',
  },

  {
    id: 'de24b-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nMy mother _____ dinner when the lights went out.',
    options: ['cooked', 'was cooking', 'has cooked', 'cooks'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Mẹ tôi đang nấu bữa tối thì điện tắt."\n\n✅ **B. was cooking** — hành động đang diễn ra trong quá khứ.\n\n❌ **A/C/D** — sai thì.\n\n💡 past continuous.',
  },

  {
    id: 'de24b-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nHe adopted _____ orphaned dog from the shelter.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh ấy nhận nuôi một chú chó mồ côi từ trạm cứu hộ."\n\n✅ **B. an** — orphaned bắt đầu bằng nguyên âm.\n\n❌ **A/C/D** — sai cách dùng.\n\n💡 an + vowel sound.',
  },

  {
    id: 'de24b-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMy friends suggested _____ to the beach this weekend.',
    options: ['go', 'going', 'to go', 'went'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn tôi gợi ý đi biển cuối tuần này."\n\n✅ **B. going** — suggest + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 suggest + V-ing.',
  },

  {
    id: 'de24b-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe is afraid _____ spiders.',
    options: ['with', 'of', 'from', 'about'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy sợ nhện."\n\n✅ **B. of** — afraid of something.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 afraid of = sợ.',
  },

  {
    id: 'de24b-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nThe classroom _____ every afternoon.',
    options: ['cleans', 'is cleaned', 'cleaned', 'is cleaning'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Lớp học được dọn dẹp mỗi buổi chiều."\n\n✅ **B. is cleaned** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 is/am/are + V3.',
  },

  {
    id: 'de24b-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"How about going out for dinner tonight?"',
    options: [
      'That sounds great.',
      'I don’t think so.',
      'No, I didn’t.',
      'It was delicious.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tối nay đi ăn ngoài nhé?"\n\n✅ **A. That sounds great.** — phản hồi phù hợp cho lời đề nghị.\n\n❌ **B/C/D** — không hợp ngữ cảnh.\n\n💡 How about...? → lời đề nghị.',
  },

  {
    id: 'de24b-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nusually / to school / by bike / goes / my brother',
    options: [
      'My brother usually goes to school by bike.',
      'Usually my brother goes to school by bike.',
      'My brother goes usually to school by bike.',
      'By bike my brother usually goes to school.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Anh trai tôi thường đi học bằng xe đạp."\n\n✅ **A. My brother usually goes to school by bike.** — đúng trật tự từ.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 adverb of frequency đứng trước động từ thường.',
  },

  {
    id: 'de24b-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nso / the road / slippery / was / that / he fell down',
    options: [
      'The road was so slippery that he fell down.',
      'So slippery the road was that he fell down.',
      'The road so was slippery that he fell down.',
      'He fell down that the road was so slippery.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Con đường trơn đến mức anh ấy bị ngã."\n\n✅ **A. The road was so slippery that he fell down.** — đúng cấu trúc.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 so + adjective + that.',
  },

  {
    id: 'de24b-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWould you like _____ some coffee?',
    options: ['drink', 'drinking', 'to drink', 'drank'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bạn có muốn uống cà phê không?"\n\n✅ **C. to drink** — would like + to V.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 would like + to infinitive.',
  },

  {
    id: 'de24b-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nHe felt sick, _____ he went to see a doctor.',
    options: ['although', 'but', 'so', 'because'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy cảm thấy mệt nên đi khám bác sĩ."\n\n✅ **C. so** — diễn tả kết quả.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 so = vì vậy.',
  },
]
};

export default deMau09;
