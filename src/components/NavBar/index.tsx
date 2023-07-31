import Link from "next/link";
import Image from "next/image";
import logo from '../../assets/logos/greetongame-logo.png'
import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className='w-full absolute z-10 bg-primary-color'>
      <nav className="shadow w-full mx-auto bg-primary-color dark:bg-gray-800">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href='/'>
                <Image
                src={logo}
                alt='logo'
                className='relative object-fill' width={0} height={0} sizes="100vw"
                priority={true}
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-5 mt-4 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href='/' className="border-b-2 border-transparent hover:text-secondary-orange dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href='/game-developers' className="border-b-2 border-transparent hover:text-secondary-orange dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Game Developers
                  </Link>
                </li>
                <li className="text-white">
                  <Link href='/game-genres' className="border-b-2 border-transparent hover:text-secondary-orange dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    Game Genres
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;