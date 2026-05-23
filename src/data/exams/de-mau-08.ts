
import { Exam } from '@/types';

const deMau08: Exam = {
  id: 'de-mau-08',
  title: 'Đề Mẫu Số 8',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề 24',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de24-v01',
    word: 'despite',
    pronunciation: '/dɪˈspaɪt/',
    partOfSpeech: 'prep',
    definition: 'mặc dù',
    exampleSentence: 'They continued playing despite the heavy rain.',
    exampleTranslation: 'Họ vẫn tiếp tục chơi mặc dù trời mưa to.',
    wrongOptions: ['bởi vì', 'trước khi', 'thay vì'],
  },
  {
    id: 'de24-v02',
    word: 'clever',
    pronunciation: '/ˈklevə(r)/',
    partOfSpeech: 'adj',
    definition: 'thông minh',
    exampleSentence: 'She is clever enough to solve the problem quickly.',
    exampleTranslation: 'Cô ấy đủ thông minh để giải quyết vấn đề nhanh chóng.',
    wrongOptions: ['lười biếng', 'ồn ào', 'rụt rè'],
  },
  {
    id: 'de24-v03',
    word: 'interested',
    pronunciation: '/ˈɪntrəstɪd/',
    partOfSpeech: 'adj',
    definition: 'quan tâm, thích thú',
    exampleSentence: 'The students were interested in the science lesson.',
    exampleTranslation: 'Các học sinh hứng thú với bài học khoa học.',
    wrongOptions: ['buồn ngủ', 'thất vọng', 'mệt mỏi'],
  },
  {
    id: 'de24-v04',
    word: 'mother tongue',
    pronunciation: '/ˌmʌðə ˈtʌŋ/',
    partOfSpeech: 'n phrase',
    definition: 'tiếng mẹ đẻ',
    exampleSentence: 'Vietnamese is my mother tongue.',
    exampleTranslation: 'Tiếng Việt là tiếng mẹ đẻ của tôi.',
    wrongOptions: ['ngoại ngữ', 'ngôn ngữ ký hiệu', 'giọng địa phương'],
  },
  {
    id: 'de24-v05',
    word: 'look after',
    pronunciation: '/lʊk ˈɑːftə(r)/',
    partOfSpeech: 'phr.v',
    definition: 'chăm sóc',
    exampleSentence: 'She looks after her little brother every day.',
    exampleTranslation: 'Cô ấy chăm sóc em trai mình mỗi ngày.',
    wrongOptions: ['bỏ mặc', 'trêu chọc', 'đuổi theo'],
  },
  {
    id: 'de24-v06',
    word: 'disadvantaged',
    pronunciation: '/ˌdɪsədˈvɑːntɪdʒd/',
    partOfSpeech: 'adj',
    definition: 'có hoàn cảnh khó khăn',
    exampleSentence: 'The volunteers helped disadvantaged children.',
    exampleTranslation: 'Các tình nguyện viên đã giúp đỡ trẻ em có hoàn cảnh khó khăn.',
    wrongOptions: ['giàu có', 'nổi tiếng', 'khỏe mạnh'],
  },
  {
    id: 'de24-v07',
    word: 'departed',
    pronunciation: '/dɪˈpɑːtɪd/',
    partOfSpeech: 'v',
    definition: 'khởi hành',
    exampleSentence: 'The train departed at 7 a.m.',
    exampleTranslation: 'Chuyến tàu khởi hành lúc 7 giờ sáng.',
    wrongOptions: ['bị hủy', 'đến nơi', 'dừng lại'],
  },
  {
    id: 'de24-v08',
    word: 'landed',
    pronunciation: '/ˈlændɪd/',
    partOfSpeech: 'v',
    definition: 'hạ cánh',
    exampleSentence: 'The plane landed safely at the airport.',
    exampleTranslation: 'Máy bay đã hạ cánh an toàn tại sân bay.',
    wrongOptions: ['cất cánh', 'bị trì hoãn', 'đổi hướng'],
  },
  {
    id: 'de24-v09',
    word: 'destination',
    pronunciation: '/ˌdestɪˈneɪʃn/',
    partOfSpeech: 'n',
    definition: 'điểm đến',
    exampleSentence: 'Paris is a popular tourist destination.',
    exampleTranslation: 'Paris là một điểm đến du lịch nổi tiếng.',
    wrongOptions: ['trạm dừng xe', 'hộ chiếu', 'khách sạn'],
  },
  {
    id: 'de24-v10',
    word: 'welcoming',
    pronunciation: '/ˈwelkəmɪŋ/',
    partOfSpeech: 'adj',
    definition: 'thân thiện, hiếu khách',
    exampleSentence: 'The local people were very welcoming.',
    exampleTranslation: 'Người dân địa phương rất thân thiện.',
    wrongOptions: ['khó tính', 'lạnh lùng', 'im lặng'],
  },
  {
    id: 'de24-v11',
    word: 'unfamiliar',
    pronunciation: '/ˌʌnfəˈmɪliə(r)/',
    partOfSpeech: 'adj',
    definition: 'xa lạ, không quen thuộc',
    exampleSentence: 'He felt nervous in the unfamiliar environment.',
    exampleTranslation: 'Anh ấy cảm thấy lo lắng trong môi trường xa lạ.',
    wrongOptions: ['quen thuộc', 'an toàn', 'yên tĩnh'],
  },
  {
    id: 'de24-v12',
    word: 'opportunity',
    pronunciation: '/ˌɒpəˈtjuːnəti/',
    partOfSpeech: 'n',
    definition: 'cơ hội',
    exampleSentence: 'Studying abroad gave her many opportunities.',
    exampleTranslation: 'Du học mang đến cho cô ấy nhiều cơ hội.',
    wrongOptions: ['khó khăn', 'nguy hiểm', 'bí mật'],
  },
  {
    id: 'de24-v13',
    word: 'dictionary',
    pronunciation: '/ˈdɪkʃənəri/',
    partOfSpeech: 'n',
    definition: 'từ điển',
    exampleSentence: 'I use a dictionary to learn new words.',
    exampleTranslation: 'Tôi dùng từ điển để học từ mới.',
    wrongOptions: ['bản đồ', 'vở ghi chú', 'máy tính'],
  },
  {
    id: 'de24-v14',
    word: 'vocabulary',
    pronunciation: '/vəˈkæbjələri/',
    partOfSpeech: 'n',
    definition: 'từ vựng',
    exampleSentence: 'Reading books helps improve your vocabulary.',
    exampleTranslation: 'Đọc sách giúp cải thiện vốn từ vựng của bạn.',
    wrongOptions: ['ngữ pháp', 'phát âm', 'chữ viết tay'],
  },
  {
    id: 'de24-v15',
    word: 'self-study',
    pronunciation: '/ˌself ˈstʌdi/',
    partOfSpeech: 'n',
    definition: 'tự học',
    exampleSentence: 'Self-study is important for language learners.',
    exampleTranslation: 'Tự học rất quan trọng đối với người học ngôn ngữ.',
    wrongOptions: ['thi đấu', 'du lịch', 'làm việc nhóm'],
  },
  {
    id: 'de24-v16',
    word: 'materials',
    pronunciation: '/məˈtɪəriəlz/',
    partOfSpeech: 'n',
    definition: 'tài liệu',
    exampleSentence: 'The teacher shared useful learning materials.',
    exampleTranslation: 'Giáo viên đã chia sẻ các tài liệu học hữu ích.',
    wrongOptions: ['đồ ăn', 'đồ chơi', 'đồng phục'],
  },
  {
    id: 'de24-v17',
    word: 'advised',
    pronunciation: '/ədˈvaɪzd/',
    partOfSpeech: 'v',
    definition: 'khuyên bảo',
    exampleSentence: 'My doctor advised me to rest more.',
    exampleTranslation: 'Bác sĩ khuyên tôi nên nghỉ ngơi nhiều hơn.',
    wrongOptions: ['ra lệnh', 'phớt lờ', 'trừng phạt'],
  },
  {
    id: 'de24-v18',
    word: 'exercise',
    pronunciation: '/ˈeksəsaɪz/',
    partOfSpeech: 'n',
    definition: 'bài tập',
    exampleSentence: 'This grammar exercise is quite difficult.',
    exampleTranslation: 'Bài tập ngữ pháp này khá khó.',
    wrongOptions: ['cuộc thi', 'bài phát biểu', 'trò chơi'],
  },
  {
    id: 'de24-v19',
    word: 'alcohol',
    pronunciation: '/ˈælkəhɒl/',
    partOfSpeech: 'n',
    definition: 'rượu, đồ uống có cồn',
    exampleSentence: 'You should not drive after drinking alcohol.',
    exampleTranslation: 'Bạn không nên lái xe sau khi uống rượu.',
    wrongOptions: ['nước lọc', 'trà xanh', 'nước ép trái cây'],
  },
  {
    id: 'de24-v20',
    word: 'weekdays',
    pronunciation: '/ˈwiːkdeɪz/',
    partOfSpeech: 'n',
    definition: 'các ngày trong tuần',
    exampleSentence: 'The library opens early on weekdays.',
    exampleTranslation: 'Thư viện mở cửa sớm vào các ngày trong tuần.',
    wrongOptions: ['cuối tuần', 'ngày lễ', 'kỳ nghỉ hè'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de24-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nShe kept studying hard _____ she was very tired.',
    options: ['although', 'because', 'so', 'and'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy vẫn tiếp tục học chăm chỉ mặc dù rất mệt."\n\n✅ **A. although** — diễn tả sự tương phản.\n\n❌ **B/C/D** — không phù hợp nghĩa.\n\n💡 although = mặc dù.',
  },

  {
    id: 'de24-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nCan you _____ the lights before leaving the room?',
    options: ['turn on', 'turn off', 'look after', 'pick up'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn có thể tắt đèn trước khi rời khỏi phòng không?"\n\n✅ **B. turn off** — tắt.\n\n❌ **A/C/D** — sai nghĩa.\n\n💡 turn off = tắt thiết bị.',
  },

  {
    id: 'de24-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nIf she _____ early, she will catch the bus.',
    options: ['leaves', 'left', 'will leave', 'would leave'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu cô ấy rời đi sớm, cô ấy sẽ bắt được xe buýt."\n\n✅ **A. leaves** — câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de24-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nThe lesson was so _____ that everyone fell asleep.',
    options: ['bored', 'boring', 'interest', 'excited'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bài học chán đến mức mọi người đều ngủ gật."\n\n✅ **B. boring** — mô tả tính chất sự vật.\n\n❌ **A/C/D** — không phù hợp.\n\n💡 boring = gây chán.',
  },

  {
    id: 'de24-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy father arrived _____ the airport at 7 a.m.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bố tôi đến sân bay lúc 7 giờ sáng."\n\n✅ **C. at** — dùng với địa điểm cụ thể.\n\n❌ **A/B/D** — sai giới từ.\n\n💡 arrive at + small place.',
  },

  {
    id: 'de24-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThey were late _____ the traffic jam.',
    options: ['although', 'because', 'because of', 'despite'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Họ đến muộn vì tắc đường."\n\n✅ **C. because of** — theo sau danh từ/cụm danh từ.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 because of + noun.',
  },

  {
    id: 'de24-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nYou _____ wear a helmet when riding a motorbike.',
    options: ['must', 'might', 'could', 'would'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Bạn phải đội mũ bảo hiểm khi đi xe máy."\n\n✅ **A. must** — diễn tả sự bắt buộc.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 must = phải.',
  },

  {
    id: 'de24-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nHe answered all the questions _____.',
    options: ['confident', 'confidence', 'confidently', 'confidented'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy trả lời mọi câu hỏi một cách tự tin."\n\n✅ **C. confidently** — trạng từ bổ nghĩa cho động từ.\n\n❌ **A/B/D** — sai loại từ.\n\n💡 Verb + adverb.',
  },

  {
    id: 'de24-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nWe stayed at home _____ it was raining heavily.',
    options: ['so', 'because', 'but', 'although'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Chúng tôi ở nhà vì trời mưa to."\n\n✅ **B. because** — diễn tả nguyên nhân.\n\n❌ **A/C/D** — không hợp logic.\n\n💡 because + clause.',
  },

  {
    id: 'de24-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nThis bag is not _____ enough to carry all my books.',
    options: ['big', 'bigger', 'biggest', 'too big'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chiếc túi này không đủ lớn để mang hết sách của tôi."\n\n✅ **A. big** — cấu trúc: adjective + enough.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 adj + enough + to V.',
  },

  {
    id: 'de24-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThey _____ dinner when I called them.',
    options: ['had', 'were having', 'have had', 'having'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Họ đang ăn tối khi tôi gọi."\n\n✅ **B. were having** — hành động đang xảy ra trong quá khứ.\n\n❌ **A/C/D** — sai thì.\n\n💡 past continuous.',
  },

  {
    id: 'de24-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nShe wants to become _____ engineer in the future.',
    options: ['a', 'an', 'the', '(no article)'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cô ấy muốn trở thành một kỹ sư trong tương lai."\n\n✅ **B. an** — engineer bắt đầu bằng nguyên âm.\n\n❌ **A/C/D** — sai cách dùng.\n\n💡 an + vowel sound.',
  },

  {
    id: 'de24-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nMy grandmother enjoys _____ gardening every afternoon.',
    options: ['do', 'doing', 'to do', 'did'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bà tôi thích làm vườn mỗi chiều."\n\n✅ **B. doing** — enjoy + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de24-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe students are preparing _____ the final exam.',
    options: ['for', 'at', 'on', 'with'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Các học sinh đang chuẩn bị cho kỳ thi cuối kỳ."\n\n✅ **A. for** — prepare for something.\n\n❌ **B/C/D** — sai giới từ.\n\n💡 prepare for = chuẩn bị cho.',
  },

  {
    id: 'de24-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct passive form:\nEnglish _____ in many countries around the world.',
    options: ['speak', 'speaks', 'is spoken', 'is speaking'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Tiếng Anh được nói ở nhiều quốc gia trên thế giới."\n\n✅ **C. is spoken** — câu bị động hiện tại đơn.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 is/am/are + V3.',
  },

  {
    id: 'de24-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n"Thanks for your advice."',
    options: [
      'Never mind.',
      'You’re welcome.',
      'Good idea.',
      'I hope so.',
    ],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Cảm ơn vì lời khuyên của bạn."\n\n✅ **B. You’re welcome.** — đáp lại lời cảm ơn.\n\n❌ **A/C/D** — không phù hợp.\n\n💡 Thanks → You’re welcome.',
  },

  {
    id: 'de24-q17',
    questionNumber: 17,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nalways / breakfast / before / school / she / eats',
    options: [
      'She always eats breakfast before school.',
      'Always she eats breakfast before school.',
      'She eats always breakfast before school.',
      'Breakfast before school she always eats.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Cô ấy luôn ăn sáng trước khi đến trường."\n\n✅ **A. She always eats breakfast before school.** — đúng trật tự từ.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 Subject + adverb + verb.',
  },

  {
    id: 'de24-q18',
    questionNumber: 18,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nso / the test / difficult / was / that / many students failed',
    options: [
      'The test was so difficult that many students failed.',
      'So difficult the test was that many students failed.',
      'The test so was difficult that many students failed.',
      'Many students failed that the test was so difficult.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Bài kiểm tra khó đến mức nhiều học sinh trượt."\n\n✅ **A. The test was so difficult that many students failed.** — đúng cấu trúc.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 so + adjective + that.',
  },

  {
    id: 'de24-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWould you mind _____ the window? It’s very hot here.',
    options: ['open', 'opening', 'to open', 'opened'],
    correctAnswer: 1,
    explanation:
      '📘 Dịch câu: "Bạn có phiền mở cửa sổ không? Ở đây nóng quá."\n\n✅ **B. opening** — would you mind + V-ing.\n\n❌ **A/C/D** — sai cấu trúc.\n\n💡 would you mind + V-ing.',
  },

  {
    id: 'de24-q20',
    questionNumber: 20,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nHe practiced speaking English every day, _____ his pronunciation improved a lot.',
    options: ['but', 'because', 'so', 'although'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Anh ấy luyện nói tiếng Anh mỗi ngày nên phát âm cải thiện rất nhiều."\n\n✅ **C. so** — diễn tả kết quả.\n\n❌ **A/B/D** — không phù hợp logic.\n\n💡 so = vì vậy.',
  },
]
};

export default deMau08;
