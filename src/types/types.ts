export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  role: string;
  emailVerified?: Date;
  resetToken?: string;
  resetTokenExpiry?: Date;
  createdAt?: Date;
  updatedAt: Date;
}

export interface Example {
  english: string;
  bangla: string;
}

export interface Rule {
  bloggerName: string;
  bloggerImage?: string;
  bloggerEmail: string;
  structure: string;
  description?: string;
  examples: Example[];
  category: string;
  createdAt?: Date;
  id?: string;
}
export interface Examples {
  bangla: string;
  english: string;
}

export interface SpokenRule {
  id: string;
  bloggerEmail: string;
  bloggerImage?: string | null;
  bloggerName?: string | null;
  category: string;
  description: string;
  serialNumber?: number | null;
  examples: Examples[];
  favorites: string[];
  status: string;
  structure: string;
  createdAt: Date;
  updatedAt: Date;
}
