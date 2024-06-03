const data = [
  {
    rule: "Rules-1",
    description:
      "কোন বাক্য যদি subject singular হয় তাহলে verb টিও singular হবে। আবার একই ভাবে যদি subject plural হয় verb টিও plural হবে। এটিই হল sub verb Aggrement একটি common rules.",
    examples: [
      {
        english: "Rana is the leader of our team",
        bangla: "রানা আমাদের দলের নেতা।",
      },
      {
        english: "The boys are running in the field",
        bangla: "ছেলেরা মাঠে দৌড়াচ্ছে।",
      },
      {
        english: "She is reading a book",
        bangla: "সে একটি বই পড়ছে।",
      },
      {
        english: "They are going to the market",
        bangla: "তারা বাজারে যাচ্ছে।",
      },
      {
        english: "The cat is sleeping on the mat",
        bangla: "বিড়ালটি ম্যাটের উপর ঘুমাচ্ছে।",
      },
      {
        english: "The dogs are barking loudly",
        bangla: "কুকুরগুলি উচ্চস্বরে ঘেউ ঘেউ করছে।",
      },
      {
        english: "John is writing a letter",
        bangla: "জন একটি চিঠি লিখছে।",
      },
      {
        english: "The children are playing in the park",
        bangla: "শিশুরা পার্কে খেলছে।",
      },
      {
        english: "She is cooking dinner",
        bangla: "সে রাতের খাবার রান্না করছে।",
      },
      {
        english: "The birds are chirping in the trees",
        bangla: "পাখিরা গাছে চিৎকার করছে।",
      },
    ],
  },
  {
    rule: "Rules-2",
    description:
      "যদি দুটি singular noun 'And' দ্বারা যুক্ত হয়, তাহলে auxiliary verb টি হবে plural",
    examples: [
      {
        english: "Rana and Sumi are working very well",
        bangla: "রানা এবং সুমি খুব ভালো কাজ করতেছে।",
      },
      {
        english: "Bread and butter is my favorite breakfast",
        bangla: "পাওরুটি এবং মাখন আমার পছন্দের নাস্তা।",
      },
      {
        english: "Tom and Jerry are popular cartoon characters",
        bangla: "টম এবং জেরি জনপ্রিয় কার্টুন চরিত্র।",
      },
      {
        english: "Salt and pepper are essential for cooking",
        bangla: "লবণ এবং গোলমরিচ রান্নার জন্য অপরিহার্য।",
      },
      {
        english: "The king and queen are attending the ceremony",
        bangla: "রাজা এবং রাণী অনুষ্ঠানে যোগ দিচ্ছেন।",
      },
      {
        english: "The pen and paper are on the table",
        bangla: "কলম এবং কাগজ টেবিলের উপর আছে।",
      },
      {
        english: "His mother and father are coming to visit",
        bangla: "তার মা এবং বাবা দেখা করতে আসছেন।",
      },
      {
        english: "The teacher and the student are discussing the lesson",
        bangla: "শিক্ষক এবং ছাত্র পাঠ আলোচনা করছেন।",
      },
      {
        english: "Rain and thunder are common during the monsoon",
        bangla: "বর্ষাকালে বৃষ্টি এবং বজ্রপাত সাধারণ।",
      },
      {
        english: "Love and respect are important in a relationship",
        bangla: "ভালবাসা এবং সম্মান একটি সম্পর্কের ক্ষেত্রে গুরুত্বপূর্ণ।",
      },
    ],
  },
  {
    rule: "Rules-3",
    description:
      "With, As well as, Together with, along with, accompanied by, in addition to দ্বারা বাক্যে যদি কোন noun বা pronoun যুক্ত হলে দুটি subject এর মধ্যে প্রথম subject অনুযায়ী verb ব্যবহার হবে।",
    examples: [
      {
        english: "Tipu as well as his friends is going to Cox's Bazar",
        bangla: "টিপু সেই সাথে তার বন্ধুরাও কক্সবাজার যাচ্ছে।",
      },
      {
        english: "He along with his parents has come to the shopping mall",
        bangla: "সে তার পিতামাতার সাথে শপিং মলে এসেছে।",
      },
      {
        english: "Mr. Rana accompanied by his children has eaten dinner",
        bangla: "রানা তার ছেলেমেয়েদের সাথে রাতের খাবার খায়।",
      },
      {
        english: "The teacher along with the students is visiting the museum",
        bangla: "শিক্ষক শিক্ষার্থীদের সাথে জাদুঘর পরিদর্শন করছেন।",
      },
      {
        english: "The captain together with his team is practicing hard",
        bangla: "অধিনায়ক তার দলের সাথে কঠোর অনুশীলন করছেন।",
      },
      {
        english: "The manager along with the staff is attending the meeting",
        bangla: "ব্যবস্থাপক কর্মীদের সাথে বৈঠকে উপস্থিত আছেন।",
      },
      {
        english:
          "The principal as well as the teachers is concerned about the students",
        bangla: "প্রধান শিক্ষক এবং শিক্ষকরাও শিক্ষার্থীদের নিয়ে উদ্বিগ্ন।",
      },
      {
        english: "The singer along with her band is performing tonight",
        bangla: "গায়িকা তার ব্যান্ডের সাথে আজ রাতের পারফর্ম করছেন।",
      },
      {
        english:
          "The president accompanied by his advisors is making a decision",
        bangla: "রাষ্ট্রপতি তার উপদেষ্টাদের সাথে একটি সিদ্ধান্ত নিচ্ছেন।",
      },
      {
        english: "The chef along with his assistants is preparing the meal",
        bangla: "রান্না তার সহকারীদের সাথে খাবার প্রস্তুত করছেন।",
      },
    ],
  },
  {
    rule: "Rules-4",
    description:
      "Either...... ..or, neither nor, not only, but also দ্বারা দুটি subject যুক্ত হলে দ্বিতীয় বা শেষের subject অনুযায়ী verb বা verb plural ও হতে পারে।",
    examples: [
      {
        english: "Either he or his brother is guilty",
        bangla: "হয় সে অথবা তার ভাই অপরাধী।",
      },
      {
        english: "Not only I but also you are coming today",
        bangla: "শুধু আমি নয় তুমিও আজ আসছো।",
      },
      {
        english: "He is not only a good leader but also an eloquent speaker",
        bangla: "তিনি শুধু একজন ভালো নেতাই নন, একজন সুবক্তাও বটে।",
      },
      {
        english: "Either you or I am going to win the prize",
        bangla: "হয় তুমি অথবা আমি পুরস্কার জিততে যাচ্ছি।",
      },
      {
        english: "Neither the teacher nor the students were prepared",
        bangla: "শিক্ষক বা ছাত্রছাত্রীরা কেউই প্রস্তুত ছিলেন না।",
      },
      {
        english: "Not only the players but also the coach was excited",
        bangla: "শুধু খেলোয়াড়রাই নয়, কোচও উত্তেজিত ছিলেন।",
      },
      {
        english: "Either the cat or the dogs are responsible for the mess",
        bangla: "বিড়াল অথবা কুকুররা এই বিশৃঙ্খলার জন্য দায়ী।",
      },
      {
        english: "Neither the manager nor his assistants have the key",
        bangla: "ব্যবস্থাপক বা তার সহকারীদের কেউই চাবি রাখেন না।",
      },
      {
        english: "Not only the movie but also the book is interesting",
        bangla: "শুধু সিনেমাই নয়, বইটিও আকর্ষণীয়।",
      },
      {
        english: "Either the teacher or the students are wrong",
        bangla: "শিক্ষক বা ছাত্রছাত্রীরা কেউই ভুল।",
      },
    ],
  },
  {
    rule: "Rules-5",
    description:
      "কোন Sentence যদি gerund (v+ing) বা infinitive (to+verb) দিয়ে শুরু হয় তবে সেক্ষেত্রে অবশ্যই singular verb ব্যবহার হবে।",
    examples: [
      {
        english: "Walking is a good exercise",
        bangla: "হাঁটা খুব ভাল ব্যয়াম।",
      },
      {
        english: "Being honest is a great virtue",
        bangla: "সৎ হওয়াটা একটি মহৎ গুন।",
      },
      {
        english: "Smoking is forbidden in the public place",
        bangla: "পাবলিক প্লেসে ধুমপান করা নিষেধ।",
      },
      {
        english: "To collect English books is my hobby",
        bangla: "ইংরেজী বই সংগ্রহ করা আমার শখ।",
      },
      {
        english: "Reading books is my favorite pastime",
        bangla: "বই পড়া আমার প্রিয় বিনোদন।",
      },
      {
        english: "To travel the world is my dream",
        bangla: "পৃথিবী ভ্রমণ করা আমার স্বপ্ন।",
      },
      {
        english: "Writing letters is becoming less common",
        bangla: "চিঠি লেখা কম সাধারণ হয়ে যাচ্ছে।",
      },
      {
        english: "To learn a new language is challenging",
        bangla: "একটি নতুন ভাষা শেখা চ্যালেঞ্জিং।",
      },
      {
        english: "Dancing is a form of art",
        bangla: "নৃত্য একটি শিল্পের রূপ।",
      },
      {
        english: "To be punctual is important",
        bangla: "সময়নিষ্ঠ হওয়া গুরুত্বপূর্ণ।",
      },
    ],
  },
  {
    rule: "Rules-6",
    description:
      "One of the subject phrase গুলি plural noun হয় এবং singular verb হয়।",
    examples: [
      {
        english: "One of the boys is missing",
        bangla: "ছেলেদের মধ্যে একজন নিখোঁজ।",
      },
      {
        english: "One of the girls is singing",
        bangla: "মেয়েদের মধ্যে একজন গান গাইছে।",
      },
      {
        english: "One of the teachers is absent",
        bangla: "শিক্ষকদের মধ্যে একজন অনুপস্থিত।",
      },
      {
        english: "One of the apples is rotten",
        bangla: "আপেলগুলির মধ্যে একটি পচা।",
      },
      {
        english: "One of the books is very interesting",
        bangla: "বইগুলির মধ্যে একটি খুবই আকর্ষণীয়।",
      },
      {
        english: "One of the players is injured",
        bangla: "খেলোয়াড়দের মধ্যে একজন আহত।",
      },
      {
        english: "One of the bags is very heavy",
        bangla: "ব্যাগগুলির মধ্যে একটি খুব ভারী।",
      },
      {
        english: "One of the windows is open",
        bangla: "জানালাগুলির মধ্যে একটি খোলা।",
      },
      {
        english: "One of the fruits is rotten",
        bangla: "ফলগুলির মধ্যে একটি পচা।",
      },
      {
        english: "One of the cars is new",
        bangla: "গাড়িগুলির মধ্যে একটি নতুন।",
      },
    ],
  },
  {
    rule: "Rules-7",
    description:
      "Fractions or percentages subject phrase গুলি singular বা plural হয় sentence অনুযায়ী।",
    examples: [
      {
        english: "50% of the work is done",
        bangla: "কাজের 50% সম্পন্ন হয়েছে।",
      },
      {
        english: "50% of the boys were absent in the class",
        bangla: "ক্লাসে 50% ছেলে অনুপস্থিত ছিল।",
      },
      {
        english: "One-third of the water is polluted",
        bangla: "এক তৃতীয়াংশ পানি দূষিত।",
      },
      {
        english: "Two-thirds of the students have passed",
        bangla: "ছাত্রদের দুই-তৃতীয়াংশ উত্তীর্ণ হয়েছে।",
      },
      {
        english: "Half of the cake is eaten",
        bangla: "কেকের অর্ধেক খাওয়া হয়েছে।",
      },
      {
        english: "Half of the people were invited",
        bangla: "লোকদের অর্ধেককে আমন্ত্রণ জানানো হয়েছিল।",
      },
      {
        english: "20% of the population is illiterate",
        bangla: "জনসংখ্যার 20% নিরক্ষর।",
      },
      {
        english: "20% of the players are injured",
        bangla: "খেলোয়াড়দের 20% আহত।",
      },
      {
        english: "A quarter of the book is missing",
        bangla: "বইটির এক চতুর্থাংশ অনুপস্থিত।",
      },
      {
        english: "A quarter of the participants were late",
        bangla: "অংশগ্রহণকারীদের এক চতুর্থাংশ দেরিতে ছিল।",
      },
    ],
  },
  {
    rule: "Rules-8",
    description:
      "Mathmetics, civics, physics, statistics, economics, ethics, politics, mechanics, mumps, measles, news এগুলি সবসময় singular হয়।",
    examples: [
      {
        english: "Mathematics is my favorite subject",
        bangla: "গণিত আমার প্রিয় বিষয়।",
      },
      {
        english: "Civics is taught in schools",
        bangla: "নাগরিক শিক্ষা স্কুলে পড়ানো হয়।",
      },
      {
        english: "Physics is a challenging subject",
        bangla: "পদার্থবিজ্ঞান একটি চ্যালেঞ্জিং বিষয়।",
      },
      {
        english: "Statistics is crucial for data analysis",
        bangla: "পরিসংখ্যান তথ্য বিশ্লেষণের জন্য গুরুত্বপূর্ণ।",
      },
      {
        english: "Economics is a vital field of study",
        bangla: "অর্থনীতি একটি গুরুত্বপূর্ণ অধ্যয়ন ক্ষেত্র।",
      },
      {
        english: "Ethics is essential in professional life",
        bangla: "পেশাদার জীবনে নৈতিকতা অপরিহার্য।",
      },
      {
        english: "Politics is a hot topic these days",
        bangla: "রাজনীতি আজকাল একটি জনপ্রিয় বিষয়।",
      },
      {
        english: "Mechanics is a branch of physics",
        bangla: "যান্ত্রিক পদার্থবিজ্ঞানের একটি শাখা।",
      },
      {
        english: "Mumps is a contagious disease",
        bangla: "মাম্পস একটি সংক্রামক রোগ।",
      },
      {
        english: "Measles is a common childhood illness",
        bangla: "হাম একটি সাধারণ শৈশব অসুখ।",
      },
      {
        english: "News is on the television",
        bangla: "টেলিভিশনে খবর।",
      },
    ],
  },
  {
    rule: "Rules-9",
    description:
      "Money, weight, time, distance, period এর পর singular verb হয়।",
    examples: [
      {
        english: "Five thousand dollars is a lot of money",
        bangla: "পাঁচ হাজার ডলার অনেক টাকা।",
      },
      {
        english: "Ten kilos is the weight limit",
        bangla: "দশ কেজি হল ওজন সীমা।",
      },
      {
        english: "Two hours is enough time",
        bangla: "দুই ঘণ্টা যথেষ্ট সময়।",
      },
      {
        english: "Fifty miles is a long distance to walk",
        bangla: "পঞ্চাশ মাইল হাঁটা একটি দীর্ঘ পথ।",
      },
      {
        english: "A period of six months is required",
        bangla: "ছয় মাসের একটি সময়কাল প্রয়োজন।",
      },
      {
        english: "Three weeks is too long to wait",
        bangla: "তিন সপ্তাহ অপেক্ষা করার জন্য অনেক দীর্ঘ।",
      },
      {
        english: "Ten thousand dollars is the prize money",
        bangla: "দশ হাজার ডলার পুরস্কারের অর্থ।",
      },
      {
        english: "Seven days is the duration of the trip",
        bangla: "সাত দিন ভ্রমণের সময়কাল।",
      },
      {
        english: "Four hours is the average flight time",
        bangla: "চার ঘণ্টা গড় ফ্লাইটের সময়।",
      },
      {
        english: "Twenty miles is the distance to the nearest town",
        bangla: "নিকটতম শহরের দূরত্ব বিশ মাইল।",
      },
    ],
  },
  {
    rule: "Rules-10",
    description:
      "যদি relative pronoun (who, that, which) এর antecedent অনুযায়ী verb ব্যবহার হয়, then sentence singular হবে।",
    examples: [
      {
        english: "It is I who am responsible",
        bangla: "এটি আমি যে দায়ী।",
      },
      {
        english: "It is we who are planning the trip",
        bangla: "এটি আমরা যারা ট্রিপ পরিকল্পনা করছি।",
      },
      {
        english: "It is you who is the best performer",
        bangla: "এটি তুমি যে সেরা পারফর্মার।",
      },
      {
        english: "It is they who have made the decision",
        bangla: "এটি তারা যারা সিদ্ধান্ত নিয়েছে।",
      },
      {
        english: "It is she who has completed the task",
        bangla: "এটি সে যে কাজটি সম্পন্ন করেছে।",
      },
      {
        english: "It is he who is responsible for the mess",
        bangla: "এটি সে যে এই বিশৃঙ্খলার জন্য দায়ী।",
      },
      {
        english: "It is I who am here to help",
        bangla: "এটি আমি যে এখানে সাহায্য করতে এসেছি।",
      },
      {
        english: "It is we who are the champions",
        bangla: "এটি আমরা যারা চ্যাম্পিয়ন।",
      },
      {
        english: "It is you who has the key",
        bangla: "এটি তুমি যে চাবি আছে।",
      },
      {
        english: "It is they who will lead the team",
        bangla: "এটি তারা যারা দলকে নেতৃত্ব দেবে।",
      },
    ],
  },
  {
    rule: "Rules-9",
    description:
      "Noun এর পূর্বে সংখ্যাবাচক শব্দ যেমন dozen, hundred, thousand, pair ইত্যাদি থাকলে verb singular হয়।",
    examples: [
      {
        english: "One dozen of oranges is sufficient",
        bangla: "এক ডজন কমলালেবু যথেষ্ট।",
      },
      {
        english: "I have got a pair of shoes",
        bangla: "আমার একটি জোড়া জুতা আছে।",
      },
      {
        english: "One hundred dollars is enough for the purchase",
        bangla: "একশো ডলার ক্রয়ের জন্য যথেষ্ট।",
      },
      {
        english: "A thousand miles is a long journey",
        bangla: "এক হাজার মাইল একটি দীর্ঘ যাত্রা।",
      },
      {
        english: "One dozen eggs is required for the recipe",
        bangla: "রেসিপির জন্য এক ডজন ডিম প্রয়োজন।",
      },
      {
        english: "A pair of glasses is on the table",
        bangla: "একটি জোড়া চশমা টেবিলের উপর রয়েছে।",
      },
      {
        english: "Five hundred pages is a lot to read",
        bangla: "পাঁচশো পৃষ্ঠা পড়ার জন্য অনেক।",
      },
      {
        english: "One thousand rupees is the fee for the course",
        bangla: "কোর্সের জন্য ফি এক হাজার টাকা।",
      },
      {
        english: "A dozen roses is enough for the bouquet",
        bangla: "এক ডজন গোলাপ তোড়ার জন্য যথেষ্ট।",
      },
      {
        english: "A pair of jeans is what I need",
        bangla: "একটি জোড়া জিন্স আমার প্রয়োজন।",
      },
      {
        english: "Two dozen cookies is plenty for the party",
        bangla: "পার্টির জন্য দুই ডজন কুকিজ প্রচুর।",
      },
      {
        english: "Three hundred grams of sugar is needed",
        bangla: "তিনশো গ্রাম চিনি প্রয়োজন।",
      },
      {
        english: "A pair of socks is missing",
        bangla: "একটি জোড়া মোজা হারিয়ে গেছে।",
      },
      {
        english: "Four dozen apples is what we bought",
        bangla: "আমরা চার ডজন আপেল কিনেছি।",
      },
      {
        english: "Two thousand words is the minimum requirement for the essay",
        bangla: "রচনার জন্য ন্যূনতম প্রয়োজন দুই হাজার শব্দ।",
      },
    ],
  },
  {
    rule: "Rules-10",
    description: "সময় বা পরিমাপ উল্লেখ থাকলে singular verb বসে।",
    examples: [
      {
        english: "Two hours is a long time to wait",
        bangla: "দুই ঘণ্টা অপেক্ষা করার জন্য দীর্ঘ সময়।",
      },
      {
        english: "Four hours is required to cook the recipe",
        bangla: "রেসিপিটি রান্না করতে চার ঘণ্টা প্রয়োজন।",
      },
      {
        english: "Five liters of water is needed to prepare the food",
        bangla: "খাবার প্রস্তুত করতে পাঁচ লিটার পানি প্রয়োজন।",
      },
      {
        english: "Ten kilometers is a long distance to walk",
        bangla: "দশ কিলোমিটার হাঁটার জন্য দীর্ঘ পথ।",
      },
      {
        english: "Six months is enough time to complete the project",
        bangla: "প্রকল্পটি সম্পূর্ণ করার জন্য ছয় মাস যথেষ্ট সময়।",
      },
      {
        english: "One hundred dollars is too much to pay for this item",
        bangla: "এই আইটেমটির জন্য একশো ডলার অতিরিক্ত।",
      },
      {
        english: "Fifteen minutes is not enough to finish the test",
        bangla: "পরীক্ষা শেষ করার জন্য পনের মিনিট যথেষ্ট নয়।",
      },
      {
        english: "Three cups of flour is required for the cake",
        bangla: "কেকের জন্য তিন কাপ ময়দা প্রয়োজন।",
      },
      {
        english: "Seven days is the usual delivery time",
        bangla: "সাত দিন সাধারণত সরবরাহের সময়।",
      },
      {
        english: "Twenty kilograms is the maximum weight allowed",
        bangla: "সর্বোচ্চ অনুমোদিত ওজন বিশ কিলোগ্রাম।",
      },
    ],
  },
  {
    rule: "Rules-11",
    description:
      "একই দৈর্ঘ্য, পরিমান বা স্থান বুঝালে Subject দেখতে plural এর মত হলেও verb singular হবে।",
    examples: [
      {
        english: "50 miles is a long way",
        bangla: "৫০ মাইল দীর্ঘ পথ।",
      },
      {
        english: "5 minutes is enough to explain this topic",
        bangla: "এই বিষয়টি ব্যাখ্যা করার জন্য ৫ মিনিট যথেষ্ট।",
      },
    ],
  },
  {
    rule: "Rules-12",
    description:
      "Sub এর আগে যদি Each, Every বা No থাকে তাহলে auxiliary verb টি singular হবে।",
    examples: [
      {
        english:
          "Each of the students is responsible for keeping this room clean",
        bangla: "প্রতিটি শিক্ষার্থী এই কক্ষটি পরিষ্কার রাখার জন্য দায়ী।",
      },
      {
        english: "Each person is important",
        bangla: "প্রতিটি ব্যক্তি গুরুত্বপূর্ণ।",
      },
      {
        english: "Each of the stories is written by a different author",
        bangla: "প্রতিটি গল্প একটি ভিন্ন লেখকের দ্বারা লিখিত।",
      },
      {
        english: "Each of her Friends is invited",
        bangla: "তার প্রতিটি বন্ধু আমন্ত্রিত।",
      },
      {
        english: "Each of the girls is showing their ID",
        bangla: "প্রতিটি মেয়ে তাদের আইডি দেখাচ্ছে।",
      },
      {
        english: "Each of the books is placed on the shelf",
        bangla: "প্রতিটি বই তাকের উপর রাখা হয়েছে।",
      },
      {
        english: "Each employee is required to attend the meeting",
        bangla: "প্রতিটি কর্মচারীকে সভায় অংশগ্রহণ করতে হবে।",
      },
      {
        english: "Each of the children is given a toy",
        bangla: "প্রতিটি শিশুকে একটি খেলনা দেওয়া হয়েছে।",
      },
      {
        english: "Each of the rooms is equipped with air conditioning",
        bangla: "প্রতিটি ঘরেই শীতাতপ নিয়ন্ত্রিত যন্ত্র রয়েছে।",
      },
      {
        english: "Each of the questions is difficult",
        bangla: "প্রতিটি প্রশ্নই কঠিন।",
      },
      {
        english: "Every student is present today",
        bangla: "আজ প্রতিটি শিক্ষার্থী উপস্থিত।",
      },
      {
        english: "Every doctor in that hospital is kind",
        bangla: "ঐ হাসপাতালে প্রতিটি ডাক্তার সদয়।",
      },
      {
        english: "Every apple has been eaten",
        bangla: "প্রতিটি আপেল খাওয়া হয়েছে।",
      },
      {
        english: "Every girl and boy is needed to pass the written test",
        bangla: "লিখিত পরীক্ষায় উত্তীর্ণ হতে প্রতিটি মেয়ে এবং ছেলে প্রয়োজন।",
      },
      {
        english: "Every car in the parking lot is new",
        bangla: "পার্কিং লটে প্রতিটি গাড়িই নতুন।",
      },
      {
        english: "Every member of the team is dedicated",
        bangla: "দলের প্রতিটি সদস্যই নিবেদিত।",
      },
      {
        english: "Every house on this street is painted white",
        bangla: "এই রাস্তায় প্রতিটি ঘরই সাদা রঙ করা।",
      },
      {
        english: "Every book on this shelf is interesting",
        bangla: "এই তাকের প্রতিটি বইই আকর্ষণীয়।",
      },
      {
        english: "Every problem has a solution",
        bangla: "প্রতিটি সমস্যারই সমাধান আছে।",
      },
      {
        english: "No smoking is allowed",
        bangla: "ধূমপান নিষিদ্ধ।",
      },
      {
        english: "No student is allowed to leave the campus",
        bangla: "কোনো শিক্ষার্থীর ক্যাম্পাস ছেড়ে যাওয়ার অনুমতি নেই।",
      },
      {
        english: "No food is left in the refrigerator",
        bangla: "ফ্রিজে কোনো খাবার অবশিষ্ট নেই।",
      },
      {
        english: "No information is available at the moment",
        bangla: "এই মুহূর্তে কোনো তথ্য পাওয়া যাচ্ছে না।",
      },
      {
        english: "No person is exempt from paying taxes",
        bangla: "কর প্রদান থেকে কোনো ব্যক্তি মুক্ত নয়।",
      },
      {
        english: "No child is allowed to play in the street",
        bangla: "কোনো শিশুকে রাস্তায় খেলতে দেওয়া হয় না।",
      },
    ],
  },
  {
    rule: "Rules-14",
    description: "সকল প্রকার collective noun এর পর verb singular হয়।",
    examples: [
      {
        english: "Bangladesh army is doing a great job for Rohingya refugees",
        bangla:
          "বাংলাদেশ সেনাবাহিনী রোহিঙ্গা শরণার্থীদের জন্য দুর্দান্ত কাজ করছে।",
      },
      {
        english: "A flock of sheep is crossing the road",
        bangla: "একটি ভেড়ার পাল রাস্তা পার হচ্ছে।",
      },
      {
        english: "A bunch of roses is spreading the beauty of this stage",
        bangla: "একগুচ্ছ গোলাপ এই মঞ্চের সৌন্দর্য বাড়াচ্ছে।",
      },
      {
        english: "The team is celebrating their victory",
        bangla: "দলটি তাদের বিজয় উদযাপন করছে।",
      },
      {
        english: "The committee is planning the annual event",
        bangla: "কমিটি বার্ষিক অনুষ্ঠান পরিকল্পনা করছে।",
      },
      {
        english: "The family is going on vacation next week",
        bangla: "পরিবারটি আগামী সপ্তাহে ছুটিতে যাচ্ছে।",
      },
      {
        english: "The jury is delivering its verdict",
        bangla: "বিচারক মণ্ডলী তাদের রায় প্রদান করছে।",
      },
      {
        english: "The staff is working on the new project",
        bangla: "কর্মচারীবৃন্দ নতুন প্রকল্পে কাজ করছে।",
      },
      {
        english: "A pack of wolves is hunting in the forest",
        bangla: "একটি নেকড়ের দল বনে শিকার করছে।",
      },
      {
        english: "The audience is enjoying the concert",
        bangla: "দর্শকবৃন্দ কনসার্টটি উপভোগ করছে।",
      },
      {
        english: "The herd of cattle is grazing in the field",
        bangla: "গবাদি পশুর পালটি মাঠে চরছে।",
      },
    ],
  },
  {
    rule: "Rules-15",
    description:
      "তিনটি Person যদি একত্রে sub এর position এ বসে তবে তারা 2nd person, 3rd person, 1st person ক্রমানুসারে বসে। মনে রাখার কৌশল-231",
    note: "Note: তবে, অপরাধ/দোষ স্বীকারমূলক sentence এ 1st person, 2nd person and 3rd person অনুযায়ী বসে। মনে রাখার কৌশল-123",
    examples: [
      {
        english: "You, he, and I have done the work",
        bangla: "তুমি, সে, এবং আমি কাজটি করেছি।",
      },
      {
        english: "She, they, and we are going to the party.",
        bangla: "সে, তারা, এবং আমরা পার্টিতে যাচ্ছি।",
      },
      {
        english: "I, you, and he will attend the meeting.",
        bangla: "আমি, তুমি, এবং সে মিটিংতে উপস্থিত থাকবে।",
      },
      {
        english: "They, we, and you should discuss the matter.",
        bangla: "তারা, আমরা, এবং তুমি বিষয়টি আলোচনা করবে।",
      },
      {
        english: "He, she, and I were at the event.",
        bangla: "সে, সে, এবং আমরা ঘটনায় ছিলাম।",
      },
      {
        english: "You, they, and I need to sort out this issue.",
        bangla: "তুমি, তারা, এবং আমাদের এই সমস্যা সমাধান করতে হবে।",
      },
      {
        english: "We, you, and she were invited to the wedding.",
        bangla: "আমরা, তুমি, এবং সে বিবাহে আমন্ত্রিত ছিলাম।",
      },
      {
        english: "She, I, and they have different opinions.",
        bangla: "সে, আমি, এবং তারা পার্থক্যমত মতামত রাখে।",
      },
      {
        english: "You, he, and they can decide together.",
        bangla: "তুমি, সে, এবং তারা একসাথে নির্ণয় করতে পারে।",
      },
      {
        english: "They, she, and I won the competition.",
        bangla: "তারা, সে, এবং আমরা প্রতিযোগিতার জয় লাভ করেছি।",
      },
    ],
  },
  {
    rule: "Rules-16",
    description: "And দ্বারা দুটি sub যুক্ত হলে verb হবে plural।",
    examples: [
      {
        english: "John and Mary are going to the market",
        bangla: "জন এবং মেরি বাজারে যাচ্ছে।",
      },
      {
        english: "The teacher and the students are discussing the project",
        bangla: "শিক্ষক এবং শিক্ষার্থীরা প্রকল্প নিয়ে আলোচনা করছে।",
      },
      {
        english: "My brother and sister are coming to visit us",
        bangla: "আমার ভাই এবং বোন আমাদের দেখতে আসছে।",
      },
      {
        english: "The cat and the dog are playing in the yard",
        bangla: "বিড়াল এবং কুকুরটি উঠানে খেলছে।",
      },
      {
        english: "Tom and Jerry are popular cartoon characters",
        bangla: "টম এবং জেরি জনপ্রিয় কার্টুন চরিত্র।",
      },
      {
        english: "The sun and the moon are visible in the sky",
        bangla: "সূর্য এবং চাঁদ আকাশে দৃশ্যমান।",
      },
      {
        english: "The manager and the employees are having a meeting",
        bangla: "ব্যবস্থাপক এবং কর্মচারীরা একটি সভা করছে।",
      },
      {
        english: "The book and the pen are on the table",
        bangla: "বই এবং কলম টেবিলের উপর রয়েছে।",
      },
      {
        english: "The car and the bike are parked outside",
        bangla: "গাড়ি এবং বাইকটি বাইরে পার্ক করা রয়েছে।",
      },
      {
        english: "She and her friend are planning a trip",
        bangla: "সে এবং তার বন্ধু একটি ভ্রমণের পরিকল্পনা করছে।",
      },
      {
        english: "The children and their parents are enjoying the picnic",
        bangla: "বাচ্চারা এবং তাদের বাবা-মা পিকনিক উপভোগ করছে।",
      },
      {
        english: "The doctor and the nurse are treating the patient",
        bangla: "ডাক্তার এবং নার্স রোগীকে চিকিৎসা করছে।",
      },
      {
        english: "The chef and the waiter are preparing for the event",
        bangla: "রাঁধুনি এবং ওয়েটার ইভেন্টের জন্য প্রস্তুতি নিচ্ছে।",
      },
      {
        english: "The birds and the bees are flying around the garden",
        bangla: "পাখি এবং মৌমাছি বাগানের চারপাশে উড়ছে।",
      },
    ],
  },
  {
    rule: "Rules-17",
    description:
      "One of........, Each of........., Either of........., Neither of........., None of........., Any of......... -এর পর Noun টি plural হয় কিন্তু verb হবে singular।",
    examples: [
      {
        english: "One of the students was talking",
        bangla: "শিক্ষার্থীদের একজন কথা বলছিল।",
      },
      {
        english: "One of them has an idea",
        bangla: "তাদের একজনের একটি ধারণা আছে।",
      },
      {
        english: "One of the students is working on the project",
        bangla: "শিক্ষার্থীদের একজন প্রকল্পে কাজ করছে।",
      },
      {
        english: "Each of the books is interesting",
        bangla: "প্রতিটি বই আকর্ষণীয়।",
      },
      {
        english: "Each of the players is ready for the game",
        bangla: "খেলোয়াড়দের প্রত্যেকেই খেলায় প্রস্তুত।",
      },
      {
        english: "Each of the cars is parked properly",
        bangla: "প্রতিটি গাড়ি সঠিকভাবে পার্ক করা হয়েছে।",
      },
      {
        english: "Either of the options is acceptable",
        bangla: "বিকল্পগুলোর যেকোনো একটি গ্রহণযোগ্য।",
      },
      {
        english: "Either of the answers is correct",
        bangla: "উত্তরগুলির যেকোনো একটি সঠিক।",
      },
      {
        english: "Either of the roads leads to the city",
        bangla: "রাস্তা দুটি শহরের দিকে নিয়ে যায়।",
      },
      {
        english: "Neither of the answers is correct",
        bangla: "কোনো উত্তরই সঠিক নয়।",
      },
      {
        english: "Neither of the plans is feasible",
        bangla: "কোনো পরিকল্পনাই সম্ভব নয়।",
      },
      {
        english: "Neither of the houses is for sale",
        bangla: "কোনো বাড়িই বিক্রির জন্য নয়।",
      },
      {
        english: "None of the students is absent",
        bangla: "কোনো শিক্ষার্থী অনুপস্থিত নয়।",
      },
      {
        english: "None of the cookies is left",
        bangla: "কোনো কুকিজ অবশিষ্ট নেই।",
      },
      {
        english: "None of the rooms is available",
        bangla: "কোনো ঘরই খালি নেই।",
      },
      {
        english: "Any of the books is fine for the report",
        bangla: "প্রতিবেদনটির জন্য যেকোনো বই ঠিক আছে।",
      },
      {
        english: "Any of the students is capable of doing this",
        bangla: "শিক্ষার্থীদের যেকোনো একজন এটি করতে সক্ষম।",
      },
      {
        english: "Any of the days is suitable for the meeting",
        bangla: "সভার জন্য যেকোনো দিনই উপযুক্ত।",
      },
    ],
  },
];

export default data;
