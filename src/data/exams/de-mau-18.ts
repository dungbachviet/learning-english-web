
import { Exam } from '@/types';

const deMau18: Exam = {
  id: 'de-mau-18',
  title: 'Đề Mẫu Số 18',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề dự đoán 02',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de26-v01',
    word: 'sustainable',
    pronunciation: '/səˈsteɪnəbl/',
    partOfSpeech: 'adj',
    definition: 'bền vững',
    exampleSentence: 'Many countries are developing sustainable energy sources.',
    exampleTranslation: 'Nhiều quốc gia đang phát triển các nguồn năng lượng bền vững.',
    wrongOptions: ['nguy hiểm', 'đắt đỏ', 'ô nhiễm'],
  },
  {
    id: 'de26-v02',
    word: 'conserve',
    pronunciation: '/kənˈsɜːv/',
    partOfSpeech: 'v',
    definition: 'bảo tồn / tiết kiệm',
    exampleSentence: 'We should conserve water to protect the environment.',
    exampleTranslation: 'Chúng ta nên tiết kiệm nước để bảo vệ môi trường.',
    wrongOptions: ['lãng phí', 'phá hủy', 'mở rộng'],
  },
  {
    id: 'de26-v03',
    word: 'biodiversity',
    pronunciation: '/ˌbaɪəʊdaɪˈvɜːsəti/',
    partOfSpeech: 'n',
    definition: 'đa dạng sinh học',
    exampleSentence: 'Forests play an important role in maintaining biodiversity.',
    exampleTranslation: 'Rừng đóng vai trò quan trọng trong việc duy trì đa dạng sinh học.',
    wrongOptions: ['ô nhiễm không khí', 'năng lượng mặt trời', 'biến đổi khí hậu'],
  },
  {
    id: 'de26-v04',
    word: 'endangered',
    pronunciation: '/ɪnˈdeɪndʒəd/',
    partOfSpeech: 'adj',
    definition: 'bị đe dọa tuyệt chủng',
    exampleSentence: 'Many endangered animals are protected by law.',
    exampleTranslation: 'Nhiều loài động vật có nguy cơ tuyệt chủng được pháp luật bảo vệ.',
    wrongOptions: ['an toàn', 'phổ biến', 'khỏe mạnh'],
  },
  {
    id: 'de26-v05',
    word: 'efficient',
    pronunciation: '/ɪˈfɪʃnt/',
    partOfSpeech: 'adj',
    definition: 'hiệu quả',
    exampleSentence: 'This machine is more efficient than the old one.',
    exampleTranslation: 'Cái máy này hiệu quả hơn cái cũ.',
    wrongOptions: ['ồn ào', 'cồng kềnh', 'nguy hiểm'],
  },
  {
    id: 'de26-v06',
    word: 'recyclable',
    pronunciation: '/ˌriːˈsaɪkləbl/',
    partOfSpeech: 'adj',
    definition: 'có thể tái chế',
    exampleSentence: 'Plastic bottles should be placed in recyclable waste bins.',
    exampleTranslation: 'Chai nhựa nên được bỏ vào thùng rác tái chế.',
    wrongOptions: ['dễ cháy', 'độc hại', 'đắt tiền'],
  },
  {
    id: 'de26-v07',
    word: 'pollution',
    pronunciation: '/pəˈluːʃn/',
    partOfSpeech: 'n',
    definition: 'ô nhiễm',
    exampleSentence: 'Air pollution is becoming a serious problem in big cities.',
    exampleTranslation: 'Ô nhiễm không khí đang trở thành vấn đề nghiêm trọng ở các thành phố lớn.',
    wrongOptions: ['giao thông', 'nông nghiệp', 'du lịch'],
  },
  {
    id: 'de26-v08',
    word: 'preservation',
    pronunciation: '/ˌprezəˈveɪʃn/',
    partOfSpeech: 'n',
    definition: 'sự bảo tồn',
    exampleSentence: 'The preservation of wildlife is very important.',
    exampleTranslation: 'Việc bảo tồn động vật hoang dã rất quan trọng.',
    wrongOptions: ['sự phá hủy', 'sự phát minh', 'sự cạnh tranh'],
  },
  {
    id: 'de26-v09',
    word: 'generation',
    pronunciation: '/ˌdʒenəˈreɪʃn/',
    partOfSpeech: 'n',
    definition: 'thế hệ',
    exampleSentence: 'Young generations are more interested in technology.',
    exampleTranslation: 'Các thế hệ trẻ quan tâm đến công nghệ nhiều hơn.',
    wrongOptions: ['quốc gia', 'cộng đồng', 'khu vực'],
  },
  {
    id: 'de26-v10',
    word: 'technology',
    pronunciation: '/tekˈnɒlədʒi/',
    partOfSpeech: 'n',
    definition: 'công nghệ',
    exampleSentence: 'Modern technology changes the way we communicate.',
    exampleTranslation: 'Công nghệ hiện đại thay đổi cách chúng ta giao tiếp.',
    wrongOptions: ['văn hóa', 'thể thao', 'lịch sử'],
  },
  {
    id: 'de26-v11',
    word: 'participate',
    pronunciation: '/pɑːˈtɪsɪpeɪt/',
    partOfSpeech: 'v',
    definition: 'tham gia',
    exampleSentence: 'Students are encouraged to participate in outdoor activities.',
    exampleTranslation: 'Học sinh được khuyến khích tham gia các hoạt động ngoài trời.',
    wrongOptions: ['từ chối', 'tránh né', 'quan sát'],
  },
  {
    id: 'de26-v12',
    word: 'volunteer',
    pronunciation: '/ˌvɒlənˈtɪə(r)/',
    partOfSpeech: 'v',
    definition: 'tình nguyện',
    exampleSentence: 'Many teenagers volunteer to help poor children.',
    exampleTranslation: 'Nhiều thanh thiếu niên tình nguyện giúp đỡ trẻ em nghèo.',
    wrongOptions: ['kiếm tiền', 'thi đấu', 'du lịch'],
  },
  {
    id: 'de26-v13',
    word: 'achievement',
    pronunciation: '/əˈtʃiːvmənt/',
    partOfSpeech: 'n',
    definition: 'thành tựu',
    exampleSentence: 'Winning the scholarship was a great achievement for her.',
    exampleTranslation: 'Giành được học bổng là một thành tựu lớn đối với cô ấy.',
    wrongOptions: ['thất bại', 'thử thách', 'thói quen'],
  },
  {
    id: 'de26-v14',
    word: 'communicate',
    pronunciation: '/kəˈmjuːnɪkeɪt/',
    partOfSpeech: 'v',
    definition: 'giao tiếp',
    exampleSentence: 'Learning English helps people communicate internationally.',
    exampleTranslation: 'Học tiếng Anh giúp mọi người giao tiếp quốc tế.',
    wrongOptions: ['im lặng', 'sao chép', 'phản đối'],
  },
  {
    id: 'de26-v15',
    word: 'responsibility',
    pronunciation: '/rɪˌspɒnsəˈbɪləti/',
    partOfSpeech: 'n',
    definition: 'trách nhiệm',
    exampleSentence: 'Protecting nature is everyone’s responsibility.',
    exampleTranslation: 'Bảo vệ thiên nhiên là trách nhiệm của mọi người.',
    wrongOptions: ['quyền lợi', 'sở thích', 'phần thưởng'],
  },
  {
    id: 'de26-v16',
    word: 'environment',
    pronunciation: '/ɪnˈvaɪrənmənt/',
    partOfSpeech: 'n',
    definition: 'môi trường',
    exampleSentence: 'Plastic waste causes serious harm to the environment.',
    exampleTranslation: 'Rác thải nhựa gây hại nghiêm trọng cho môi trường.',
    wrongOptions: ['kinh tế', 'giáo dục', 'sức khỏe'],
  },
  {
    id: 'de26-v17',
    word: 'transportation',
    pronunciation: '/ˌtrænspɔːˈteɪʃn/',
    partOfSpeech: 'n',
    definition: 'giao thông / vận chuyển',
    exampleSentence: 'Public transportation helps reduce traffic jams.',
    exampleTranslation: 'Phương tiện giao thông công cộng giúp giảm tắc đường.',
    wrongOptions: ['du lịch', 'thể thao', 'thời tiết'],
  },
  {
    id: 'de26-v18',
    word: 'beneficial',
    pronunciation: '/ˌbenɪˈfɪʃl/',
    partOfSpeech: 'adj',
    definition: 'có lợi',
    exampleSentence: 'Regular exercise is beneficial to your health.',
    exampleTranslation: 'Tập thể dục thường xuyên có lợi cho sức khỏe.',
    wrongOptions: ['có hại', 'đắt đỏ', 'khó khăn'],
  },
  {
    id: 'de26-v19',
    word: 'encourage',
    pronunciation: '/ɪnˈkʌrɪdʒ/',
    partOfSpeech: 'v',
    definition: 'khuyến khích',
    exampleSentence: 'Teachers encourage students to read more books.',
    exampleTranslation: 'Giáo viên khuyến khích học sinh đọc nhiều sách hơn.',
    wrongOptions: ['cấm đoán', 'trừng phạt', 'bỏ qua'],
  },
  {
    id: 'de26-v20',
    word: 'development',
    pronunciation: '/dɪˈveləpmənt/',
    partOfSpeech: 'n',
    definition: 'sự phát triển',
    exampleSentence: 'Technology plays a key role in economic development.',
    exampleTranslation: 'Công nghệ đóng vai trò quan trọng trong sự phát triển kinh tế.',
    wrongOptions: ['sự phá hủy', 'sự biến mất', 'sự trì hoãn'],
  },
  {
    id: 'de26-v21',
    word: 'awareness',
    pronunciation: '/əˈweənəs/',
    partOfSpeech: 'n',
    definition: 'nhận thức',
    exampleSentence: 'Campaigns help raise awareness about climate change.',
    exampleTranslation: 'Các chiến dịch giúp nâng cao nhận thức về biến đổi khí hậu.',
    wrongOptions: ['sự nhầm lẫn', 'sự cạnh tranh', 'sự thất vọng'],
  },
  {
    id: 'de26-v22',
    word: 'convenient',
    pronunciation: '/kənˈviːniənt/',
    partOfSpeech: 'adj',
    definition: 'thuận tiện',
    exampleSentence: 'Online learning is convenient for busy students.',
    exampleTranslation: 'Học trực tuyến thuận tiện cho những học sinh bận rộn.',
    wrongOptions: ['đắt đỏ', 'nguy hiểm', 'ồn ào'],
  },
  {
    id: 'de26-v23',
    word: 'opportunity',
    pronunciation: '/ˌɒpəˈtjuːnəti/',
    partOfSpeech: 'n',
    definition: 'cơ hội',
    exampleSentence: 'Studying abroad gives students many opportunities.',
    exampleTranslation: 'Du học mang lại cho học sinh nhiều cơ hội.',
    wrongOptions: ['khó khăn', 'thử thách', 'nguy hiểm'],
  },
  {
    id: 'de26-v24',
    word: 'survive',
    pronunciation: '/səˈvaɪv/',
    partOfSpeech: 'v',
    definition: 'sống sót',
    exampleSentence: 'Some animals cannot survive in polluted water.',
    exampleTranslation: 'Một số loài động vật không thể sống sót trong nguồn nước ô nhiễm.',
    wrongOptions: ['phát triển', 'sinh sản', 'di chuyển'],
  },
  {
    id: 'de26-v25',
    word: 'phenomenon',
    pronunciation: '/fəˈnɒmɪnən/',
    partOfSpeech: 'n',
    definition: 'hiện tượng',
    exampleSentence: 'Global warming is a worldwide phenomenon.',
    exampleTranslation: 'Sự nóng lên toàn cầu là một hiện tượng trên toàn thế giới.',
    wrongOptions: ['phát minh', 'cuộc thi', 'thí nghiệm'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de01-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nMy sister is really fond _____ collecting fridge magnets from different countries.',
    options: ['of', 'about', 'into', 'in'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chị tôi rất thích sưu tầm nam châm tủ lạnh từ nhiều quốc gia."\n\n✅ **A. of** — cấu trúc đúng là: be fond of + V-ing/N.\n\n❌ **B/C/D** — sai giới từ đi kèm.\n\n💡 be fond of = yêu thích điều gì.',
  },

  {
    id: 'de01-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct comparative structure:\n_____ the weather gets, _____ people go swimming.',
    options: [
      'The hotter – the more',
      'Hotter – more',
      'The hottest – the most',
      'More hot – more',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Thời tiết càng nóng thì càng nhiều người đi bơi."\n\n✅ **A. The hotter – the more** — cấu trúc so sánh kép.\n\n❌ **B/C/D** — sai cấu trúc ngữ pháp.\n\n💡 The + comparative, the + comparative = càng... càng...',
  },

  {
    id: 'de01-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nWould you mind _____ the window? It’s getting cold.',
    options: ['close', 'to close', 'closing', 'closed'],
    correctAnswer: 2,
    explanation:
      '📘 Dịch câu: "Bạn có phiền đóng cửa sổ không? Trời đang lạnh dần."\n\n✅ **C. closing** — sau “mind” dùng V-ing.\n\n❌ **A/B/D** — sai cấu trúc.\n\n💡 mind + V-ing.',
  },

  {
    id: 'de01-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nEnglish contains many _____ from other languages.',
    options: [
      'borrowed words',
      'official speeches',
      'language skills',
      'modern accents',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tiếng Anh chứa nhiều từ vay mượn từ các ngôn ngữ khác."\n\n✅ **A. borrowed words** — phù hợp nghĩa.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 borrowed words = từ vay mượn.',
  },

  {
    id: 'de01-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nI _____ my homework yet, so I can’t go out now.',
    options: [
      'haven’t finished',
      'didn’t finish',
      'finish',
      'finished',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi vẫn chưa làm xong bài tập nên bây giờ chưa thể ra ngoài."\n\n✅ **A. haven’t finished** — dùng hiện tại hoàn thành với “yet”.\n\n❌ **B/C/D** — sai thì.\n\n💡 yet thường dùng trong câu phủ định ở hiện tại hoàn thành.',
  },

  {
    id: 'de01-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nWe need a _____ charger when travelling long distances.',
    options: ['portable', 'harmful', 'ancient', 'narrow'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi cần một bộ sạc di động khi đi xa."\n\n✅ **A. portable** — nghĩa là “di động, dễ mang theo”.\n\n❌ **B/C/D** — không phù hợp nghĩa.\n\n💡 portable devices = thiết bị di động.',
  },

  {
    id: 'de01-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct articles:\n_____ library can be _____ quiet place to study.',
    options: ['The – a', 'A – the', 'The – the', 'A – a'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Thư viện có thể là một nơi yên tĩnh để học."\n\n✅ **A. The – a** — “the library” nói chung về thư viện; “a quiet place” là một nơi bất kỳ.\n\n❌ **B/C/D** — dùng mạo từ chưa phù hợp.\n\n💡 a/an dùng với danh từ đếm được số ít chưa xác định.',
  },

  {
    id: 'de01-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n“Good luck with your English test tomorrow!”',
    options: [
      'Thanks! I’ll try my best.',
      'No, I don’t think so.',
      'I’m sorry to hear that.',
      'Never mind.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúc bạn may mắn trong bài kiểm tra tiếng Anh ngày mai!"\n\n✅ **A. Thanks! I’ll try my best.** — đáp lại lời chúc phù hợp.\n\n❌ **B/C/D** — không đúng ngữ cảnh.\n\n💡 Good luck → Thanks.',
  },

  {
    id: 'de01-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nThere are many hidden _____ in the forest that tourists should avoid.',
    options: ['dangers', 'dangerous', 'dangerously', 'endanger'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Có nhiều mối nguy hiểm ẩn trong rừng mà khách du lịch nên tránh."\n\n✅ **A. dangers** — cần danh từ số nhiều.\n\n❌ **B/C/D** — sai loại từ.\n\n💡 many + plural noun.',
  },

  {
    id: 'de01-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct conjunction:\nDon’t touch wild animals _____ you are trained to handle them.',
    options: ['unless', 'although', 'because', 'despite'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đừng chạm vào động vật hoang dã trừ khi bạn được huấn luyện để xử lý chúng."\n\n✅ **A. unless** — nghĩa là “trừ khi”.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 unless = if not.',
  },

  {
    id: 'de01-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct pronoun:\nWild animals may attack to defend _____.',
    options: ['themselves', 'ourselves', 'yourself', 'myself'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Động vật hoang dã có thể tấn công để tự vệ."\n\n✅ **A. themselves** — phản thân tương ứng với “wild animals”.\n\n❌ **B/C/D** — sai chủ ngữ.\n\n💡 themselves dùng cho chủ ngữ số nhiều.',
  },

  {
    id: 'de01-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct answer:\nSea turtles may not _____ long if plastic pollution continues.',
    options: ['survive', 'observe', 'protect', 'damage'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Rùa biển có thể không sống sót lâu nếu ô nhiễm nhựa tiếp diễn."\n\n✅ **A. survive** — sống sót.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 survive = tồn tại/sống sót.',
  },

  {
    id: 'de01-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the correct relative pronoun:\nThe materials _____ are used in this product can be recycled easily.',
    options: ['which', 'who', 'what', 'where'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Những vật liệu được dùng trong sản phẩm này có thể tái chế dễ dàng."\n\n✅ **A. which** — thay cho vật.\n\n❌ **B/C/D** — sai chức năng.\n\n💡 which dùng cho đồ vật trong mệnh đề quan hệ.',
  },

  {
    id: 'de01-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct collocation:\nTechnology _____ an important role in modern education.',
    options: ['plays', 'does', 'acts', 'makes'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Công nghệ đóng vai trò quan trọng trong giáo dục hiện đại."\n\n✅ **A. plays** — collocation: play an important role.\n\n❌ **B/C/D** — không đi với “role”.\n\n💡 play a role = đóng vai trò.',
  },

  {
    id: 'de01-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct adjective:\nMany companies are producing more _____ devices to reduce pollution.',
    options: [
      'energy-saving',
      'low-quality',
      'old-fashioned',
      'time-consuming',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nhiều công ty đang sản xuất các thiết bị tiết kiệm năng lượng hơn để giảm ô nhiễm."\n\n✅ **A. energy-saving** — phù hợp nghĩa.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 energy-saving = tiết kiệm năng lượng.',
  },

  {
    id: 'de01-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nThis air conditioner uses _____ than the old one.',
    options: [
      'less electricity',
      'least electricity',
      'more electricity',
      'most electricity',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Máy điều hòa này dùng ít điện hơn cái cũ."\n\n✅ **A. less electricity** — so sánh hơn với danh từ không đếm được.\n\n❌ **B/C/D** — sai nghĩa hoặc sai cấu trúc.\n\n💡 less + uncountable noun.',
  },

  {
    id: 'de01-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the sentence closest in meaning:\nLet’s go cycling this weekend.',
    options: [
      'How about going cycling this weekend?',
      'We might not go cycling this weekend.',
      'Cycling this weekend is impossible.',
      'Do you dislike cycling this weekend?',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng ta hãy đi đạp xe cuối tuần này nhé."\n\n✅ **A** — cùng nghĩa với “Let’s…”.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 Let’s + V = How about + V-ing?',
  },

  {
    id: 'de01-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the sentence closest in meaning:\nWe left early because the road was crowded.',
    options: [
      'We left early since the road was crowded.',
      'Although the road was crowded, we left early.',
      'The road wasn’t crowded, so we left early.',
      'If the road was crowded, we left early.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi rời đi sớm vì đường đông."\n\n✅ **A** — “because” và “since” đều diễn tả nguyên nhân.\n\n❌ **B/C/D** — sai logic.\n\n💡 because = since = bởi vì.',
  },

  {
    id: 'de01-q19',
    questionNumber: 19,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nWe / not enjoy / picnic / if / weather / bad.',
    options: [
      'We will not enjoy the picnic if the weather is bad.',
      'We not enjoy picnic if weather bad.',
      'We won’t enjoyed the picnic if the weather is bad.',
      'We don’t enjoy the picnic if the weather will be bad.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Chúng tôi sẽ không tận hưởng buổi dã ngoại nếu thời tiết xấu."\n\n✅ **A** — đúng cấu trúc câu điều kiện loại 1.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 If + hiện tại đơn → will + V.',
  },

  {
    id: 'de01-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nI / think / important / recycle / plastic bottles.',
    options: [
      'I think it is important to recycle plastic bottles.',
      'I think important recycle plastic bottles.',
      'I think it important recycling plastic bottles.',
      'I think it is importance to recycle plastic bottles.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi nghĩ việc tái chế chai nhựa là quan trọng."\n\n✅ **A** — đúng cấu trúc: it is + adjective + to V.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 it is + adj + to infinitive.',
  },

  {
    id: 'de01-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nimportant / keeping / is / the environment / clean',
    options: [
      'Keeping the environment clean is important.',
      'Important keeping the environment clean is.',
      'Keeping clean the environment is important.',
      'The environment keeping clean is important.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Giữ môi trường sạch là điều quan trọng."\n\n✅ **A** — đúng trật tự từ.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 V-ing phrase có thể làm chủ ngữ.',
  },

  {
    id: 'de01-q22',
    questionNumber: 22,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nStudents / should / avoid / use / phones / during class.',
    options: [
      'Students should avoid using phones during class.',
      'Students should avoid use phones during class.',
      'Students should avoiding phones during class.',
      'Students should avoid to use phones during class.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Học sinh nên tránh dùng điện thoại trong giờ học."\n\n✅ **A** — avoid + V-ing.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 avoid + V-ing.',
  },

  {
    id: 'de01-q23',
    questionNumber: 23,
    type: 'writing',
    questionText:
      'Arrange the words into a correct sentence:\nmore trees / should / plant / people / in cities',
    options: [
      'People should plant more trees in cities.',
      'Should people plant more trees in cities.',
      'People more trees should plant in cities.',
      'Plant more trees people should in cities.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Mọi người nên trồng nhiều cây hơn trong thành phố."\n\n✅ **A** — đúng trật tự câu.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 Subject + should + V.',
  },

  {
    id: 'de01-q24',
    questionNumber: 24,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nIf / people / use / public transport / pollution / decrease.',
    options: [
      'If people use public transport, pollution will decrease.',
      'If people used public transport, pollution decrease.',
      'If people will use public transport, pollution decreases.',
      'If people use public transport, pollution decreased.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu mọi người sử dụng phương tiện công cộng, ô nhiễm sẽ giảm."\n\n✅ **A** — đúng câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de01-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nmany students / English / useful / consider / a very subject',
    options: [
      'Many students consider English a very useful subject.',
      'Many students useful consider English a very subject.',
      'English consider many students a very useful subject.',
      'Many students consider a very useful English subject.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Nhiều học sinh xem tiếng Anh là một môn học rất hữu ích."\n\n✅ **A** — đúng cấu trúc: consider + O + noun phrase.\n\n❌ **B/C/D** — sai trật tự từ.\n\n💡 consider somebody/something + noun/adjective.',
  },
]
};

export default deMau18;
