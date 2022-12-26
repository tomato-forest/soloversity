export type Student = {
  id: number;
  email: string;
  password: string;
  password_confirmation: string;
  created_at: string;
  updated_at: string;
};

export type StudentSignIn = Pick<Student, "email" | "password">;

export type StudentSignUp = Pick<Student, "email" | "password" | "password_confirmation">;
