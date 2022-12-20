const Header = () =>{
    return (
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
    );
}

export default Header;

