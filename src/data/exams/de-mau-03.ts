/**
 * Đề Mẫu Số 3 — Fill in the Blank + Sentence Rewriting
 *
 * Fill-in-blank display:
 *   Cả đoạn văn hiển thị một lần với chỗ trống đánh số **(1)___**
 *   Mỗi câu hỏi hỏi về một ô trống cụ thể, đoạn văn được lặp lại
 *   trong field `passage` để luôn hiển thị khi làm bài.
 */
import { Exam } from '@/types';

// Đoạn thông báo — blanks in bold for easy spotting
const PASSAGE_CHARLES_SCHOOL =
  `📢 CHARLES SCHOOL — Learn English in England\n\n` +
  `Learn English in one of our three schools for the best experience at the lowest **(1)_____**. ` +
  `Choose from London, Oxford or Cambridge. Practise your English, **(2)_____** friends and see England!\n\n` +
  `• General English: Improve your speaking, listening, reading and writing.\n` +
  `• Intensive course: 31 hours/week, Monday–Thursday 9 a.m.–5 p.m., Friday 9 a.m.–12 p.m.\n` +
  `• Part-time course: 15 hours/week, mornings, afternoons **(3)_____** evenings.\n` +
  `• Exam preparation: Extra focus **(4)_____** grammar and vocabulary — 19 hours/week.`;

// Đoạn văn kể chuyện — for Q5 & Q6
const PASSAGE_AMUSEMENT_PARK =
  `We had an amazing time at the amusement park yesterday. ` +
  `Things didn't go exactly as planned, however. _____\n\n` +
  `a. We were all set to ride the roller coaster, but then the ride broke down **unexpectedly**, ` +
  `and we had to wait for over an hour for it to be fixed.\n` +
  `b. The day started off perfectly, with bright sunshine and everyone excited to have fun.\n` +
  `c. It felt like we were waiting forever, but finally, the roller coaster started up again, and we had a blast!`;

const deMau03: Exam = {
  id: 'de-mau-03',
  title: 'Đề Mẫu Số 3',
  year: '2024',
  school: 'Trường THCS Trưng Vương',
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
      '✅ **A. about** — collocation: excited about something.\n\n❌ **B/C/D** — không đi với "excited" trong trường hợp này.\n\n💡 be excited about = háo hức về điều gì.',
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
      '✅ **C. will stay** — câu điều kiện loại 1: If + hiện tại đơn, will + V.\n\n❌ **A/B/D** — sai thì.\n\n💡 If + present simple → will + infinitive.',
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
      '✅ **A. take off** — cởi bỏ.\n\n❌ **B. put off** — trì hoãn\n❌ **C. look up** — tra cứu\n❌ **D. set up** — thành lập\n\n💡 take off clothes/shoes/glasses.',
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
      '✅ **A. a** — "car" là danh từ đếm được số ít chưa xác định.\n\n❌ **B. an** — dùng trước nguyên âm\n❌ **C. the** — không xác định cụ thể chiếc xe nào\n❌ **D.** — danh từ số ít cần mạo từ\n\n💡 a/an + singular countable noun.',
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
      '✅ **B. was completed** — bị động quá khứ đơn.\n\n❌ **A/C/D** — sai cấu trúc bị động hoặc sai thì.\n\n💡 was/were + V3.',
  },

  {
    id: 'de-new-q26',
    questionNumber: 6,
    type: 'writing',
    questionText:
      'Choose the logical order:\n1. She studied very hard.\n2. She passed the exam.\n3. Her parents were proud of her.',
    options: ['1-2-3', '2-1-3', '3-2-1', '1-3-2'],
    correctAnswer: 0,
    explanation:
      '✅ **A. 1-2-3** — học chăm → đỗ kỳ thi → bố mẹ tự hào.\n\n❌ **B/C/D** — không hợp logic.\n\n💡 Xác định nguyên nhân → kết quả → phản ứng.',
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
      '✅ **C. so** — diễn tả kết quả.\n\n❌ **A. although** — tương phản\n❌ **B. because** — nguyên nhân\n❌ **D. however** — cần dấu câu khác\n\n💡 so = vì vậy.',
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
      '✅ **B. reading** — enjoy + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 enjoy doing something.',
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
      '✅ **A. well-known** — famous = nổi tiếng.\n\n❌ **B/C/D** — không cùng nghĩa.\n\n💡 famous = well-known = popular.',
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
      '✅ **B. in** — collocation: interested in.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 be interested in + noun/V-ing.',
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
      '✅ **B. are** — "many students" là số nhiều.\n\n❌ **A/C/D** — sai hòa hợp chủ ngữ - động từ.\n\n💡 there is + singular | there are + plural.',
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
      '✅ **A.** — hợp logic nguyên nhân → kết quả.\n\n❌ **B/C/D** — không liên quan trực tiếp.\n\n💡 Dạng chọn câu kết thúc cần chú ý mạch logic.',
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
      '✅ **B. more difficult** — comparative with "than".\n\n❌ **A/C/D** — sai cấu trúc so sánh.\n\n💡 more + long adjective + than.',
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
      '✅ **A. sufficient** — adequate = đủ.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 adequate transportation = giao thông đầy đủ.',
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
      '✅ **B. were playing** — hành động đang diễn ra thì có hành động khác xen vào.\n\n❌ **A/C/D** — sai thì.\n\n💡 Past continuous + past simple.',
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
      '✅ **B. if** — diễn tả điều kiện.\n\n❌ **A/C/D** — không phù hợp nghĩa.\n\n💡 if = nếu.',
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
      '✅ **C. expensive** — expensive ↔ cheap.\n\n❌ **A/B** — gần nghĩa với cheap\n❌ **D. valuable** — có giá trị, không phải trái nghĩa trực tiếp\n\n💡 cheap ↔ expensive.',
  },

  {
    id: 'de-new-q38',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Choose the logical order:\n1. We checked into the hotel.\n2. We arrived at the airport.\n3. We took a taxi to the city centre.',
    options: ['2-3-1', '1-2-3', '3-2-1', '2-1-3'],
    correctAnswer: 0,
    explanation:
      '✅ **A. 2-3-1** — đến sân bay → đi taxi → nhận phòng khách sạn.\n\n❌ **B/C/D** — không đúng trình tự thực tế.\n\n💡 Dạng ordering thường dựa trên chuỗi hành động tự nhiên.',
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
      '✅ **A. You are welcome.** — đáp lại lời cảm ơn.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 Other responses: My pleasure / No problem.',
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
      '✅ **A. crowded** — đông đúc hơn.\n\n❌ **B/C/D** — trái nghĩa hoặc không phù hợp ngữ cảnh.\n\n💡 crowded city = thành phố đông đúc.',
  },
]
};

export default deMau03;
