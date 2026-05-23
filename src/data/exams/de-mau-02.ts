import { Exam } from '@/types';

const deMau02: Exam = {
  id: 'de-mau-02',
  title: 'Đề Mẫu Số 2',
  year: '2024',
  school: 'Trường THCS Lê Lợi',
  description: 'Reading Comprehension — Đề thử ngắn',
  totalQuestions: 0,

  vocabulary: [
    {
      id: 'de21-v1',
      word: 'promote',
      pronunciation: '/prəˈməʊt/',
      partOfSpeech: 'v',
      definition: 'thúc đẩy, quảng bá',
      exampleSentence: 'The campaign helps promote healthy lifestyles.',
      exampleTranslation: 'Chiến dịch giúp thúc đẩy lối sống lành mạnh.',
      wrongOptions: ['ngăn cản, cản trở', 'phá hủy hoàn toàn', 'trì hoãn công việc'],
    },
    {
      id: 'de21-v2',
      word: 'domestic',
      pronunciation: '/dəˈmestɪk/',
      partOfSpeech: 'adj',
      definition: 'trong nước, nội địa',
      exampleSentence: 'Domestic flights are cheaper than international ones.',
      exampleTranslation: 'Các chuyến bay nội địa rẻ hơn chuyến bay quốc tế.',
      wrongOptions: ['quốc tế, toàn cầu', 'hiện đại, tiên tiến', 'truyền thống, cổ xưa'],
    },
    {
      id: 'de21-v3',
      word: 'national',
      pronunciation: '/ˈnæʃənəl/',
      partOfSpeech: 'adj',
      definition: 'thuộc quốc gia',
      exampleSentence: 'Vietnamese is the national language of Vietnam.',
      exampleTranslation: 'Tiếng Việt là ngôn ngữ quốc gia của Việt Nam.',
      wrongOptions: ['địa phương, vùng miền', 'nước ngoài, ngoại quốc', 'cá nhân, riêng tư'],
    },
    {
      id: 'de21-v4',
      word: 'although',
      pronunciation: '/ɔːlˈðəʊ/',
      partOfSpeech: 'conj',
      definition: 'mặc dù',
      exampleSentence: 'Although he was tired, he finished the exam.',
      exampleTranslation: 'Mặc dù mệt nhưng anh ấy vẫn hoàn thành bài thi.',
      wrongOptions: ['bởi vì', 'do đó', 'nếu như'],
    },
    {
      id: 'de21-v5',
      word: 'workshop',
      pronunciation: '/ˈwɜːkʃɒp/',
      partOfSpeech: 'n',
      definition: 'xưởng làm việc',
      exampleSentence: 'My grandfather set up his workshop twenty years ago.',
      exampleTranslation: 'Ông tôi thành lập xưởng làm việc của mình cách đây 20 năm.',
      wrongOptions: ['nhà kho chứa hàng', 'văn phòng công ty', 'trung tâm thương mại'],
    },
    {
      id: 'de21-v6',
      word: 'run out of',
      pronunciation: '/rʌn aʊt əv/',
      partOfSpeech: 'phr.v',
      definition: 'cạn kiệt',
      exampleSentence: 'The villagers ran out of fresh water.',
      exampleTranslation: 'Người dân làng đã cạn nước sạch.',
      wrongOptions: ['thoát khỏi', 'phát triển khỏi', 'được làm từ'],
    },
    {
      id: 'de21-v7',
      word: 'intensive',
      pronunciation: '/ɪnˈtensɪv/',
      partOfSpeech: 'adj',
      definition: 'chuyên sâu, tăng cường',
      exampleSentence: 'She joined an intensive English course.',
      exampleTranslation: 'Cô ấy tham gia khóa học tiếng Anh chuyên sâu.',
      wrongOptions: ['cơ bản, đơn giản', 'ngắn ngủi, tạm thời', 'miễn phí hoàn toàn'],
    },
    {
      id: 'de21-v8',
      word: 'preparation',
      pronunciation: '/ˌprepəˈreɪʃən/',
      partOfSpeech: 'n',
      definition: 'sự chuẩn bị',
      exampleSentence: 'Exam preparation takes a lot of time.',
      exampleTranslation: 'Việc chuẩn bị thi tốn rất nhiều thời gian.',
      wrongOptions: ['sự thất bại', 'sự lựa chọn', 'sự tranh cãi'],
    },
    {
      id: 'de21-v9',
      word: 'amusement park',
      pronunciation: '/əˈmjuːzmənt pɑːk/',
      partOfSpeech: 'n',
      definition: 'công viên giải trí',
      exampleSentence: 'We had a great time at the amusement park.',
      exampleTranslation: 'Chúng tôi đã có khoảng thời gian tuyệt vời ở công viên giải trí.',
      wrongOptions: ['công viên quốc gia', 'khu mua sắm', 'sân vận động'],
    },
    {
      id: 'de21-v10',
      word: 'unexpectedly',
      pronunciation: '/ˌʌnɪkˈspektɪdli/',
      partOfSpeech: 'adv',
      definition: 'một cách bất ngờ',
      exampleSentence: 'The roller coaster stopped unexpectedly.',
      exampleTranslation: 'Tàu lượn siêu tốc dừng lại một cách bất ngờ.',
      wrongOptions: ['một cách cẩn thận', 'một cách thường xuyên', 'một cách chậm chạp'],
    },
    {
      id: 'de21-v11',
      word: 'memorable',
      pronunciation: '/ˈmemərəbl/',
      partOfSpeech: 'adj',
      definition: 'đáng nhớ',
      exampleSentence: 'It was a memorable day for the whole family.',
      exampleTranslation: 'Đó là một ngày đáng nhớ đối với cả gia đình.',
      wrongOptions: ['nhàm chán, vô vị', 'nguy hiểm, đáng sợ', 'ngắn ngủi, thoáng qua'],
    },
    {
      id: 'de21-v12',
      word: 'tourist industry',
      pronunciation: '/ˈtʊərɪst ˈɪndəstri/',
      partOfSpeech: 'n',
      definition: 'ngành du lịch',
      exampleSentence: 'The tourist industry brings huge economic benefits.',
      exampleTranslation: 'Ngành du lịch mang lại lợi ích kinh tế to lớn.',
      wrongOptions: ['ngành giáo dục', 'ngành nông nghiệp', 'ngành xây dựng'],
    },
    {
      id: 'de21-v13',
      word: 'accommodation',
      pronunciation: '/əˌkɒməˈdeɪʃən/',
      partOfSpeech: 'n',
      definition: 'chỗ ở, nơi lưu trú',
      exampleSentence: 'Tourists spend a lot on accommodation.',
      exampleTranslation: 'Khách du lịch chi rất nhiều tiền cho chỗ ở.',
      wrongOptions: ['phương tiện giao thông', 'dịch vụ giải trí', 'thiết bị du lịch'],
    },
    {
      id: 'de21-v14',
      word: 'attraction',
      pronunciation: '/əˈtrækʃən/',
      partOfSpeech: 'n',
      definition: 'điểm thu hút du lịch',
      exampleSentence: 'Ha Noi has many famous tourist attractions.',
      exampleTranslation: 'Hà Nội có nhiều điểm du lịch nổi tiếng.',
      wrongOptions: ['nhà máy sản xuất', 'khu dân cư', 'trường đại học'],
    },
    {
      id: 'de21-v15',
      word: 'responsible',
      pronunciation: '/rɪˈspɒnsəbl/',
      partOfSpeech: 'adj',
      definition: 'có trách nhiệm',
      exampleSentence: 'We should be responsible tourists.',
      exampleTranslation: 'Chúng ta nên là những du khách có trách nhiệm.',
      wrongOptions: ['vô trách nhiệm', 'ích kỷ cá nhân', 'thiếu kinh nghiệm'],
    },
    {
      id: 'de21-v16',
      word: 'transportation',
      pronunciation: '/ˌtrænspɔːˈteɪʃən/',
      partOfSpeech: 'n',
      definition: 'giao thông vận tải',
      exampleSentence: 'Public transportation in the city is not adequate.',
      exampleTranslation: 'Giao thông công cộng trong thành phố chưa đủ đáp ứng nhu cầu.',
      wrongOptions: ['dịch vụ y tế', 'hoạt động thể thao', 'hệ thống giáo dục'],
    },
    {
      id: 'de21-v17',
      word: 'adequate',
      pronunciation: '/ˈædɪkwət/',
      partOfSpeech: 'adj',
      definition: 'đầy đủ, đáp ứng nhu cầu',
      exampleSentence: 'The roads are not adequate for heavy traffic.',
      exampleTranslation: 'Những con đường chưa đủ đáp ứng lượng giao thông lớn.',
      wrongOptions: ['quá nguy hiểm', 'rất đắt đỏ', 'vô cùng hiện đại'],
    },
    {
      id: 'de21-v18',
      word: 'enterprise',
      pronunciation: '/ˈentəpraɪz/',
      partOfSpeech: 'n',
      definition: 'doanh nghiệp',
      exampleSentence: 'Many enterprises are located in Ha Noi.',
      exampleTranslation: 'Nhiều doanh nghiệp được đặt tại Hà Nội.',
      wrongOptions: ['ngôi chùa cổ', 'công viên công cộng', 'viện bảo tàng'],
    },
    {
      id: 'de21-v19',
      word: 'rural',
      pronunciation: '/ˈrʊərəl/',
      partOfSpeech: 'adj',
      definition: 'thuộc nông thôn',
      exampleSentence: 'Many people move from rural areas to cities.',
      exampleTranslation: 'Nhiều người chuyển từ vùng nông thôn lên thành phố.',
      wrongOptions: ['thuộc đô thị', 'thuộc ven biển', 'thuộc miền núi'],
    },
    {
      id: 'de21-v20',
      word: 'ethnic minority group',
      pronunciation: '/ˈeθnɪk maɪˈnɒrəti ɡruːp/',
      partOfSpeech: 'n',
      definition: 'nhóm dân tộc thiểu số',
      exampleSentence: 'Stilt houses are popular among ethnic minority groups.',
      exampleTranslation: 'Nhà sàn phổ biến trong các nhóm dân tộc thiểu số.',
      wrongOptions: ['khách du lịch quốc tế', 'người lao động thành phố', 'học sinh trung học'],
    },
  ],

  // TODO: thêm questions sau
questions: [
  {
    id: 'de-new-q1',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nThe _____ language of Japan is Japanese.',
    options: ['nation', 'national', 'nationally', 'nationality'],
    correctAnswer: 1,
    explanation:
      '✅ **B. national** — cần tính từ để bổ nghĩa cho danh từ "language".\n\n❌ **A. nation** — danh từ, không đứng trước "language" theo cách này\n❌ **C. nationally** — trạng từ, không bổ nghĩa cho danh từ\n❌ **D. nationality** — danh từ nghĩa là quốc tịch\n\n💡 adjective + noun: national language, international school, historical place.',
  },

  {
    id: 'de-new-q2',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the best connector:\n_____ he was exhausted, he continued working.',
    options: ['Although', 'Because', 'Despite', 'So'],
    correctAnswer: 0,
    explanation:
      '✅ **A. Although** — nối hai mệnh đề trái nghĩa.\n\n❌ **B. Because** — diễn tả nguyên nhân, không phải tương phản\n❌ **C. Despite** — phải đi với noun/V-ing, không đi với clause đầy đủ\n❌ **D. So** — diễn tả kết quả\n\n💡 although + clause | despite + noun/V-ing.',
  },

  {
    id: 'de-new-q3',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nThe road _____ last year.',
    options: ['built', 'was built', 'is building', 'builds'],
    correctAnswer: 1,
    explanation:
      '✅ **B. was built** — bị động quá khứ đơn: was/were + V3.\n\n❌ **A. built** — thiếu trợ động từ\n❌ **C. is building** — chủ động hiện tại tiếp diễn\n❌ **D. builds** — hiện tại đơn chủ động\n\n💡 Passive voice dùng khi chủ thể nhận hành động.',
  },

  {
    id: 'de-new-q4',
    questionNumber: 4,
    type: 'vocabulary',
    questionText:
      'Choose the correct phrasal verb:\nWe _____ sugar, so we need to buy some more.',
    options: ['ran out of', 'looked up', 'put off', 'took off'],
    correctAnswer: 0,
    explanation:
      '✅ **A. ran out of** — hết, cạn kiệt.\n\n❌ **B. looked up** — tra cứu\n❌ **C. put off** — trì hoãn\n❌ **D. took off** — cất cánh / cởi bỏ\n\n💡 run out of + money/time/water/food.',
  },

  {
    id: 'de-new-q5',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe is very good _____ English.',
    options: ['of', 'about', 'at', 'with'],
    correctAnswer: 2,
    explanation:
      '✅ **C. at** — collocation: good at something.\n\n❌ **A/B/D** — sai giới từ đi kèm.\n\n💡 good at sports / math / languages.',
  },

  {
    id: 'de-new-q6',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the best answer:\nThe students practised _____ English every evening.',
    options: ['speak', 'to speak', 'speaking', 'spoke'],
    correctAnswer: 2,
    explanation:
      '✅ **C. speaking** — sau "practise" dùng V-ing.\n\n❌ **A/B/D** — sai cấu trúc ngữ pháp.\n\n💡 practise + V-ing.',
  },

  {
    id: 'de-new-q7',
    questionNumber: 7,
    type: 'writing',
    questionText:
      'Choose the correct order:\n1. We finally reached the top of the mountain.\n2. We started climbing early in the morning.\n3. Everyone felt tired but excited.',
    options: ['2-1-3', '1-2-3', '3-2-1', '2-3-1'],
    correctAnswer: 0,
    explanation:
      '✅ **A. 2-1-3** — bắt đầu leo núi → đến đỉnh → cảm xúc cuối cùng.\n\n❌ **B/C/D** — không đúng logic thời gian.\n\n💡 Hãy tìm trình tự thời gian khi làm dạng sắp xếp câu.',
  },

  {
    id: 'de-new-q8',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the best article:\nShe usually studies in _____ evening.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 2,
    explanation:
      '✅ **C. the** — cụm cố định: in the evening.\n\n❌ **A/B/D** — không dùng trong time expressions này.\n\n💡 in the morning / afternoon / evening.',
  },

  {
    id: 'de-new-q9',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct form:\nHe suggested _____ to the cinema.',
    options: ['go', 'to go', 'going', 'went'],
    correctAnswer: 2,
    explanation:
      '✅ **C. going** — suggest + V-ing.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 suggest doing something.',
  },

  {
    id: 'de-new-q10',
    questionNumber: 10,
    type: 'vocabulary',
    questionText:
      'Choose the word closest in meaning to "crowded".',
    options: ['empty', 'busy', 'peaceful', 'quiet'],
    correctAnswer: 1,
    explanation:
      '✅ **B. busy** — crowded = đông đúc.\n\n❌ **A. empty** — trái nghĩa\n❌ **C/D** — mang nghĩa yên bình/yên tĩnh\n\n💡 crowded city = busy city.',
  },

  {
    id: 'de-new-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct conjunction:\nShe stayed at home _____ it was raining heavily.',
    options: ['although', 'because', 'however', 'despite'],
    correctAnswer: 1,
    explanation:
      '✅ **B. because** — diễn tả nguyên nhân.\n\n❌ **A. although** — diễn tả tương phản\n❌ **C. however** — cần tách mệnh đề\n❌ **D. despite** — đi với noun/V-ing\n\n💡 because + clause.',
  },

  {
    id: 'de-new-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the best answer:\nThe workers _____ the bridge at the moment.',
    options: ['build', 'are building', 'built', 'were building'],
    correctAnswer: 1,
    explanation:
      '✅ **B. are building** — "at the moment" → hiện tại tiếp diễn.\n\n❌ **A/C/D** — sai thì.\n\n💡 Dấu hiệu hiện tại tiếp diễn: now, at the moment, currently.',
  },

  {
    id: 'de-new-q13',
    questionNumber: 13,
    type: 'writing',
    questionText:
      'Choose the sentence that best completes the paragraph:\n"The weather was terrible during our trip. _____"',
    options: [
      'However, we still enjoyed ourselves a lot.',
      'Therefore, we stayed home all week.',
      'Because the hotel was expensive.',
      'And the mountains are very high.',
    ],
    correctAnswer: 0,
    explanation:
      '✅ **A.** — phù hợp với ý tương phản của câu đầu.\n\n❌ **B/C/D** — không liên kết logic với mạch văn.\n\n💡 however = tuy nhiên, diễn tả sự trái ngược.',
  },

  {
    id: 'de-new-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct comparative structure:\nThis book is _____ that one.',
    options: ['as interesting as', 'more interesting as', 'as interesting', 'interesting than'],
    correctAnswer: 0,
    explanation:
      '✅ **A. as interesting as** — cấu trúc so sánh bằng.\n\n❌ **B/C/D** — sai cấu trúc chuẩn.\n\n💡 as + adjective + as.',
  },

  {
    id: 'de-new-q15',
    questionNumber: 15,
    type: 'vocabulary',
    questionText:
      'Choose the correct meaning of "destination".',
    options: ['starting point', 'final place to arrive', 'hotel room', 'travel ticket'],
    correctAnswer: 1,
    explanation:
      '✅ **B. final place to arrive** — destination = điểm đến.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 tourist destination = điểm du lịch.',
  },

  {
    id: 'de-new-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'They were tired, _____ they continued climbing.',
    options: ['because', 'although', 'but', 'so'],
    correctAnswer: 2,
    explanation:
      '✅ **C. but** — nối hai ý trái nghĩa.\n\n❌ **A. because** — nguyên nhân\n❌ **B. although** — cần cấu trúc khác\n❌ **D. so** — kết quả\n\n💡 but = nhưng.',
  },

  {
    id: 'de-new-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the best verb:\nMany tourists _____ Ha Noi every year.',
    options: ['visit', 'visits', 'visited', 'visiting'],
    correctAnswer: 0,
    explanation:
      '✅ **A. visit** — chủ ngữ số nhiều → động từ nguyên mẫu.\n\n❌ **B. visits** — dùng cho chủ ngữ số ít\n❌ **C/D** — sai thì hoặc sai cấu trúc\n\n💡 Present simple describes habits/facts.',
  },

  {
    id: 'de-new-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Choose the logical order:\n1. We bought tickets.\n2. We entered the amusement park.\n3. We rode the roller coaster.',
    options: ['1-2-3', '2-1-3', '3-2-1', '2-3-1'],
    correctAnswer: 0,
    explanation:
      '✅ **A. 1-2-3** — mua vé → vào công viên → chơi tàu lượn.\n\n❌ **B/C/D** — không hợp logic thực tế.\n\n💡 Dạng ordering thường theo hành động thực tế ngoài đời.',
  },

  {
    id: 'de-new-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Would you like some coffee?"',
    options: [
      'Yes, I would love some.',
      'No, I don’t like.',
      'Thanks you very much.',
      'I am fine today.',
    ],
    correctAnswer: 0,
    explanation:
      '✅ **A. Yes, I would love some.** — câu trả lời lịch sự cho lời mời.\n\n❌ **B/C/D** — sai ngữ pháp hoặc không phù hợp ngữ cảnh.\n\n💡 Would you like...? → Yes, please / I’d love to.',
  },

  {
    id: 'de-new-q20',
    questionNumber: 20,
    type: 'vocabulary',
    questionText:
      'Choose the opposite meaning of "rural".',
    options: ['urban', 'village', 'mountainous', 'peaceful'],
    correctAnswer: 0,
    explanation:
      '✅ **A. urban** — rural ↔ urban.\n\n❌ **B/C/D** — không phải từ trái nghĩa trực tiếp.\n\n💡 rural = nông thôn | urban = thành thị.',
  },
]
};

export default deMau02;
