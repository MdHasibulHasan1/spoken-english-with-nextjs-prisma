const prepositionsData = [
  {
    title: "To এর ব্যবহার",
    usages: [
      {
        description: "নির্দিষ্ট কোন দিকে বোঝাতে",
        examples: [
          "I am going to market. (আমি বাজারে যাচ্ছি।)",
          "She is going to school. (সে স্কুলে যাচ্ছে।)",
          "We are traveling to Paris. (আমরা প্যারিসে ভ্রমণ করছি।)",
          "He ran to the store. (সে দোকানে দৌড়ালো।)",
          "They moved to a new house. (তারা নতুন বাড়িতে চলে গেছে।)",
          "She walked to the park. (সে পার্কে হাঁটলো।)",
          "We drove to the beach. (আমরা সমুদ্র সৈকতে গাড়ি চালিয়ে গিয়েছিলাম।)",
          "He flew to New York. (সে নিউ ইয়র্কে উড়ে গিয়েছিল।)",
          "They sailed to the island. (তারা দ্বীপে পাল দিয়ে গিয়েছিল।)",
          "I rode my bike to the library. (আমি সাইকেল চালিয়ে লাইব্রেরিতে গিয়েছিলাম।)",
        ],
      },
      {
        description: "পর্যন্ত বোঝাতে",
        examples: [
          "They are working restlessly from morning to evening. (তারা সকাল থেকে সন্ধ্যা পর্যন্ত বিরামহীন কাজ করছে।)",
          "The store is open from 9 AM to 9 PM. (দোকানটি সকাল ৯ টা থেকে রাত ৯ টা পর্যন্ত খোলা থাকে।)",
          "I studied from 8 PM to 10 PM. (আমি রাত ৮ টা থেকে ১০ টা পর্যন্ত পড়াশোনা করেছি।)",
          "He will be in the office from Monday to Friday. (সে সোমবার থেকে শুক্রবার পর্যন্ত অফিসে থাকবে।)",
          "We will be on vacation from June to August. (আমরা জুন থেকে আগস্ট পর্যন্ত ছুটিতে থাকব।)",
          "The meeting will last from 2 PM to 4 PM. (মিটিংটি দুপুর ২ টা থেকে ৪ টা পর্যন্ত চলবে।)",
          "She practiced the piano from dawn to dusk. (সে ভোর থেকে সন্ধ্যা পর্যন্ত পিয়ানো বাজিয়েছে।)",
          "The event runs from January to March. (ইভেন্টটি জানুয়ারি থেকে মার্চ পর্যন্ত চলবে।)",
          "They were in the workshop from morning to afternoon. (তারা সকাল থেকে দুপুর পর্যন্ত ওয়ার্কশপে ছিল।)",
          "The exhibition is open from Friday to Sunday. (প্রদর্শনীটি শুক্রবার থেকে রবিবার পর্যন্ত খোলা থাকে।)",
        ],
      },
      {
        description: "উদ্দেশ্য বোঝাতে",
        examples: [
          "They invited me to take the class. (তারা আমাকে ক্লাসটি নিতে নিমন্ত্রণ করেছিল।)",
          "She came to see you. (সে তোমাকে দেখতে এসেছে।)",
          "I went to buy groceries. (আমি বাজার করতে গিয়েছিলাম।)",
          "He called to ask a question. (সে একটি প্রশ্ন করতে ফোন করেছিল।)",
          "They went to meet their friends. (তারা তাদের বন্ধুদের সাথে দেখা করতে গিয়েছিল।)",
          "She stayed up late to finish the project. (সে প্রজেক্টটি শেষ করতে দেরি পর্যন্ত জেগেছিল।)",
          "We traveled to learn about new cultures. (আমরা নতুন সংস্কৃতি সম্পর্কে জানতে ভ্রমণ করেছি।)",
          "He practiced to improve his skills. (সে তার দক্ষতা বাড়াতে অনুশীলন করেছে।)",
          "She joined the club to make new friends. (সে নতুন বন্ধু বানাতে ক্লাবে যোগ দিয়েছে।)",
          "They worked hard to achieve their goals. (তারা তাদের লক্ষ্য অর্জন করতে কঠোর পরিশ্রম করেছে।)",
        ],
      },
      {
        description: "কারো কাছে বোঝাতে",
        examples: [
          "Roni has come to me. (রনি আমার কাছে এসেছে।)",
          "She sent the letter to him. (সে চিঠিটি তার কাছে পাঠিয়েছে।)",
          "I gave the book to her. (আমি বইটি তাকে দিয়েছি।)",
          "He brought the gift to us. (সে আমাদের কাছে উপহারটি এনেছে।)",
          "They handed the keys to the new owner. (তারা নতুন মালিকের কাছে চাবিগুলো হস্তান্তর করেছে।)",
          "She spoke to the manager. (সে ম্যানেজারের সাথে কথা বলেছে।)",
          "I mailed the package to my friend. (আমি আমার বন্ধুকে প্যাকেজটি পাঠিয়েছি।)",
          "He explained the problem to the team. (সে দলকে সমস্যাটি ব্যাখ্যা করেছে।)",
          "They delivered the documents to the office. (তারা অফিসে নথিপত্রগুলো পৌঁছে দিয়েছে।)",
          "We gave the donation to the charity. (আমরা দানটি দাতব্য সংস্থার কাছে দিয়েছি।)",
        ],
      },
      {
        description: "সময় বাকি আছে বোঝাতে",
        examples: [
          "It is 5 minutes to 10. (দশটা বাজতে ৫ মিনিট বাকি।)",
          "It's 10 minutes to midnight. (মধ্যরাত হতে ১০ মিনিট বাকি।)",
          "There are 15 minutes to the end of the show. (শোয়ের শেষ হতে ১৫ মিনিট বাকি।)",
          "It's 20 minutes to lunchtime. (লাঞ্চের সময় হতে ২০ মিনিট বাকি।)",
          "We have 30 minutes to the meeting. (মিটিং শুরু হতে ৩০ মিনিট বাকি।)",
          "It's 25 minutes to sunrise. (সূর্যোদয় হতে ২৫ মিনিট বাকি।)",
          "There are 10 minutes to the start of the movie. (মুভির শুরু হতে ১০ মিনিট বাকি।)",
          "It's 45 minutes to the end of the exam. (পরীক্ষার শেষ হতে ৪৫ মিনিট বাকি।)",
          "We have 5 minutes to catch the bus. (বাস ধরতে আমাদের ৫ মিনিট বাকি।)",
          "There are 2 hours to the party. (পার্টি শুরু হতে ২ ঘণ্টা বাকি।)",
        ],
      },
    ],
  },
  {
    title: "At এর ব্যবহার",
    usages: [
      {
        description: "ছোট স্থান বোঝাতে",
        examples: [
          "Now he is at home. (সে এখন বাড়িতে।)",
          "She is at the office. (সে অফিসে আছে।)",
          "They are at the park. (তারা পার্কে আছে।)",
          "I am at the library. (আমি লাইব্রেরিতে আছি।)",
          "He is at the station. (সে স্টেশনে আছে।)",
        ],
      },
      {
        description: "হার/গতি বোঝাতে",
        examples: [
          "I am driving the car at 50km per hour. (আমি ঘন্টায় ৫০ কি.মি. বেগে গাড়িটি চালাচ্ছি।)",
          "She was running at 10 miles per hour. (সে প্রতি ঘন্টায় ১০ মাইল বেগে দৌড়াচ্ছিল।)",
          "The train is moving at 80 km/h. (ট্রেনটি প্রতি ঘন্টায় ৮০ কিমি বেগে চলেছে।)",
          "He typed at 100 words per minute. (সে প্রতি মিনিটে ১০০ শব্দ টাইপ করেছিল।)",
          "The plane is flying at 600 miles per hour. (বিমানটি প্রতি ঘন্টায় ৬০০ মাইল বেগে উড়ছে।)",
        ],
      },
      {
        description: "দূরত্ব বোঝাতে",
        examples: [
          "Mymensingh is at 115 km from Dhaka. (ঢাকা থেকে ময়মনসিংহের দূরত্ব ১১৫ কি.মি.)",
          "The village is at 20 miles from here. (গ্রামটি এখান থেকে ২০ মাইল দূরে।)",
          "The city is at a distance of 300 km. (শহরটি ৩০০ কি.মি. দূরত্বে অবস্থিত।)",
          "The beach is at 5 miles from our hotel. (সৈকতটি আমাদের হোটেল থেকে ৫ মাইল দূরে।)",
          "The mountain is at 50 km from the town. (পাহাড়টি শহর থেকে ৫০ কি.মি. দূরে।)",
        ],
      },
      {
        description: "নির্দিষ্ট সময়ের ক্ষেত্রে at ব্যবহৃত হয়",
        examples: [
          "You can meet me at 7 am. (তুমি সকাল ৭ টায় আমার সাথে দেখা করতে পারো।)",
          "The meeting is at 3 PM. (মিটিংটি দুপুর ৩ টায়।)",
          "The show starts at 8 PM. (শো শুরু হয় রাত ৮ টায়।)",
          "She arrived at midnight. (সে মধ্যরাতে পৌঁছেছিল।)",
          "The store opens at 9 AM. (দোকানটি সকাল ৯ টায় খোলে।)",
        ],
      },
    ],
    expressions: [
      "At first (শুরুতে)",
      "At the top of (সর্বোচ্চ)",
      "At first hand (প্রথম দিকে)",
      "At the first sight (প্রথম দর্শনে)",
      "At the age of (বয়সে)",
      "At a glance (এক নজরে)",
      "At the beginning of (শুরুতে)",
      "At last (অবশেষে)",
      "At the bus stop (বাস স্ট্যান্ডে)",
      "At least (কমপক্ষে)",
      "At any cost (যেকোনো মূল্যে)",
      "At a random (অবাধে)",
    ],
  },
  {
    title: "In এর ব্যবহার",
    usages: [
      {
        description: "তুলনামূলক বড় স্থানের পূর্বে",
        examples: [
          "He lives at Uttara in Dhaka. (সে ঢাকায় উত্তরাতে বাস করে।)",
          "They live in a small town. (তারা একটি ছোট শহরে বাস করে।)",
          "She works in a large city. (সে একটি বড় শহরে কাজ করে।)",
          "We are staying in the countryside. (আমরা গ্রামে অবস্থান করছি।)",
          "He is studying in a university in the capital. (সে রাজধানীর একটি বিশ্ববিদ্যালয়ে পড়াশোনা করছে।)",
        ],
      },
      {
        description: "কোন বিষয় বা ভাষা বোঝাতে",
        examples: [
          "He has completed graduation in English. (সে ইংরেজিতে স্নাতক শেষ করেছে।)",
          "She is proficient in mathematics. (সে গণিতে দক্ষ।)",
          "They have a degree in physics. (তাদের পদার্থবিজ্ঞানে একটি ডিগ্রি রয়েছে।)",
          "He wrote a thesis in chemistry. (সে রসায়নে একটি থিসিস লিখেছিল।)",
          "She is interested in history. (সে ইতিহাসে আগ্রহী।)",
        ],
      },
      {
        description: "বছর, মাস ও ঋতুর পূর্বে",
        examples: [
          "I was born in 15 April in 1996. (আমি ১৫ এপ্রিল, ১৯৯৬ সালে জন্মগ্রহণ করেছিলাম।)",
          "She graduated in June. (সে জুন মাসে স্নাতক সম্পন্ন করেছিল।)",
          "They will travel in winter. (তারা শীতকালে ভ্রমণ করবে।)",
          "He started working in 2020. (সে ২০২০ সালে কাজ শুরু করেছিল।)",
          "The project will be completed in December. (প্রকল্পটি ডিসেম্বর মাসে সম্পন্ন হবে।)",
        ],
      },
      {
        description: "ভবিষ্যতে কিছু দিনের মধ্যে বোঝাতে",
        examples: [
          "I will learn English in 90 days. (আমি ৯০ দিনের মধ্যে ইংরেজি শিখব।)",
          "She will return in a week. (সে এক সপ্তাহের মধ্যে ফিরে আসবে।)",
          "They will finish the work in a month. (তারা এক মাসের মধ্যে কাজ শেষ করবে।)",
          "He will call you in a few minutes. (সে কয়েক মিনিটের মধ্যে তোমাকে ফোন করবে।)",
          "We will leave in an hour. (আমরা এক ঘন্টার মধ্যে চলে যাব।)",
        ],
      },
    ],
  },
  {
    title: "On time এবং In time এর মধ্যে পার্থক্য",
    usages: [
      {
        description: "On time",
        examples: [
          "নির্দিষ্ট সময় বোঝাতে ব্যবহৃত হয়। (Fixed time)",
          "The train is running on time. (নির্দিষ্ট সময়ে ট্রেন ছেড়ে যাচ্ছে।)",
          "The meeting started on time. (মিটিংটি নির্দিষ্ট সময়ে শুরু হয়েছে।)",
          "She always arrives on time. (সে সবসময় নির্দিষ্ট সময়ে পৌঁছায়।)",
          "The show began on time. (শোটি নির্দিষ্ট সময়ে শুরু হয়েছে।)",
          "The flight departed on time. (ফ্লাইটটি নির্দিষ্ট সময়ে ছেড়েছে।)",
        ],
      },
      {
        description: "In time",
        examples: [
          "নির্দিষ্ট সময়ের পূর্বে বোঝাতে ব্যবহৃত হয়। (Before Fixed time)",
          "The driver stopped just in time to avoid accident. (দুর্ঘটনা ঘটার পূর্বে ড্রাইভার বাসটি বন্ধ করে দিয়েছে।)",
          "She finished her work in time. (সে নির্দিষ্ট সময়ের পূর্বে তার কাজ শেষ করেছে।)",
          "He arrived in time for the meeting. (সে মিটিংয়ের পূর্বেই এসে পৌঁছেছিল।)",
          "They completed the project in time. (তারা প্রকল্পটি নির্দিষ্ট সময়ের পূর্বে সম্পন্ন করেছে।)",
          "The package arrived in time for the event. (প্যাকেজটি ইভেন্টের পূর্বে এসে পৌঁছেছিল।)",
        ],
      },
    ],
  },
  {
    title: "On দ্বারা গঠিত জরুরী Speaking Preposition",
    expressions: [
      "On account of (কারণে)",
      "On duty (কর্তব্যরত)",
      "On the other hand (পক্ষান্তরে)",
      "On the left (বাম দিকে)",
      "On average (গড়ে)",
      "On the phone (ফোনে)",
    ],
  },
  {
    title: "Of এর ব্যবহার",
    usages: [
      {
        description: "অধিকার ও মালিকানা বোঝাতে",
        examples: [
          "This property is of four brothers. (এই সম্পদটি চার ভাইয়ের।)",
          "The book is of the library. (বইটি লাইব্রেরির।)",
          "The car is of my uncle. (গাড়িটি আমার চাচার।)",
          "The idea is of the team. (আইডিয়াটি দলের।)",
          "The responsibility is of the manager. (দায়িত্বটি ম্যানেজারের।)",
        ],
      },
      {
        description: "সমষ্টির মধ্যে একটি/একাধিক বোঝাতে",
        examples: [
          "One of my students is a doctor. (আমার ছাত্র-ছাত্রীদের মধ্যে একজন ডাক্তার)",
          "Some of these mangoes are good. (এই আমগুলোর মধ্যে কিছু ভালো)",
          "One of the books is missing. (বইগুলির মধ্যে একটি হারিয়ে গেছে।)",
          "Several of the participants are absent. (অংশগ্রহণকারীদের মধ্যে কয়েকজন অনুপস্থিত।)",
          "One of the computers is not working. (কম্পিউটারগুলির মধ্যে একটি কাজ করছে না।)",
        ],
      },
    ],
  },
  {
    title: "Under এর ব্যবহার",
    usages: [
      {
        description: "নিচে অর্থ প্রকাশ করতে",
        examples: [
          "The cat is under the table. (বিড়ালটি টেবিলের নিচে।)",
          "The book is under the bed. (বইটি বিছানার নিচে।)",
          "He hid under the blanket. (সে কম্বলের নিচে লুকিয়েছিল।)",
          "The shoes are under the chair. (জুতাগুলো চেয়ারের নিচে।)",
          "The ball rolled under the car. (বলটি গাড়ির নিচে গড়িয়ে গেছে।)",
        ],
      },
      {
        description: "কারো অধীনে কাজ করা বোঝাতে",
        examples: [
          "He works under his boss. (সে তার বসের অধীনে কাজ করে।)",
          "She is under a strict supervisor. (সে একটি কঠোর সুপারভাইজারের অধীনে কাজ করে।)",
          "They are under the new manager. (তারা নতুন ম্যানেজারের অধীনে কাজ করছে।)",
          "He is under the guidance of a mentor. (সে একজন পরামর্শকের তত্ত্বাবধানে কাজ করছে।)",
          "She is under an experienced leader. (সে একজন অভিজ্ঞ নেতার অধীনে কাজ করছে।)",
        ],
      },
      {
        description: "কম বোঝাতে",
        examples: [
          "She is under 20. (তার বয়স ২০ বছরের কম।)",
          "The weight is under 50 kg. (ওজনটি ৫০ কেজির কম।)",
          "The price is under $100. (দামটি $১০০ এর কম।)",
          "The speed limit is under 60 mph. (গতির সীমা ৬০ মাইল প্রতি ঘণ্টার কম।)",
          "The temperature is under 30 degrees. (তাপমাত্রাটি ৩০ ডিগ্রির কম।)",
        ],
      },
      {
        description: "প্রক্রিয়াধীন বা বিবেচনাধীন বোঝাতে",
        examples: [
          "His case is under the supreme court. (তার মামলাটি সুপ্রিম কোর্টে প্রক্রিয়াধীন।)",
          "The proposal is under review. (প্রস্তাবটি পর্যালোচনাধীন।)",
          "The project is under development. (প্রকল্পটি উন্নয়নাধীন।)",
          "The application is under consideration. (আবেদনটি বিবেচনাধীন।)",
          "The law is under discussion. (আইনটি আলোচনাধীন।)",
        ],
      },
      {
        description: "আয়ত্বে থাকা বোঝাতে",
        examples: [
          "This area is under control of the army. (এই অঞ্চল সেনাবাহিনীর আয়ত্ত্বে।)",
          "The situation is under control. (পরিস্থিতি নিয়ন্ত্রণে আছে।)",
          "The fire is under control. (আগুন নিয়ন্ত্রণে আছে।)",
          "The problem is under control. (সমস্যাটি নিয়ন্ত্রণে আছে।)",
          "The disease is under control. (রোগটি নিয়ন্ত্রণে আছে।)",
        ],
      },
      {
        description: "কিছুর নিচে ঢেকে থাকা বোঝাতে",
        examples: [
          "The Rat is under the mat. (ইঁদুরটি মাদুরটির নিচে।)",
          "The key is under the doormat. (চাবিটি দরজার ম্যাটের নিচে।)",
          "The letter was under the book. (চিঠিটি বইটির নিচে ছিল।)",
          "The note is under the pillow. (নোটটি বালিশের নিচে আছে।)",
          "The treasure is under the sand. (ধনটি বালুর নিচে আছে।)",
        ],
      },
    ],
  },
  {
    title: "For এর ব্যবহার",
    usages: [
      {
        description: "জন্য অর্থ প্রকাশ করতে",
        examples: [
          "I can do everything for my parents. (আমি আমার বাবা-মায়ের জন্য সবকিছু করতে পারি।)",
          "This gift is for you. (এই উপহারটি তোমার জন্য।)",
          "He works hard for his family. (সে তার পরিবারের জন্য কঠোর পরিশ্রম করে।)",
          "They cooked dinner for us. (তারা আমাদের জন্য রাতের খাবার রান্না করেছে।)",
          "She bought a present for her friend. (সে তার বন্ধুর জন্য একটি উপহার কিনেছিল।)",
        ],
      },
      {
        description: "যাবৎ অথবা ধরে বোঝাতে",
        examples: [
          "I have been teaching for seven years. (আমি সাত বছর যাবৎ ইংরেজি শিখাচ্ছি।)",
          "She has been working here for a decade. (সে দশ বছর ধরে এখানে কাজ করছে।)",
          "They have lived in this city for a long time. (তারা অনেক দিন যাবৎ এই শহরে বাস করছে।)",
          "He has been studying for hours. (সে ঘণ্টার পর ঘণ্টা পড়াশোনা করছে।)",
          "We have been friends for years. (আমরা বছরের পর বছর ধরে বন্ধু আছি।)",
        ],
      },
      {
        description: "কারণ বোঝাতে",
        examples: [
          "I couldn't come in the class yesterday for my illness. (আমার অসুস্থ্যতার জন্য আমি গত দিন ক্লাসে আসতে পারিনি।)",
          "She stayed home for the bad weather. (সে খারাপ আবহাওয়ার জন্য বাড়িতে ছিল।)",
          "He apologized for his mistake. (সে তার ভুলের জন্য ক্ষমা চেয়েছিল।)",
          "They were late for the traffic jam. (তারা ট্রাফিক জামের জন্য দেরি করেছিল।)",
          "I missed the meeting for a personal reason. (ব্যক্তিগত কারণে আমি মিটিং মিস করেছিলাম।)",
        ],
      },
      {
        description: "উদ্দেশ্য বোঝাতে",
        examples: [
          "We have come abroad for earning money. (টাকার উপার্জনের জন্য আমরা বিদেশে এসেছি।)",
          "She is studying for a degree. (সে একটি ডিগ্রি অর্জনের জন্য পড়াশোনা করছে।)",
          "He is training for the marathon. (সে ম্যারাথনের জন্য প্রশিক্ষণ নিচ্ছে।)",
          "They are saving money for a vacation. (তারা ছুটির জন্য টাকা জমাচ্ছে।)",
          "I am looking for a new job. (আমি একটি নতুন চাকরি খুঁজছি।)",
        ],
      },
      {
        description: "কারো পক্ষ নেয়া বোঝাতে",
        examples: [
          "We play for Bangladesh. (আমরা বাংলাদেশের পক্ষে খেলি)",
          "She speaks for the committee. (সে কমিটির পক্ষ থেকে কথা বলে।)",
          "They argue for the rights of the workers. (তারা শ্রমিকদের অধিকারের পক্ষে তর্ক করে।)",
          "He votes for the candidate. (সে প্রার্থীর পক্ষে ভোট দেয়।)",
          "She advocates for the poor. (সে দরিদ্রদের পক্ষে সমর্থন করে।)",
        ],
      },
      {
        description: "বিনিময় বোঝাতে",
        examples: [
          "Take this milk for fifty taka. (পঞ্চাশ টাকার বিনিময়ে খাবারটি নাও।)",
          "I bought the book for $20. (আমি বইটি $২০ এর বিনিময়ে কিনেছিলাম।)",
          "She sold her car for a good price. (সে তার গাড়িটি একটি ভালো দামে বিক্রি করেছিল।)",
          "He traded his bike for a new one. (সে তার বাইকটি একটি নতুন বাইকের বিনিময়ে অদলবদল করেছিল।)",
          "They exchanged gifts for the holidays. (তারা ছুটির জন্য উপহারগুলি বিনিময় করেছিল।)",
        ],
      },
    ],
    expressions: [
      "For a chance (সুযোগের জন্য)",
      "For a holiday (ছুটির জন্য)",
      "For ever (চিরতরে)",
      "For the rest of (বাকিগুলোর জন্য)",
      "For the time being (আপাতত)",
      "For a week (এক সপ্তাহের জন্য)",
    ],
  },
  {
    title: "By এর ব্যবহার",
    usages: [
      {
        description: "যাতায়াতের মাধ্যম বোঝাতে",
        examples: [
          "We can go there by bus. (আমরা সেখানে বাসে করে যেতে পারি।)",
          "She travels by plane. (সে প্লেনে ভ্রমণ করে।)",
          "They commute by train. (তারা ট্রেনে করে যাতায়াত করে।)",
          "He goes to work by bike. (সে বাইকে করে কাজে যায়।)",
          "I prefer to travel by car. (আমি গাড়িতে করে ভ্রমণ করতে পছন্দ করি।)",
        ],
      },
      {
        description: "ধারাবাহিকতা বোঝাতে",
        examples: [
          "I am improving day by day. (আমি দিনে দিনে উন্নতি করছি।)",
          "She is getting better little by little. (সে অল্প অল্প করে ভালো হচ্ছে।)",
          "He saves money bit by bit. (সে একটু একটু করে টাকা সঞ্চয় করে।)",
          "They are learning step by step. (তারা ধাপে ধাপে শিখছে।)",
          "We progressed inch by inch. (আমরা ধীরে ধীরে অগ্রসর হচ্ছিলাম।)",
        ],
      },
      {
        description: "নির্দিষ্ট সময়ের মধ্যে বোঝাতে",
        examples: [
          "They will join by 9 am. (তারা সকাল ৯টার মধ্যে যোগদান করবে।)",
          "She needs to finish by Friday. (তার শুক্রবারের মধ্যে কাজ শেষ করতে হবে।)",
          "He should arrive by noon. (তার দুপুরের মধ্যে পৌঁছানো উচিত।)",
          "They must leave by midnight. (তাদের মধ্যরাতের মধ্যে চলে যেতে হবে।)",
          "The report is due by tomorrow. (প্রতিবেদনটি আগামীকালের মধ্যে জমা দিতে হবে।)",
        ],
      },
      {
        description: "পাশে বোঝাতে",
        examples: [
          "You can sit by me. (তুমি আমার পাশে বসতে পারো।)",
          "The lamp is by the bed. (ল্যাম্পটি বিছানার পাশে আছে।)",
          "She stood by her friend. (সে তার বন্ধুর পাশে দাঁড়িয়ে ছিল।)",
          "The house is by the river. (বাড়িটি নদীর পাশে অবস্থিত।)",
          "The store is by the park. (দোকানটি পার্কের পাশে অবস্থিত।)",
        ],
      },
      {
        description: "উপায়ে বা পদ্ধতি বোঝাতে",
        examples: [
          "You can improve English by practicing. (তুমি তোমার ইংরেজিকে অনুশীলনের মাধ্যমে উন্নতি করতে পার।)",
          "She solved the problem by thinking creatively. (সে সৃজনশীলভাবে চিন্তা করে সমস্যাটি সমাধান করেছে।)",
          "He succeeded by working hard. (সে কঠোর পরিশ্রম করে সফল হয়েছে।)",
          "They communicated by email. (তারা ইমেইলের মাধ্যমে যোগাযোগ করেছে।)",
          "She learned to cook by watching videos. (সে ভিডিও দেখে রান্না করতে শিখেছে।)",
        ],
      },
      {
        description: "পরিমাপ বোঝাতে",
        examples: [
          "The white board is 4 feet by 3 feet. (হোয়াইট বোর্ডটি ৪ ফুট বাই ৩ ফুট।)",
          "The room is 10 meters by 12 meters. (ঘরটি ১০ মিটার বাই ১২ মিটার।)",
          "The picture is 8 inches by 10 inches. (ছবিটি ৮ ইঞ্চি বাই ১০ ইঞ্চি।)",
          "The table is 6 feet by 3 feet. (টেবিলটি ৬ ফুট বাই ৩ ফুট।)",
          "The carpet is 5 meters by 4 meters. (কার্পেটটি ৫ মিটার বাই ৪ মিটার।)",
        ],
      },
      {
        description: "যোগাযোগের মাধ্যম বোঝাতে",
        examples: [
          "I take orders by phone. (আমি ফোনের মাধ্যমে অর্ডার দেই।)",
          "She sent the information by email. (সে ইমেইলের মাধ্যমে তথ্য পাঠিয়েছে।)",
          "They communicated by fax. (তারা ফ্যাক্সের মাধ্যমে যোগাযোগ করেছে।)",
          "He confirmed the appointment by letter. (সে চিঠির মাধ্যমে অ্যাপয়েন্টমেন্ট নিশ্চিত করেছে।)",
          "We received the news by telegram. (আমরা টেলিগ্রামের মাধ্যমে খবর পেয়েছিলাম।)",
        ],
      },
    ],
    expressions: [
      "By accident (দুর্ঘটনাক্রমে)",
      "By heart (হৃদয় দ্বারা)",
      "By chance (হঠাৎ)",
      "By means of (উপায়ে)",
      "By mistake (ভুলবশত)",
      "By the way (যাহোক)",
      "By the by (কথা প্রসঙ্গে)",
      "By birth (জন্ম সূত্রে)",
    ],
  },
  {
    title: "With এর ব্যবহার",
    usages: [
      {
        description: "কারো সাথে অর্থ প্রকাশ করতে",
        examples: [
          "I live with my family. (আমি আমার পরিবারের সাথে বসবাস করি।)",
          "She went to the party with her friends. (সে তার বন্ধুদের সাথে পার্টিতে গেছে।)",
          "He works with his colleagues. (সে তার সহকর্মীদের সাথে কাজ করে।)",
          "They traveled with their children. (তারা তাদের সন্তানদের সাথে ভ্রমণ করেছে।)",
          "I discussed the matter with my teacher. (আমি বিষয়টি আমার শিক্ষকের সাথে আলোচনা করেছি।)",
        ],
      },
      {
        description: "বস্তুবাচক বা গুণবাচক অবস্থা বোঝাতে",
        examples: [
          "I can speak English with confidence. (আমি আত্মবিশ্বাসের সাথে ইংরেজি বলতে পারি।)",
          "She performed with grace. (সে শোভাযুক্তভাবে অভিনয় করেছে।)",
          "He answered with honesty. (সে সততার সাথে উত্তর দিয়েছে।)",
          "They acted with courage. (তারা সাহসের সাথে কাজ করেছে।)",
          "She painted the picture with creativity. (সে সৃজনশীলতার সাথে ছবিটি এঁকেছে।)",
        ],
      },
      {
        description: "কাজের উপকরণ বোঝাতে",
        examples: [
          "He writes with a pen. (সে কলম দিয়ে লিখে।)",
          "She cut the paper with scissors. (সে কাঁচি দিয়ে কাগজ কাটে।)",
          "They ate with chopsticks. (তারা চপস্টিক দিয়ে খেয়েছিল।)",
          "He fixed the car with a wrench. (সে রেঞ্চ দিয়ে গাড়ি মেরামত করেছিল।)",
          "She mixed the ingredients with a spoon. (সে চামচ দিয়ে উপাদানগুলি মিশিয়েছিল।)",
        ],
      },
    ],
  },
  {
    title: "About এর ব্যবহার",
    usages: [
      {
        description: "সম্বন্ধে বা সম্পর্কে বোঝাতে",
        examples: [
          "I don't know about you. (আমি তোমার সম্পর্কে জানি না।)",
          "She is curious about science. (সে বিজ্ঞান সম্পর্কে কৌতূহলী।)",
          "He read a book about history. (সে ইতিহাস সম্পর্কে একটি বই পড়েছে।)",
          "They talked about the project. (তারা প্রকল্প সম্পর্কে কথা বলেছে।)",
          "We learned about the new policy. (আমরা নতুন নীতিমালা সম্পর্কে শিখেছি।)",
        ],
      },
      {
        description: "কাছাকাছি বোঝাতে",
        examples: [
          "There are about 10 students in the class. (ক্লাসে প্রায় ১০ জন ছাত্র আছে।)",
          "The cost is about $50. (মূল্য প্রায় $৫০।)",
          "He arrived at about 8 pm. (সে প্রায় রাত ৮ টায় এসেছে।)",
          "The distance is about 5 miles. (দূরত্ব প্রায় ৫ মাইল।)",
          "The meeting lasted for about an hour. (মিটিংটি প্রায় এক ঘণ্টা ধরে চলেছে।)",
        ],
      },
    ],
  },
  {
    title: "Without এর ব্যবহার",
    usages: [
      {
        description: "কিছু ছাড়া বা ব্যতীত বোঝাতে",
        examples: [
          "I can't live without you. (আমি তোমাকে ছাড়া বাঁচতে পারি না।)",
          "She left without saying goodbye. (সে বিদায় না বলে চলে গেছে।)",
          "He managed without any help. (সে কোনো সাহায্য ছাড়াই ব্যবস্থা করেছে।)",
          "They went out without their umbrellas. (তারা তাদের ছাতা ছাড়া বেরিয়েছে।)",
          "I can't imagine a day without coffee. (আমি কফি ছাড়া একটি দিন কল্পনা করতে পারি না।)",
        ],
      },
      {
        description: "নিষেধার্থে বা ব্যতিরেকে বোঝাতে",
        examples: [
          "You can't enter without a ticket. (তুমি টিকেট ছাড়া প্রবেশ করতে পারবে না।)",
          "She succeeded without any support. (সে কোনো সমর্থন ছাড়া সফল হয়েছে।)",
          "He completed the task without any errors. (সে কোনো ভুল ছাড়া কাজটি সম্পন্ন করেছে।)",
          "They survived without food for days. (তারা দিনের পর দিন খাবার ছাড়া বেঁচে ছিল।)",
          "She did the work without complaining. (সে কোনো অভিযোগ ছাড়া কাজটি করেছে।)",
        ],
      },
    ],
  },
  {
    title: "Like এর ব্যবহার",
    usages: [
      {
        description: "অনুরূপ বা সদৃশ বোঝাতে",
        examples: [
          "She sings like a professional. (সে একজন পেশাদারের মতো গান গায়।)",
          "He runs like a cheetah. (সে চিতার মতো দৌড়ায়।)",
          "They fight like cats and dogs. (তারা বিড়াল-কুকুরের মতো লড়াই করে।)",
          "She dances like a ballerina. (সে একজন ব্যালে নর্তকীর মতো নাচে।)",
          "He works like a machine. (সে একটি মেশিনের মতো কাজ করে।)",
        ],
      },
      {
        description: "মতো অর্থে",
        examples: [
          "It looks like rain. (এটি বৃষ্টির মতো দেখাচ্ছে।)",
          "She seems like a nice person. (সে একটি ভালো ব্যক্তির মতো মনে হচ্ছে।)",
          "He behaves like a gentleman. (সে একজন ভদ্রলোকের মতো আচরণ করে।)",
          "They acted like they didn't care. (তারা এমন অভিনয় করেছে যেন তারা পাত্তা দেয় না।)",
          "The movie was like a dream. (ছবিটি একটি স্বপ্নের মতো ছিল।)",
        ],
      },
    ],
  },
  {
    title: "Between এবং Among এর মধ্যে পার্থক্য",
    usages: [
      {
        description: "Between",
        examples: [
          "দুইয়ের মধ্যে সম্পর্ক বোঝাতে ব্যবহৃত হয়। (Used to express the relationship between two.)",
          "The secret is between you and me. (এই গোপন কথা তোমার আর আমার মধ্যে।)",
          "There is a door between the two rooms. (দুটি ঘরের মধ্যে একটি দরজা আছে।)",
          "She sits between her parents. (সে তার বাবা-মার মধ্যে বসে।)",
          "The competition is between two teams. (প্রতিযোগিতাটি দুটি দলের মধ্যে।)",
          "The road is between the park and the school. (রাস্তা পার্ক ও স্কুলের মধ্যে অবস্থিত।)",
        ],
      },
      {
        description: "Among",
        examples: [
          "দুইয়ের অধিক সম্পর্ক বোঝাতে ব্যবহৃত হয়। (Used to express the relationship among more than two.)",
          "She is popular among her friends. (সে তার বন্ধুদের মধ্যে জনপ্রিয়।)",
          "The treasure was hidden among the trees. (ধনটি গাছগুলির মধ্যে লুকানো ছিল।)",
          "He was the smartest among them. (সে তাদের মধ্যে সবচেয়ে বুদ্ধিমান ছিল।)",
          "There was a lot of gossip among the staff. (কর্মীদের মধ্যে অনেক গুজব ছিল।)",
          "The virus spread quickly among the population. (ভাইরাসটি জনসংখ্যার মধ্যে দ্রুত ছড়িয়ে পড়েছিল।)",
        ],
      },
    ],
  },
  {
    title: "পূর্বে (Before) এবং পরে (After) এর মধ্যে পার্থক্য",
    usages: [
      {
        description: "Before",
        examples: [
          "পূর্বে বোঝাতে ব্যবহৃত হয়। (Used to express something happening earlier.)",
          "She brushes her teeth before breakfast. (সে প্রাতঃরাশের পূর্বে তার দাঁত ব্রাশ করে।)",
          "He arrived before me. (সে আমার পূর্বে এসেছে।)",
          "We need to finish the work before noon. (আমাদের দুপুরের পূর্বে কাজটি শেষ করতে হবে।)",
          "She reads a book before bed. (সে শোয়ার পূর্বে একটি বই পড়ে।)",
          "They moved to the city before the pandemic. (তারা মহামারীর পূর্বে শহরে চলে গিয়েছিল।)",
        ],
      },
      {
        description: "After",
        examples: [
          "পরে বোঝাতে ব্যবহৃত হয়। (Used to express something happening later.)",
          "We had coffee after dinner. (আমরা রাতের খাবারের পরে কফি পান করেছিলাম।)",
          "She goes for a walk after work. (সে কাজের পরে হাঁটতে যায়।)",
          "They will call you after the meeting. (তারা মিটিংয়ের পরে তোমাকে ফোন করবে।)",
          "He left after you. (সে তোমার পরে চলে গেছে।)",
          "She went to bed after midnight. (সে মধ্যরাতের পরে শুয়ে পড়েছিল।)",
        ],
      },
    ],
  },
  {
    title: "Beside এবং Besides এর মধ্যে পার্থক্য",
    usages: [
      {
        description: "পাশে বোঝাতে ব্যবহৃত হয়।",
        examples: [
          "She sat beside her friend. (সে তার বন্ধুর পাশে বসেছিল।)",
          "The lamp is beside the bed. (ল্যাম্পটি বিছানার পাশে আছে।)",
          "He stood beside his car. (সে তার গাড়ির পাশে দাঁড়িয়েছিল।)",
          "The park is beside the river. (পার্কটি নদীর পাশে অবস্থিত।)",
          "She placed her bag beside the chair. (সে তার ব্যাগটি চেয়ারের পাশে রেখেছে।)",
        ],
      },
      {
        description: "অতিরিক্ত বোঝাতে ব্যবহৃত হয়।",
        examples: [
          "Besides studying, she also works part-time. (পড়াশোনার পাশাপাশি, সে পার্ট-টাইম কাজও করে।)",
          "He likes soccer besides basketball. (বাস্কেটবলের পাশাপাশি, সে ফুটবলও পছন্দ করে।)",
          "Besides the main course, they served dessert. (প্রধান খাবারের পাশাপাশি, তারা ডেজার্টও পরিবেশন করেছিল।)",
          "She has other hobbies besides painting. (পেইন্টিংয়ের পাশাপাশি, তার অন্যান্য শখও আছে।)",
          "Besides being a teacher, he is also a writer. (শিক্ষকতার পাশাপাশি, সে একজন লেখকও।)",
        ],
      },
    ],
  },
  {
    title: "Into এবং Onto এর মধ্যে পার্থক্য",
    usages: [
      {
        description: "Into",
        examples: [
          "অভ্যন্তরে বোঝাতে ব্যবহৃত হয়। (Used to express movement inside.)",
          "She walked into the room. (সে ঘরের ভিতরে প্রবেশ করেছে।)",
          "He jumped into the pool. (সে পুলের ভিতরে লাফ দিয়েছে।)",
          "They drove into the city. (তারা শহরের ভিতরে গাড়ি চালিয়েছে।)",
          "The cat crawled into the box. (বিড়ালটি বাক্সের ভিতরে প্রবেশ করেছে।)",
          "He poured water into the glass. (সে গ্লাসের ভিতরে পানি ঢেলেছে।)",
        ],
      },
      {
        description: "Onto",
        examples: [
          "উপরে বোঝাতে ব্যবহৃত হয়। (Used to express movement to a surface.)",
          "She climbed onto the roof. (সে ছাদের উপরে উঠেছে।)",
          "He jumped onto the table. (সে টেবিলের উপরে লাফ দিয়েছে।)",
          "They got onto the bus. (তারা বাসে উঠেছে।)",
          "The cat leaped onto the counter. (বিড়ালটি কাউন্টারের উপরে লাফিয়েছে।)",
          "She placed the book onto the shelf. (সে বইটি তাকের উপরে রেখেছে।)",
        ],
      },
    ],
  },
];

export default prepositionsData;
