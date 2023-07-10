import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid
    dark:text-light dark:border-light border-dark 
     sm:text-base font-semibold"
    >
      <Layout className="py-8 flex items-center text-lg justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; with my best wishes{' '}
          <span className="text-blue-600 dark:text-red-600 text-2xl px-1">
            &#9825;
          </span>{' '}
        </span>
        <div className=" flex items-center">
          Built with
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://www.facebook.com/ahmed.khaledali.942/"
            className="underline underline-offset-2"
            target={'_blank'}
          >
            Ahmed Khaled
          </Link>
        </div>
        <p>contact: 01278093760</p>
      </Layout>
    </footer>
  );
};

export default Footer;
