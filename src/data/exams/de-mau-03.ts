/**
 * Đề Mẫu Số 3 — Fill in the Blank + Sentence Rewriting
 *
 * Fill-in-blank display:
 *   Cả đoạn văn hiển thị một lần với chỗ trống đánh số **(1)___**
 *   Mỗi câu hỏi hỏi về một ô trống cụ thể, đoạn văn được lặp lại
 *   trong field `passage` để luôn hiển thị khi làm bài.
 */
import { Exam } from '@/types';

const deMau03: Exam = {
  id: 'de-mau-03',
  title: 'Đề Mẫu Số 3',
  year: '2024',
  school: 'Trường THCS Khương Đình - Đề 21',
  description: 'Fill in the Blank · Sentence Ordering · Rewriting',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de21-v41',
    word: 'theory',
    pronunciation: '/ˈθɪəri/',
    partOfSpeech: 'n',
    definition: 'lý thuyết',
    exampleSentence: 'Students learn both theory and practice at school.',
    exampleTranslation: 'Học sinh học cả lý thuyết và thực hành ở trường.',
    wrongOptions: ['kinh nghiệm thực tế', 'kế hoạch tài chính', 'quy định pháp luật'],
  },
  {
    id: 'de21-v42',
    word: 'therefore',
    pronunciation: '/ˈðeəfɔː(r)/',
    partOfSpeech: 'adv',
    definition: 'vì vậy, do đó',
    exampleSentence: 'The roads were crowded; therefore, we arrived late.',
    exampleTranslation: 'Đường đông nên chúng tôi đến muộn.',
    wrongOptions: ['mặc dù vậy', 'trong khi đó', 'ví dụ như'],
  },
  {
    id: 'de21-v43',
    word: 'accept',
    pronunciation: '/əkˈsept/',
    partOfSpeech: 'v',
    definition: 'chấp nhận',
    exampleSentence: 'She accepted the invitation to dinner.',
    exampleTranslation: 'Cô ấy đã chấp nhận lời mời ăn tối.',
    wrongOptions: ['từ chối hoàn toàn', 'phá hủy ngay lập tức', 'trì hoãn quyết định'],
  },
  {
    id: 'de21-v44',
    word: 'nationality',
    pronunciation: '/ˌnæʃəˈnæləti/',
    partOfSpeech: 'n',
    definition: 'quốc tịch',
    exampleSentence: 'What is your nationality?',
    exampleTranslation: 'Quốc tịch của bạn là gì?',
    wrongOptions: ['ngôn ngữ mẹ đẻ', 'quê quán sinh sống', 'nghề nghiệp hiện tại'],
  },
  {
    id: 'de21-v45',
    word: 'worker',
    pronunciation: '/ˈwɜːkə(r)/',
    partOfSpeech: 'n',
    definition: 'công nhân, người lao động',
    exampleSentence: 'The office was painted by the workers yesterday.',
    exampleTranslation: 'Văn phòng đã được các công nhân sơn hôm qua.',
    wrongOptions: ['khách du lịch', 'giáo viên trung học', 'bác sĩ phẫu thuật'],
  },
  {
    id: 'de21-v46',
    word: 'lovely',
    pronunciation: '/ˈlʌvli/',
    partOfSpeech: 'adj',
    definition: 'đáng yêu, dễ thương',
    exampleSentence: 'Thank you for the lovely party.',
    exampleTranslation: 'Cảm ơn vì bữa tiệc đáng yêu.',
    wrongOptions: ['ồn ào hỗn loạn', 'nhàm chán tẻ nhạt', 'đắt đỏ xa xỉ'],
  },
  {
    id: 'de21-v47',
    word: 'experience',
    pronunciation: '/ɪkˈspɪəriəns/',
    partOfSpeech: 'n',
    definition: 'trải nghiệm',
    exampleSentence: 'Studying abroad was a wonderful experience.',
    exampleTranslation: 'Du học là một trải nghiệm tuyệt vời.',
    wrongOptions: ['tai nạn bất ngờ', 'cuộc tranh luận', 'kỳ thi cuối kỳ'],
  },
  {
    id: 'de21-v48',
    word: 'practise',
    pronunciation: '/ˈpræktɪs/',
    partOfSpeech: 'v',
    definition: 'luyện tập',
    exampleSentence: 'You should practise English every day.',
    exampleTranslation: 'Bạn nên luyện tập tiếng Anh mỗi ngày.',
    wrongOptions: ['dịch thuật tài liệu', 'sao chép bài tập', 'tránh né nhiệm vụ'],
  },
  {
    id: 'de21-v49',
    word: 'speaking',
    pronunciation: '/ˈspiːkɪŋ/',
    partOfSpeech: 'n',
    definition: 'kỹ năng nói',
    exampleSentence: 'The course improves speaking and listening skills.',
    exampleTranslation: 'Khóa học cải thiện kỹ năng nói và nghe.',
    wrongOptions: ['kỹ năng viết', 'khả năng tính toán', 'kiến thức lịch sử'],
  },
  {
    id: 'de21-v50',
    word: 'blast',
    pronunciation: '/blɑːst/',
    partOfSpeech: 'n',
    definition: 'khoảng thời gian rất vui',
    exampleSentence: 'We had a blast at the amusement park.',
    exampleTranslation: 'Chúng tôi đã có khoảng thời gian cực vui ở công viên giải trí.',
    wrongOptions: ['một vụ tai nạn', 'một cuộc họp', 'một bài kiểm tra'],
  },
  {
    id: 'de21-v51',
    word: 'delay',
    pronunciation: '/dɪˈleɪ/',
    partOfSpeech: 'n',
    definition: 'sự trì hoãn',
    exampleSentence: 'The unexpected delay made everyone tired.',
    exampleTranslation: 'Sự trì hoãn bất ngờ khiến mọi người mệt mỏi.',
    wrongOptions: ['chiến thắng lớn', 'sự thay đổi thời tiết', 'chuyến tham quan'],
  },
  {
    id: 'de21-v52',
    word: 'exhausted',
    pronunciation: '/ɪɡˈzɔːstɪd/',
    partOfSpeech: 'adj',
    definition: 'kiệt sức',
    exampleSentence: 'We were exhausted after the long day.',
    exampleTranslation: 'Chúng tôi kiệt sức sau một ngày dài.',
    wrongOptions: ['rất phấn khích', 'cực kỳ giàu có', 'hoàn toàn khỏe mạnh'],
  },
  {
    id: 'de21-v53',
    word: 'statistics',
    pronunciation: '/stəˈtɪstɪks/',
    partOfSpeech: 'n',
    definition: 'số liệu thống kê',
    exampleSentence: 'The statistics show rapid tourism growth.',
    exampleTranslation: 'Các số liệu thống kê cho thấy du lịch tăng trưởng nhanh.',
    wrongOptions: ['câu chuyện cổ tích', 'quy định pháp lý', 'bài phát biểu công khai'],
  },
  {
    id: 'de21-v54',
    word: 'worldwide',
    pronunciation: '/ˌwɜːldˈwaɪd/',
    partOfSpeech: 'adv',
    definition: 'trên toàn thế giới',
    exampleSentence: 'Tourist arrivals increased worldwide.',
    exampleTranslation: 'Lượng khách du lịch tăng trên toàn thế giới.',
    wrongOptions: ['trong thành phố', 'ở vùng nông thôn', 'trong quá khứ'],
  },
  {
    id: 'de21-v55',
    word: 'skier',
    pronunciation: '/ˈskiːə(r)/',
    partOfSpeech: 'n',
    definition: 'người trượt tuyết',
    exampleSentence: 'Thousands of skiers visit the Alps every year.',
    exampleTranslation: 'Hàng nghìn người trượt tuyết đến dãy Alps mỗi năm.',
    wrongOptions: ['người leo núi', 'người chèo thuyền', 'người lái máy bay'],
  },
  {
    id: 'de21-v56',
    word: 'covered with',
    pronunciation: '/ˈkʌvəd wɪð/',
    partOfSpeech: 'phr.v',
    definition: 'bị bao phủ bởi',
    exampleSentence: 'The mountains were covered with old tents.',
    exampleTranslation: 'Những ngọn núi bị bao phủ bởi lều cũ.',
    wrongOptions: ['được xây dựng bằng', 'được bảo vệ khỏi', 'được chia thành'],
  },
  {
    id: 'de21-v57',
    word: 'suggest',
    pronunciation: '/səˈdʒest/',
    partOfSpeech: 'v',
    definition: 'đề nghị, gợi ý',
    exampleSentence: 'Paul suggested going out for dinner.',
    exampleTranslation: 'Paul đề nghị đi ăn tối bên ngoài.',
    wrongOptions: ['đe dọa nghiêm trọng', 'ra lệnh bắt buộc', 'phủ nhận hoàn toàn'],
  },
  {
    id: 'de21-v58',
    word: 'invite',
    pronunciation: '/ɪnˈvaɪt/',
    partOfSpeech: 'v',
    definition: 'mời',
    exampleSentence: 'Paul invited Jenny to dinner.',
    exampleTranslation: 'Paul mời Jenny đi ăn tối.',
    wrongOptions: ['đuổi đi', 'chỉ trích', 'phớt lờ'],
  },
  {
    id: 'de21-v59',
    word: 'crowded',
    pronunciation: '/ˈkraʊdɪd/',
    partOfSpeech: 'adj',
    definition: 'đông đúc',
    exampleSentence: 'Ha Noi is becoming more crowded every year.',
    exampleTranslation: 'Hà Nội ngày càng trở nên đông đúc hơn mỗi năm.',
    wrongOptions: ['yên tĩnh vắng vẻ', 'rộng rãi thoải mái', 'sạch sẽ hiện đại'],
  },
  {
    id: 'de21-v60',
    word: 'traditional culture',
    pronunciation: '/trəˈdɪʃənl ˈkʌltʃə(r)/',
    partOfSpeech: 'n',
    definition: 'văn hóa truyền thống',
    exampleSentence: 'Stilt houses show the traditional culture of their owners.',
    exampleTranslation: 'Nhà sàn thể hiện văn hóa truyền thống của chủ sở hữu.',
    wrongOptions: ['công nghệ hiện đại', 'kinh tế thị trường', 'hệ thống giáo dục'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de-new-q21',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe children were excited _____ the school trip.',
    options: ['about', 'with', 'of', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bọn trẻ rất háo hức về chuyến đi của trường."\n\n✅ **A. about** — collocation đúng là "excited about something" (háo hức về điều gì).\n\n❌ **B. with** — không dùng với "excited" trong trường hợp này.\n❌ **C. of** — sai giới từ.\n❌ **D. for** — không tự nhiên trong cấu trúc này.\n\n💡 Common phrase: be excited about = háo hức về điều gì.',
  },

  {
    id: 'de-new-q22',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct verb form:\nIf it rains tomorrow, we _____ at home.',
    options: ['stay', 'stayed', 'will stay', 'are staying'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà."\n\n✅ **C. will stay** — đây là câu điều kiện loại 1: If + hiện tại đơn → will + động từ nguyên mẫu.\n\n❌ **A. stay** — thiếu "will".\n❌ **B. stayed** — sai thì.\n❌ **D. are staying** — không phù hợp cấu trúc câu điều kiện.\n\n💡 Structure: If + present simple, S + will + V.',
  },

  {
    id: 'de-new-q23',
    questionNumber: 3,
    type: 'vocabulary',
    questionText:
      'Choose the best phrasal verb:\nPlease _____ your shoes before entering the house.',
    options: ['take off', 'put off', 'look up', 'set up'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Hãy cởi giày trước khi vào nhà."\n\n✅ **A. take off** — nghĩa là cởi bỏ quần áo, giày dép.\n\n❌ **B. put off** — trì hoãn.\n❌ **C. look up** — tra cứu.\n❌ **D. set up** — thiết lập/thành lập.\n\n💡 Common phrases: take off shoes / coat / glasses.',
  },

  {
    id: 'de-new-q24',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nMy father bought _____ new car yesterday.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bố tôi đã mua một chiếc xe mới hôm qua."\n\n✅ **A. a** — "car" là danh từ đếm được số ít chưa xác định.\n\n❌ **B. an** — chỉ dùng trước âm nguyên âm.\n❌ **C. the** — dùng khi đã xác định cụ thể.\n❌ **D. (no article)** — danh từ số ít cần có mạo từ.\n\n💡 a/an + singular countable noun.',
  },

  {
    id: 'de-new-q25',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe homework _____ by the students last night.',
    options: ['completed', 'was completed', 'completes', 'is completing'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài tập về nhà đã được học sinh hoàn thành tối qua."\n\n✅ **B. was completed** — câu bị động quá khứ đơn: was/were + V3.\n\n❌ **A. completed** — thiếu trợ động từ.\n❌ **C. completes** — chủ động hiện tại đơn.\n❌ **D. is completing** — hiện tại tiếp diễn.\n\n💡 Passive voice: S + was/were + V3.',
  },

  {
    id: 'de-new-q26',
    questionNumber: 6,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nhard / she / studied / the exam / passed / and',
    options: [
      'She studied hard and passed the exam.',
      'She passed and studied hard the exam.',
      'Studied she hard and passed the exam.',
      'She hard studied and passed exam.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Cô ấy học chăm chỉ và đã vượt qua kỳ thi."\n\n✅ **A. She studied hard and passed the exam.** — đúng trật tự từ và đúng ngữ pháp.\n\n❌ **B/C/D** — sai thứ tự từ hoặc thiếu thành phần ngữ pháp.\n\n💡 Trong câu tiếng Anh: Subject + Verb + Object.',
  },

  {
    id: 'de-new-q27',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the best connector:\nHe was hungry, _____ he ate a sandwich.',
    options: ['although', 'because', 'so', 'however'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy đói nên anh ấy đã ăn một chiếc bánh sandwich."\n\n✅ **C. so** — dùng để diễn tả kết quả.\n\n❌ **A. although** — diễn tả tương phản.\n❌ **B. because** — diễn tả nguyên nhân.\n❌ **D. however** — cần cấu trúc dấu câu khác.\n\n💡 so = vì vậy.',
  },

  {
    id: 'de-new-q28',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct form:\nShe enjoys _____ books in her free time.',
    options: ['read', 'reading', 'to read', 'reads'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy thích đọc sách vào thời gian rảnh."\n\n✅ **B. reading** — sau "enjoy" dùng V-ing.\n\n❌ **A/C/D** — sai cấu trúc ngữ pháp.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de-new-q29',
    questionNumber: 9,
    type: 'vocabulary',
    questionText:
      'Choose the word closest in meaning to "famous".',
    options: ['well-known', 'quiet', 'boring', 'difficult'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ gần nghĩa nhất với famous."\n\n✅ **A. well-known** — famous nghĩa là nổi tiếng.\n\n❌ **B. quiet** — yên tĩnh.\n❌ **C. boring** — nhàm chán.\n❌ **D. difficult** — khó.\n\n💡 famous = well-known = nổi tiếng.',
  },

  {
    id: 'de-new-q30',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy mother is interested _____ cooking.',
    options: ['on', 'in', 'at', 'for'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Mẹ tôi thích nấu ăn."\n\n✅ **B. in** — collocation đúng là "interested in".\n\n❌ **A/C/D** — sai giới từ.\n\n💡 be interested in + noun/V-ing.',
  },

  {
    id: 'de-new-q31',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere _____ many students in the classroom now.',
    options: ['is', 'are', 'was', 'be'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Hiện có nhiều học sinh trong lớp học."\n\n✅ **B. are** — "many students" là danh từ số nhiều.\n\n❌ **A. is** — dùng cho số ít.\n❌ **C. was** — quá khứ.\n❌ **D. be** — nguyên mẫu.\n\n💡 there is + singular noun | there are + plural noun.',
  },

  {
    id: 'de-new-q32',
    questionNumber: 12,
    type: 'writing',
    questionText:
      'Choose the best ending:\n"We missed the bus this morning. _____"',
    options: [
      'As a result, we arrived late for school.',
      'Because the weather was beautiful.',
      'The bus stop was painted yesterday.',
      'Everyone likes travelling by bus.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi bị lỡ xe buýt sáng nay. _____"\n\n✅ **A. As a result, we arrived late for school.** — phù hợp logic nguyên nhân → kết quả.\n\n❌ **B/C/D** — không liên quan trực tiếp đến việc lỡ xe buýt.\n\n💡 as a result = kết quả là.',
  },

  {
    id: 'de-new-q33',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct comparative:\nThis exercise is _____ than the previous one.',
    options: ['difficult', 'more difficult', 'most difficult', 'as difficult'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài tập này khó hơn bài trước."\n\n✅ **B. more difficult** — cấu trúc so sánh hơn với tính từ dài.\n\n❌ **A. difficult** — thiếu dạng so sánh.\n❌ **C. most difficult** — so sánh nhất.\n❌ **D. as difficult** — so sánh bằng.\n\n💡 more + adjective + than.',
  },

  {
    id: 'de-new-q34',
    questionNumber: 14,
    type: 'vocabulary',
    questionText:
      'Choose the correct meaning of "adequate".',
    options: ['sufficient', 'expensive', 'dangerous', 'crowded'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu hỏi: "Chọn nghĩa đúng của từ adequate."\n\n✅ **A. sufficient** — adequate nghĩa là đủ, đầy đủ.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 adequate = enough = sufficient.',
  },

  {
    id: 'de-new-q35',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThey _____ football when it started raining.',
    options: ['play', 'were playing', 'played', 'are playing'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Họ đang chơi bóng đá thì trời bắt đầu mưa."\n\n✅ **B. were playing** — hành động đang diễn ra trong quá khứ thì có hành động khác xen vào.\n\n❌ **A/C/D** — sai thì.\n\n💡 Past continuous + past simple.',
  },

  {
    id: 'de-new-q36',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nYou should study harder _____ you want to pass the exam.',
    options: ['although', 'if', 'because', 'unless'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn nên học chăm hơn nếu muốn đỗ kỳ thi."\n\n✅ **B. if** — diễn tả điều kiện.\n\n❌ **A. although** — mặc dù.\n❌ **C. because** — bởi vì.\n❌ **D. unless** — trừ khi.\n\n💡 if = nếu.',
  },

  {
    id: 'de-new-q37',
    questionNumber: 17,
    type: 'vocabulary',
    questionText:
      'Choose the opposite meaning of "cheap".',
    options: ['affordable', 'low-cost', 'expensive', 'valuable'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu hỏi: "Chọn từ trái nghĩa với cheap."\n\n✅ **C. expensive** — cheap ↔ expensive.\n\n❌ **A/B** — gần nghĩa với cheap.\n❌ **D. valuable** — có giá trị, không phải trái nghĩa trực tiếp.\n\n💡 cheap = rẻ | expensive = đắt.',
  },

  {
    id: 'de-new-q38',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\narrived / airport / we / at / the / early',
    options: [
      'We arrived at the airport early.',
      'We early arrived at the airport.',
      'Arrived we at the airport early.',
      'We arrived early the airport at.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Chúng tôi đến sân bay sớm."\n\n✅ **A. We arrived at the airport early.** — đúng trật tự từ và đúng ngữ pháp.\n\n❌ **B/C/D** — sai vị trí trạng từ hoặc sai trật tự câu.\n\n💡 Trạng từ chỉ thời gian thường đứng cuối câu.',
  },

  {
    id: 'de-new-q39',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Thank you for helping me."',
    options: [
      'You are welcome.',
      'I agree with you.',
      'Not at all times.',
      'Good idea.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cảm ơn bạn đã giúp tôi."\n\n✅ **A. You are welcome.** — cách đáp lại lời cảm ơn phù hợp.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh giao tiếp.\n\n💡 Other responses: My pleasure / No problem.',
  },

  {
    id: 'de-new-q40',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nThe city is becoming more _____ because many people move there.',
    options: ['crowded', 'peaceful', 'empty', 'silent'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Thành phố đang trở nên đông đúc hơn vì nhiều người chuyển đến đó."\n\n✅ **A. crowded** — phù hợp với ngữ cảnh nhiều người chuyển tới.\n\n❌ **B. peaceful** — yên bình.\n❌ **C. empty** — trống vắng.\n❌ **D. silent** — im lặng.\n\n💡 crowded city = thành phố đông đúc.',
  },
]
};

export default deMau03;
