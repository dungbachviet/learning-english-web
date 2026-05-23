
import { Exam } from '@/types';

const deMau10: Exam = {
  id: 'de-mau-10',
  title: 'Đề Mẫu Số 10',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 25',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de25-v01',
    word: 'pasture',
    pronunciation: '/ˈpɑːstʃə(r)/',
    partOfSpeech: 'n',
    definition: 'đồng cỏ',
    exampleSentence: 'The cows were eating grass in the pasture.',
    exampleTranslation: 'Những con bò đang ăn cỏ trên đồng cỏ.',
    wrongOptions: ['sa mạc', 'khu công nghiệp', 'bãi biển'],
  },
  {
    id: 'de25-v02',
    word: 'acquaintance',
    pronunciation: '/əˈkweɪntəns/',
    partOfSpeech: 'n',
    definition: 'người quen',
    exampleSentence: 'She met an old acquaintance at the station.',
    exampleTranslation: 'Cô ấy gặp một người quen cũ ở nhà ga.',
    wrongOptions: ['họ hàng', 'giáo viên', 'hàng xóm'],
  },
  {
    id: 'de25-v03',
    word: 'constant',
    pronunciation: '/ˈkɒnstənt/',
    partOfSpeech: 'adj',
    definition: 'liên tục',
    exampleSentence: 'The constant noise made it hard to study.',
    exampleTranslation: 'Tiếng ồn liên tục khiến việc học trở nên khó khăn.',
    wrongOptions: ['thỉnh thoảng', 'im lặng', 'ngắn ngủi'],
  },
  {
    id: 'de25-v04',
    word: 'talkative',
    pronunciation: '/ˈtɔːkətɪv/',
    partOfSpeech: 'adj',
    definition: 'hay nói',
    exampleSentence: 'My little brother is very talkative.',
    exampleTranslation: 'Em trai tôi rất hay nói.',
    wrongOptions: ['rụt rè', 'lười biếng', 'nghiêm túc'],
  },
  {
    id: 'de25-v05',
    word: 'luxury',
    pronunciation: '/ˈlʌkʃəri/',
    partOfSpeech: 'n',
    definition: 'sự xa xỉ',
    exampleSentence: 'Staying in a five-star hotel is a luxury.',
    exampleTranslation: 'Ở khách sạn năm sao là một sự xa xỉ.',
    wrongOptions: ['sự tiết kiệm', 'sự nghèo khó', 'sự bất tiện'],
  },
  {
    id: 'de25-v06',
    word: 'receive',
    pronunciation: '/rɪˈsiːv/',
    partOfSpeech: 'v',
    definition: 'nhận được',
    exampleSentence: 'I received a letter from my friend yesterday.',
    exampleTranslation: 'Tôi đã nhận được một lá thư từ bạn hôm qua.',
    wrongOptions: ['gửi đi', 'đánh mất', 'mượn'],
  },
  {
    id: 'de25-v07',
    word: 'charity',
    pronunciation: '/ˈtʃærəti/',
    partOfSpeech: 'n',
    definition: 'tổ chức từ thiện',
    exampleSentence: 'They donated money to a local charity.',
    exampleTranslation: 'Họ quyên góp tiền cho một tổ chức từ thiện địa phương.',
    wrongOptions: ['công ty du lịch', 'trường học', 'siêu thị'],
  },
  {
    id: 'de25-v08',
    word: 'pollution',
    pronunciation: '/pəˈluːʃn/',
    partOfSpeech: 'n',
    definition: 'ô nhiễm',
    exampleSentence: 'Air pollution is a serious problem in cities.',
    exampleTranslation: 'Ô nhiễm không khí là vấn đề nghiêm trọng ở các thành phố.',
    wrongOptions: ['năng lượng', 'giao thông', 'thời tiết'],
  },
  {
    id: 'de25-v09',
    word: 'advised',
    pronunciation: '/ədˈvaɪzd/',
    partOfSpeech: 'v',
    definition: 'khuyên',
    exampleSentence: 'The doctor advised him to rest more.',
    exampleTranslation: 'Bác sĩ khuyên anh ấy nghỉ ngơi nhiều hơn.',
    wrongOptions: ['bắt buộc', 'phạt', 'tránh né'],
  },
  {
    id: 'de25-v10',
    word: 'reduce',
    pronunciation: '/rɪˈdjuːs/',
    partOfSpeech: 'v',
    definition: 'giảm',
    exampleSentence: 'We should reduce plastic waste.',
    exampleTranslation: 'Chúng ta nên giảm rác thải nhựa.',
    wrongOptions: ['tăng lên', 'sản xuất', 'thay đổi'],
  },
  {
    id: 'de25-v11',
    word: 'amount',
    pronunciation: '/əˈmaʊnt/',
    partOfSpeech: 'n',
    definition: 'số lượng',
    exampleSentence: 'The amount of sugar in this drink is high.',
    exampleTranslation: 'Lượng đường trong thức uống này rất cao.',
    wrongOptions: ['màu sắc', 'kích thước', 'chiều cao'],
  },
  {
    id: 'de25-v12',
    word: 'energy',
    pronunciation: '/ˈenədʒi/',
    partOfSpeech: 'n',
    definition: 'năng lượng',
    exampleSentence: 'Solar energy is environmentally friendly.',
    exampleTranslation: 'Năng lượng mặt trời thân thiện với môi trường.',
    wrongOptions: ['rác thải', 'khói bụi', 'tiếng ồn'],
  },
  {
    id: 'de25-v13',
    word: 'looked for',
    pronunciation: '/lʊkt fɔː(r)/',
    partOfSpeech: 'phr.v',
    definition: 'tìm kiếm',
    exampleSentence: 'She looked for her glasses everywhere.',
    exampleTranslation: 'Cô ấy tìm kính của mình khắp nơi.',
    wrongOptions: ['trông nom', 'từ chối', 'đi qua'],
  },
  {
    id: 'de25-v14',
    word: 'environment',
    pronunciation: '/ɪnˈvaɪrənmənt/',
    partOfSpeech: 'n',
    definition: 'môi trường',
    exampleSentence: 'We must protect the environment.',
    exampleTranslation: 'Chúng ta phải bảo vệ môi trường.',
    wrongOptions: ['thành phố', 'nhà máy', 'siêu thị'],
  },
  {
    id: 'de25-v15',
    word: 'announcement',
    pronunciation: '/əˈnaʊnsmənt/',
    partOfSpeech: 'n',
    definition: 'thông báo',
    exampleSentence: 'The airport made an important announcement.',
    exampleTranslation: 'Sân bay đã đưa ra một thông báo quan trọng.',
    wrongOptions: ['bài hát', 'cuộc thi', 'trò chơi'],
  },
  {
    id: 'de25-v16',
    word: 'ensuite',
    pronunciation: '/ˌɒnˈswiːt/',
    partOfSpeech: 'adj',
    definition: 'có phòng tắm riêng',
    exampleSentence: 'The hotel offers ensuite bedrooms.',
    exampleTranslation: 'Khách sạn cung cấp các phòng ngủ có phòng tắm riêng.',
    wrongOptions: ['không cửa sổ', 'ở tầng hầm', 'có ban công'],
  },
  {
    id: 'de25-v17',
    word: 'available',
    pronunciation: '/əˈveɪləbl/',
    partOfSpeech: 'adj',
    definition: 'có sẵn',
    exampleSentence: 'The room is available from next Monday.',
    exampleTranslation: 'Căn phòng có sẵn từ thứ Hai tới.',
    wrongOptions: ['đã bán', 'bị khóa', 'đã hủy'],
  },
  {
    id: 'de25-v18',
    word: 'shared',
    pronunciation: '/ʃeəd/',
    partOfSpeech: 'adj',
    definition: 'dùng chung',
    exampleSentence: 'They use a shared kitchen in the apartment.',
    exampleTranslation: 'Họ sử dụng nhà bếp chung trong căn hộ.',
    wrongOptions: ['riêng tư', 'sang trọng', 'nhỏ hẹp'],
  },
  {
    id: 'de25-v19',
    word: 'housemates',
    pronunciation: '/ˈhaʊsmeɪts/',
    partOfSpeech: 'n',
    definition: 'bạn cùng nhà',
    exampleSentence: 'My housemates are very friendly.',
    exampleTranslation: 'Bạn cùng nhà của tôi rất thân thiện.',
    wrongOptions: ['hàng xóm', 'anh em họ', 'đồng nghiệp'],
  },
  {
    id: 'de25-v20',
    word: 'excluding',
    pronunciation: '/ɪkˈskluːdɪŋ/',
    partOfSpeech: 'prep',
    definition: 'không bao gồm',
    exampleSentence: 'The price is $500 excluding tax.',
    exampleTranslation: 'Giá là 500 đô không bao gồm thuế.',
    wrongOptions: ['bao gồm', 'cộng thêm', 'giảm giá'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de25-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe ______ English every day to improve her speaking skills.',
    options: ['practices', 'is practicing', 'practiced', 'has practiced'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy luyện tiếng Anh mỗi ngày để cải thiện kỹ năng nói."\n\n✅ **A. practices** — thì hiện tại đơn diễn tả thói quen.\n\n❌ **B/C/D** — sai ngữ cảnh thời gian.\n\n💡 present simple = thói quen.',
  },
  {
    id: 'de25-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nI have lived here ______ 2015.',
    options: ['for', 'since', 'from', 'by'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Tôi đã sống ở đây từ năm 2015."\n\n✅ **B. since** — dùng với mốc thời gian.\n\n❌ **A/C/D** — sai giới từ.\n\n💡 since + point in time.',
  },
  {
    id: 'de25-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nWhile I ______ TV, my mother was cooking dinner.',
    options: ['watched', 'was watching', 'am watching', 'watch'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Trong khi tôi đang xem TV, mẹ tôi đang nấu ăn."\n\n✅ **B. was watching** — quá khứ tiếp diễn.\n\n❌ **A/C/D** — sai thì.\n\n💡 while + past continuous.',
  },
  {
    id: 'de25-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nHe was tired, ______ he went to bed early.',
    options: ['so', 'but', 'because', 'although'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh ấy mệt nên đi ngủ sớm."\n\n✅ **A. so** — chỉ kết quả.\n\n❌ **B/C/D** — sai logic.\n\n💡 so = vì vậy.',
  },
  {
    id: 'de25-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe is good ______ playing the piano.',
    options: ['at', 'in', 'on', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy giỏi chơi piano."\n\n✅ **A. at** — be good at.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 good at + V-ing.',
  },
  {
    id: 'de25-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nThere isn’t ______ milk left in the fridge.',
    options: ['many', 'much', 'a few', 'few'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Không còn nhiều sữa trong tủ lạnh."\n\n✅ **B. much** — dùng với danh từ không đếm được.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 much + uncountable noun.',
  },
  {
    id: 'de25-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nThe homework ______ by the teacher every week.',
    options: ['checks', 'is checked', 'checked', 'is checking'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài tập về nhà được giáo viên kiểm tra mỗi tuần."\n\n✅ **B. is checked** — bị động hiện tại đơn.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 be + V3.',
  },
  {
    id: 'de25-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nIf it ______ tomorrow, we will stay at home.',
    options: ['rains', 'rained', 'will rain', 'is raining'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà."\n\n✅ **A. rains** — câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì.\n\n💡 If + present simple, will + V.',
  },
  {
    id: 'de25-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nHe has just finished ______ the report.',
    options: ['write', 'to write', 'writing', 'written'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy vừa hoàn thành việc viết báo cáo."\n\n✅ **C. writing** — finish + V-ing.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 finish + gerund.',
  },
  {
    id: 'de25-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nShe speaks English very ______.',
    options: ['good', 'well', 'better', 'best'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy nói tiếng Anh rất tốt."\n\n✅ **B. well** — trạng từ bổ nghĩa cho động từ.\n\n❌ **A/C/D** — sai loại từ.\n\n💡 verb + adverb.',
  },
  {
    id: 'de25-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWe are looking forward ______ you again.',
    options: ['see', 'seeing', 'to see', 'to seeing'],
    correctAnswer: 3,
    explanation:
      '📘 Dịch câu: "Chúng tôi mong được gặp lại bạn."\n\n✅ **D. to seeing** — look forward to + V-ing.\n\n❌ **A/B/C** — sai cấu trúc.\n\n💡 look forward to + gerund.',
  },
  {
    id: 'de25-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThe book ______ I bought yesterday is very interesting.',
    options: ['who', 'which', 'whose', 'where'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cuốn sách tôi mua hôm qua rất thú vị."\n\n✅ **B. which** — thay thế cho vật.\n\n❌ **A/C/D** — sai đại từ quan hệ.\n\n💡 which = dùng cho vật.',
  },
  {
    id: 'de25-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nYou ______ wear a helmet when riding a motorbike.',
    options: ['can', 'must', 'shouldn’t', 'might'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn phải đội mũ bảo hiểm khi đi xe máy."\n\n✅ **B. must** — bắt buộc.\n\n❌ **A/C/D** — không đúng mức độ nghĩa.\n\n💡 must = nghĩa vụ.',
  },
  {
    id: 'de25-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe is interested ______ learning Japanese.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy quan tâm đến việc học tiếng Nhật."\n\n✅ **A. in** — interested in.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 interested in + V-ing.',
  },
  {
    id: 'de25-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nI didn’t go out ______ it was raining heavily.',
    options: ['because', 'so', 'although', 'but'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi không ra ngoài vì trời mưa to."\n\n✅ **A. because** — chỉ nguyên nhân.\n\n❌ **B/C/D** — sai logic.\n\n💡 because = vì.',
  },
  {
    id: 'de25-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThis is the most interesting film I ______ ever seen.',
    options: ['have', 'had', 'has', 'was'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đây là bộ phim thú vị nhất tôi từng xem."\n\n✅ **A. have** — hiện tại hoàn thành.\n\n❌ **B/C/D** — sai thì.\n\n💡 ever + present perfect.',
  },

  {
    id: 'de25-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nalways / she / homework / does / her / after school',
    options: [
      'She always does her homework after school.',
      'She does always her homework after school.',
      'Always she does her homework after school.',
      'She does her homework always after school.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Cô ấy luôn làm bài tập sau giờ học."\n\n✅ **A. She always does her homework after school.** — đúng trật tự trạng từ.\n\n💡 adverb đứng trước động từ chính.',
  },
  {
    id: 'de25-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nbeautiful / is / this / the / most / village',
    options: [
      'This is the most beautiful village.',
      'This village is the most beautiful.',
      'The most beautiful is this village.',
      'Is this the most beautiful village.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đây là ngôi làng đẹp nhất."\n\n✅ **A. This is the most beautiful village.** — đúng cấu trúc so sánh nhất.\n\n💡 the most + adj.',
  },
  {
    id: 'de25-q19',
    questionNumber: 19,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nto / going / they / are / next week / travel / Hanoi',
    options: [
      'They are going to travel to Hanoi next week.',
      'They going are to travel Hanoi next week.',
      'They are going travel to Hanoi next week.',
      'They will going to Hanoi next week travel.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Họ sẽ đi du lịch Hà Nội vào tuần tới."\n\n✅ **A. They are going to travel to Hanoi next week.** — đúng cấu trúc be going to.\n\n💡 be going to + V.',
  },
  {
    id: 'de25-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nwas / the / very / movie / boring',
    options: [
      'The movie was very boring.',
      'The very movie was boring.',
      'Was the movie very boring.',
      'The movie very was boring.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bộ phim rất nhàm chán."\n\n✅ **A. The movie was very boring.** — đúng cấu trúc S + V + adj.\n\n💡 was + adjective.',
  },
]
};

export default deMau10;
