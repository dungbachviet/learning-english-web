
import { Exam } from '@/types';

const deMau07: Exam = {
  id: 'de-mau-07',
  title: 'Đề Mẫu Số 7',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 23',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de23-v21',
    word: 'conservation',
    pronunciation: '/ˌkɒnsəˈveɪʃn/',
    partOfSpeech: 'n',
    definition: 'sự bảo tồn',
    exampleSentence: 'Animal conservation is very important today.',
    exampleTranslation: 'Việc bảo tồn động vật rất quan trọng ngày nay.',
    wrongOptions: ['sự phá hủy', 'sự ô nhiễm', 'sự cạnh tranh'],
  },
  {
    id: 'de23-v22',
    word: 'endangered species',
    pronunciation: '/ɪnˌdeɪndʒəd ˈspiːʃiːz/',
    partOfSpeech: 'n phrase',
    definition: 'loài có nguy cơ tuyệt chủng',
    exampleSentence: 'Pandas are endangered species.',
    exampleTranslation: 'Gấu trúc là loài có nguy cơ tuyệt chủng.',
    wrongOptions: ['động vật nuôi', 'côn trùng nhỏ', 'thú cưng trong nhà'],
  },
  {
    id: 'de23-v23',
    word: 'robotic',
    pronunciation: '/rəʊˈbɒtɪk/',
    partOfSpeech: 'adj',
    definition: 'thuộc về robot',
    exampleSentence: 'The company uses robotic machines in factories.',
    exampleTranslation: 'Công ty sử dụng máy móc robot trong nhà máy.',
    wrongOptions: ['thủ công', 'truyền thống', 'tự nhiên'],
  },
  {
    id: 'de23-v24',
    word: 'repetitive',
    pronunciation: '/rɪˈpetətɪv/',
    partOfSpeech: 'adj',
    definition: 'lặp đi lặp lại',
    exampleSentence: 'Doing repetitive tasks can be boring.',
    exampleTranslation: 'Làm những công việc lặp đi lặp lại có thể gây chán.',
    wrongOptions: ['sáng tạo', 'thú vị', 'ngẫu nhiên'],
  },
  {
    id: 'de23-v25',
    word: 'programmed',
    pronunciation: '/ˈprəʊɡræmd/',
    partOfSpeech: 'adj',
    definition: 'được lập trình',
    exampleSentence: 'The robot is programmed to clean the floor.',
    exampleTranslation: 'Con robot được lập trình để lau sàn.',
    wrongOptions: ['bị hỏng', 'được sơn mới', 'được bán giảm giá'],
  },
  {
    id: 'de23-v26',
    word: 'complex',
    pronunciation: '/ˈkɒmpleks/',
    partOfSpeech: 'adj',
    definition: 'phức tạp',
    exampleSentence: 'This math problem is too complex for me.',
    exampleTranslation: 'Bài toán này quá phức tạp với tôi.',
    wrongOptions: ['đơn giản', 'dễ dàng', 'ngắn gọn'],
  },
  {
    id: 'de23-v27',
    word: 'routinely',
    pronunciation: '/ruːˈtiːnli/',
    partOfSpeech: 'adv',
    definition: 'thường xuyên',
    exampleSentence: 'The machines are routinely checked every week.',
    exampleTranslation: 'Máy móc được kiểm tra thường xuyên mỗi tuần.',
    wrongOptions: ['hiếm khi', 'ngẫu nhiên', 'bất ngờ'],
  },
  {
    id: 'de23-v28',
    word: 'receptionist',
    pronunciation: '/rɪˈsepʃənɪst/',
    partOfSpeech: 'n',
    definition: 'lễ tân',
    exampleSentence: 'The receptionist welcomed the guests warmly.',
    exampleTranslation: 'Nhân viên lễ tân chào đón khách nhiệt tình.',
    wrongOptions: ['đầu bếp', 'bảo vệ', 'phi công'],
  },
  {
    id: 'de23-v29',
    word: 'specialise in',
    pronunciation: '/ˈspeʃəlaɪz ɪn/',
    partOfSpeech: 'phr.v',
    definition: 'chuyên về',
    exampleSentence: 'This restaurant specialises in seafood dishes.',
    exampleTranslation: 'Nhà hàng này chuyên về các món hải sản.',
    wrongOptions: ['từ bỏ', 'tránh né', 'quan tâm đến'],
  },
  {
    id: 'de23-v30',
    word: 'frustration',
    pronunciation: '/frʌˈstreɪʃn/',
    partOfSpeech: 'n',
    definition: 'sự thất vọng',
    exampleSentence: 'He showed his frustration after losing the game.',
    exampleTranslation: 'Anh ấy thể hiện sự thất vọng sau khi thua trận.',
    wrongOptions: ['niềm vui', 'sự bình tĩnh', 'lòng biết ơn'],
  },
  {
    id: 'de23-v31',
    word: 'traffic congestion',
    pronunciation: '/ˈtræfɪk kənˈdʒestʃən/',
    partOfSpeech: 'n',
    definition: 'tắc nghẽn giao thông',
    exampleSentence: 'Traffic congestion is common in big cities.',
    exampleTranslation: 'Tắc nghẽn giao thông phổ biến ở các thành phố lớn.',
    wrongOptions: ['tai nạn hàng không', 'ô nhiễm tiếng ồn', 'đường cao tốc'],
  },
  {
    id: 'de23-v32',
    word: 'gridlock',
    pronunciation: '/ˈɡrɪdlɒk/',
    partOfSpeech: 'n',
    definition: 'kẹt xe nghiêm trọng',
    exampleSentence: 'The accident caused a huge gridlock downtown.',
    exampleTranslation: 'Vụ tai nạn gây ra tình trạng kẹt xe nghiêm trọng ở trung tâm.',
    wrongOptions: ['cơn bão lớn', 'lễ hội đông người', 'cuộc họp khẩn cấp'],
  },
  {
    id: 'de23-v33',
    word: 'patrol',
    pronunciation: '/pəˈtrəʊl/',
    partOfSpeech: 'v',
    definition: 'tuần tra',
    exampleSentence: 'Police officers patrol the streets every night.',
    exampleTranslation: 'Cảnh sát tuần tra các con phố mỗi đêm.',
    wrongOptions: ['trang trí', 'xây dựng', 'vận chuyển'],
  },
  {
    id: 'de23-v34',
    word: 'stranded',
    pronunciation: '/ˈstrændɪd/',
    partOfSpeech: 'adj',
    definition: 'bị mắc kẹt',
    exampleSentence: 'Many passengers were stranded at the airport.',
    exampleTranslation: 'Nhiều hành khách bị mắc kẹt ở sân bay.',
    wrongOptions: ['được giải cứu', 'được chào đón', 'được hỗ trợ'],
  },
  {
    id: 'de23-v35',
    word: 'tension',
    pronunciation: '/ˈtenʃn/',
    partOfSpeech: 'n',
    definition: 'căng thẳng',
    exampleSentence: 'There was tension between the two teams.',
    exampleTranslation: 'Có sự căng thẳng giữa hai đội.',
    wrongOptions: ['sự vui vẻ', 'sự thân thiện', 'sự yên bình'],
  },
  {
    id: 'de23-v36',
    word: 'picturesque',
    pronunciation: '/ˌpɪktʃəˈresk/',
    partOfSpeech: 'adj',
    definition: 'đẹp như tranh',
    exampleSentence: 'The village is picturesque in spring.',
    exampleTranslation: 'Ngôi làng đẹp như tranh vào mùa xuân.',
    wrongOptions: ['ồn ào', 'bụi bặm', 'hiện đại hóa'],
  },
  {
    id: 'de23-v37',
    word: 'cultivate',
    pronunciation: '/ˈkʌltɪveɪt/',
    partOfSpeech: 'v',
    definition: 'canh tác',
    exampleSentence: 'Farmers cultivate rice in the fields.',
    exampleTranslation: 'Nông dân canh tác lúa trên cánh đồng.',
    wrongOptions: ['đánh bắt cá', 'xây nhà', 'lái xe tải'],
  },
  {
    id: 'de23-v38',
    word: 'orchard',
    pronunciation: '/ˈɔːtʃəd/',
    partOfSpeech: 'n',
    definition: 'vườn cây ăn quả',
    exampleSentence: 'Their family owns a large mango orchard.',
    exampleTranslation: 'Gia đình họ sở hữu một vườn xoài lớn.',
    wrongOptions: ['trang trại bò sữa', 'cánh đồng lúa', 'khu vui chơi'],
  },
  {
    id: 'de23-v39',
    word: 'harvest',
    pronunciation: '/ˈhɑːvɪst/',
    partOfSpeech: 'n',
    definition: 'mùa thu hoạch',
    exampleSentence: 'Farmers are busy during the harvest season.',
    exampleTranslation: 'Nông dân bận rộn vào mùa thu hoạch.',
    wrongOptions: ['mùa lễ hội', 'mùa du lịch', 'mùa đông lạnh'],
  },
  {
    id: 'de23-v40',
    word: 'combine harvester',
    pronunciation: '/kəmˈbaɪn ˈhɑːvɪstə(r)/',
    partOfSpeech: 'n',
    definition: 'máy gặt đập liên hợp',
    exampleSentence: 'The combine harvester works very quickly in the fields.',
    exampleTranslation: 'Máy gặt đập liên hợp hoạt động rất nhanh trên cánh đồng.',
    wrongOptions: ['máy kéo nhỏ', 'xe tải chở hàng', 'máy cắt cỏ'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de23c-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nWhile my father _____ TV, my mother was cooking dinner.',
    options: ['watched', 'was watching', 'has watched', 'watching'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Trong khi bố tôi đang xem TV, mẹ tôi đang nấu bữa tối."\n\n✅ **B. was watching** — diễn tả hành động đang xảy ra trong quá khứ.\n\n❌ **A/C/D** — sai thì.\n\n💡 While + past continuous.',
  },

  {
    id: 'de23c-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy brother is interested _____ science fiction movies.',
    options: ['on', 'at', 'in', 'for'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh trai tôi thích phim khoa học viễn tưởng."\n\n✅ **C. in** — interested in = thích.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 interested in something.',
  },

  {
    id: 'de23c-q03',
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
    id: 'de23c-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nThe children played _____ in the schoolyard.',
    options: ['happy', 'happily', 'happiness', 'unhappy'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bọn trẻ chơi vui vẻ trong sân trường."\n\n✅ **B. happily** — trạng từ bổ nghĩa cho động từ "played".\n\n❌ **A/C/D** — sai loại từ.\n\n💡 Verb + adverb.',
  },

  {
    id: 'de23c-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe restaurant was crowded, _____ we had to wait for a table.',
    options: ['because', 'so', 'although', 'but'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nhà hàng đông nên chúng tôi phải đợi bàn."\n\n✅ **B. so** — diễn tả kết quả.\n\n❌ **A/C/D** — không phù hợp logic.\n\n💡 so = vì vậy.',
  },

  {
    id: 'de23c-q06',
    questionNumber: 6,
    type: 'vocabulary',
    questionText:
      'Choose the correct word:\nTourists love buying local _____ as souvenirs.',
    options: ['handicrafts', 'traffic', 'villages', 'pollution'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Khách du lịch thích mua đồ thủ công địa phương làm quà lưu niệm."\n\n✅ **A. handicrafts** — đồ thủ công.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 handicrafts = đồ thủ công mỹ nghệ.',
  },

  {
    id: 'de23c-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct comparative form:\nThis exercise is _____ than the previous one.',
    options: ['difficult', 'more difficult', 'most difficult', 'difficulter'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài tập này khó hơn bài trước."\n\n✅ **B. more difficult** — so sánh hơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 more + adjective + than.',
  },

  {
    id: 'de23c-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere aren’t _____ apples left in the basket.',
    options: ['much', 'many', 'little', 'a little'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Không còn nhiều táo trong rổ."\n\n✅ **B. many** — dùng với danh từ đếm được số nhiều.\n\n❌ **A/C/D** — không phù hợp.\n\n💡 many + plural nouns.',
  },

  {
    id: 'de23c-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nA new bridge _____ next year.',
    options: ['builds', 'will build', 'will be built', 'is building'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Một cây cầu mới sẽ được xây vào năm tới."\n\n✅ **C. will be built** — bị động tương lai đơn.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 will be + V3.',
  },

  {
    id: 'de23c-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Would you like some orange juice?"',
    options: [
      'Yes, please.',
      'I like oranges.',
      'No, I don’t drink.',
      'It’s very sweet.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn có muốn uống nước cam không?"\n\n✅ **A. Yes, please.** — câu trả lời lịch sự phù hợp.\n\n❌ **B/C/D** — không đúng ngữ cảnh.\n\n💡 Would you like...? → Yes, please.',
  },

  {
    id: 'de23c-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nMy uncle bought _____ expensive car yesterday.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Chú tôi đã mua một chiếc ô tô đắt tiền hôm qua."\n\n✅ **B. an** — "expensive" bắt đầu bằng nguyên âm.\n\n❌ **A/C/D** — sai cách dùng.\n\n💡 an + vowel sound.',
  },

  {
    id: 'de23c-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct verb form:\nShe hopes _____ abroad one day.',
    options: ['travel', 'travelling', 'to travel', 'traveled'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy hy vọng một ngày nào đó sẽ đi nước ngoài."\n\n✅ **C. to travel** — hope + to V.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 hope + to infinitive.',
  },

  {
    id: 'de23c-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThey _____ in Ha Noi since 2018.',
    options: ['live', 'lived', 'have lived', 'are living'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Họ đã sống ở Hà Nội từ năm 2018."\n\n✅ **C. have lived** — hiện tại hoàn thành với since.\n\n❌ **A/B/D** — sai thì.\n\n💡 have/has + V3.',
  },

  {
    id: 'de23c-q14',
    questionNumber: 14,
    type: 'vocabulary',
    questionText:
      'Choose the word closest in meaning to "peaceful".',
    options: ['quiet', 'crowded', 'dangerous', 'noisy'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ gần nghĩa với peaceful."\n\n✅ **A. quiet** — peaceful = yên bình.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 peaceful ≈ quiet.',
  },

  {
    id: 'de23c-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nIf it rains tomorrow, we _____ at home.',
    options: ['stay', 'stayed', 'will stay', 'are staying'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà."\n\n✅ **C. will stay** — câu điều kiện loại 1.\n\n❌ **A/B/D** — sai thì.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de23c-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe children are looking _____ their lost puppy.',
    options: ['for', 'after', 'up', 'at'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bọn trẻ đang tìm chú cún bị lạc."\n\n✅ **A. for** — look for = tìm kiếm.\n\n❌ **B/C/D** — sai cụm động từ.\n\n💡 look for = search.',
  },

  {
    id: 'de23c-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nnever / my parents / late / are / for work',
    options: [
      'My parents are never late for work.',
      'Never my parents are late for work.',
      'My parents never are late for work.',
      'Are my parents never late for work.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Bố mẹ tôi không bao giờ đi làm muộn."\n\n✅ **A. My parents are never late for work.** — đúng trật tự từ.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 be + never + adjective.',
  },

  {
    id: 'de23c-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nwas / because / tired / she / early / went to bed',
    options: [
      'She went to bed early because she was tired.',
      'Because she tired was went to bed early.',
      'She because was tired went to bed early.',
      'Went to bed early she because was tired.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Cô ấy đi ngủ sớm vì mệt."\n\n✅ **A. She went to bed early because she was tired.** — đúng ngữ pháp.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 because + clause.',
  },

  {
    id: 'de23c-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe teacher asked us _____ quiet during the test.',
    options: ['stay', 'staying', 'to stay', 'stayed'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Giáo viên yêu cầu chúng tôi giữ im lặng trong bài kiểm tra."\n\n✅ **C. to stay** — ask someone to V.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 ask + object + to V.',
  },

  {
    id: 'de23c-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nHe studied very hard, _____ he failed the exam.',
    options: ['because', 'so', 'but', 'therefore'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy học rất chăm nhưng vẫn trượt kỳ thi."\n\n✅ **C. but** — diễn tả sự tương phản.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 but = nhưng.',
  },
]
};

export default deMau07;
