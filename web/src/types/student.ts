export type Student = {
  id: number;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
};

export type StudentSignIn = Pick<Student, "email" | "password">;
