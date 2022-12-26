import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { StudentSignIn } from "types/student";
import { useState } from "react";

const StudentLogin = () => {
  const initialStudent: StudentSignIn = { email: "", password: "" };
  const [student, setStudent] = useState(initialStudent);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const login = async () => {
    await axios.post("http://localhost:3000/student/sign_in", student);
  };
  return (
    <>
      <Head>
        <title>ログイン</title>
      </Head>
      <Header />
      <h1 className="my-5 text-center text-5xl">ログイン</h1>

      <div className="mx-auto w-full max-w-xs">
        <form
          className="mb-4 rounded bg-blue-100 px-8 pt-6 pb-8 shadow-md"
          onSubmit={login}
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              name="email"
              type="email"
              placeholder="example@ex.com"
              value={student.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              name="password"
              type="password"
              placeholder="***************"
              value={student.password}
              onChange={handleChange}
            />
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default StudentLogin;
