import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Soloversity</title>
        <meta name="description" content="Soloversity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <h1 className="fixed flex h-80 w-screen items-center justify-center text-6xl">
        <span>Let's spread friendship</span>
      </h1>

      <main className="right-0 left-0 top-0 z-50 mx-auto flex w-full items-center justify-between bg-[url('/top/background-image.jpg')] p-4 opacity-25 md:h-[460px] md:p-0 md:px-[60px]"></main>

      <Footer></Footer>
    </>
  );
};

export default Home;
