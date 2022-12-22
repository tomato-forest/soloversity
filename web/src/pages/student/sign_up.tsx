import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { StudentSignUp } from "types/student";

const StudentLogin = () => {
  const initialStudent: StudentSignUp = {
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [student, setStudent] = useState(initialStudent);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    await axios.post("http://localhost:3000/student", {
      registration: {
        email: student.email,
        password: student.password,
        password_confirmation: student.password_confirmation,
      },
    });
  };
  return (
    <>
      <Head>
        <title>新規登録</title>
      </Head>
      <Header />
      <form className="flex flex-col bg-gray-200 py-5" onSubmit={signUp}>
        <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
          <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
            <h1 className="mb-8 text-center text-3xl">新規登録</h1>

            <input
              type="email"
              className="mb-4 block w-full rounded border p-3"
              name="email"
              placeholder="Email"
              value={student.email}
              onChange={handleChange}
            />

            <input
              type="password"
              className="mb-4 block w-full rounded border p-3"
              name="password"
              placeholder="Password"
              value={student.password}
              onChange={handleChange}
            />

            <input
              type="password"
              className="mb-4 block w-full rounded border p-3"
              name="password_confirmation"
              placeholder="PasswordConfirmation"
              value={student.password_confirmation}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="my-1 w-full rounded bg-green-400 py-3 text-center text-white hover:bg-green-600 focus:outline-none"
            >
              Create Account
            </button>
          </div>

          <div className="mt-6">
            既にアカウントお持ちの方は
            <Link href="sign_in">
              <a className="border-b text-blue-500 no-underline">ログイン</a>
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default StudentLogin;
