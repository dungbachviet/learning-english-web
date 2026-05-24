
import { Exam } from '@/types';

const deMau15: Exam = {
  id: 'de-mau-15',
  title: 'Đề Mẫu Số 15',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề dự đoán 01',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-v26',
    word: 'covered',
    pronunciation: '/ˈkʌvəd/',
    partOfSpeech: 'adj',
    definition: 'được che phủ',
    exampleSentence: 'Visitors should wear covered shoes in the forest.',
    exampleTranslation: 'Du khách nên mang giày kín trong rừng.',
    wrongOptions: ['mở rộng', 'trong suốt', 'ẩm ướt'],
  },
  {
    id: 'de25-v27',
    word: 'sharp',
    pronunciation: '/ʃɑːp/',
    partOfSpeech: 'adj',
    definition: 'sắc nhọn',
    exampleSentence: 'Be careful with the sharp knife.',
    exampleTranslation: 'Hãy cẩn thận với con dao sắc.',
    wrongOptions: ['cùn', 'mềm', 'nặng'],
  },
  {
    id: 'de25-v28',
    word: 'spine',
    pronunciation: '/spaɪn/',
    partOfSpeech: 'n',
    definition: 'gai nhọn',
    exampleSentence: 'Some sea animals have sharp spines.',
    exampleTranslation: 'Một số động vật biển có gai nhọn.',
    wrongOptions: ['cánh', 'đuôi', 'vảy'],
  },
  {
    id: 'de25-v29',
    word: 'injury',
    pronunciation: '/ˈɪndʒəri/',
    partOfSpeech: 'n',
    definition: 'vết thương',
    exampleSentence: 'He had a serious injury after the accident.',
    exampleTranslation: 'Anh ấy bị thương nặng sau tai nạn.',
    wrongOptions: ['niềm vui', 'bệnh cúm', 'kỳ nghỉ'],
  },
  {
    id: 'de25-v30',
    word: 'handling',
    pronunciation: '/ˈhændlɪŋ/',
    partOfSpeech: 'n',
    definition: 'việc xử lý',
    exampleSentence: 'Handling wild animals can be dangerous.',
    exampleTranslation: 'Việc xử lý động vật hoang dã có thể nguy hiểm.',
    wrongOptions: ['trồng cây', 'nấu ăn', 'du lịch'],
  },
  {
    id: 'de25-v31',
    word: 'unfamiliar',
    pronunciation: '/ˌʌnfəˈmɪliə(r)/',
    partOfSpeech: 'adj',
    definition: 'không quen thuộc',
    exampleSentence: 'I felt nervous in the unfamiliar place.',
    exampleTranslation: 'Tôi cảm thấy lo lắng ở nơi không quen thuộc.',
    wrongOptions: ['quen thuộc', 'an toàn', 'hiện đại'],
  },
  {
    id: 'de25-v32',
    word: 'marine',
    pronunciation: '/məˈriːn/',
    partOfSpeech: 'adj',
    definition: 'thuộc về biển',
    exampleSentence: 'Plastic waste harms marine animals.',
    exampleTranslation: 'Rác thải nhựa gây hại cho động vật biển.',
    wrongOptions: ['thuộc rừng', 'thuộc núi', 'thuộc sa mạc'],
  },
  {
    id: 'de25-v33',
    word: 'habitat',
    pronunciation: '/ˈhæbɪtæt/',
    partOfSpeech: 'n',
    definition: 'môi trường sống',
    exampleSentence: 'Forests are the natural habitat of many animals.',
    exampleTranslation: 'Rừng là môi trường sống tự nhiên của nhiều loài động vật.',
    wrongOptions: ['thức ăn', 'hang động', 'khu vui chơi'],
  },
  {
    id: 'de25-v34',
    word: 'survive',
    pronunciation: '/səˈvaɪv/',
    partOfSpeech: 'v',
    definition: 'sống sót',
    exampleSentence: 'Some animals cannot survive in polluted water.',
    exampleTranslation: 'Một số loài động vật không thể sống sót trong nước ô nhiễm.',
    wrongOptions: ['phát triển', 'biến mất', 'di chuyển'],
  },
  {
    id: 'de25-v35',
    word: 'pedestrian',
    pronunciation: '/pəˈdestriən/',
    partOfSpeech: 'n',
    definition: 'người đi bộ',
    exampleSentence: 'Drivers should be careful of pedestrians.',
    exampleTranslation: 'Người lái xe nên cẩn thận với người đi bộ.',
    wrongOptions: ['người đi xe đạp', 'cảnh sát', 'hành khách'],
  },
  {
    id: 'de25-v36',
    word: 'potential',
    pronunciation: '/pəˈtenʃl/',
    partOfSpeech: 'adj',
    definition: 'tiềm năng',
    exampleSentence: 'This plan has potential benefits.',
    exampleTranslation: 'Kế hoạch này có những lợi ích tiềm năng.',
    wrongOptions: ['nguy hiểm', 'không cần thiết', 'đắt đỏ'],
  },
  {
    id: 'de25-v37',
    word: 'accident',
    pronunciation: '/ˈæksɪdənt/',
    partOfSpeech: 'n',
    definition: 'tai nạn',
    exampleSentence: 'The accident caused heavy traffic.',
    exampleTranslation: 'Tai nạn gây tắc nghẽn giao thông nghiêm trọng.',
    wrongOptions: ['bữa tiệc', 'trò chơi', 'cuộc họp'],
  },
  {
    id: 'de25-v38',
    word: 'sidewalk',
    pronunciation: '/ˈsaɪdwɔːk/',
    partOfSpeech: 'n',
    definition: 'vỉa hè',
    exampleSentence: 'People should walk on the sidewalk.',
    exampleTranslation: 'Mọi người nên đi trên vỉa hè.',
    wrongOptions: ['đường hầm', 'cầu vượt', 'ngã tư'],
  },
  {
    id: 'de25-v39',
    word: 'endanger',
    pronunciation: '/ɪnˈdeɪndʒə(r)/',
    partOfSpeech: 'v',
    definition: 'gây nguy hiểm',
    exampleSentence: 'Smoking can endanger your health.',
    exampleTranslation: 'Hút thuốc có thể gây nguy hiểm cho sức khỏe.',
    wrongOptions: ['bảo vệ', 'cải thiện', 'hỗ trợ'],
  },
  {
    id: 'de25-v40',
    word: 'eco-friendly',
    pronunciation: '/ˌiːkəʊ ˈfrendli/',
    partOfSpeech: 'adj',
    definition: 'thân thiện với môi trường',
    exampleSentence: 'Many people use eco-friendly products now.',
    exampleTranslation: 'Nhiều người hiện nay sử dụng sản phẩm thân thiện môi trường.',
    wrongOptions: ['đắt đỏ', 'nguy hiểm', 'cũ kỹ'],
  },
  {
    id: 'de25-v41',
    word: 'recyclable',
    pronunciation: '/ˌriːˈsaɪkləbl/',
    partOfSpeech: 'adj',
    definition: 'có thể tái chế',
    exampleSentence: 'Glass bottles are recyclable.',
    exampleTranslation: 'Chai thủy tinh có thể tái chế.',
    wrongOptions: ['dễ cháy', 'độc hại', 'dùng một lần'],
  },
  {
    id: 'de25-v42',
    word: 'bioplastic',
    pronunciation: '/ˌbaɪəʊˈplæstɪk/',
    partOfSpeech: 'n',
    definition: 'nhựa sinh học',
    exampleSentence: 'Bioplastics are better for the environment.',
    exampleTranslation: 'Nhựa sinh học tốt hơn cho môi trường.',
    wrongOptions: ['kim loại', 'thủy tinh', 'cao su'],
  },
  {
    id: 'de25-v43',
    word: 'composite',
    pronunciation: '/ˈkɒmpəzɪt/',
    partOfSpeech: 'n',
    definition: 'vật liệu tổng hợp',
    exampleSentence: 'The bike is made from lightweight composites.',
    exampleTranslation: 'Chiếc xe đạp được làm từ vật liệu tổng hợp nhẹ.',
    wrongOptions: ['gỗ', 'đá', 'vải'],
  },
  {
    id: 'de25-v44',
    word: 'toxic',
    pronunciation: '/ˈtɒksɪk/',
    partOfSpeech: 'adj',
    definition: 'độc hại',
    exampleSentence: 'Factories should not release toxic chemicals.',
    exampleTranslation: 'Các nhà máy không nên thải hóa chất độc hại.',
    wrongOptions: ['an toàn', 'hữu ích', 'sạch sẽ'],
  },
  {
    id: 'de25-v45',
    word: 'substance',
    pronunciation: '/ˈsʌbstəns/',
    partOfSpeech: 'n',
    definition: 'chất',
    exampleSentence: 'Some substances are harmful to humans.',
    exampleTranslation: 'Một số chất có hại cho con người.',
    wrongOptions: ['động vật', 'thiết bị', 'thực vật'],
  },
  {
    id: 'de25-v46',
    word: 'gadget',
    pronunciation: '/ˈɡædʒɪt/',
    partOfSpeech: 'n',
    definition: 'thiết bị điện tử nhỏ',
    exampleSentence: 'Teenagers love modern gadgets.',
    exampleTranslation: 'Thanh thiếu niên thích các thiết bị điện tử hiện đại.',
    wrongOptions: ['phương tiện', 'đồ ăn', 'quần áo'],
  },
  {
    id: 'de25-v47',
    word: 'sustainability',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    partOfSpeech: 'n',
    definition: 'tính bền vững',
    exampleSentence: 'Companies should focus on sustainability.',
    exampleTranslation: 'Các công ty nên tập trung vào tính bền vững.',
    wrongOptions: ['sự ô nhiễm', 'sự lãng phí', 'sự cạnh tranh'],
  },
  {
    id: 'de25-v48',
    word: 'disassemble',
    pronunciation: '/ˌdɪsəˈsembl/',
    partOfSpeech: 'v',
    definition: 'tháo rời',
    exampleSentence: 'The machine is easy to disassemble.',
    exampleTranslation: 'Cái máy này dễ tháo rời.',
    wrongOptions: ['lắp ráp', 'sơn màu', 'vận chuyển'],
  },
  {
    id: 'de25-v49',
    word: 'energy-efficient',
    pronunciation: '/ˈenədʒi ɪˈfɪʃnt/',
    partOfSpeech: 'adj',
    definition: 'tiết kiệm năng lượng',
    exampleSentence: 'LED lights are energy-efficient.',
    exampleTranslation: 'Đèn LED tiết kiệm năng lượng.',
    wrongOptions: ['tốn điện', 'quá sáng', 'đắt tiền'],
  },
  {
    id: 'de25-v50',
    word: 'environmental',
    pronunciation: '/ɪnˌvaɪrənˈmentl/',
    partOfSpeech: 'adj',
    definition: 'thuộc về môi trường',
    exampleSentence: 'Students learn about environmental issues at school.',
    exampleTranslation: 'Học sinh học về các vấn đề môi trường ở trường.',
    wrongOptions: ['thuộc kinh tế', 'thuộc lịch sử', 'thuộc thể thao'],
  },

],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de13-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMy brother is interested _____ learning about wildlife conservation.',
    options: ['on', 'in', 'at', 'for'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh trai tôi hứng thú với việc tìm hiểu về bảo tồn động vật hoang dã."\n\n✅ **B. in** — cấu trúc: interested in + V-ing/noun.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 interested in = quan tâm, hứng thú với.',
  },

  {
    id: 'de13-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThey _____ dinner when the electricity suddenly went out.',
    options: ['have', 'had', 'were having', 'are having'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Họ đang ăn tối thì điện đột ngột mất."\n\n✅ **C. were having** — diễn tả hành động đang xảy ra trong quá khứ.\n\n❌ **A/B/D** — sai thì.\n\n💡 past continuous + when + past simple.',
  },

  {
    id: 'de13-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe weather was terrible, _____ we still enjoyed the trip.',
    options: ['because', 'although', 'but', 'so'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Thời tiết rất tệ nhưng chúng tôi vẫn tận hưởng chuyến đi."\n\n✅ **C. but** — diễn tả sự tương phản.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 but = nhưng.',
  },

  {
    id: 'de13-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nStudents should behave _____ in public places.',
    options: ['polite', 'politely', 'politeness', 'impolite'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Học sinh nên cư xử lịch sự ở nơi công cộng."\n\n✅ **B. politely** — trạng từ bổ nghĩa cho động từ behave.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 behave + adverb.',
  },

  {
    id: 'de13-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou _____ wear your seatbelt while driving.',
    options: ['must', 'could', 'might', 'would'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn phải thắt dây an toàn khi lái xe."\n\n✅ **A. must** — diễn tả sự bắt buộc.\n\n❌ **B/C/D** — không phù hợp nghĩa.\n\n💡 must = phải.',
  },

  {
    id: 'de13-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nI haven’t finished my homework _____.',
    options: ['already', 'just', 'yet', 'ever'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Tôi vẫn chưa hoàn thành bài tập."\n\n✅ **C. yet** — dùng trong câu phủ định hiện tại hoàn thành.\n\n❌ **A/B/D** — không phù hợp.\n\n💡 not ... yet = vẫn chưa.',
  },

  {
    id: 'de13-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nWe arrived _____ the station very early.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Chúng tôi đến nhà ga rất sớm."\n\n✅ **C. at** — arrive at + địa điểm nhỏ.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 arrive at + place.',
  },

  {
    id: 'de13-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nThe classroom _____ every afternoon.',
    options: ['cleans', 'is cleaned', 'cleaned', 'is cleaning'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Lớp học được dọn mỗi buổi chiều."\n\n✅ **B. is cleaned** — câu bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 passive voice: be + V3.',
  },

  {
    id: 'de13-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe studies hard _____ she wants to pass the exam.',
    options: ['because', 'although', 'so', 'but'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy học chăm vì muốn đỗ kỳ thi."\n\n✅ **A. because** — diễn tả nguyên nhân.\n\n❌ **B/C/D** — sai logic.\n\n💡 because + clause.',
  },

  {
    id: 'de13-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nMy father bought _____ new laptop yesterday.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bố tôi đã mua một chiếc laptop mới hôm qua."\n\n✅ **A. a** — dùng trước danh từ đếm được số ít bắt đầu bằng phụ âm.\n\n❌ **B/C/D** — sai cách dùng.\n\n💡 a + consonant sound.',
  },

  {
    id: 'de13-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe film was so _____ that everyone laughed a lot.',
    options: ['boring', 'funny', 'tired', 'sadly'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bộ phim hài đến mức mọi người cười rất nhiều."\n\n✅ **B. funny** — phù hợp nghĩa.\n\n❌ **A/C/D** — không phù hợp.\n\n💡 funny = hài hước.',
  },

  {
    id: 'de13-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nPlease _____ the lights before going out.',
    options: ['turn off', 'turn on', 'pick up', 'look after'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Hãy tắt đèn trước khi ra ngoài."\n\n✅ **A. turn off** — tắt thiết bị.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 turn off = tắt.',
  },

  {
    id: 'de13-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nShe _____ English since she was six years old.',
    options: ['learns', 'learned', 'has learned', 'is learning'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy đã học tiếng Anh từ khi 6 tuổi."\n\n✅ **C. has learned** — hiện tại hoàn thành với since.\n\n❌ **A/B/D** — sai thì.\n\n💡 since + present perfect.',
  },

  {
    id: 'de13-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nIf it rains tomorrow, we _____ at home.',
    options: ['stay', 'stayed', 'will stay', 'stays'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà."\n\n✅ **C. will stay** — câu điều kiện loại 1.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de13-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Could you help me with this exercise?"',
    options: [
      'Yes, sure.',
      'I don’t like it.',
      'That’s impossible.',
      'Never mind.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn có thể giúp tôi bài tập này không?"\n\n✅ **A. Yes, sure.** — câu trả lời phù hợp khi đồng ý giúp đỡ.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 Could you...? → Yes, sure.',
  },

  {
    id: 'de13-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe is tired _____ he stayed up late last night.',
    options: ['because', 'so', 'although', 'but'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy mệt vì thức khuya tối qua."\n\n✅ **A. because** — diễn tả nguyên nhân.\n\n❌ **B/C/D** — sai logic.\n\n💡 because = bởi vì.',
  },

  {
    id: 'de13-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nThe students answered the questions very _____.',
    options: ['confidence', 'confident', 'confidently', 'confidented'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Các học sinh trả lời câu hỏi rất tự tin."\n\n✅ **C. confidently** — trạng từ bổ nghĩa cho động từ.\n\n❌ **A/B/D** — sai loại từ.\n\n💡 answer + adverb.',
  },

  {
    id: 'de13-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWould you mind _____ the window?',
    options: ['open', 'opening', 'to open', 'opened'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn có phiền mở cửa sổ không?"\n\n✅ **B. opening** — cấu trúc: would you mind + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 would you mind + V-ing.',
  },

  {
    id: 'de13-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe more carefully you drive, _____ you will be.',
    options: [
      'the safest',
      'the safer',
      'safer',
      'more safe',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn lái xe càng cẩn thận thì sẽ càng an toàn."\n\n✅ **B. the safer** — cấu trúc so sánh kép.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 The + comparative, the + comparative.',
  },

  {
    id: 'de13-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nEnglish _____ in many countries around the world.',
    options: ['speaks', 'is spoken', 'spoke', 'is speaking'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói ở nhiều quốc gia trên thế giới."\n\n✅ **B. is spoken** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai ngữ pháp.\n\n💡 be + V3.',
  },

  {
    id: 'de13-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nalways / my father / coffee / drinks / in the morning',
    options: [
      'My father always drinks coffee in the morning.',
      'Always my father drinks coffee in the morning.',
      'My father drinks always coffee in the morning.',
      'Coffee my father always drinks in the morning.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Bố tôi luôn uống cà phê vào buổi sáng."\n\n✅ **A** — đúng trật tự từ.\n\n❌ **B/C/D** — sai vị trí trạng từ.\n\n💡 trạng từ tần suất đứng trước động từ thường.',
  },

  {
    id: 'de13-q22',
    questionNumber: 22,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nso / the exercise / difficult / was / that / nobody could do it',
    options: [
      'The exercise was so difficult that nobody could do it.',
      'So difficult the exercise was that nobody could do it.',
      'The exercise so was difficult that nobody could do it.',
      'Nobody could do it that the exercise was so difficult.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Bài tập khó đến mức không ai làm được."\n\n✅ **A** — đúng cấu trúc.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 so + adjective + that.',
  },

  {
    id: 'de13-q23',
    questionNumber: 23,
    type: 'writing',
    questionText:
      'Choose the sentence closest in meaning:\nLet’s go camping this weekend.',
    options: [
      'Why don’t we go camping this weekend?',
      'We may go camping last weekend.',
      'Camping this weekend is impossible.',
      'Do you dislike camping this weekend?',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Hãy đi cắm trại cuối tuần này."\n\n✅ **A. Why don’t we go camping this weekend?** — cùng ý đề nghị.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 Let’s = Why don’t we...?',
  },

  {
    id: 'de13-q24',
    questionNumber: 24,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nShe / too tired / finish / homework / last night.',
    options: [
      'She was too tired to finish her homework last night.',
      'She too tired finishing her homework last night.',
      'She was tired too finish her homework last night.',
      'She is too tired to finished her homework last night.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy quá mệt để hoàn thành bài tập tối qua."\n\n✅ **A** — đúng cấu trúc: too + adjective + to V.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 too + adj + to infinitive.',
  },

  {
    id: 'de13-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nWe / not enjoy / picnic / if / it / rain tomorrow.',
    options: [
      'We won\'t enjoy the picnic if it rains tomorrow.',
      'We don’t enjoy the picnic if it rained tomorrow.',
      'We won’t enjoy the picnic if it rain tomorrow.',
      'We not enjoy the picnic if it rains tomorrow.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi sẽ không tận hưởng buổi dã ngoại nếu ngày mai trời mưa."\n\n✅ **A** — đúng câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì hoặc cấu trúc.\n\n💡 If + present simple → will + V.',
  },
]
};

export default deMau15;
