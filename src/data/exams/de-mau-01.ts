
import { Exam } from '@/types';

const deMau01: Exam = {
  id: 'de-mau-01',
  title: 'Đề Mẫu Số 1',
  year: '2024',
  school: 'Trường THCS Nguyễn Du',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de21-v21',
    word: 'protection',
    pronunciation: '/prəˈtekʃən/',
    partOfSpeech: 'n',
    definition: 'sự bảo vệ',
    exampleSentence: 'Environmental protection is very important today.',
    exampleTranslation: 'Bảo vệ môi trường rất quan trọng ngày nay.',
    wrongOptions: ['sự phá hủy nghiêm trọng', 'sự cạnh tranh khốc liệt', 'sự mở rộng kinh doanh'],
  },
  {
    id: 'de21-v22',
    word: 'assistant',
    pronunciation: '/əˈsɪstənt/',
    partOfSpeech: 'n',
    definition: 'trợ lý',
    exampleSentence: 'She works as an assistant in a large company.',
    exampleTranslation: 'Cô ấy làm trợ lý trong một công ty lớn.',
    wrongOptions: ['giám đốc điều hành', 'khách hàng thân thiết', 'người bảo vệ'],
  },
  {
    id: 'de21-v23',
    word: 'fond of',
    pronunciation: '/fɒnd əv/',
    partOfSpeech: 'adj phrase',
    definition: 'thích, yêu thích',
    exampleSentence: 'My brother is very fond of eating chips.',
    exampleTranslation: 'Em trai tôi rất thích ăn khoai tây chiên.',
    wrongOptions: ['sợ hãi điều gì', 'chán ghét điều gì', 'quen thuộc với điều gì'],
  },
  {
    id: 'de21-v24',
    word: 'set up',
    pronunciation: '/set ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thành lập',
    exampleSentence: 'My grandfather set up his workshop many years ago.',
    exampleTranslation: 'Ông tôi đã thành lập xưởng làm việc từ nhiều năm trước.',
    wrongOptions: ['hủy bỏ hoàn toàn', 'trốn thoát khỏi', 'từ bỏ giữa chừng'],
  },
  {
    id: 'de21-v25',
    word: 'roller coaster',
    pronunciation: '/ˈrəʊlə ˌkəʊstə(r)/',
    partOfSpeech: 'n',
    definition: 'tàu lượn siêu tốc',
    exampleSentence: 'We waited a long time to ride the roller coaster.',
    exampleTranslation: 'Chúng tôi đã đợi rất lâu để đi tàu lượn siêu tốc.',
    wrongOptions: ['xe điện đụng', 'vòng đu quay', 'tàu điện ngầm'],
  },
  {
    id: 'de21-v26',
    word: 'technical issue',
    pronunciation: '/ˈteknɪkl ˈɪʃuː/',
    partOfSpeech: 'n',
    definition: 'vấn đề kỹ thuật',
    exampleSentence: 'The rides were closed because of technical issues.',
    exampleTranslation: 'Các trò chơi bị đóng cửa vì vấn đề kỹ thuật.',
    wrongOptions: ['vấn đề tài chính', 'sự kiện thể thao', 'quy định pháp luật'],
  },
  {
    id: 'de21-v27',
    word: 'refreshment',
    pronunciation: '/rɪˈfreʃmənt/',
    partOfSpeech: 'n',
    definition: 'đồ ăn/uống nhẹ',
    exampleSentence: 'The park had places to buy refreshments.',
    exampleTranslation: 'Công viên có những nơi bán đồ ăn uống nhẹ.',
    wrongOptions: ['thiết bị điện tử', 'vé tham quan', 'đồ lưu niệm'],
  },
  {
    id: 'de21-v28',
    word: 'economic impact',
    pronunciation: '/ˌiːkəˈnɒmɪk ˈɪmpækt/',
    partOfSpeech: 'n',
    definition: 'tác động kinh tế',
    exampleSentence: 'Tourism has a huge economic impact worldwide.',
    exampleTranslation: 'Du lịch có tác động kinh tế to lớn trên toàn thế giới.',
    wrongOptions: ['ảnh hưởng môi trường', 'thay đổi văn hóa', 'xung đột chính trị'],
  },
  {
    id: 'de21-v29',
    word: 'international',
    pronunciation: '/ˌɪntəˈnæʃənəl/',
    partOfSpeech: 'adj',
    definition: 'quốc tế',
    exampleSentence: 'International tourist arrivals increased rapidly.',
    exampleTranslation: 'Lượng khách du lịch quốc tế tăng nhanh chóng.',
    wrongOptions: ['địa phương', 'cá nhân', 'truyền thống'],
  },
  {
    id: 'de21-v30',
    word: 'arrival',
    pronunciation: '/əˈraɪvl/',
    partOfSpeech: 'n',
    definition: 'sự đến nơi',
    exampleSentence: 'The number of tourist arrivals reached 1.04 billion.',
    exampleTranslation: 'Số lượng khách du lịch đến nơi đạt 1,04 tỷ.',
    wrongOptions: ['sự khởi hành', 'sự chậm trễ', 'sự hủy bỏ'],
  },
  {
    id: 'de21-v31',
    word: 'destroy',
    pronunciation: '/dɪˈstrɔɪ/',
    partOfSpeech: 'v',
    definition: 'phá hủy',
    exampleSentence: 'Too many tourists are destroying the mountains.',
    exampleTranslation: 'Quá nhiều khách du lịch đang phá hủy núi non.',
    wrongOptions: ['xây dựng', 'khám phá', 'bảo vệ'],
  },
  {
    id: 'de21-v32',
    word: 'equipment',
    pronunciation: '/ɪˈkwɪpmənt/',
    partOfSpeech: 'n',
    definition: 'thiết bị',
    exampleSentence: 'Pieces of equipment were left on the mountain.',
    exampleTranslation: 'Các thiết bị bị bỏ lại trên núi.',
    wrongOptions: ['thức ăn nhanh', 'quần áo mùa đông', 'vé tham quan'],
  },
  {
    id: 'de21-v33',
    word: 'travel agent',
    pronunciation: '/ˈtrævl ˈeɪdʒənt/',
    partOfSpeech: 'n',
    definition: 'đại lý du lịch',
    exampleSentence: 'Ask your travel agent before booking a holiday.',
    exampleTranslation: 'Hãy hỏi đại lý du lịch trước khi đặt kỳ nghỉ.',
    wrongOptions: ['phi công hàng không', 'hướng dẫn viên bảo tàng', 'nhân viên khách sạn'],
  },
  {
    id: 'de21-v34',
    word: 'book',
    pronunciation: '/bʊk/',
    partOfSpeech: 'v',
    definition: 'đặt chỗ',
    exampleSentence: 'We booked a holiday online last week.',
    exampleTranslation: 'Chúng tôi đã đặt kỳ nghỉ trực tuyến tuần trước.',
    wrongOptions: ['hủy bỏ chuyến đi', 'bán vé máy bay', 'mang hành lý'],
  },
  {
    id: 'de21-v35',
    word: 'capital',
    pronunciation: '/ˈkæpɪtl/',
    partOfSpeech: 'n',
    definition: 'thủ đô',
    exampleSentence: 'Ha Noi is the capital of Viet Nam.',
    exampleTranslation: 'Hà Nội là thủ đô của Việt Nam.',
    wrongOptions: ['hòn đảo lớn', 'thành phố ven biển', 'vùng nông thôn'],
  },
  {
    id: 'de21-v36',
    word: 'historical',
    pronunciation: '/hɪˈstɒrɪkl/',
    partOfSpeech: 'adj',
    definition: 'mang tính lịch sử',
    exampleSentence: 'Ha Noi has many historical places to visit.',
    exampleTranslation: 'Hà Nội có nhiều địa điểm lịch sử để tham quan.',
    wrongOptions: ['hiện đại hóa', 'bí ẩn kỳ lạ', 'ồn ào đông đúc'],
  },
  {
    id: 'de21-v37',
    word: 'pray',
    pronunciation: '/preɪ/',
    partOfSpeech: 'v',
    definition: 'cầu nguyện',
    exampleSentence: 'Teenagers come here to pray for good exam results.',
    exampleTranslation: 'Thanh thiếu niên đến đây để cầu nguyện cho kết quả thi tốt.',
    wrongOptions: ['tranh cãi gay gắt', 'mua sắm hàng hóa', 'nghiên cứu tài liệu'],
  },
  {
    id: 'de21-v38',
    word: 'pagoda',
    pronunciation: '/pəˈɡəʊdə/',
    partOfSpeech: 'n',
    definition: 'chùa',
    exampleSentence: 'There are many temples and pagodas in Ha Noi.',
    exampleTranslation: 'Có rất nhiều đền và chùa ở Hà Nội.',
    wrongOptions: ['nhà thờ lớn', 'bảo tàng nghệ thuật', 'thư viện công cộng'],
  },
  {
    id: 'de21-v39',
    word: 'labour worker',
    pronunciation: '/ˈleɪbə ˈwɜːkə(r)/',
    partOfSpeech: 'n',
    definition: 'lao động công nhân',
    exampleSentence: 'Ha Noi attracts many labour workers every year.',
    exampleTranslation: 'Hà Nội thu hút nhiều lao động công nhân mỗi năm.',
    wrongOptions: ['nhà khoa học', 'diễn viên nổi tiếng', 'hướng dẫn viên du lịch'],
  },
  {
    id: 'de21-v40',
    word: 'communal house',
    pronunciation: '/kəˈmjuːnl haʊs/',
    partOfSpeech: 'n',
    definition: 'nhà cộng đồng',
    exampleSentence: 'The communal house is the heart of the village.',
    exampleTranslation: 'Nhà cộng đồng là trung tâm của ngôi làng.',
    wrongOptions: ['nhà máy sản xuất', 'trạm xe buýt', 'khu nghỉ dưỡng'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de21-q1',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the best word for the blank:\nLearn English in one of our three schools for the best experience at the lowest _____ .',
    options: ['value', 'expectation', 'risks', 'costs'],
    correctAnswer: 3,
    explanation:
      '✅ **D. costs** — "at the lowest costs" means với chi phí thấp nhất. Đây là cụm phù hợp về nghĩa trong quảng cáo khóa học.\n\n❌ **A. value** — "value" = giá trị, không dùng để nói giá tiền trực tiếp trong ngữ cảnh này\n❌ **B. expectation** — nghĩa là sự kỳ vọng, hoàn toàn sai nghĩa\n❌ **C. risks** — nghĩa là rủi ro, không liên quan đến học phí hay giá cả\n\n💡 Common collocations: low cost, reduce costs, living costs.',
  },

  {
    id: 'de21-q2',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the best word for the blank:\nPractise your English, _____ friends and see England!',
    options: ['meet', 'build', 'keep', 'make'],
    correctAnswer: 3,
    explanation:
      '✅ **D. make** — "make friends" là collocation rất phổ biến, có nghĩa là "kết bạn". Đây là cách diễn đạt tự nhiên trong quảng cáo du học hoặc du lịch.\n\n❌ **A. meet** — "meet friends" nghĩa là gặp bạn bè đã quen, không phù hợp bằng "make friends" trong ngữ cảnh này.\n❌ **B. build** — "build friends" là sai collocation.\n❌ **C. keep** — "keep friends" nghĩa là duy trì tình bạn, không phù hợp ngữ cảnh.\n\n💡 Common phrase: **make friends** = kết bạn.',
  },

  {
    id: 'de21-q3',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nPart-time course: mornings, afternoons _____ evenings.',
    options: ['and', 'or', 'except', 'include'],
    correctAnswer: 1,
    explanation:
      '✅ **B. or** — "mornings, afternoons or evenings" nghĩa là học vào buổi sáng, chiều hoặc tối.\n\n❌ **A. and** — dùng "and" sẽ khiến nghĩa trở thành học tất cả các buổi\n❌ **C. except** — nghĩa là ngoại trừ, sai logic\n❌ **D. include** — là động từ, không thể nối các lựa chọn trong cấu trúc này\n\n💡 "or" thường dùng khi đưa ra lựa chọn.',
  },

  {
    id: 'de21-q4',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nExtra focus _____ grammar and vocabulary.',
    options: ['in', 'on', 'at', 'with'],
    correctAnswer: 1,
    explanation:
      '✅ **B. on** — collocation đúng là "focus on something".\n\n❌ **A. in** — không đi với "focus"\n❌ **C. at** — sai collocation\n❌ **D. with** — không dùng trong cấu trúc này\n\n💡 Remember: focus on studies / focus on grammar / concentrate on work.',
  },

  {
    id: 'de21-q5',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the best answer:\nThe tourist industry _____ to be the world’s largest industry.',
    options: ['consider', 'is considered', 'are considered', 'is considering'],
    correctAnswer: 1,
    explanation:
      '✅ **B. is considered** — đây là câu bị động ở hiện tại đơn: "is considered to be..."\n\n❌ **A. consider** — thiếu chủ ngữ thực hiện hành động\n❌ **C. are considered** — sai vì chủ ngữ "industry" là số ít\n❌ **D. is considering** — hiện tại tiếp diễn, sai nghĩa\n\n💡 Passive voice: S + am/is/are + V3.',
  },

  {
    id: 'de21-q6',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct verb:\nThe number of tourist arrivals worldwide _____ 1.04 billion in 2012.',
    options: ['reached', 'came', 'went', 'experienced'],
    correctAnswer: 0,
    explanation:
      '✅ **A. reached** — "reach + number" là collocation rất phổ biến.\n\n❌ **B. came** — không dùng với số liệu theo cách này\n❌ **C. went** — cần thêm giới từ "up/down"\n❌ **D. experienced** — không phù hợp với chủ ngữ là "number"\n\n💡 Common structure: population reached..., sales reached..., temperature reached...',
  },

  {
    id: 'de21-q7',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct noun:\nSuch large numbers of _____ are beginning to cause problems.',
    options: ['tours', 'touristic', 'tourism', 'tourists'],
    correctAnswer: 3,
    explanation:
      '✅ **D. tourists** — "large numbers of + plural noun".\n\n❌ **A. tours** — tour = chuyến du lịch, không phải người\n❌ **B. touristic** — tính từ, không dùng sau "numbers of"\n❌ **C. tourism** — danh từ không đếm được\n\n💡 "a number of + plural noun + plural verb".',
  },

  {
    id: 'de21-q8',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the best verb form:\nThousands of skiers _____ the mountains they come to enjoy.',
    options: ['destroy', 'will destroy', 'are destroying', 'destroyed'],
    correctAnswer: 2,
    explanation:
      '✅ **C. are destroying** — hiện tại tiếp diễn diễn tả vấn đề đang xảy ra.\n\n❌ **A. destroy** — hiện tại đơn không nhấn mạnh tính đang diễn ra\n❌ **B. will destroy** — tương lai, sai ngữ cảnh\n❌ **D. destroyed** — quá khứ đơn, sai thời gian\n\n💡 Present continuous often describes current trends/problems.',
  },

  {
    id: 'de21-q9',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct form:\nYou can be a responsible tourist by _____ your travel agent the right questions.',
    options: ['ask', 'to ask', 'asked', 'asking'],
    correctAnswer: 3,
    explanation:
      '✅ **D. asking** — sau giới từ "by" dùng V-ing.\n\n❌ **A. ask** — động từ nguyên mẫu, sai cấu trúc\n❌ **B. to ask** — infinitive không dùng sau "by"\n❌ **C. asked** — quá khứ phân từ, sai ngữ pháp\n\n💡 Structure: by + V-ing.',
  },

  {
    id: 'de21-q10',
    questionNumber: 10,
    type: 'vocabulary',
    questionText:
      'Choose the best phrasal verb:\nThe villagers will soon die because they _____ fresh water.',
    options: ['got out of', 'ran out of', 'grew out of', 'made out of'],
    correctAnswer: 1,
    explanation:
      '✅ **B. ran out of** = cạn kiệt thứ gì.\n\n❌ **A. got out of** — thoát khỏi\n❌ **C. grew out of** — không còn thích/thói quen nữa\n❌ **D. made out of** — làm từ chất liệu gì\n\n💡 run out of money / water / food / time.',
  },

  {
    id: 'de21-q11',
    questionNumber: 11,
    type: 'writing',
    questionText:
      'Choose the correct order of the sentences:\n1. The day started off perfectly.\n2. The roller coaster broke down unexpectedly.\n3. Finally, the roller coaster started up again.',
    options: ['1-3-2', '2-3-1', '3-1-2', '1-2-3'],
    correctAnswer: 3,
    explanation:
      '✅ **D. 1-2-3** — logic tự nhiên: bắt đầu vui vẻ → gặp sự cố → cuối cùng hoạt động lại.\n\n❌ **A/B/C** — các đáp án này khiến trình tự sự việc không hợp lý về thời gian.\n\n💡 Với dạng sắp xếp câu, hãy tìm: mở đầu → vấn đề → kết quả.',
  },

  {
    id: 'de21-q12',
    questionNumber: 12,
    type: 'writing',
    questionText:
      'Choose the best ending sentence:\n"In spite of the unexpected delay, _____"',
    options: [
      'the whole family still had a memorable day.',
      'the roller coaster never worked again.',
      'everyone went home immediately.',
      'the weather suddenly became terrible.',
    ],
    correctAnswer: 0,
    explanation:
      '✅ **A.** — phù hợp với ý nghĩa tích cực của cụm "In spite of".\n\n❌ **B/C/D** — mang nghĩa tiêu cực, không phù hợp với mạch văn.\n\n💡 "In spite of" thường dẫn đến kết quả trái mong đợi.',
  },

  {
    id: 'de21-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct sentence:\nHe can’t see well unless _____ .',
    options: [
      'he doesn’t wear his glasses',
      'he wears his glasses',
      'he wore his glasses',
      'he wearing his glasses',
    ],
    correctAnswer: 1,
    explanation:
      '✅ **B. he wears his glasses** — "unless" = if not.\n\n❌ **A.** double negative → sai nghĩa\n❌ **C.** sai thì\n❌ **D.** sai ngữ pháp\n\n💡 unless = if ... not.',
  },

  {
    id: 'de21-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nNo mountain in the Indochinese Peninsula is _____ Fansipan.',
    options: [
      'as higher as',
      'higher as',
      'as high as',
      'the highest',
    ],
    correctAnswer: 2,
    explanation:
      '✅ **C. as high as** — cấu trúc so sánh bằng: as + adj + as.\n\n❌ **A.** không dùng "higher" trong cấu trúc này\n❌ **B.** thiếu "as"\n❌ **D.** sai hoàn toàn về cấu trúc\n\n💡 as + adjective + as.',
  },

  {
    id: 'de21-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the best response:\n"Thank you very much for a lovely party."',
    options: [
      'Have a good day.',
      'Thanks.',
      'Cheers.',
      'You are welcome.',
    ],
    correctAnswer: 3,
    explanation:
      '✅ **D. You are welcome.** — câu đáp lại lời cảm ơn phù hợp nhất.\n\n❌ **A/B/C** — không phù hợp ngữ cảnh giao tiếp.\n\n💡 Other responses: My pleasure / Not at all / No problem.',
  },

  {
    id: 'de21-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nOur plane arrives in Hanoi at two o’clock in _____ afternoon.',
    options: ['the', 'a', '(no article)', 'an'],
    correctAnswer: 0,
    explanation:
      '✅ **A. the** — fixed phrase: in the afternoon.\n\n❌ **B/C/D** — không dùng trong cụm cố định này.\n\n💡 in the morning / afternoon / evening.',
  },

  {
    id: 'de21-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy youngest brother is very fond _____ eating chips.',
    options: ['of', 'about', 'at', 'with'],
    correctAnswer: 0,
    explanation:
      '✅ **A. of** — collocation đúng: be fond of.\n\n❌ **B/C/D** — sai collocation.\n\n💡 be fond of + noun/V-ing.',
  },

  {
    id: 'de21-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the best answer:\nThis comic book is _____ interesting that we have read it twice.',
    options: ['such', 'too', 'so', 'enough'],
    correctAnswer: 2,
    explanation:
      '✅ **C. so** — cấu trúc: so + adjective + that.\n\n❌ **A. such** — phải là "such an interesting comic book"\n❌ **B. too** — mang nghĩa quá mức\n❌ **D. enough** — cấu trúc khác hoàn toàn\n\n💡 so + adj + that + clause.',
  },

  {
    id: 'de21-q19',
    questionNumber: 19,
    type: 'writing',
    questionText:
      'Choose the sentence closest in meaning:\n"Paul invited Jenny to dinner."',
    options: [
      'Paul suggested Jenny study harder.',
      'Paul asked Jenny to have dinner with him.',
      'Paul forced Jenny to go to dinner.',
      'Paul refused to meet Jenny.',
    ],
    correctAnswer: 1,
    explanation:
      '✅ **B.** — đúng nghĩa của "invite".\n\n❌ **A/C/D** — sai nghĩa hoàn toàn.\n\n💡 invite someone to + place/event.',
  },

  {
    id: 'de21-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Choose the best order to make a logical paragraph:\n1. People climbed the staircase.\n2. The stilt houses stood above the ground.\n3. The houses protected people from wild animals.',
    options: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'],
    correctAnswer: 0,
    explanation:
      '✅ **A. 2-3-1** — giới thiệu nhà sàn → tác dụng → cách đi vào nhà.\n\n❌ **B/C/D** — trình tự ý tưởng không tự nhiên.\n\n💡 Dạng paragraph ordering thường đi theo: description → function → detail.',
  },
]
};

export default deMau01;
