
import { Exam } from '@/types';

const deMau22: Exam = {
  id: 'de-mau-22',
  title: 'Đề Mẫu Số 22',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề thật 2024',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de120-v26',
    word: 'landscapes',
    pronunciation: '/ˈlændskeɪps/',
    partOfSpeech: 'n',
    definition: 'phong cảnh',
    exampleSentence: 'New Zealand is famous for its beautiful landscapes.',
    exampleTranslation: 'New Zealand nổi tiếng với những phong cảnh đẹp.',
    wrongOptions: ['tòa nhà', 'món ăn', 'lễ hội'],
  },
  {
    id: 'de120-v27',
    word: 'harbour views',
    pronunciation: '/ˈhɑːbə vjuːz/',
    partOfSpeech: 'n.phr',
    definition: 'cảnh bến cảng',
    exampleSentence: 'The hotel offers amazing harbour views.',
    exampleTranslation: 'Khách sạn có tầm nhìn tuyệt đẹp ra bến cảng.',
    wrongOptions: ['đường núi', 'công viên', 'cánh đồng'],
  },
  {
    id: 'de120-v28',
    word: 'delighted',
    pronunciation: '/dɪˈlaɪtɪd/',
    partOfSpeech: 'adj',
    definition: 'rất vui sướng',
    exampleSentence: 'She was delighted to hear the good news.',
    exampleTranslation: 'Cô ấy rất vui khi nghe tin tốt.',
    wrongOptions: ['thất vọng', 'lo lắng', 'buồn ngủ'],
  },
  {
    id: 'de120-v29',
    word: 'depressed',
    pronunciation: '/dɪˈprest/',
    partOfSpeech: 'adj',
    definition: 'buồn chán / chán nản',
    exampleSentence: 'He felt depressed after failing the exam.',
    exampleTranslation: 'Anh ấy cảm thấy chán nản sau khi trượt kỳ thi.',
    wrongOptions: ['hào hứng', 'tự tin', 'thoải mái'],
  },
  {
    id: 'de120-v30',
    word: 'unsafe',
    pronunciation: '/ʌnˈseɪf/',
    partOfSpeech: 'adj',
    definition: 'không an toàn',
    exampleSentence: 'The bridge is unsafe during storms.',
    exampleTranslation: 'Cây cầu không an toàn trong lúc bão.',
    wrongOptions: ['sạch sẽ', 'hiện đại', 'rộng lớn'],
  },
  {
    id: 'de120-v31',
    word: 'pull down',
    pronunciation: '/pʊl daʊn/',
    partOfSpeech: 'v.phr',
    definition: 'phá bỏ',
    exampleSentence: 'The old buildings will be pulled down soon.',
    exampleTranslation: 'Những tòa nhà cũ sẽ sớm bị phá bỏ.',
    wrongOptions: ['xây dựng', 'trang trí', 'sửa chữa'],
  },
  {
    id: 'de120-v32',
    word: 'jigsaw puzzles',
    pronunciation: '/ˈdʒɪɡsɔː ˈpʌzlz/',
    partOfSpeech: 'n.phr',
    definition: 'trò chơi ghép hình',
    exampleSentence: 'My little brother enjoys doing jigsaw puzzles.',
    exampleTranslation: 'Em trai tôi thích chơi trò ghép hình.',
    wrongOptions: ['trò chơi bóng đá', 'truyện tranh', 'đàn piano'],
  },
  {
    id: 'de120-v33',
    word: 'boring',
    pronunciation: '/ˈbɔːrɪŋ/',
    partOfSpeech: 'adj',
    definition: 'nhàm chán',
    exampleSentence: 'The lecture was long and boring.',
    exampleTranslation: 'Bài giảng dài và nhàm chán.',
    wrongOptions: ['thú vị', 'ngắn gọn', 'hài hước'],
  },
  {
    id: 'de120-v34',
    word: 'explore',
    pronunciation: '/ɪkˈsplɔː(r)/',
    partOfSpeech: 'v',
    definition: 'khám phá',
    exampleSentence: 'We want to explore new places this summer.',
    exampleTranslation: 'Chúng tôi muốn khám phá những nơi mới vào mùa hè này.',
    wrongOptions: ['tránh né', 'bỏ cuộc', 'sao chép'],
  },
  {
    id: 'de120-v35',
    word: 'intensive',
    pronunciation: '/ɪnˈtensɪv/',
    partOfSpeech: 'adj',
    definition: 'chuyên sâu',
    exampleSentence: 'She joined an intensive English course.',
    exampleTranslation: 'Cô ấy tham gia khóa học tiếng Anh chuyên sâu.',
    wrongOptions: ['đơn giản', 'miễn phí', 'ngắn hạn'],
  },
  {
    id: 'de120-v36',
    word: 'achieve',
    pronunciation: '/əˈtʃiːv/',
    partOfSpeech: 'v',
    definition: 'đạt được',
    exampleSentence: 'Hard work helps students achieve success.',
    exampleTranslation: 'Làm việc chăm chỉ giúp học sinh đạt được thành công.',
    wrongOptions: ['đánh mất', 'che giấu', 'trì hoãn'],
  },
  {
    id: 'de120-v37',
    word: 'proficiency',
    pronunciation: '/prəˈfɪʃnsi/',
    partOfSpeech: 'n',
    definition: 'sự thành thạo',
    exampleSentence: 'Her English proficiency has improved a lot.',
    exampleTranslation: 'Trình độ tiếng Anh của cô ấy đã cải thiện rất nhiều.',
    wrongOptions: ['sự thất bại', 'sự lo lắng', 'sự tò mò'],
  },
  {
    id: 'de120-v38',
    word: 'instruction',
    pronunciation: '/ɪnˈstrʌkʃn/',
    partOfSpeech: 'n',
    definition: 'sự hướng dẫn',
    exampleSentence: 'Please read the instructions carefully.',
    exampleTranslation: 'Hãy đọc kỹ hướng dẫn.',
    wrongOptions: ['sự tranh cãi', 'sự giải trí', 'sự lựa chọn'],
  },
  {
    id: 'de120-v39',
    word: 'personalised',
    pronunciation: '/ˈpɜːsənəlaɪzd/',
    partOfSpeech: 'adj',
    definition: 'được cá nhân hóa',
    exampleSentence: 'Students receive personalised learning plans.',
    exampleTranslation: 'Học sinh nhận được kế hoạch học tập được cá nhân hóa.',
    wrongOptions: ['công khai', 'truyền thống', 'bắt buộc'],
  },
  {
    id: 'de120-v40',
    word: 'tailored',
    pronunciation: '/ˈteɪləd/',
    partOfSpeech: 'adj',
    definition: 'được thiết kế phù hợp',
    exampleSentence: 'The course is tailored to students’ needs.',
    exampleTranslation: 'Khóa học được thiết kế phù hợp với nhu cầu của học sinh.',
    wrongOptions: ['ngẫu nhiên', 'cũ kỹ', 'khó hiểu'],
  },
  {
    id: 'de120-v41',
    word: 'individual needs',
    pronunciation: '/ˌɪndɪˈvɪdʒuəl niːdz/',
    partOfSpeech: 'n.phr',
    definition: 'nhu cầu cá nhân',
    exampleSentence: 'Teachers should understand students’ individual needs.',
    exampleTranslation: 'Giáo viên nên hiểu nhu cầu cá nhân của học sinh.',
    wrongOptions: ['kế hoạch du lịch', 'môn học yêu thích', 'thời tiết xấu'],
  },
  {
    id: 'de120-v42',
    word: 'accommodation',
    pronunciation: '/əˌkɒməˈdeɪʃn/',
    partOfSpeech: 'n',
    definition: 'chỗ ở',
    exampleSentence: 'The school provides accommodation for students.',
    exampleTranslation: 'Trường cung cấp chỗ ở cho học sinh.',
    wrongOptions: ['phương tiện', 'thức ăn', 'vé máy bay'],
  },
  {
    id: 'de120-v43',
    word: 'excursions',
    pronunciation: '/ɪkˈskɜːʃnz/',
    partOfSpeech: 'n',
    definition: 'chuyến tham quan',
    exampleSentence: 'The camp includes two excursions every week.',
    exampleTranslation: 'Trại hè bao gồm hai chuyến tham quan mỗi tuần.',
    wrongOptions: ['bài kiểm tra', 'cuộc thi', 'buổi hòa nhạc'],
  },
  {
    id: 'de120-v44',
    word: 'climate change',
    pronunciation: '/ˈklaɪmət tʃeɪndʒ/',
    partOfSpeech: 'n.phr',
    definition: 'biến đổi khí hậu',
    exampleSentence: 'Climate change affects people around the world.',
    exampleTranslation: 'Biến đổi khí hậu ảnh hưởng đến mọi người trên toàn thế giới.',
    wrongOptions: ['ô nhiễm tiếng ồn', 'giao thông', 'dân số'],
  },
  {
    id: 'de120-v45',
    word: 'imagination',
    pronunciation: '/ɪˌmædʒɪˈneɪʃn/',
    partOfSpeech: 'n',
    definition: 'trí tưởng tượng',
    exampleSentence: 'Reading books can improve children’s imagination.',
    exampleTranslation: 'Đọc sách có thể cải thiện trí tưởng tượng của trẻ em.',
    wrongOptions: ['sức khỏe', 'chiều cao', 'trí nhớ'],
  },
  {
    id: 'de120-v46',
    word: 'creativity',
    pronunciation: '/ˌkriːeɪˈtɪvəti/',
    partOfSpeech: 'n',
    definition: 'sự sáng tạo',
    exampleSentence: 'Art activities encourage creativity.',
    exampleTranslation: 'Các hoạt động nghệ thuật khuyến khích sự sáng tạo.',
    wrongOptions: ['sự căng thẳng', 'sự thất bại', 'sự lo lắng'],
  },
  {
    id: 'de120-v47',
    word: 'spelling mistakes',
    pronunciation: '/ˈspelɪŋ mɪˈsteɪks/',
    partOfSpeech: 'n.phr',
    definition: 'lỗi chính tả',
    exampleSentence: 'You should check your spelling mistakes carefully.',
    exampleTranslation: 'Bạn nên kiểm tra kỹ các lỗi chính tả.',
    wrongOptions: ['bài tập khó', 'điểm cao', 'thời khóa biểu'],
  },
  {
    id: 'de120-v48',
    word: 'wedding anniversary',
    pronunciation: '/ˈwedɪŋ ˌænɪˈvɜːsəri/',
    partOfSpeech: 'n.phr',
    definition: 'kỷ niệm ngày cưới',
    exampleSentence: 'They celebrated their wedding anniversary at a restaurant.',
    exampleTranslation: 'Họ kỷ niệm ngày cưới tại một nhà hàng.',
    wrongOptions: ['sinh nhật', 'lễ tốt nghiệp', 'cuộc họp lớp'],
  },
  {
    id: 'de120-v49',
    word: 'environmental benefits',
    pronunciation: '/ɪnˌvaɪrənˈmentl ˈbenɪfɪts/',
    partOfSpeech: 'n.phr',
    definition: 'lợi ích môi trường',
    exampleSentence: 'Cycling has many environmental benefits.',
    exampleTranslation: 'Đi xe đạp có nhiều lợi ích cho môi trường.',
    wrongOptions: ['chi phí cao', 'nguy cơ sức khỏe', 'áp lực học tập'],
  },
  {
    id: 'de120-v50',
    word: 'enjoyable',
    pronunciation: '/ɪnˈdʒɔɪəbl/',
    partOfSpeech: 'adj',
    definition: 'thú vị / dễ chịu',
    exampleSentence: 'The trip was very enjoyable for everyone.',
    exampleTranslation: 'Chuyến đi rất thú vị đối với mọi người.',
    wrongOptions: ['đáng sợ', 'mệt mỏi', 'khó khăn'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de12-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe children were excited _____ the school trip next week.',
    options: ['about', 'with', 'for', 'into'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bọn trẻ rất hào hứng về chuyến đi của trường vào tuần tới."\n\n✅ **A. about** — collocation đúng là: excited about something.\n\n❌ **B/C/D** — sai giới từ đi kèm.\n\n💡 excited about = hào hứng về điều gì.',
  },

  {
    id: 'de12-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nShe _____ her homework before going out with her friends yesterday.',
    options: ['finishes', 'had finished', 'has finished', 'finish'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy đã hoàn thành bài tập trước khi ra ngoài với bạn hôm qua."\n\n✅ **B. had finished** — hành động xảy ra trước một hành động khác trong quá khứ → dùng quá khứ hoàn thành.\n\n❌ **A/C/D** — sai thì động từ.\n\n💡 had + V3/ed dùng cho hành động xảy ra trước trong quá khứ.',
  },

  {
    id: 'de12-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nLearning a foreign language requires a lot of _____.',
    options: ['patient', 'patience', 'patiently', 'impatient'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Học ngoại ngữ đòi hỏi rất nhiều sự kiên nhẫn."\n\n✅ **B. patience** — cần danh từ sau “a lot of”.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 a lot of + noun.',
  },

  {
    id: 'de12-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the best response:\n“Thank you for helping me with my project.”',
    options: [
      'Never mind.',
      'That sounds terrible.',
      'You’re welcome.',
      'I don’t agree.',
    ],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cảm ơn bạn đã giúp tôi với dự án."\n\n✅ **C. You’re welcome.** — đáp lại lời cảm ơn phù hợp.\n\n❌ **A/B/D** — không phù hợp ngữ cảnh giao tiếp.\n\n💡 Thank you → You’re welcome.',
  },

  {
    id: 'de12-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nMy father bought me _____ new laptop yesterday.',
    options: ['an', 'the', 'Ø (no article)', 'a'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Bố tôi đã mua cho tôi một chiếc laptop mới hôm qua."\n\n✅ **D. a** — dùng trước danh từ số ít chưa xác định.\n\n❌ **A/B/C** — không phù hợp.\n\n💡 a/an + singular countable noun.',
  },

  {
    id: 'de12-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nThe weather was rainy; _____, the football match continued.',
    options: ['because', 'however', 'therefore', 'although'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Thời tiết mưa; tuy nhiên, trận bóng vẫn tiếp tục."\n\n✅ **B. however** — dùng để chỉ sự tương phản.\n\n❌ **A/C/D** — sai logic câu.\n\n💡 however = tuy nhiên.',
  },

  {
    id: 'de12-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nMy teacher advised me _____ harder for the final exam.',
    options: ['study', 'studying', 'to study', 'studied'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Giáo viên khuyên tôi học chăm hơn cho kỳ thi cuối kỳ."\n\n✅ **C. to study** — cấu trúc: advise somebody to do something.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 advise + O + to V.',
  },

  {
    id: 'de12-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct comparative form:\nThis exercise is _____ than the previous one.',
    options: ['difficult', 'more difficult', 'most difficult', 'difficulty'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài tập này khó hơn bài trước."\n\n✅ **B. more difficult** — so sánh hơn với tính từ dài.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 more + adjective + than.',
  },

  {
    id: 'de12-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nWe should _____ old clothes instead of throwing them away.',
    options: ['turn off', 'look after', 'give away', 'take after'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Chúng ta nên cho đi quần áo cũ thay vì vứt chúng đi."\n\n✅ **C. give away** — nghĩa là cho tặng.\n\n❌ **A/B/D** — sai nghĩa.\n\n💡 give away = cho đi, quyên góp.',
  },

  {
    id: 'de12-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct quantifier:\nThere isn’t _____ milk left in the fridge.',
    options: ['many', 'a few', 'much', 'few'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Không còn nhiều sữa trong tủ lạnh."\n\n✅ **C. much** — dùng với danh từ không đếm được trong câu phủ định.\n\n❌ **A/B/D** — sai loại danh từ.\n\n💡 much + uncountable noun.',
  },

  {
    id: 'de12-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nEnglish _____ in many countries around the world.',
    options: ['speaks', 'is spoken', 'spoke', 'is speaking'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói ở nhiều quốc gia trên thế giới."\n\n✅ **B. is spoken** — câu bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 Passive: be + V3/ed.',
  },

  {
    id: 'de12-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct relative pronoun:\nThe woman _____ lives next door is a doctor.',
    options: ['which', 'where', 'who', 'when'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Người phụ nữ sống cạnh nhà là bác sĩ."\n\n✅ **C. who** — thay cho người.\n\n❌ **A/B/D** — không dùng cho người.\n\n💡 who = đại từ quan hệ chỉ người.',
  },

  {
    id: 'de12-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n“Would you like to join our English club?”',
    options: [
      'Yes, I’d love to.',
      'That’s impossible.',
      'I’m sorry to hear that.',
      'No problem at all.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn có muốn tham gia câu lạc bộ tiếng Anh của chúng tôi không?"\n\n✅ **A. Yes, I’d love to.** — cách trả lời lời mời phù hợp.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 Would you like to...? → Yes, I’d love to.',
  },

  {
    id: 'de12-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nThe school library provides students with useful _____.',
    options: ['inform', 'information', 'informative', 'informer'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Thư viện trường cung cấp cho học sinh thông tin hữu ích."\n\n✅ **B. information** — cần danh từ sau “useful”.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 information là danh từ không đếm được.',
  },

  {
    id: 'de12-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct conditional sentence:\nIf I had more free time, I _____ painting classes.',
    options: ['join', 'will join', 'would join', 'joined'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nếu tôi có nhiều thời gian rảnh hơn, tôi sẽ tham gia lớp học vẽ."\n\n✅ **C. would join** — câu điều kiện loại 2.\n\n❌ **A/B/D** — sai thì động từ.\n\n💡 If + past simple → would + V.',
  },

  {
    id: 'de12-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct collocation:\nStudents should _____ attention in class.',
    options: ['make', 'pay', 'do', 'take'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Học sinh nên chú ý trong lớp."\n\n✅ **B. pay** — collocation đúng: pay attention.\n\n❌ **A/C/D** — không đi với “attention”.\n\n💡 pay attention = chú ý.',
  },

  {
    id: 'de12-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct sentence:\nThe film was so _____ that everyone laughed loudly.',
    options: ['boring', 'funny', 'terrified', 'dangerous'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bộ phim hài đến mức mọi người cười lớn."\n\n✅ **B. funny** — phù hợp với hành động “laughed loudly”.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 funny = hài hước.',
  },

  {
    id: 'de12-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the sentence closest in meaning:\nPeople should protect endangered animals.',
    options: [
      'Endangered animals should protect people.',
      'Endangered animals should be protected.',
      'People are endangered by animals.',
      'Animals protected people in danger.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Con người nên bảo vệ động vật có nguy cơ tuyệt chủng."\n\n✅ **B** — chuyển sang câu bị động đúng nghĩa.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 Passive voice giúp nhấn mạnh đối tượng bị tác động.',
  },

  {
    id: 'de12-q19',
    questionNumber: 19,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nNam / enjoy / play / basketball / after school.',
    options: [
      'Nam enjoys playing basketball after school.',
      'Nam enjoys to play basketball after school.',
      'Nam enjoys playing basketball after school.',
      'Nam enjoying playing basketball after school.',
    ],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Nam thích chơi bóng rổ sau giờ học."\n\n✅ **C** — đúng cấu trúc: enjoy + V-ing.\n\n❌ **A/B/D** — sai chính tả hoặc ngữ pháp.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de12-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nmy sister / wants / doctor / become / to / a',
    options: [
      'My sister wants become to a doctor.',
      'My sister wants to become a doctor.',
      'My sister become wants to a doctor.',
      'My sister to wants become a doctor.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu đúng: "Chị gái tôi muốn trở thành bác sĩ."\n\n✅ **B** — đúng cấu trúc: want to become.\n\n❌ **A/C/D** — sai trật tự từ.\n\n💡 want to + V nguyên mẫu.',
  },

  {
    id: 'de12-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nIt / important / students / learn / teamwork skills.',
    options: [
      'It important students learn teamwork skills.',
      'It is important students to learn teamwork skills.',
      'It is important for students to learn teamwork skills.',
      'It important for students learning teamwork skills.',
    ],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Việc học kỹ năng làm việc nhóm là quan trọng đối với học sinh."\n\n✅ **C** — đúng cấu trúc: It is important for somebody to do something.\n\n❌ **A/B/D** — sai ngữ pháp.\n\n💡 It is + adj + for O + to V.',
  },

  {
    id: 'de12-q22',
    questionNumber: 22,
    type: 'writing',
    questionText:
      'Arrange the words into a meaningful sentence:\nusually / my father / newspapers / reads / every morning',
    options: [
      'Usually my father reads newspapers every morning.',
      'My father usually reads newspapers every morning.',
      'My father reads usually newspapers every morning.',
      'Reads my father usually newspapers every morning.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu đúng: "Bố tôi thường đọc báo mỗi sáng."\n\n✅ **B** — trạng từ tần suất đứng trước động từ thường.\n\n❌ **A/C/D** — trật tự từ chưa tự nhiên hoặc sai.\n\n💡 usually thường đứng trước động từ chính.',
  },

  {
    id: 'de12-q23',
    questionNumber: 23,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nIf / you / exercise regularly / you / feel / healthier.',
    options: [
      'If you exercise regularly, you will feel healthier.',
      'If you exercised regularly, you feel healthier.',
      'If you will exercise regularly, you feel healthier.',
      'If you exercise regularly, you felt healthier.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu bạn tập thể dục thường xuyên, bạn sẽ cảm thấy khỏe mạnh hơn."\n\n✅ **A** — đúng cấu trúc điều kiện loại 1.\n\n❌ **B/C/D** — sai thì động từ.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de12-q24',
    questionNumber: 24,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nLan / ask / me / whether / I / like / science fiction films.',
    options: [
      'Lan asked me whether I liked science fiction films.',
      'Lan asked me whether do I like science fiction films.',
      'Lan asked me whether I like science fiction films yesterday.',
      'Lan asked whether me I liked science fiction films.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Lan hỏi tôi liệu tôi có thích phim khoa học viễn tưởng không."\n\n✅ **A** — đúng cấu trúc câu tường thuật.\n\n❌ **B/C/D** — sai trật tự hoặc thì động từ.\n\n💡 whether + S + V trong reported speech.',
  },

  {
    id: 'de12-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Arrange the words into a meaningful sentence:\nused / people / letters / in the past / write / to',
    options: [
      'People used letters to write in the past.',
      'People used to write letters in the past.',
      'Used people to write letters in the past.',
      'People to used write letters in the past.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu đúng: "Ngày xưa mọi người thường viết thư."\n\n✅ **B** — đúng cấu trúc: used to + V.\n\n❌ **A/C/D** — sai cấu trúc ngữ pháp.\n\n💡 used to + V = đã từng làm gì trong quá khứ.',
  },
]
};

export default deMau22;
