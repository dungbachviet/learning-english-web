
import { Exam } from '@/types';

const deMau01: Exam = {
  id: 'de-mau-01',
  title: 'Đề Mẫu Số 1',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 21',
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
    options: ['value', 'expectation', 'risks', 'cost'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu:\n"Hãy học tiếng Anh tại một trong ba trường của chúng tôi để có trải nghiệm tốt nhất với chi phí thấp nhất."\n\n✅ **D. cost** — cụm đúng là "at the lowest cost" = với chi phí thấp nhất.\n\n❌ **A. value** = giá trị → không dùng để nói trực tiếp về tiền học\n❌ **B. expectation** = sự kỳ vọng → sai nghĩa hoàn toàn\n❌ **C. risks** = rủi ro → không liên quan đến chi phí\n\n💡 Cụm cần nhớ:\n- low cost\n- living cost\n- reduce costs',
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
      '📘 Dịch câu:\n"Hãy luyện tiếng Anh, kết bạn và khám phá nước Anh!"\n\n✅ **D. make** — "make friends" là collocation rất phổ biến, nghĩa là "kết bạn".\n\n❌ **A. meet** — "meet friends" nghĩa là gặp bạn bè đã quen\n❌ **B. build** — "build friends" là sai collocation\n❌ **C. keep** — "keep friends" = duy trì tình bạn, không phù hợp ngữ cảnh\n\n💡 Cụm cần nhớ:\n- make friends\n- meet new people',
  },

  {
    id: 'de21-q3',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nPart-time courses are available in the mornings, afternoons _____ evenings.',
    options: ['and', 'or', 'except', 'including'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu:\n"Các khóa học bán thời gian có vào buổi sáng, buổi chiều hoặc buổi tối."\n\n✅ **B. or** — dùng để đưa ra lựa chọn.\n\n❌ **A. and** — nghĩa là tất cả các buổi\n❌ **C. except** = ngoại trừ → sai nghĩa\n❌ **D. including** = bao gồm → không phù hợp cấu trúc\n\n💡 Cụm thường gặp:\n- tea or coffee\n- mornings or evenings',
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
      '📘 Dịch câu:\n"Tập trung thêm vào ngữ pháp và từ vựng."\n\n✅ **B. on** — collocation đúng là "focus on something".\n\n❌ **A. in** — không đi với "focus"\n❌ **C. at** — sai collocation\n❌ **D. with** — không dùng trong cấu trúc này\n\n💡 Cấu trúc cần nhớ:\n- focus on studies\n- focus on grammar',
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
      '📘 Dịch câu:\n"Ngành du lịch được xem là ngành công nghiệp lớn nhất thế giới."\n\n✅ **B. is considered** — đây là câu bị động ở hiện tại đơn.\n\n❌ **A. consider** — sai ngữ pháp\n❌ **C. are considered** — chủ ngữ số ít nên không dùng "are"\n❌ **D. is considering** — sai thì và sai nghĩa\n\n💡 Công thức bị động:\nS + am/is/are + V3',
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
      '📘 Dịch câu:\n"Số lượng khách du lịch trên toàn thế giới đã đạt 1,04 tỷ vào năm 2012."\n\n✅ **A. reached** — collocation đúng là "reach a number".\n\n❌ **B. came** — không dùng với số liệu kiểu này\n❌ **C. went** — cần thêm up/down\n❌ **D. experienced** — không phù hợp với chủ ngữ\n\n💡 Cụm thường gặp:\n- sales reached...\n- population reached...',
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
      '📘 Dịch câu:\n"Số lượng lớn khách du lịch như vậy đang bắt đầu gây ra vấn đề."\n\n✅ **D. tourists** — sau "large numbers of" cần danh từ số nhiều.\n\n❌ **A. tours** = các chuyến du lịch\n❌ **B. touristic** = tính từ\n❌ **C. tourism** = danh từ không đếm được\n\n💡 Cấu trúc cần nhớ:\n- a number of + plural noun',
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
      '📘 Dịch câu:\n"Hàng nghìn người trượt tuyết đang phá hủy những ngọn núi mà họ đến để tận hưởng."\n\n✅ **C. are destroying** — hiện tại tiếp diễn diễn tả vấn đề đang xảy ra.\n\n❌ **A. destroy** — không nhấn mạnh tính đang diễn ra\n❌ **B. will destroy** — sai thì\n❌ **D. destroyed** — quá khứ đơn\n\n💡 Hiện tại tiếp diễn thường dùng cho xu hướng/vấn đề hiện tại.',
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
      '📘 Dịch câu:\n"Bạn có thể trở thành một khách du lịch có trách nhiệm bằng cách hỏi đại lý du lịch những câu hỏi phù hợp."\n\n✅ **D. asking** — sau giới từ "by" dùng V-ing.\n\n❌ **A. ask** — sai cấu trúc\n❌ **B. to ask** — không dùng sau "by"\n❌ **C. asked** — sai ngữ pháp\n\n💡 Công thức:\nby + V-ing',
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
      '📘 Dịch câu:\n"Dân làng sẽ sớm chết vì họ đã cạn nước sạch."\n\n✅ **B. ran out of** = cạn kiệt thứ gì.\n\n❌ **A. got out of** = thoát khỏi\n❌ **C. grew out of** = không còn thích nữa\n❌ **D. made out of** = làm từ chất liệu gì\n\n💡 Cụm thường gặp:\n- run out of money\n- run out of food',
  },

  {
    id: 'de21-q11',
    questionNumber: 11,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given words:\n/day / despite / rainy / went / they / picnic / the / on / a / .',
    options: [
      'They went on a picnic despite the rainy day.',
      'They despite went on a picnic the rainy day.',
      'Despite they went on a picnic the rainy day.',
      'They went despite on a rainy picnic day.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu:\n"Họ đã đi dã ngoại mặc dù trời mưa."\n\n✅ **A.** — đúng trật tự từ và đúng ngữ pháp.\n\n❌ **B/C/D** — sai vị trí của "despite" và sai trật tự câu.\n\n💡 Cấu trúc cần nhớ:\n- despite + noun/noun phrase\n- despite the rain',
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
      '📘 Dịch câu:\n"Mặc dù có sự trì hoãn bất ngờ, ..."\n\n✅ **A.** — phù hợp với ý nghĩa tích cực của "in spite of".\n\n❌ **B/C/D** — mang nghĩa tiêu cực, không phù hợp ngữ cảnh.\n\n💡 Cấu trúc cần nhớ:\n- in spite of = despite',
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
      '📘 Dịch câu:\n"Anh ấy không thể nhìn rõ nếu không đeo kính."\n\n✅ **B. he wears his glasses** — "unless" = if ... not.\n\n❌ **A.** double negative → sai nghĩa\n❌ **C.** sai thì\n❌ **D.** sai ngữ pháp\n\n💡 Cấu trúc:\nunless = if not',
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
      '📘 Dịch câu:\n"Không có ngọn núi nào ở bán đảo Đông Dương cao bằng Fansipan."\n\n✅ **C. as high as** — cấu trúc so sánh bằng.\n\n❌ **A.** không dùng "higher" trong cấu trúc này\n❌ **B.** thiếu "as"\n❌ **D.** sai cấu trúc\n\n💡 Công thức:\nas + adjective + as',
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
      '📘 Dịch câu:\n"Cảm ơn bạn rất nhiều vì bữa tiệc tuyệt vời."\n\n✅ **D. You are welcome.** — cách đáp lại lời cảm ơn phù hợp nhất.\n\n❌ **A/B/C** — không phù hợp ngữ cảnh giao tiếp.\n\n💡 Các cách đáp lời cảm ơn:\n- My pleasure\n- Not at all\n- No problem',
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
      '📘 Dịch câu:\n"Máy bay của chúng tôi đến Hà Nội lúc 2 giờ chiều."\n\n✅ **A. the** — cụm cố định: in the afternoon.\n\n❌ **B/C/D** — không dùng trong cụm này.\n\n💡 Cụm thời gian:\n- in the morning\n- in the afternoon\n- in the evening',
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
      '📘 Dịch câu:\n"Em trai út của tôi rất thích ăn khoai tây chiên."\n\n✅ **A. of** — collocation đúng là "be fond of".\n\n❌ **B/C/D** — sai collocation.\n\n💡 Cấu trúc:\nbe fond of + noun/V-ing',
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
      '📘 Dịch câu:\n"Cuốn truyện tranh này thú vị đến mức chúng tôi đã đọc nó hai lần."\n\n✅ **C. so** — cấu trúc đúng là "so + adjective + that".\n\n❌ **A. such** — phải là "such an interesting comic book"\n❌ **B. too** — nghĩa là quá mức\n❌ **D. enough** — sai cấu trúc\n\n💡 Công thức:\nso + adj + that + clause',
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
      '📘 Dịch câu:\n"Paul mời Jenny đi ăn tối."\n\n✅ **B.** — diễn đạt đúng nghĩa của từ "invite".\n\n❌ **A/C/D** — sai nghĩa hoàn toàn.\n\n💡 Cấu trúc:\ninvite someone to + place/event',
  },

  {
    id: 'de21-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given words:\n/homework / before / had / finished / they / dinner / their / .',
    options: [
      'They had finished their homework before dinner.',
      'They finished had their homework before dinner.',
      'Before dinner they homework had finished their.',
      'They had their homework finished before dinner.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu:\n"Họ đã hoàn thành bài tập về nhà trước bữa tối."\n\n✅ **A.** — đúng trật tự từ và đúng thì quá khứ hoàn thành.\n\n❌ **B/C/D** — sai trật tự từ hoặc sai cấu trúc ngữ pháp.\n\n💡 Cấu trúc cần nhớ:\n- had + V3\n- had finished',
  },
]
};

export default deMau01;
