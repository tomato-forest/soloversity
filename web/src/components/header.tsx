import Link from "next/link";

const Header = () => {
  return (
    <header className="right-0 left-0 top-0 z-50 mx-auto flex w-full items-center justify-between bg-[#6794A3] p-4 text-[#FFFFFF] md:h-[120px] md:p-0 md:px-[60px]">
      <Link href="/">
        <h1 className="text-2xl font-bold">Soloversity</h1>
      </Link>

      <div className="flex items-center justify-between">
        <div className="p-4">Profile</div>
        <div className="p-4">DM</div>
        <div className="p-4">ABOUT</div>
        <div className="p-4">Public BBS</div>
        <div className="p-4">University BBS</div>
        <div className="p-4">Registration</div>
        <Link href="/student/sign_in">
          <a>SignIn</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
