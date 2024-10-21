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
  serialNumber?: number | null;
  structure: string;
  note: string | null; // If this can be empty, keep it as string
  examples: Example[];
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  userId: string; // Make this required
  id?: string;
  explanation?: string | null;
}
