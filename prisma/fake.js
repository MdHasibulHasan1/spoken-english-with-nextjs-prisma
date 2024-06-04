generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}



type Examples {
  bangla  String
  english String
}


model Chapter {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  slug  String @unique
  category  String
  content   String
  image     String
  bloggerEmail String   @default("hasib7143@gmail.com")
  /// Field referred in an index, but found no data to define the type.
  // slug      Json?    @unique
  
  // title     String   @unique
  title     String?  
  createdAt DateTime? @db.Date @default(now())
  updatedAt     DateTime  @updatedAt @default(now())
  @@map("chapters")
}

model Blog {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  bloggerEmail  String @default("hasib7143@gmail.com")
  bloggerImage  String?
  bloggerName   String? @default("Md. Hasibul Hasan")
  category      String
  createdAt     DateTime?  @db.Date
  description   String
  examples      String[]
  favorites     String[]
  status        String    @default("Pending") // Add default value "Pending"
  structure     String
  updatedAt     DateTime  @updatedAt @default(now())
  @@map("blogs")
}


model spokenRule {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  bloggerEmail  String    @default("hasib7143@gmail.com")
  bloggerImage  String?
  bloggerName   String?   @default("Md. Hasibul Hasan")
  category      String
  description   String
  examples      Examples[]
  favorites     String[]
  status        String    @default("Pending")
  structure     String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt @default(now())
  @@map("spokenRules")
}
model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String
  name  String
  role  String?
  createdAt     DateTime?  @db.Date @default(now())
  updatedAt     DateTime?  @db.Date @default(now())
  @@map("users")
}






model Conjunction {
  id          String                 @id @default(auto()) @map("_id") @db.ObjectId
  conjunction String
  examples    Examples[]
  explanation String
  bloggerEmail String  @default("hasib7143@gmail.com")
  createdAt     DateTime?  @db.Date @default(now())
  updatedAt     DateTime  @updatedAt @default(now())
  @@map("Conjunctions")
}


// ........................






type PrepositionsExpressions {
  examples   String[]
  expression String
  meaning    String
}

type PrepositionsUsages {
  description String
  examples    String[]
}



model prepositions {
  id           String               @id @default(auto()) @map("_id") @db.ObjectId
  bloggerEmail String
  createdAt    DateTime             @db.Date
  /// Multiple data types found: Array(String): 87.5%, Array(PrepositionsExpressions): 12.5% out of 8 sampled entries
  expressions  Json?
  title        String
  updatedAt    DateTime             @db.Date
  usages       PrepositionsUsages[]
}
