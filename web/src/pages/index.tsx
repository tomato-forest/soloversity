import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Soloversity</title>
        <meta name="description" content="Soloversity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className="right-0 left-0 top-0 z-50 mx-auto flex w-full items-center justify-between p-4 md:h-[120px] md:p-0 md:px-[60px] bg-[#6794A3] text-[#FFFFFF]">
          <h1 className='text-2xl font-bold'>
            Soloversity
          </h1>

          <div className='flex items-center justify-between'>
          <div className='p-4'>
            Profile
          </div>
          <div className='p-4'>
            DM
          </div>
          <div className='p-4'>
            ABOUT
          </div>
          <div className='p-4'>
            Public BBS
          </div>
          <div className='p-4'>
            University BBS
          </div>
          <div className='p-4'>
            Registration
          </div>
          <div className='p-4'>
            SignIn
          </div>
          </div>
        </header>

        <h1 className='text-6xl h-80 w-screen flex justify-center items-center fixed'>
            <span>Let’s spread friendship</span>
        </h1>
        
        <main className="right-0 left-0 top-0 z-50 mx-auto flex w-full items-center justify-between p-4 md:h-[460px] md:p-0 md:px-[60px] bg-[url('/top/background-image.jpg')] opacity-25" >
        </main>

        <footer className="right-0 left-0 top-0 z-50 mx-auto flex w-full items-center justify-between p-4 md:h-[180px] md:p-0 md:px-[60px] bg-[#6794A3] text-[#FFFFFF]">
          <div>
          <h1 className='text-2xl font-bold p-2'>
            Soloversity
          </h1>
          <div className='p-1'>
            PrivacyPolicy
          </div>
          <div className='p-1'>
            Terms of service
          </div>
          <div className='p-1'>
            Guideline
          </div>
          </div>
        </footer>
    </>
  )
}

export default Home
