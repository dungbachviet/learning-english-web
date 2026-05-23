
import { Exam } from '@/types';

const deMau13: Exam = {
  id: 'de-mau-13',
  title: 'Đề Mẫu Số 13',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Ôn phrasal verbs',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-v21',
    word: 'look up',
    pronunciation: '/lʊk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'tra cứu, tìm kiếm thông tin',
    exampleSentence: 'I often look up new words in the dictionary.',
    exampleTranslation: 'Tôi thường tra từ mới trong từ điển.',
    wrongOptions: ['bỏ qua', 'từ chối', 'đi ra ngoài'],
  },
  {
    id: 'de25-v22',
    word: 'give up',
    pronunciation: '/ɡɪv ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'từ bỏ',
    exampleSentence: 'He didn’t give up even when it was hard.',
    exampleTranslation: 'Anh ấy không bỏ cuộc dù rất khó khăn.',
    wrongOptions: ['bắt đầu', 'tiếp tục', 'giữ lại'],
  },
  {
    id: 'de25-v23',
    word: 'take off',
    pronunciation: '/teɪk ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'cất cánh / cởi ra',
    exampleSentence: 'The plane will take off at 7 a.m.',
    exampleTranslation: 'Máy bay sẽ cất cánh lúc 7 giờ sáng.',
    wrongOptions: ['hạ cánh', 'dừng lại', 'quay lại'],
  },
  {
    id: 'de25-v24',
    word: 'put off',
    pronunciation: '/pʊt ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'hoãn lại',
    exampleSentence: 'They put off the meeting until next week.',
    exampleTranslation: 'Họ hoãn cuộc họp đến tuần sau.',
    wrongOptions: ['tổ chức', 'hủy bỏ hoàn toàn', 'bắt đầu'],
  },
  {
    id: 'de25-v25',
    word: 'turn on',
    pronunciation: '/tɜːn ɒn/',
    partOfSpeech: 'phr.v',
    definition: 'bật (thiết bị)',
    exampleSentence: 'Please turn on the lights.',
    exampleTranslation: 'Làm ơn bật đèn lên.',
    wrongOptions: ['tắt đi', 'đập vỡ', 'che lại'],
  },
  {
    id: 'de25-v26',
    word: 'turn off',
    pronunciation: '/tɜːn ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'tắt (thiết bị)',
    exampleSentence: 'Don’t forget to turn off the TV.',
    exampleTranslation: 'Đừng quên tắt tivi.',
    wrongOptions: ['bật lên', 'mở cửa', 'tăng âm lượng'],
  },
  {
    id: 'de25-v27',
    word: 'bring up',
    pronunciation: '/brɪŋ ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'đề cập đến / nuôi dưỡng',
    exampleSentence: 'She brought up an important issue in the meeting.',
    exampleTranslation: 'Cô ấy đã đề cập một vấn đề quan trọng trong cuộc họp.',
    wrongOptions: ['giấu đi', 'bỏ qua', 'phản đối'],
  },
  {
    id: 'de25-v28',
    word: 'come across',
    pronunciation: '/kʌm əˈkrɒs/',
    partOfSpeech: 'phr.v',
    definition: 'tình cờ gặp',
    exampleSentence: 'I came across an old friend yesterday.',
    exampleTranslation: 'Tôi tình cờ gặp một người bạn cũ hôm qua.',
    wrongOptions: ['tìm kiếm', 'tránh né', 'đi qua'],
  },
  {
    id: 'de25-v29',
    word: 'get along with',
    pronunciation: '/ɡet əˈlɒŋ wɪð/',
    partOfSpeech: 'phr.v',
    definition: 'hòa hợp với',
    exampleSentence: 'I get along with my classmates very well.',
    exampleTranslation: 'Tôi rất hòa hợp với các bạn cùng lớp.',
    wrongOptions: ['cãi nhau', 'tránh mặt', 'phàn nàn'],
  },
  {
    id: 'de25-v30',
    word: 'carry out',
    pronunciation: '/ˈkæri aʊt/',
    partOfSpeech: 'phr.v',
    definition: 'thực hiện',
    exampleSentence: 'The scientists carried out an experiment.',
    exampleTranslation: 'Các nhà khoa học đã thực hiện một thí nghiệm.',
    wrongOptions: ['dừng lại', 'phá bỏ', 'trì hoãn'],
  },
  {
    id: 'de25-v31',
    word: 'find out',
    pronunciation: '/faɪnd aʊt/',
    partOfSpeech: 'phr.v',
    definition: 'tìm ra',
    exampleSentence: 'She found out the truth.',
    exampleTranslation: 'Cô ấy đã tìm ra sự thật.',
    wrongOptions: ['che giấu', 'quên mất', 'nghi ngờ'],
  },
  {
    id: 'de25-v32',
    word: 'set up',
    pronunciation: '/set ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thiết lập / thành lập',
    exampleSentence: 'They set up a new company.',
    exampleTranslation: 'Họ đã thành lập một công ty mới.',
    wrongOptions: ['phá bỏ', 'đóng cửa', 'di chuyển'],
  },
  {
    id: 'de25-v33',
    word: 'pick up',
    pronunciation: '/pɪk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'nhặt lên / đón',
    exampleSentence: 'I will pick you up at 7 p.m.',
    exampleTranslation: 'Tôi sẽ đón bạn lúc 7 giờ tối.',
    wrongOptions: ['bỏ lại', 'ném đi', 'trả lại'],
  },
  {
    id: 'de25-v34',
    word: 'run out of',
    pronunciation: '/rʌn aʊt ɒv/',
    partOfSpeech: 'phr.v',
    definition: 'hết (cái gì đó)',
    exampleSentence: 'We ran out of milk.',
    exampleTranslation: 'Chúng tôi đã hết sữa.',
    wrongOptions: ['mua thêm', 'bỏ đi', 'chia sẻ'],
  },
  {
    id: 'de25-v35',
    word: 'look after',
    pronunciation: '/lʊk ˈɑːftə/',
    partOfSpeech: 'phr.v',
    definition: 'chăm sóc',
    exampleSentence: 'She looks after her younger brother.',
    exampleTranslation: 'Cô ấy chăm sóc em trai.',
    wrongOptions: ['bỏ mặc', 'tránh xa', 'la mắng'],
  },
  {
    id: 'de25-v36',
    word: 'make up',
    pronunciation: '/meɪk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'bịa ra / làm hòa',
    exampleSentence: 'They made up after the argument.',
    exampleTranslation: 'Họ đã làm hòa sau cuộc cãi vã.',
    wrongOptions: ['phá hủy', 'bỏ đi', 'từ chối'],
  },
  {
    id: 'de25-v37',
    word: 'take care of',
    pronunciation: '/teɪk keə ɒv/',
    partOfSpeech: 'phr.v',
    definition: 'chăm sóc',
    exampleSentence: 'He takes care of his grandparents.',
    exampleTranslation: 'Anh ấy chăm sóc ông bà của mình.',
    wrongOptions: ['bỏ rơi', 'tránh né', 'quên mất'],
  },
  {
    id: 'de25-v38',
    word: 'break down',
    pronunciation: '/breɪk daʊn/',
    partOfSpeech: 'phr.v',
    definition: 'hỏng / suy sụp',
    exampleSentence: 'The car broke down on the way.',
    exampleTranslation: 'Xe bị hỏng trên đường đi.',
    wrongOptions: ['khởi động', 'tăng tốc', 'sửa chữa'],
  },
  {
    id: 'de25-v39',
    word: 'wake up',
    pronunciation: '/weɪk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thức dậy',
    exampleSentence: 'I wake up at 6 a.m. every day.',
    exampleTranslation: 'Tôi thức dậy lúc 6 giờ sáng mỗi ngày.',
    wrongOptions: ['ngủ quên', 'đi ngủ', 'ngất đi'],
  },
  {
    id: 'de25-v40',
    word: 'check out',
    pronunciation: '/tʃek aʊt/',
    partOfSpeech: 'phr.v',
    definition: 'trả phòng / kiểm tra',
    exampleSentence: 'We will check out of the hotel tomorrow.',
    exampleTranslation: 'Chúng tôi sẽ trả phòng khách sạn vào ngày mai.',
    wrongOptions: ['đặt phòng', 'ở lại', 'hủy chuyến'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de11-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWe _____ to school by bus every day.',
    options: ['go', 'goes', 'went', 'going'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi đi học bằng xe buýt mỗi ngày."\n\n✅ **A. go** — thì hiện tại đơn với chủ ngữ số nhiều.\n\n❌ **B/C/D** — sai chia động từ.\n\n💡 present simple = thói quen.',
  },
  {
    id: 'de11-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nHe _____ smoking last year.',
    options: ['gave up', 'turned on', 'looked for', 'put off'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy đã bỏ hút thuốc năm ngoái."\n\n✅ **A. gave up** — từ bỏ.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 give up = từ bỏ.',
  },
  {
    id: 'de11-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nWhile I _____ homework, my sister was listening to music.',
    options: ['do', 'did', 'was doing', 'am doing'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Trong khi tôi đang làm bài tập, em gái tôi đang nghe nhạc."\n\n✅ **C. was doing** — quá khứ tiếp diễn.\n\n❌ **A/B/D** — sai thì.\n\n💡 while + past continuous.',
  },
  {
    id: 'de11-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nIt was raining, _____ we stayed at home.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Trời mưa nên chúng tôi ở nhà."\n\n✅ **A. so** — kết quả.\n\n❌ **B/C/D** — sai logic.\n\n💡 so = vì vậy.',
  },
  {
    id: 'de11-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe is afraid _____ dogs.',
    options: ['of', 'in', 'on', 'at'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy sợ chó."\n\n✅ **A. of** — afraid of.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 afraid of + noun.',
  },
  {
    id: 'de11-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere are _____ students in the classroom.',
    options: ['much', 'many', 'little', 'few'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Có nhiều học sinh trong lớp."\n\n✅ **B. many** — danh từ đếm được số nhiều.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 many + plural noun.',
  },
  {
    id: 'de11-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nPlease _____ the TV. I can’t hear.',
    options: ['turn up', 'turn off', 'look after', 'put on'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Làm ơn tăng âm lượng TV lên."\n\n✅ **A. turn up** — tăng âm lượng.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 turn up = increase volume.',
  },
  {
    id: 'de11-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nShe _____ in this city since 2010.',
    options: ['lives', 'lived', 'has lived', 'is living'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Cô ấy đã sống ở thành phố này từ năm 2010."\n\n✅ **C. has lived** — hiện tại hoàn thành.\n\n❌ **A/B/D** — sai thì.\n\n💡 since + present perfect.',
  },
  {
    id: 'de11-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou _____ be quiet in the library.',
    options: ['must', 'can', 'might', 'could'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn phải giữ im lặng trong thư viện."\n\n✅ **A. must** — bắt buộc.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 must = obligation.',
  },
  {
    id: 'de11-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nHe runs very _____.',
    options: ['quick', 'quickly', 'quicker', 'quickest'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh ấy chạy rất nhanh."\n\n✅ **B. quickly** — trạng từ.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 verb + adverb.',
  },
  {
    id: 'de11-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nI am interested _____ learning English.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi quan tâm đến việc học tiếng Anh."\n\n✅ **A. in** — interested in.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 interested in + V-ing.',
  },
  {
    id: 'de11-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nDon’t _____ your dream.',
    options: ['give up', 'look for', 'turn on', 'take off'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đừng từ bỏ ước mơ của bạn."\n\n✅ **A. give up** — từ bỏ.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 give up = quit.',
  },
  {
    id: 'de11-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe _____ TV when I called her.',
    options: ['watched', 'was watching', 'watches', 'has watched'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy đang xem TV khi tôi gọi."\n\n✅ **B. was watching** — quá khứ tiếp diễn.\n\n❌ **A/C/D** — sai thì.\n\n💡 past continuous.',
  },
  {
    id: 'de11-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nWe arrived _____ the airport late.',
    options: ['in', 'at', 'on', 'to'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Chúng tôi đến sân bay muộn."\n\n✅ **B. at** — arrive at.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 arrive at + place.',
  },
  {
    id: 'de11-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nHe was tired, _____ he went to bed early.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy mệt nên đi ngủ sớm."\n\n✅ **A. so** — kết quả.\n\n❌ **B/C/D** — sai logic.\n\n💡 so = therefore.',
  },
  {
    id: 'de11-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWould you like _____ coffee?',
    options: ['drink', 'drinking', 'to drink', 'drank'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bạn có muốn uống cà phê không?"\n\n✅ **C. to drink** — would like + to V.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 would like + to infinitive.',
  },
  {
    id: 'de11-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nusually / she / goes / to school / by bike',
    options: [
      'She usually goes to school by bike.',
      'She goes usually to school by bike.',
      'Usually she goes to school by bike.',
      'She goes to school usually by bike.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy thường đi học bằng xe đạp."\n\n💡 trạng từ tần suất đứng trước động từ chính.',
  },
  {
    id: 'de11-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nvery / is / this / easy / exercise',
    options: [
      'This exercise is very easy.',
      'This is very easy exercise.',
      'Is this exercise very easy.',
      'This very exercise is easy.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bài tập này rất dễ."\n\n💡 S + be + adj.',
  },
  {
    id: 'de11-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe _____ his homework already.',
    options: ['finish', 'finishes', 'has finished', 'finisheds'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy đã làm xong bài tập."\n\n💡 hiện tại hoàn thành.',
  },
  {
    id: 'de11-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nShe studied hard, _____ she passed the exam.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy học chăm nên đã đỗ."\n\n💡 so = kết quả.',
  },
]
};

export default deMau13;
