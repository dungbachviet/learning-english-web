
import { Exam } from '@/types';

const deMau12: Exam = {
  id: 'de-mau-12',
  title: 'Đề Mẫu Số 12',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Ôn Phrasal verbs',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-pv01',
    word: 'get up',
    pronunciation: '/ɡet ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thức dậy',
    exampleSentence: 'I get up early every day to go to school.',
    exampleTranslation: 'Tôi thức dậy sớm mỗi ngày để đi học.',
    wrongOptions: ['đi ngủ', 'ngồi xuống', 'ra ngoài'],
  },
  {
    id: 'de25-pv02',
    word: 'turn on',
    pronunciation: '/tɜːn ɒn/',
    partOfSpeech: 'phr.v',
    definition: 'bật (thiết bị)',
    exampleSentence: 'Please turn on the light.',
    exampleTranslation: 'Làm ơn bật đèn lên.',
    wrongOptions: ['tắt', 'tháo ra', 'lắp vào'],
  },
  {
    id: 'de25-pv03',
    word: 'turn off',
    pronunciation: '/tɜːn ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'tắt (thiết bị)',
    exampleSentence: 'Don’t forget to turn off the TV.',
    exampleTranslation: 'Đừng quên tắt TV.',
    wrongOptions: ['bật lên', 'tăng âm lượng', 'mở cửa'],
  },
  {
    id: 'de25-pv04',
    word: 'look for',
    pronunciation: '/lʊk fɔː(r)/',
    partOfSpeech: 'phr.v',
    definition: 'tìm kiếm',
    exampleSentence: 'I am looking for my keys.',
    exampleTranslation: 'Tôi đang tìm chìa khóa.',
    wrongOptions: ['trông nom', 'bỏ qua', 'giữ lại'],
  },
  {
    id: 'de25-pv05',
    word: 'give up',
    pronunciation: '/ɡɪv ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'từ bỏ',
    exampleSentence: 'He didn’t give up learning English.',
    exampleTranslation: 'Anh ấy không từ bỏ việc học tiếng Anh.',
    wrongOptions: ['tiếp tục', 'bắt đầu', 'thử lại'],
  },
  {
    id: 'de25-pv06',
    word: 'take care of',
    pronunciation: '/teɪk keə(r) ɒv/',
    partOfSpeech: 'phr.v',
    definition: 'chăm sóc',
    exampleSentence: 'She takes care of her younger brother.',
    exampleTranslation: 'Cô ấy chăm sóc em trai.',
    wrongOptions: ['bỏ mặc', 'phá hủy', 'quên mất'],
  },
  {
    id: 'de25-pv07',
    word: 'look after',
    pronunciation: '/lʊk ˈɑːftə(r)/',
    partOfSpeech: 'phr.v',
    definition: 'chăm sóc',
    exampleSentence: 'Who will look after the baby?',
    exampleTranslation: 'Ai sẽ chăm em bé?',
    wrongOptions: ['la mắng', 'đi qua', 'tránh xa'],
  },
  {
    id: 'de25-pv08',
    word: 'find out',
    pronunciation: '/faɪnd aʊt/',
    partOfSpeech: 'phr.v',
    definition: 'tìm ra',
    exampleSentence: 'I want to find out the truth.',
    exampleTranslation: 'Tôi muốn tìm ra sự thật.',
    wrongOptions: ['che giấu', 'bỏ qua', 'quên đi'],
  },
  {
    id: 'de25-pv09',
    word: 'go on',
    pronunciation: '/ɡəʊ ɒn/',
    partOfSpeech: 'phr.v',
    definition: 'tiếp tục',
    exampleSentence: 'Please go on with your story.',
    exampleTranslation: 'Hãy tiếp tục câu chuyện của bạn.',
    wrongOptions: ['dừng lại', 'quay lại', 'kết thúc'],
  },
  {
    id: 'de25-pv10',
    word: 'come back',
    pronunciation: '/kʌm bæk/',
    partOfSpeech: 'phr.v',
    definition: 'trở lại',
    exampleSentence: 'She will come back tomorrow.',
    exampleTranslation: 'Cô ấy sẽ quay lại vào ngày mai.',
    wrongOptions: ['đi ra', 'ở lại', 'bỏ đi'],
  },
  {
    id: 'de25-pv11',
    word: 'put on',
    pronunciation: '/pʊt ɒn/',
    partOfSpeech: 'phr.v',
    definition: 'mặc vào',
    exampleSentence: 'He put on his coat before going out.',
    exampleTranslation: 'Anh ấy mặc áo khoác trước khi ra ngoài.',
    wrongOptions: ['cởi ra', 'giặt đi', 'vứt đi'],
  },
  {
    id: 'de25-pv12',
    word: 'take off',
    pronunciation: '/teɪk ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'cởi ra / cất cánh',
    exampleSentence: 'The plane will take off soon.',
    exampleTranslation: 'Máy bay sẽ cất cánh sớm.',
    wrongOptions: ['hạ xuống', 'dừng lại', 'quay đầu'],
  },
  {
    id: 'de25-pv13',
    word: 'wake up',
    pronunciation: '/weɪk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thức dậy',
    exampleSentence: 'I wake up at 6 a.m every day.',
    exampleTranslation: 'Tôi thức dậy lúc 6 giờ sáng mỗi ngày.',
    wrongOptions: ['ngủ quên', 'đi ngủ', 'mơ'],
  },
  {
    id: 'de25-pv14',
    word: 'run out of',
    pronunciation: '/rʌn aʊt ɒv/',
    partOfSpeech: 'phr.v',
    definition: 'hết (cái gì đó)',
    exampleSentence: 'We ran out of water.',
    exampleTranslation: 'Chúng tôi đã hết nước.',
    wrongOptions: ['dư thừa', 'mua thêm', 'chia sẻ'],
  },
  {
    id: 'de25-pv15',
    word: 'set up',
    pronunciation: '/set ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'thành lập / dựng lên',
    exampleSentence: 'They set up a new company.',
    exampleTranslation: 'Họ thành lập một công ty mới.',
    wrongOptions: ['phá hủy', 'đóng cửa', 'bỏ qua'],
  },
  {
    id: 'de25-pv16',
    word: 'bring up',
    pronunciation: '/brɪŋ ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'đề cập / nuôi dưỡng',
    exampleSentence: 'She was brought up in a small village.',
    exampleTranslation: 'Cô ấy được nuôi dưỡng ở một ngôi làng nhỏ.',
    wrongOptions: ['bỏ rơi', 'giấu đi', 'phớt lờ'],
  },
  {
    id: 'de25-pv17',
    word: 'break down',
    pronunciation: '/breɪk daʊn/',
    partOfSpeech: 'phr.v',
    definition: 'hỏng / suy sụp',
    exampleSentence: 'The car broke down on the road.',
    exampleTranslation: 'Chiếc xe bị hỏng trên đường.',
    wrongOptions: ['chạy tốt', 'tăng tốc', 'khởi động'],
  },
  {
    id: 'de25-pv18',
    word: 'call off',
    pronunciation: '/kɔːl ɒf/',
    partOfSpeech: 'phr.v',
    definition: 'hủy bỏ',
    exampleSentence: 'They called off the meeting.',
    exampleTranslation: 'Họ đã hủy cuộc họp.',
    wrongOptions: ['bắt đầu', 'kéo dài', 'tổ chức'],
  },
  {
    id: 'de25-pv19',
    word: 'pick up',
    pronunciation: '/pɪk ʌp/',
    partOfSpeech: 'phr.v',
    definition: 'đón / nhặt lên',
    exampleSentence: 'I will pick you up at 7 p.m.',
    exampleTranslation: 'Tôi sẽ đón bạn lúc 7 giờ tối.',
    wrongOptions: ['thả xuống', 'bỏ đi', 'trả lại'],
  },
  {
    id: 'de25-pv20',
    word: 'hang out',
    pronunciation: '/hæŋ aʊt/',
    partOfSpeech: 'phr.v',
    definition: 'đi chơi / tụ tập',
    exampleSentence: 'We often hang out after school.',
    exampleTranslation: 'Chúng tôi thường đi chơi sau giờ học.',
    wrongOptions: ['ở nhà', 'học bài', 'làm việc'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de10-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe didn’t go out _____ it was raining heavily.',
    options: ['because', 'because of', 'although', 'so'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy không ra ngoài vì trời mưa to."\n\n✅ **A. because** — theo sau là mệnh đề.\n\n❌ **B/C/D** — sai cấu trúc hoặc nghĩa.\n\n💡 because + clause.',
  },
  {
    id: 'de10-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nPlease _____ the TV. It’s too loud.',
    options: ['turn on', 'turn off', 'turn up', 'turn down'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Làm ơn giảm âm lượng TV xuống. Nó quá to."\n\n✅ **D. turn down** — giảm âm lượng.\n\n❌ **A/B/C** — sai nghĩa.\n\n💡 turn down = giảm (âm thanh).',
  },
  {
    id: 'de10-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nIf I _____ enough money, I would buy a new bike.',
    options: ['have', 'had', 'will have', 'would have'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Nếu tôi có đủ tiền, tôi sẽ mua xe đạp mới."\n\n✅ **B. had** — câu điều kiện loại 2.\n\n❌ **A/C/D** — sai thì.\n\n💡 If + past simple → would + V.',
  },
  {
    id: 'de10-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nThe film was very _____ so I fell asleep.',
    options: ['boring', 'bored', 'interest', 'interested'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bộ phim rất chán nên tôi ngủ quên."\n\n✅ **A. boring** — mô tả tính chất sự vật.\n\n❌ **B/C/D** — sai loại từ.\n\n💡 boring = gây chán.',
  },
  {
    id: 'de10-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nShe is interested _____ science.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy quan tâm đến khoa học."\n\n✅ **A. in** — interested in.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 interested in + noun/V-ing.',
  },
  {
    id: 'de10-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThere isn’t _____ time to finish the test.',
    options: ['many', 'much', 'a few', 'few'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Không còn nhiều thời gian để làm bài."\n\n✅ **B. much** — danh từ không đếm được.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 much + uncountable noun.',
  },
  {
    id: 'de10-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nI need to _____ this word in the dictionary.',
    options: ['look after', 'look up', 'look for', 'look at'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tôi cần tra từ này trong từ điển."\n\n✅ **B. look up** — tra cứu.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 look up = tra cứu thông tin.',
  },
  {
    id: 'de10-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nIt was cold, _____ we stayed at home.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Trời lạnh nên chúng tôi ở nhà."\n\n✅ **A. so** — kết quả.\n\n❌ **B/C/D** — sai logic.\n\n💡 so = vì vậy.',
  },
  {
    id: 'de10-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nShe _____ TV when I arrived.',
    options: ['watched', 'was watching', 'watches', 'has watched'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy đang xem TV khi tôi đến."\n\n✅ **B. was watching** — quá khứ tiếp diễn.\n\n❌ **A/C/D** — sai thì.\n\n💡 past continuous.',
  },
  {
    id: 'de10-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou _____ study harder if you want to pass.',
    options: ['must', 'should', 'can', 'might'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn nên học chăm hơn nếu muốn đỗ."\n\n✅ **B. should** — lời khuyên.\n\n❌ **A/C/D** — sai mức độ nghĩa.\n\n💡 should = nên.',
  },
  {
    id: 'de10-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe is good _____ playing football.',
    options: ['at', 'in', 'on', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy giỏi chơi bóng đá."\n\n✅ **A. at** — be good at.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 good at + V-ing.',
  },
  {
    id: 'de10-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMy brother enjoys _____ games.',
    options: ['play', 'playing', 'to play', 'played'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Anh trai tôi thích chơi game."\n\n✅ **B. playing** — enjoy + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 enjoy + gerund.',
  },
  {
    id: 'de10-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThey arrived _____ the station late.',
    options: ['in', 'on', 'at', 'to'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Họ đến ga muộn."\n\n✅ **C. at** — arrive at + địa điểm nhỏ.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 arrive at + place.',
  },
  {
    id: 'de10-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nDon’t _____ the meeting. It’s important.',
    options: ['put off', 'turn on', 'look up', 'give up'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đừng hoãn cuộc họp. Nó rất quan trọng."\n\n✅ **A. put off** — hoãn lại.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 put off = delay.',
  },
  {
    id: 'de10-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nEnglish _____ all over the world.',
    options: ['speaks', 'is spoken', 'is speaking', 'spoke'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói trên toàn thế giới."\n\n✅ **B. is spoken** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 be + V3.',
  },
  {
    id: 'de10-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Would you like some tea?"',
    options: ['Yes, please.', 'No, I can.', 'I like it.', 'Thank you very much.'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn có muốn uống trà không?"\n\n✅ **A. Yes, please.** — trả lời lịch sự.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 Would you like...? → Yes, please.',
  },
  {
    id: 'de10-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nalways / she / early / gets up',
    options: [
      'She always gets up early.',
      'She gets always up early.',
      'Always she gets up early.',
      'She gets up always early.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy luôn dậy sớm."\n\n✅ **A. She always gets up early.** — đúng trật tự từ.\n\n💡 adverb đứng trước động từ chính.',
  },
  {
    id: 'de10-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nvery / is / this / book / interesting',
    options: [
      'This book is very interesting.',
      'This is very book interesting.',
      'Is this book very interesting.',
      'This very is book interesting.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cuốn sách này rất thú vị."\n\n✅ **A. This book is very interesting.** — đúng cấu trúc S + V + adj.\n\n💡 very + adjective.',
  },
  {
    id: 'de10-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe _____ his homework before dinner.',
    options: ['finished', 'finishes', 'was finishing', 'has finish'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy đã làm xong bài tập trước bữa tối."\n\n✅ **A. finished** — quá khứ đơn.\n\n❌ **B/C/D** — sai thì.\n\n💡 past simple.',
  },
  {
    id: 'de10-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nShe studied hard, _____ she passed the exam.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy học chăm nên đã đỗ kỳ thi."\n\n✅ **A. so** — kết quả.\n\n❌ **B/C/D** — sai logic.\n\n💡 so = vì vậy.',
  },
]
};

export default deMau12;
