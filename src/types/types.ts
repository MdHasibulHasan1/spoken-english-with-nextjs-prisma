export interface Example {
  english: string;
  bangla: string;
}

export interface Blog {
  bloggerName: string;
  bloggerImage?: string;
  bloggerEmail: string;
  structure: string;
  description?: string;
  examples: Example[];
  category: string;
  createdAt: Date;
  id?: string;
}
