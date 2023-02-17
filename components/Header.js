import Image from 'next/image';
function Header() {
  return (
    <div className="hidden lg:block  ">
      <div className="h-screen flex flex-col fixed bg-blue-medium  ">
        {/* Logo */}
        <a href="#banner">
          <div className="bg-blue-medium2 flex flex-col justify-center items-center p-10 lg:text-center">
            <Image src="/images/logo.png" alt="logo" height="84" width="84" />
            <h3 className="text-white font-black text-lg ">Diego</h3>
            <p className="text-gray-400 ">Web Developer</p>
          </div>
        </a>

        {/* Nav */}
        <nav className="w-full text-center mt-24">
          <ul className="flex flex-col">
            <li className="list-item border-t border-blue-light">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="list-item">
              <a href="#skills">My Skills</a>
            </li>
            <li className="list-item">
              <a href="#portfolio">My Portfolio</a>
            </li>
            <li className="list-item">
              <a href="#contactme">Contact Me</a>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="flex justify-center space-x-10 mt-auto mb-2 md:space-x-5">
          <a href="/resume.pdf" download>
            <img className="h-6" src="/images/resume.svg" alt="" />
          </a>
          <a href="https://github.com/diegodjty" target="_blank">
            <img className="h-6" src="/images/github.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-taveras-325491226/"
            target="_blank"
          >
            <img className="h-6" src="/images/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
