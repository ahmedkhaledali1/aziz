import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';
import useThemeSwicher from './hooks/useThemeSwicher';
const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}

      <span
        className={`h-[2px] 
        inline-block 
        bg-dark 
        dark:bg-light
        absolute 
        left-0 
        -bottom-0.5 
        group-hover:w-full 
        transition-[width] 
        ease 
        duration-300 
        text-2xl font-semibold
        ${router.asPath === href ? 'w-full' : 'w-0'} 
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomModilLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2 flex text-2xl font-semibold`}
      href={href}
      onClick={handleClick}
    >
      {title}

      <span
        className={`  h-[2px] 
        inline-block 
        bg-light 
        dark:bg-dark
        absolute 
        left-0 
        -bottom-0.5 
        group-hover:w-full 
        transition-[width] 
        ease 
        duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'} 
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwicher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className="w-full px-28 py-12 sm:!pl-6 dark:text-light 
    flex items-center justify-center relative text-2xl font-semibold
    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light dark:text-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5 `
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light dark:text-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light dark:text-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5 `
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-center items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>
        {/* <nav className="flex flex-row gap-10 justify-center items-center">
          <motion.a
            href="https://github.com/ahmedkhaledali1"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://ahmed.khaled01233@gmail.com"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiGmail size={35} className="bg-white text-red-800 rounded-2xl" />
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            href="https://wwww.facebook.com"
            target={'_blank'}
          >
            <BsFacebook
              className="text-blue-800 bg-white rounded-full"
              size={35}
            />
          </motion.a>
          <motion.a
            className="mr-14"
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -2 }}
            href="https://www.linkedin.com/in/ahmed-khaled-8b0a52251/"
            target={'_blank'}
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${
            mode === 'light'
              ? 'dark:bg-dark dark:text-light'
              : 'dark:text-dark dark:bg-light'
          }
          `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav> */}
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex-col flex text-2xl font-semibold
justify-between items-center fixed top-1/2
left-1/2 -translate-x-1/2 -translate-y-1/2 sm:!ml-2 
z-30 bg-dark/50 dark:bg-light/75 rounded-lg backdrop-blur-md py-24
"
        >
          <nav className=" flex items-center flex-col justify-center mb-7">
            <CustomModilLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomModilLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomModilLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          {/* <nav className="flex flex-row gap-5 justify-center items-center ">
            <motion.a
              className="w-8 mx-3 sm:mx1"
              href="https://github.com/ahmedkhaledali1"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              className="w-8 mx-3 sm:mx1"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              href="https://wwww.facebook.com"
              target={'_blank'}
            >
              <BsFacebook
                className="text-blue-800 bg-white rounded-full"
                size={35}
              />
            </motion.a>
            <motion.a
              className="w-8 mx-3 sm:mx1"
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -2 }}
              href="https://www.linkedin.com/in/ahmed-khaled-8b0a52251/"
              target={'_blank'}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://ahmed.khaled01233@gmail.com"
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiGmail
                size={35}
                className="bg-white text-red-800 rounded-2xl"
              />
            </motion.a>
          </nav> */}
          <div className="mt-12">
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={` block m-auto rounded-full p-1
  ${
    mode === 'light'
      ? 'dark:bg-dark dark:text-light'
      : 'dark:text-dark dark:bg-light'
  }
  `}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
