import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div
      className="flex left-4 bottom-4 fixed items-center justify-center 
     overflow-hidden md:right-8 md:left-auto md:top-0  md:pt-6 md:absolute md:bottom-auto
     sm:!right-4 sm:!left-auto sm:!top-0  sm:!pt-3 sm:!absolute sm:bottom-auto
     "
    >
      <div className="w-48 h-auto flex items-center justify-center md:w-24  relative">
        <CircularText
          className={'fill-dark animate-spin-slow dark:fill-light'}
        />

        <Link
          href="mailto:ahmed.khaled01233@gmail.com"
          className="flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold
        bg-dark text-light shadow-md border border-solid w-20 h-20 rounded-full
        hover:bg-light hover:text-dark dark:text-light dark:hover:text-dark 
        dark:hover:bg-light md:w-12 md:h-12 md:text-[10px] "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
