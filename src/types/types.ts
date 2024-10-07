export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string | null;
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
  serialNumber?: number | null | undefined;
  structure: string;
  note?: string;
  examples: Example[];
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  userId: string | undefined;
  id?: string;
}
