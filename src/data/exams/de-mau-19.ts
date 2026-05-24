
import { Exam } from '@/types';

const deMau19: Exam = {
  id: 'de-mau-19',
  title: 'Đề Mẫu Số 19',
  year: '2024',
  school: 'Trường THCS Trường THCS Khương Đình - Đề thật 2025',
  description: 'Pronunciation · Stress · Grammar · Vocabulary',
  totalQuestions: 8,

  // ─── VOCABULARY ──────────────────────────────────────────────────────────
vocabulary: [
  {
    id: 'de27-v01',
    word: 'beloved',
    pronunciation: '/bɪˈlʌvd/',
    partOfSpeech: 'adj',
    definition: 'được yêu quý',
    exampleSentence: 'The teacher was beloved by all her students.',
    exampleTranslation: 'Cô giáo được tất cả học sinh yêu quý.',
    wrongOptions: ['đáng sợ', 'giận dữ', 'ồn ào'],
  },
  {
    id: 'de27-v02',
    word: 'ancient',
    pronunciation: '/ˈeɪnʃənt/',
    partOfSpeech: 'adj',
    definition: 'cổ xưa',
    exampleSentence: 'Hoi An is famous for its ancient houses.',
    exampleTranslation: 'Hội An nổi tiếng với những ngôi nhà cổ.',
    wrongOptions: ['hiện đại', 'cao cấp', 'nhỏ bé'],
  },
  {
    id: 'de27-v03',
    word: 'festival',
    pronunciation: '/ˈfestɪvl/',
    partOfSpeech: 'n',
    definition: 'lễ hội',
    exampleSentence: 'Many tourists join the flower festival every year.',
    exampleTranslation: 'Nhiều khách du lịch tham gia lễ hội hoa mỗi năm.',
    wrongOptions: ['cuộc họp', 'trận đấu', 'bài kiểm tra'],
  },
  {
    id: 'de27-v04',
    word: 'interact',
    pronunciation: '/ˌɪntərˈækt/',
    partOfSpeech: 'v',
    definition: 'tương tác',
    exampleSentence: 'Students should interact more during group discussions.',
    exampleTranslation: 'Học sinh nên tương tác nhiều hơn trong thảo luận nhóm.',
    wrongOptions: ['im lặng', 'tránh né', 'rời đi'],
  },
  {
    id: 'de27-v05',
    word: 'locals',
    pronunciation: '/ˈləʊklz/',
    partOfSpeech: 'n',
    definition: 'người dân địa phương',
    exampleSentence: 'Tourists often ask locals for directions.',
    exampleTranslation: 'Khách du lịch thường hỏi người dân địa phương đường đi.',
    wrongOptions: ['du khách', 'giáo viên', 'nhân viên'],
  },
  {
    id: 'de27-v06',
    word: 'encouragement',
    pronunciation: '/ɪnˈkʌrɪdʒmənt/',
    partOfSpeech: 'n',
    definition: 'sự khuyến khích',
    exampleSentence: 'Her encouragement helped me feel more confident.',
    exampleTranslation: 'Sự khuyến khích của cô ấy giúp tôi tự tin hơn.',
    wrongOptions: ['sự thất vọng', 'sự trừng phạt', 'sự lo lắng'],
  },
  {
    id: 'de27-v07',
    word: 'confidently',
    pronunciation: '/ˈkɒnfɪdəntli/',
    partOfSpeech: 'adv',
    definition: 'một cách tự tin',
    exampleSentence: 'He answered the interview questions confidently.',
    exampleTranslation: 'Anh ấy trả lời các câu hỏi phỏng vấn một cách tự tin.',
    wrongOptions: ['rụt rè', 'tức giận', 'vội vàng'],
  },
  {
    id: 'de27-v08',
    word: 'creativity',
    pronunciation: '/ˌkriːeɪˈtɪvəti/',
    partOfSpeech: 'n',
    definition: 'sự sáng tạo',
    exampleSentence: 'Music can improve children’s creativity.',
    exampleTranslation: 'Âm nhạc có thể cải thiện sự sáng tạo của trẻ em.',
    wrongOptions: ['sự lười biếng', 'sự căng thẳng', 'sự sợ hãi'],
  },
  {
    id: 'de27-v09',
    word: 'transportation',
    pronunciation: '/ˌtrænspɔːˈteɪʃn/',
    partOfSpeech: 'n',
    definition: 'giao thông / vận chuyển',
    exampleSentence: 'Public transportation reduces traffic jams.',
    exampleTranslation: 'Phương tiện công cộng giúp giảm tắc đường.',
    wrongOptions: ['giải trí', 'nông nghiệp', 'du lịch'],
  },
  {
    id: 'de27-v10',
    word: 'diversity',
    pronunciation: '/daɪˈvɜːsəti/',
    partOfSpeech: 'n',
    definition: 'sự đa dạng',
    exampleSentence: 'Cultural diversity makes the city more interesting.',
    exampleTranslation: 'Sự đa dạng văn hóa làm thành phố thú vị hơn.',
    wrongOptions: ['sự nghèo đói', 'sự ô nhiễm', 'sự cạnh tranh'],
  },
  {
    id: 'de27-v11',
    word: 'generation',
    pronunciation: '/ˌdʒenəˈreɪʃn/',
    partOfSpeech: 'n',
    definition: 'thế hệ',
    exampleSentence: 'Young generations use technology every day.',
    exampleTranslation: 'Các thế hệ trẻ sử dụng công nghệ mỗi ngày.',
    wrongOptions: ['gia đình', 'trường học', 'quốc gia'],
  },
  {
    id: 'de27-v12',
    word: 'culture',
    pronunciation: '/ˈkʌltʃə(r)/',
    partOfSpeech: 'n',
    definition: 'văn hóa',
    exampleSentence: 'Vietnamese culture attracts many foreign visitors.',
    exampleTranslation: 'Văn hóa Việt Nam thu hút nhiều du khách nước ngoài.',
    wrongOptions: ['thời tiết', 'kinh tế', 'giao thông'],
  },
  {
    id: 'de27-v13',
    word: 'interviewee',
    pronunciation: '/ˌɪntəvjuˈiː/',
    partOfSpeech: 'n',
    definition: 'người được phỏng vấn',
    exampleSentence: 'The interviewee answered all the questions clearly.',
    exampleTranslation: 'Người được phỏng vấn trả lời mọi câu hỏi rõ ràng.',
    wrongOptions: ['người quản lý', 'giáo viên', 'khách hàng'],
  },
  {
    id: 'de27-v14',
    word: 'qualities',
    pronunciation: '/ˈkwɒlətiz/',
    partOfSpeech: 'n',
    definition: 'phẩm chất',
    exampleSentence: 'Honesty and kindness are important qualities.',
    exampleTranslation: 'Trung thực và tốt bụng là những phẩm chất quan trọng.',
    wrongOptions: ['sở thích', 'đồ dùng', 'bài học'],
  },
  {
    id: 'de27-v15',
    word: 'availability',
    pronunciation: '/əˌveɪləˈbɪləti/',
    partOfSpeech: 'n',
    definition: 'sự sẵn sàng / thời gian rảnh',
    exampleSentence: 'Please tell us your availability for the meeting.',
    exampleTranslation: 'Hãy cho chúng tôi biết thời gian rảnh của bạn cho cuộc họp.',
    wrongOptions: ['sự thất bại', 'sự nổi tiếng', 'sự nguy hiểm'],
  },
  {
    id: 'de27-v16',
    word: 'colleagues',
    pronunciation: '/ˈkɒliːɡz/',
    partOfSpeech: 'n',
    definition: 'đồng nghiệp',
    exampleSentence: 'She works well with her colleagues.',
    exampleTranslation: 'Cô ấy làm việc tốt với các đồng nghiệp.',
    wrongOptions: ['hàng xóm', 'bạn học', 'người thân'],
  },
  {
    id: 'de27-v17',
    word: 'performance',
    pronunciation: '/pəˈfɔːməns/',
    partOfSpeech: 'n',
    definition: 'màn trình diễn / hiệu suất',
    exampleSentence: 'His performance in the school play was excellent.',
    exampleTranslation: 'Màn trình diễn của anh ấy trong vở kịch của trường rất xuất sắc.',
    wrongOptions: ['cuộc thi', 'bài kiểm tra', 'cuộc họp'],
  },
  {
    id: 'de27-v18',
    word: 'communication',
    pronunciation: '/kəˌmjuːnɪˈkeɪʃn/',
    partOfSpeech: 'n',
    definition: 'sự giao tiếp',
    exampleSentence: 'Good communication helps avoid misunderstandings.',
    exampleTranslation: 'Giao tiếp tốt giúp tránh hiểu lầm.',
    wrongOptions: ['sự cạnh tranh', 'sự im lặng', 'sự ô nhiễm'],
  },
  {
    id: 'de27-v19',
    word: 'facial expressions',
    pronunciation: '/ˈfeɪʃl ɪkˈspreʃnz/',
    partOfSpeech: 'n.phr',
    definition: 'nét mặt / biểu cảm khuôn mặt',
    exampleSentence: 'Facial expressions can show how someone feels.',
    exampleTranslation: 'Biểu cảm khuôn mặt có thể cho thấy cảm xúc của ai đó.',
    wrongOptions: ['giọng nói', 'quần áo', 'kiểu tóc'],
  },
  {
    id: 'de27-v20',
    word: 'confusion',
    pronunciation: '/kənˈfjuːʒn/',
    partOfSpeech: 'n',
    definition: 'sự bối rối / nhầm lẫn',
    exampleSentence: 'Poor instructions may cause confusion among students.',
    exampleTranslation: 'Hướng dẫn không rõ ràng có thể gây nhầm lẫn cho học sinh.',
    wrongOptions: ['sự tự tin', 'sự vui vẻ', 'sự phát triển'],
  },
  {
    id: 'de27-v21',
    word: 'relationships',
    pronunciation: '/rɪˈleɪʃnʃɪps/',
    partOfSpeech: 'n',
    definition: 'các mối quan hệ',
    exampleSentence: 'Honesty helps build strong relationships.',
    exampleTranslation: 'Sự trung thực giúp xây dựng các mối quan hệ bền chặt.',
    wrongOptions: ['kế hoạch', 'truyền thống', 'phương tiện'],
  },
  {
    id: 'de27-v22',
    word: 'connected',
    pronunciation: '/kəˈnektɪd/',
    partOfSpeech: 'adj',
    definition: 'gắn kết',
    exampleSentence: 'Social activities help students feel more connected.',
    exampleTranslation: 'Các hoạt động xã hội giúp học sinh cảm thấy gắn kết hơn.',
    wrongOptions: ['cô đơn', 'mệt mỏi', 'lo lắng'],
  },
  {
    id: 'de27-v23',
    word: 'behaviour',
    pronunciation: '/bɪˈheɪvjə(r)/',
    partOfSpeech: 'n',
    definition: 'hành vi',
    exampleSentence: 'Teachers should guide students toward good behaviour.',
    exampleTranslation: 'Giáo viên nên hướng dẫn học sinh tới hành vi tốt.',
    wrongOptions: ['trang phục', 'sở thích', 'kỹ năng'],
  },
  {
    id: 'de27-v24',
    word: 'disciplined',
    pronunciation: '/ˈdɪsəplɪnd/',
    partOfSpeech: 'adj',
    definition: 'có kỷ luật',
    exampleSentence: 'Successful students are often disciplined learners.',
    exampleTranslation: 'Những học sinh thành công thường học tập có kỷ luật.',
    wrongOptions: ['lười biếng', 'ồn ào', 'thiếu kiên nhẫn'],
  },
  {
    id: 'de27-v25',
    word: 'influence',
    pronunciation: '/ˈɪnfluəns/',
    partOfSpeech: 'n',
    definition: 'ảnh hưởng',
    exampleSentence: 'Music has a strong influence on teenagers.',
    exampleTranslation: 'Âm nhạc có ảnh hưởng lớn đến thanh thiếu niên.',
    wrongOptions: ['thất bại', 'sự lựa chọn', 'thói quen'],
  },
],

  // ─── QUESTIONS ───────────────────────────────────────────────────────────
questions: [
  {
    id: 'de11-q01',
    questionNumber: 1,
    type: 'grammar',
    questionText:
      'Choose the correct comparative structure:\nThis is one of _____ cultural festivals in northern Viet Nam.',
    options: [
      'the most popular',
      'more popular',
      'as popular as',
      'most popular',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Đây là một trong những lễ hội văn hóa nổi tiếng nhất ở miền Bắc Việt Nam."\n\n✅ **A. the most popular** — cấu trúc đúng là: one of the + superlative + plural noun.\n\n❌ **B/C/D** — sai cấu trúc so sánh.\n\n💡 one of the most + adj = một trong những ... nhất.',
  },

  {
    id: 'de11-q02',
    questionNumber: 2,
    type: 'grammar',
    questionText:
      'Choose the correct phrasal verb:\nTom quickly _____ Spanish after moving to Madrid.',
    options: ['picked up', 'put up', 'looked up', 'took off'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tom học tiếng Tây Ban Nha khá nhanh sau khi chuyển đến Madrid."\n\n✅ **A. picked up** — nghĩa là học được một kỹ năng/ngôn ngữ một cách tự nhiên.\n\n❌ **B/C/D** — sai nghĩa trong ngữ cảnh.\n\n💡 pick up a language = học được ngôn ngữ.',
  },

  {
    id: 'de11-q03',
    questionNumber: 3,
    type: 'grammar',
    questionText:
      'Choose the correct word form:\nHer words of _____ gave me confidence before the competition.',
    options: [
      'encouragement',
      'encourage',
      'encouraging',
      'encouraged',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Những lời động viên của cô ấy đã giúp tôi tự tin trước cuộc thi."\n\n✅ **A. encouragement** — cần danh từ sau “words of”.\n\n❌ **B/C/D** — sai loại từ.\n\n💡 words of encouragement = lời động viên.',
  },

  {
    id: 'de11-q04',
    questionNumber: 4,
    type: 'grammar',
    questionText:
      'Choose the correct response:\n“I failed my driving test again.”',
    options: [
      'Don’t worry. You can try again next time.',
      'I’m glad to hear that.',
      'You should stop learning to drive.',
      'That sounds very exciting.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi lại trượt bài thi lái xe rồi."\n\n✅ **A** — lời động viên phù hợp trong tình huống thất bại.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh giao tiếp.\n\n💡 Khi ai đó buồn/thất bại → nên động viên.',
  },

  {
    id: 'de11-q05',
    questionNumber: 5,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nMy brother didn’t _____ play video games when he was younger.',
    options: ['use to', 'used to', 'using to', 'uses to'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Anh trai tôi trước đây không thường chơi điện tử khi còn nhỏ."\n\n✅ **A. use to** — sau “didn’t” dùng động từ nguyên mẫu.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 didn’t + use to + V.',
  },

  {
    id: 'de11-q06',
    questionNumber: 6,
    type: 'grammar',
    questionText:
      'Choose the correct article:\nShe became _____ leader of the environmental club last year.',
    options: ['the', 'a', 'an', 'Ø (no article)'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cô ấy trở thành trưởng câu lạc bộ môi trường năm ngoái."\n\n✅ **A. the** — dùng với vị trí/chức vụ cụ thể.\n\n❌ **B/C/D** — không phù hợp.\n\n💡 the leader = người lãnh đạo cụ thể.',
  },

  {
    id: 'de11-q07',
    questionNumber: 7,
    type: 'grammar',
    questionText:
      'Choose the correct tense:\nThe train _____ at 7:30 tomorrow morning.',
    options: ['leaves', 'will leaving', 'leave', 'is leave'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tàu sẽ rời đi lúc 7:30 sáng mai."\n\n✅ **A. leaves** — hiện tại đơn dùng cho lịch trình/thời gian biểu.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 Present simple thường dùng cho timetable.',
  },

  {
    id: 'de11-q08',
    questionNumber: 8,
    type: 'grammar',
    questionText:
      'Choose the correct conditional sentence:\nIf the weather _____ better, we _____ camping this weekend.',
    options: [
      'gets – will go',
      'will get – go',
      'got – will go',
      'gets – go',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu thời tiết đẹp hơn, chúng tôi sẽ đi cắm trại cuối tuần này."\n\n✅ **A** — đúng cấu trúc câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì động từ.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de11-q09',
    questionNumber: 9,
    type: 'grammar',
    questionText:
      'Choose the correct preposition:\nThe meeting will take place _____ Friday afternoon.',
    options: ['on', 'at', 'in', 'for'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Cuộc họp sẽ diễn ra vào chiều thứ Sáu."\n\n✅ **A. on** — dùng với ngày cụ thể.\n\n❌ **B/C/D** — sai giới từ thời gian.\n\n💡 on + day/date.',
  },

  {
    id: 'de11-q10',
    questionNumber: 10,
    type: 'grammar',
    questionText:
      'Choose the correct quantifier:\nPlease ask _____ questions if you do not understand the instructions.',
    options: ['a few', 'much', 'little', 'a little'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Hãy hỏi vài câu nếu bạn không hiểu hướng dẫn."\n\n✅ **A. a few** — dùng với danh từ đếm được số nhiều.\n\n❌ **B/C/D** — dùng sai loại danh từ.\n\n💡 a few + plural countable noun.',
  },

  {
    id: 'de11-q11',
    questionNumber: 11,
    type: 'grammar',
    questionText:
      'Choose the correct word:\nThe judges commented on her excellent _____ during the singing contest.',
    options: ['performance', 'allowance', 'instance', 'entrance'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Ban giám khảo nhận xét về phần trình diễn xuất sắc của cô ấy."\n\n✅ **A. performance** — nghĩa là phần trình diễn.\n\n❌ **B/C/D** — không phù hợp ngữ cảnh.\n\n💡 performance = màn trình diễn.',
  },

  {
    id: 'de11-q12',
    questionNumber: 12,
    type: 'grammar',
    questionText:
      'Choose the correct phrase:\nFor _____ information, please contact the school office.',
    options: ['further', 'lesser', 'bigger', 'wider'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Để biết thêm thông tin, vui lòng liên hệ văn phòng trường."\n\n✅ **A. further** — collocation đúng: further information.\n\n❌ **B/C/D** — sai cách dùng.\n\n💡 further information = thêm thông tin.',
  },

  {
    id: 'de11-q13',
    questionNumber: 13,
    type: 'grammar',
    questionText:
      'Choose the best topic sentence:\n_____ It allows people to understand emotions and reactions more clearly.',
    options: [
      'Face-to-face communication has many benefits.',
      'People rarely communicate in modern society.',
      'Technology completely replaces direct conversation.',
      'Body language is difficult to understand.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Giao tiếp trực tiếp có nhiều lợi ích."\n\n✅ **A** — phù hợp để mở đầu đoạn văn nói về lợi ích của giao tiếp trực tiếp.\n\n❌ **B/C/D** — không khái quát đúng nội dung.\n\n💡 Topic sentence cần bao quát ý chính của đoạn.',
  },

  {
    id: 'de11-q14',
    questionNumber: 14,
    type: 'grammar',
    questionText:
      'Choose the correct connector:\nSome songs are educational. _____, others may contain harmful messages.',
    options: ['However', 'Therefore', 'Moreover', 'Because'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Một số bài hát mang tính giáo dục. Tuy nhiên, một số khác có thể chứa nội dung tiêu cực."\n\n✅ **A. However** — dùng để diễn tả sự tương phản.\n\n❌ **B/C/D** — sai nghĩa logic.\n\n💡 however = tuy nhiên.',
  },

  {
    id: 'de11-q15',
    questionNumber: 15,
    type: 'grammar',
    questionText:
      'Choose the correct structure:\nListening to loud music can _____ your hearing.',
    options: ['damage', 'damaging', 'damaged', 'to damage'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nghe nhạc quá to có thể làm hại thính giác của bạn."\n\n✅ **A. damage** — sau modal verb “can” dùng động từ nguyên mẫu.\n\n❌ **B/C/D** — sai cấu trúc.\n\n💡 can + V nguyên mẫu.',
  },

  {
    id: 'de11-q16',
    questionNumber: 16,
    type: 'grammar',
    questionText:
      'Choose the correct collocation:\nTeachers play an important _____ in helping students succeed.',
    options: ['role', 'task', 'activity', 'work'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Giáo viên đóng vai trò quan trọng trong việc giúp học sinh thành công."\n\n✅ **A. role** — collocation đúng: play an important role.\n\n❌ **B/C/D** — không đi với “play”.\n\n💡 play a role = đóng vai trò.',
  },

  {
    id: 'de11-q17',
    questionNumber: 17,
    type: 'grammar',
    questionText:
      'Choose the correct modal verb:\nParents _____ encourage children to spend less time online.',
    options: ['should', 'ought not', 'shouldn’t', 'mustn’t to'],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Phụ huynh nên khuyến khích trẻ dành ít thời gian trực tuyến hơn."\n\n✅ **A. should** — dùng để đưa ra lời khuyên.\n\n❌ **B/C/D** — sai nghĩa hoặc sai cấu trúc.\n\n💡 should = nên.',
  },

  {
    id: 'de11-q18',
    questionNumber: 18,
    type: 'grammar',
    questionText:
      'Choose the sentence closest in meaning:\nThese old letters remind me of my childhood.',
    options: [
      'These old letters make me remember my childhood.',
      'I wrote these old letters in my childhood.',
      'My childhood reminds me of these letters.',
      'These letters were lost during my childhood.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Những lá thư cũ này khiến tôi nhớ về tuổi thơ."\n\n✅ **A** — cùng nghĩa với “remind somebody of”.\n\n❌ **B/C/D** — sai nghĩa.\n\n💡 remind somebody of something = khiến ai nhớ tới điều gì.',
  },

  {
    id: 'de11-q19',
    questionNumber: 19,
    type: 'grammar',
    questionText:
      'Choose the correct reported speech:\nLan asked me, “Do I need to finish this today?”',
    options: [
      'Lan asked me whether she needed to finish that that day.',
      'Lan asked me whether do she need to finish this today.',
      'Lan asked me whether I needed to finish this today.',
      'Lan asked me whether she need finish that day.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Lan hỏi tôi liệu cô ấy có cần hoàn thành việc đó trong ngày hôm đó không."\n\n✅ **A** — đúng quy tắc đổi câu hỏi gián tiếp.\n\n❌ **B/C/D** — sai thì, đại từ hoặc trật tự câu.\n\n💡 reported question: whether + S + V.',
  },

  {
    id: 'de11-q20',
    questionNumber: 20,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nI / look forward / visit / my grandparents / summer vacation.',
    options: [
      'I look forward to visiting my grandparents during the summer vacation.',
      'I look forward visit my grandparents during summer vacation.',
      'I am look forward to visit my grandparents during the summer vacation.',
      'I look forward to visit my grandparents during the summer vacation.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Tôi mong được thăm ông bà trong kỳ nghỉ hè."\n\n✅ **A** — đúng cấu trúc: look forward to + V-ing.\n\n❌ **B/C/D** — sai ngữ pháp.\n\n💡 look forward to + V-ing.',
  },

  {
    id: 'de11-q21',
    questionNumber: 21,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nThe student / who / win / competition / receive / special prize.',
    options: [
      'The student who wins the competition will receive a special prize.',
      'The student who win the competition receive a special prize.',
      'The student who wins the competition receive a special prize.',
      'The student who winning the competition will receives a special prize.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Học sinh thắng cuộc thi sẽ nhận được một giải thưởng đặc biệt."\n\n✅ **A** — đúng chia động từ trong mệnh đề quan hệ và tương lai đơn.\n\n❌ **B/C/D** — sai hòa hợp chủ ngữ - động từ.\n\n💡 who wins = mệnh đề quan hệ cho chủ ngữ số ít.',
  },

  {
    id: 'de11-q22',
    questionNumber: 22,
    type: 'writing',
    questionText:
      'Arrange the words into a complete sentence:\nmany teenagers / enjoy / listening to / music / in their free time',
    options: [
      'Many teenagers enjoy listening to music in their free time.',
      'Many teenagers listening to enjoy music in their free time.',
      'Enjoy many teenagers listening to music in their free time.',
      'Many teenagers enjoy music listening to in their free time.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Nhiều thanh thiếu niên thích nghe nhạc vào thời gian rảnh."\n\n✅ **A** — đúng trật tự câu tiếng Anh.\n\n❌ **B/C/D** — sai vị trí động từ/cụm từ.\n\n💡 enjoy + V-ing.',
  },

  {
    id: 'de11-q23',
    questionNumber: 23,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nIf / students / study harder / they / pass / exam easily.',
    options: [
      'If students study harder, they will pass the exam easily.',
      'If students studied harder, they pass the exam easily.',
      'If students will study harder, they pass the exam easily.',
      'If students study harder, they passed the exam easily.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Nếu học sinh học chăm hơn, họ sẽ vượt qua kỳ thi dễ dàng."\n\n✅ **A** — đúng câu điều kiện loại 1.\n\n❌ **B/C/D** — sai thì động từ.\n\n💡 If + present simple → will + V.',
  },

  {
    id: 'de11-q24',
    questionNumber: 24,
    type: 'writing',
    questionText:
      'Arrange the words into a meaningful sentence:\nonline shopping / people / buy products / allows / easily',
    options: [
      'Online shopping allows people to buy products easily.',
      'Online shopping people allows to buy products easily.',
      'Allows online shopping people buy products easily.',
      'People online shopping allows buy products easily.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu đúng: "Mua sắm trực tuyến cho phép mọi người mua sản phẩm dễ dàng."\n\n✅ **A** — đúng cấu trúc: allow somebody to do something.\n\n❌ **B/C/D** — sai trật tự từ và ngữ pháp.\n\n💡 allow + O + to V.',
  },

  {
    id: 'de11-q25',
    questionNumber: 25,
    type: 'writing',
    questionText:
      'Choose the correct sentence from the given cues:\nSign language / use / hand movements / facial expressions / communicate.',
    options: [
      'Sign language uses hand movements and facial expressions to communicate.',
      'Sign language use hand movements and facial expressions communicate.',
      'Sign language uses hand movements communicate facial expressions.',
      'Sign language using hand movements and facial expressions to communicate.',
    ],
    correctAnswer: 0,
    explanation:
      '📘 Dịch câu: "Ngôn ngữ ký hiệu sử dụng cử động tay và biểu cảm khuôn mặt để giao tiếp."\n\n✅ **A** — đúng cấu trúc câu hoàn chỉnh.\n\n❌ **B/C/D** — thiếu động từ hoặc sai cấu trúc.\n\n💡 use something to do something.',
  },
]
};

export default deMau19;
