const conjunctionsData = [
  {
    conjunction: "And",
    explanation: "দুটি সমজাতীয় বিষয়কে যুক্ত করতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He is talented and hardworking.",
        bangla: "সে প্রতিভাবান এবং পরিশ্রমী।",
      },
      {
        english:
          "The economic crisis of the country has been solved and people have become quite.",
        bangla: "দেশের অর্থনৈতিক সংকট কেটেছে এবং জনগণ শান্ত হয়েছে।",
      },
      {
        english: "She cooked dinner and set the table.",
        bangla: "সে রাতের খাবার রান্না করেছিল এবং টেবিল সাজিয়েছিল।",
      },
      {
        english: "The sun is shining and the birds are singing.",
        bangla: "সূর্য উজ্জ্বল এবং পাখিরা গান গাইছে।",
      },
    ],
  },
  {
    conjunction: "But",
    explanation: "বিপরীত বিষয়কে যুক্ত করতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He is poor but he is honest.",
        bangla: "তিনি গরিব কিন্তু সৎ।",
      },
      {
        english: "She wanted to go to the party but she was sick.",
        bangla: "সে পার্টিতে যেতে চেয়েছিল কিন্তু সে অসুস্থ ছিল।",
      },
      {
        english: "He failed the test many times but he did not stop trying.",
        bangla: "সে অনেকবার পরীক্ষায় ফেল করেছিল কিন্তু সে চেষ্টা থামায়নি।",
      },
      {
        english: "He ran fast but he could not get the bus.",
        bangla: "সে দ্রুত দৌড়িয়েছিল কিন্তু সে বাসটি পাইনি।",
      },
      {
        english: "She is intelligent but lazy.",
        bangla: "সে বুদ্ধিমান কিন্তু অলস।",
      },
    ],
  },
  {
    conjunction: "Or",
    explanation: "বিপরীত বা বিকল্প দুটি বিষয়কে যুক্ত করতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "You can take the bus or walk.",
        bangla: "তুমি বাস নিতে পারো অথবা হেঁটে যেতে পারো।",
      },
      {
        english: "Will you have tea or coffee?",
        bangla: "তুমি চা নেবে না কফি?",
      },
      {
        english: "We can go to the beach or the mountains.",
        bangla: "আমরা সমুদ্র সৈকত বা পর্বতে যেতে পারি।",
      },
      {
        english: "Do you want to read a book or watch a movie?",
        bangla: "তুমি কি বই পড়তে চাও না মুভি দেখতে চাও?",
      },
    ],
  },
  {
    conjunction: "As well as",
    explanation: "সাধারণত তৃতীয় কোন বাক্য সংযোজন করতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He is intelligent as well as kind.",
        bangla: "সে বুদ্ধিমান এবং পাশাপাশি দয়ালুও।",
      },
      {
        english: "She sings beautifully as well as plays the piano.",
        bangla: "সে সুন্দরভাবে গান গায় এবং পাশাপাশি পিয়ানোও বাজায়।",
      },
      {
        english: "He is a writer as well as a teacher.",
        bangla: "সে একজন লেখক এবং পাশাপাশি একজন শিক্ষক।",
      },
      {
        english: "The project will require money as well as time.",
        bangla: "প্রকল্পটির জন্য অর্থ এবং পাশাপাশি সময়ও প্রয়োজন।",
      },
    ],
  },
  {
    conjunction: "Both…and",
    explanation: "দুটি বিষয়কেই বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Both the manager and the assistant attended the meeting.",
        bangla: "ম্যানেজার এবং সহকারী উভয়েই মিটিংয়ে উপস্থিত ছিল।",
      },
      {
        english: "Both the movie and the book are great.",
        bangla: "চলচ্চিত্র এবং বই উভয়ই চমৎকার।",
      },
      {
        english: "Both John and Jane are coming to the party.",
        bangla: "জন এবং জেন উভয়েই পার্টিতে আসছে।",
      },
      {
        english: "Both the cake and the cookies were delicious.",
        bangla: "কেক এবং কুকিজ উভয়ই সুস্বাদু ছিল।",
      },
    ],
  },
  {
    conjunction: "Whether…or not",
    explanation: "কোন কিছু হবে কি হবে না বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "I don’t know whether he will come or not.",
        bangla: "আমি জানি না সে আসবে কি আসবে না।",
      },
      {
        english: "We will go whether it rains or not.",
        bangla: "বৃষ্টি হোক বা না হোক, আমরা যাব।",
      },
      {
        english: "She has to decide whether to go or not.",
        bangla: "তাকে সিদ্ধান্ত নিতে হবে যাবে কি যাবে না।",
      },
      {
        english: "They need to know whether we agree or not.",
        bangla: "তারা জানতে চায় আমরা একমত কি না।",
      },
    ],
  },
  {
    conjunction: "Till/Until",
    explanation: "যতক্ষণ না বা পর্যন্ত বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "She will wait till he arrives.",
        bangla: "সে তার আসা পর্যন্ত অপেক্ষা করবে।",
      },
      {
        english: "I will stay here until you come back.",
        bangla: "আমি এখানে থাকব যতক্ষণ না তুমি ফিরে আসো।",
      },
      {
        english: "Wait till I finish my work.",
        bangla: "আমার কাজ শেষ হওয়া পর্যন্ত অপেক্ষা কর।",
      },
      {
        english: "He worked until midnight.",
        bangla: "সে মধ্যরাত পর্যন্ত কাজ করেছিল।",
      },
    ],
  },
  {
    conjunction: "That",
    explanation: "ঐ/ঐটা বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "I know that he is lying.",
        bangla: "আমি জানি যে সে মিথ্যা বলছে।",
      },
      {
        english: "She said that she would come.",
        bangla: "সে বলেছিল যে সে আসবে।",
      },
      {
        english: "It is important that you understand this.",
        bangla: "এটি গুরুত্বপূর্ণ যে তুমি এটি বোঝ।",
      },
      {
        english: "I believe that we can win.",
        bangla: "আমি বিশ্বাস করি যে আমরা জিততে পারি।",
      },
    ],
  },
  {
    conjunction: "So that",
    explanation: "যাতে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Study hard so that you can pass the exam.",
        bangla: "কঠোর পড়াশোনা কর যাতে তুমি পরীক্ষায় পাস করতে পার।",
      },
      {
        english: "He saved money so that he could buy a car.",
        bangla: "সে টাকা সঞ্চয় করেছিল যাতে সে একটি গাড়ি কিনতে পারে।",
      },
      {
        english: "Speak clearly so that everyone can understand.",
        bangla: "স্পষ্টভাবে কথা বল যাতে সবাই বুঝতে পারে।",
      },
      {
        english: "She exercises regularly so that she can stay healthy.",
        bangla: "সে নিয়মিত ব্যায়াম করে যাতে সে সুস্থ থাকতে পারে।",
      },
    ],
  },
  {
    conjunction: "So…that",
    explanation: "এতই... যে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "She is so tired that she can’t move.",
        bangla: "সে এতই ক্লান্ত যে সে নড়াচড়া করতে পারে না।",
      },
      {
        english: "He was so hungry that he ate everything.",
        bangla: "সে এতই ক্ষুধার্ত ছিল যে সে সবকিছু খেয়ে ফেলেছিল।",
      },
      {
        english: "The movie was so boring that I fell asleep.",
        bangla: "মুভিটি এতই বিরক্তিকর ছিল যে আমি ঘুমিয়ে পড়েছিলাম।",
      },
      {
        english: "It was so cold that we couldn’t go outside.",
        bangla: "এতই ঠান্ডা ছিল যে আমরা বাইরে যেতে পারিনি।",
      },
    ],
  },
  {
    conjunction: "Such",
    explanation: "এমন বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "I have never seen such a beautiful place.",
        bangla: "আমি এমন সুন্দর জায়গা কখনও দেখিনি।",
      },
      {
        english: "She has such a kind heart.",
        bangla: "তার এতই দয়ালু হৃদয় আছে।",
      },
      {
        english: "He is such a good friend.",
        bangla: "সে এমন একজন ভালো বন্ধু।",
      },
      {
        english: "They faced such a terrible storm.",
        bangla: "তারা এমন ভয়ংকর ঝড়ের মুখোমুখি হয়েছিল।",
      },
    ],
  },
  {
    conjunction: "Such as",
    explanation: "কোন কিছুর মত বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "There is no joy such as the joy of giving.",
        bangla: "দানের আনন্দের মতো কোনো আনন্দ নেই।",
      },
      {
        english: "Fruits such as apples and oranges are good for health.",
        bangla: "আপেল ও কমলালেবুর মতো ফলগুলো স্বাস্থ্যকর।",
      },
      {
        english: "He enjoys outdoor activities such as hiking and cycling.",
        bangla: "সে বাইরের কার্যকলাপ যেমন হাইকিং এবং সাইক্লিং উপভোগ করে।",
      },
      {
        english:
          "There are many languages such as Spanish, French, and German.",
        bangla: "অনেক ভাষা আছে যেমন স্প্যানিশ, ফ্রেঞ্চ, এবং জার্মান।",
      },
    ],
  },
  {
    conjunction: "However / Whatever",
    explanation:
      "However: যতই বোঝাতে Adjective/Adverb এর পূর্বে ব্যবহৃত হয়।\nWhatever: যতই বোঝাতে Noun এর পূর্বে ব্যবহৃত হয়।",
    examples: [
      {
        english: "However late you may be, I will wait for you.",
        bangla: "তুমি যতই দেরি করো না কেন, আমি তোমার জন্য অপেক্ষা করব।",
      },
      {
        english: "Whatever decision you make, I will support you.",
        bangla: "তুমি যা কিছু সিদ্ধান্ত নাও না কেন, আমি তোমাকে সমর্থন করব।",
      },
      {
        english: "However hard he tried, he could not solve the problem.",
        bangla: "সে যতই চেষ্টা করুক না কেন, সে সমস্যাটি সমাধান করতে পারেনি।",
      },
      {
        english: "Whatever you do, do it well.",
        bangla: "তুমি যা কিছু করো, তা ভালোভাবে করো।",
      },
    ],
  },
  {
    conjunction: "Whoever",
    explanation: "যে কেউই বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Whoever wins the game, it will be exciting.",
        bangla: "যে কেউই খেলা জিতুক না কেন, এটা রোমাঞ্চকর হবে।",
      },
      {
        english: "Whoever wants to join the trip must sign up by Friday.",
        bangla:
          "যে কেউ ট্রিপে যোগ দিতে চায় তাকে শুক্রবারের মধ্যে সাইন আপ করতে হবে।",
      },
      {
        english: "Whoever finds the lost dog will get a reward.",
        bangla:
          "যে কেউ হারিয়ে যাওয়া কুকুরটিকে খুঁজে পাবে সে একটি পুরস্কার পাবে।",
      },
      {
        english: "Whoever you ask, they will help you.",
        bangla: "তুমি যাকেই জিজ্ঞেস করো, তারা তোমাকে সাহায্য করবে।",
      },
    ],
  },
  {
    conjunction: "Wherever",
    explanation: "যেখানেই বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Wherever you go, I will follow.",
        bangla: "তুমি যেখানেই যাও, আমি অনুসরণ করব।",
      },
      {
        english: "She takes her camera wherever she goes.",
        bangla: "সে যেখানেই যায়, তার ক্যামেরা নিয়ে যায়।",
      },
      {
        english: "Wherever you are, I hope you are happy.",
        bangla: "তুমি যেখানেই থাকো, আমি আশা করি তুমি খুশি।",
      },
      {
        english: "We can meet wherever you want.",
        bangla: "তুমি যেখানেই চাও, আমরা সেখানে মিলিত হতে পারি।",
      },
    ],
  },
  {
    conjunction: "Even if",
    explanation: "এমনকি বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Even if it rains, we will go hiking.",
        bangla: "এমনকি যদি বৃষ্টি হয়, তবুও আমরা হাইকিংয়ে যাব।",
      },
      {
        english: "She will not give up even if she fails.",
        bangla: "সে ব্যর্থ হলেও হাল ছাড়বে না।",
      },
      {
        english: "Even if you are busy, please call me.",
        bangla: "তুমি ব্যস্ত থাকলেও, দয়া করে আমাকে কল করো।",
      },
      {
        english: "Even if it’s expensive, I will buy it.",
        bangla: "এমনকি এটি যদি ব্যয়বহুল হয়, তবুও আমি এটি কিনব।",
      },
    ],
  },
  {
    conjunction: "Hence",
    explanation: "এ কারণে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He was late, hence he missed the train.",
        bangla: "সে দেরি করেছিল, তাই এ কারণে সে ট্রেন মিস করেছিল।",
      },
      {
        english: "She was not feeling well, hence she did not go to work.",
        bangla: "সে ভালো অনুভব করছিল না, তাই সে কাজে যায়নি।",
      },
      {
        english: "It rained heavily, hence the road was flooded.",
        bangla: "ভারী বৃষ্টি হয়েছিল, তাই রাস্তা প্লাবিত হয়েছিল।",
      },
      {
        english:
          "The company is growing rapidly, hence the need for more staff.",
        bangla: "কোম্পানিটি দ্রুত বাড়ছে, তাই আরো কর্মীর প্রয়োজন।",
      },
    ],
  },
  {
    conjunction: "Before",
    explanation: "কোন কিছুর আগে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Wash your hands before you eat.",
        bangla: "খাওয়ার আগে হাত ধুয়ে নাও।",
      },
      {
        english: "She finished her work before she went home.",
        bangla: "সে বাড়ি যাওয়ার আগে তার কাজ শেষ করেছিল।",
      },
      {
        english: "Look both ways before you cross the street.",
        bangla: "রাস্তা পার হওয়ার আগে দুপাশে তাকাও।",
      },
      {
        english: "He called me before the meeting started.",
        bangla: "মিটিং শুরু হওয়ার আগে সে আমাকে কল করেছিল।",
      },
    ],
  },
  {
    conjunction: "After",
    explanation: "কোন কিছুর পরে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "We will go out after the rain stops.",
        bangla: "বৃষ্টি থামার পরে আমরা বাইরে যাব।",
      },
      {
        english: "She took a nap after lunch.",
        bangla: "সে দুপুরের খাবার পরে ঘুমিয়েছিল।",
      },
      {
        english: "He went home after the movie ended.",
        bangla: "মুভি শেষ হওয়ার পরে সে বাড়ি চলে গেল।",
      },
      {
        english: "You should rest after you finish your work.",
        bangla: "তোমার কাজ শেষ করার পরে তোমার বিশ্রাম নেওয়া উচিত।",
      },
    ],
  },
  {
    conjunction: "While",
    explanation: "কোন কিছুর সময় বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "She was reading while he was cooking.",
        bangla: "সে পড়ছিল যখন সে রান্না করছিল।",
      },
      {
        english: "He fell asleep while watching TV.",
        bangla: "টিভি দেখতে দেখতে সে ঘুমিয়ে পড়েছিল।",
      },
      {
        english: "She listened to music while studying.",
        bangla: "সে পড়াশোনা করার সময় গান শুনছিল।",
      },
      {
        english: "They talked while walking in the park.",
        bangla: "তারা পার্কে হাঁটার সময় কথা বলছিল।",
      },
    ],
  },
  {
    conjunction: "Because",
    explanation: "কোন কিছুর কারণ বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He was late because he missed the bus.",
        bangla: "সে দেরি করেছিল কারণ সে বাস মিস করেছিল।",
      },
      {
        english: "She didn’t go to the party because she was sick.",
        bangla: "সে পার্টিতে যায়নি কারণ সে অসুস্থ ছিল।",
      },
      {
        english: "They were happy because they won the game.",
        bangla: "তারা খুশি ছিল কারণ তারা খেলা জিতেছিল।",
      },
      {
        english: "I stayed home because it was raining.",
        bangla: "আমি বাসায় ছিলাম কারণ বৃষ্টি হচ্ছিল।",
      },
    ],
  },
  {
    conjunction: "Although",
    explanation: "যদিও বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Although it was raining, they went for a walk.",
        bangla: "যদিও বৃষ্টি হচ্ছিল, তারা হাঁটতে গিয়েছিল।",
      },
      {
        english: "She went to work although she was sick.",
        bangla: "যদিও সে অসুস্থ ছিল, সে কাজে গিয়েছিল।",
      },
      {
        english: "Although he was tired, he finished his work.",
        bangla: "যদিও সে ক্লান্ত ছিল, সে তার কাজ শেষ করেছিল।",
      },
      {
        english: "They had a great time although the weather was bad.",
        bangla: "যদিও আবহাওয়া খারাপ ছিল, তারা দারুণ সময় কাটিয়েছিল।",
      },
    ],
  },
  {
    conjunction: "Unless",
    explanation: "যদি না বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "You will be late unless you hurry.",
        bangla: "তুমি তাড়াতাড়ি না করলে দেরি হবে।",
      },
      {
        english: "She won’t go unless you invite her.",
        bangla: "তুমি তাকে আমন্ত্রণ না করলে সে যাবে না।",
      },
      {
        english: "They can’t play unless it stops raining.",
        bangla: "বৃষ্টি না থামা পর্যন্ত তারা খেলতে পারবে না।",
      },
      {
        english: "I won’t buy it unless it’s on sale.",
        bangla: "এটি বিক্রিতে না থাকলে আমি এটি কিনব না।",
      },
    ],
  },
  {
    conjunction: "Since",
    explanation: "যখন থেকে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "I haven’t seen him since he moved away.",
        bangla: "সে চলে যাওয়ার পর থেকে আমি তাকে দেখিনি।",
      },
      {
        english: "She has been happy since she got the job.",
        bangla: "সে চাকরি পাওয়ার পর থেকে খুশি ছিল।",
      },
      {
        english: "We have been friends since childhood.",
        bangla: "আমরা শৈশব থেকে বন্ধু।",
      },
      {
        english: "He has lived here since last year.",
        bangla: "সে গত বছর থেকে এখানে বসবাস করছে।",
      },
    ],
  },
  {
    conjunction: "Whereas",
    explanation: "যেহেতু বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He likes coffee, whereas she prefers tea.",
        bangla: "সে কফি পছন্দ করে, যেহেতু সে চা পছন্দ করে।",
      },
      {
        english: "She is tall, whereas her brother is short.",
        bangla: "সে লম্বা, যেহেতু তার ভাই খাটো।",
      },
      {
        english: "They love music, whereas he is more into sports.",
        bangla: "তারা সঙ্গীত পছন্দ করে, যেহেতু সে খেলাধুলায় বেশি।",
      },
      {
        english: "He is outgoing, whereas she is shy.",
        bangla: "সে মিশুক, যেহেতু সে লাজুক।",
      },
    ],
  },
  {
    conjunction: "As soon as",
    explanation: "যত তাড়াতাড়ি বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Call me as soon as you arrive.",
        bangla: "তুমি যত তাড়াতাড়ি পৌঁছাবে আমাকে কল করো।",
      },
      {
        english: "She left as soon as the meeting was over.",
        bangla: "মিটিং শেষ হওয়ার সাথে সাথেই সে চলে গেল।",
      },
      {
        english: "He started working as soon as he graduated.",
        bangla: "সে স্নাতক হওয়ার সাথে সাথেই কাজ শুরু করেছিল।",
      },
      {
        english: "I will let you know as soon as I hear from them.",
        bangla: "তাদের থেকে খবর পাওয়ার সাথে সাথেই আমি তোমাকে জানাবো।",
      },
    ],
  },
  {
    conjunction: "Rather than",
    explanation: "এর চেয়ে বরং বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He decided to stay home rather than go out.",
        bangla: "সে বাইরে যাওয়ার চেয়ে বরং বাসায় থাকার সিদ্ধান্ত নিল।",
      },
      {
        english: "She prefers reading rather than watching TV.",
        bangla: "সে টিভি দেখার চেয়ে পড়তে পছন্দ করে।",
      },
      {
        english: "They chose to walk rather than take the bus.",
        bangla: "তারা বাসে ওঠার চেয়ে বরং হাঁটার সিদ্ধান্ত নিল।",
      },
      {
        english: "I would rather eat at home than go to a restaurant.",
        bangla: "আমি রেস্টুরেন্টে যাওয়ার চেয়ে বাড়িতে খেতে পছন্দ করব।",
      },
    ],
  },
  {
    conjunction: "In order to",
    explanation: "কোন কিছু করার উদ্দেশ্যে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "She studied hard in order to pass the exam.",
        bangla: "সে পরীক্ষায় পাস করার উদ্দেশ্যে কঠোর পরিশ্রম করেছিল।",
      },
      {
        english: "He saved money in order to buy a new car.",
        bangla: "সে একটি নতুন গাড়ি কিনতে টাকা সঞ্চয় করেছিল।",
      },
      {
        english: "They exercise regularly in order to stay healthy.",
        bangla: "তারা সুস্থ থাকার উদ্দেশ্যে নিয়মিত ব্যায়াম করে।",
      },
      {
        english: "We took a taxi in order to reach on time.",
        bangla: "আমরা সময়মতো পৌঁছানোর উদ্দেশ্যে ট্যাক্সি নিয়েছিলাম।",
      },
    ],
  },
  {
    conjunction: "As if",
    explanation: "যেন বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "He talks as if he knows everything.",
        bangla: "সে এমনভাবে কথা বলে যেন সে সব জানে।",
      },
      {
        english: "She looked as if she had seen a ghost.",
        bangla: "সে এমনভাবে দেখাচ্ছিল যেন সে ভূত দেখেছে।",
      },
      {
        english: "They acted as if nothing had happened.",
        bangla: "তারা এমনভাবে আচরণ করছিল যেন কিছুই ঘটেনি।",
      },
      {
        english: "It feels as if summer will never end.",
        bangla: "এটা এমনভাবে মনে হচ্ছে যেন গ্রীষ্ম কখনও শেষ হবে না।",
      },
    ],
  },
  {
    conjunction: "As long as",
    explanation: "যতক্ষণ পর্যন্ত বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "You can stay here as long as you want.",
        bangla: "তুমি যতক্ষণ পর্যন্ত চাও এখানে থাকতে পারো।",
      },
      {
        english: "She will be happy as long as she is with her friends.",
        bangla: "সে তার বন্ধুদের সাথে যতক্ষণ থাকবে ততক্ষণ খুশি থাকবে।",
      },
      {
        english: "We will support you as long as you need.",
        bangla: "তুমি যতদিন পর্যন্ত প্রয়োজন আমাদের সহায়তা পাবে।",
      },
      {
        english: "He will keep working as long as there is daylight.",
        bangla: "যতক্ষণ পর্যন্ত দিনের আলো থাকবে সে কাজ করবে।",
      },
    ],
  },
  {
    conjunction: "No sooner...than",
    explanation: "কোন কিছু হওয়ার সাথে সাথেই বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "No sooner had we left than it started raining.",
        bangla: "আমরা ছাড়ার সাথে সাথেই বৃষ্টি শুরু হলো।",
      },
      {
        english: "No sooner did he see her than he ran to her.",
        bangla: "সে তাকে দেখার সাথে সাথেই তার কাছে দৌড়ে গেল।",
      },
      {
        english: "No sooner had she finished her work than she went home.",
        bangla: "সে তার কাজ শেষ করার সাথে সাথেই বাড়ি চলে গেল।",
      },
      {
        english: "No sooner had they arrived than the meeting started.",
        bangla: "তারা পৌঁছানোর সাথে সাথেই মিটিং শুরু হলো।",
      },
    ],
  },
  {
    conjunction: "In case",
    explanation: "কোন কিছু হলে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Take an umbrella in case it rains.",
        bangla: "বৃষ্টি হলে সাথে একটা ছাতা নাও।",
      },
      {
        english: "Keep my number in case you need help.",
        bangla: "তোমার যদি সহায়তার প্রয়োজন হয় তাহলে আমার নম্বর রাখো।",
      },
      {
        english: "We should leave early in case there is traffic.",
        bangla: "যদি যানজট থাকে তাহলে আমাদের তাড়াতাড়ি বের হওয়া উচিত।",
      },
      {
        english: "Bring a jacket in case it gets cold.",
        bangla: "ঠান্ডা পড়লে সাথে একটা জ্যাকেট নাও।",
      },
    ],
  },
  {
    conjunction: "Provided that",
    explanation: "শর্তে বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "You can go out provided that you finish your homework.",
        bangla: "তুমি তোমার বাড়ির কাজ শেষ করলেই বাইরে যেতে পারো।",
      },
      {
        english: "She will come to the party provided that she is invited.",
        bangla: "সে আমন্ত্রিত হলে পার্টিতে আসবে।",
      },
      {
        english: "They can stay here provided that they follow the rules.",
        bangla: "তারা নিয়ম মেনে চললে এখানে থাকতে পারবে।",
      },
      {
        english: "You will pass the exam provided that you study hard.",
        bangla: "তুমি কঠোর পড়াশোনা করলেই পরীক্ষায় পাস করবে।",
      },
    ],
  },
  {
    conjunction: "Even though",
    explanation: "যদিও বোঝাতে ব্যবহৃত হয়।",
    examples: [
      {
        english: "Even though it was raining, they went for a walk.",
        bangla: "যদিও বৃষ্টি হচ্ছিল, তারা হাঁটতে গিয়েছিল।",
      },
      {
        english: "She went to work even though she was sick.",
        bangla: "যদিও সে অসুস্থ ছিল, সে কাজে গিয়েছিল।",
      },
      {
        english: "Even though he was tired, he finished his work.",
        bangla: "যদিও সে ক্লান্ত ছিল, সে তার কাজ শেষ করেছিল।",
      },
      {
        english: "They had a great time even though the weather was bad.",
        bangla: "যদিও আবহাওয়া খারাপ ছিল, তারা দারুণ সময় কাটিয়েছিল।",
      },
    ],
  },
];
export default conjunctionsData;
