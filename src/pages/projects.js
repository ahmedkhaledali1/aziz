import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import activeweb from '../../public/active-web.png';
import marktingservise from '../../public/marktingservise.png';
import fullrebortseo from '../../public/fullrebortseo.png';
import contentforsanako1 from '../../public/contentforsanako1.png';
import contentforsanako2 from '../../public/contentforsanako2.png';
import contentforsanako3 from '../../public/sanakocta.png';
import curvatvontent from '../../public/curvatcontent.png';
import top from '../../public/top.png';

const FeaturedProject = ({ title, img, link }) => {
  return (
    <article
      className="w-full md:flex-col  flex items-center justify-between 
    rounded-3xl border border-solid border-dark bg-light
    shadow-2xl p-12 !md:p-2 md:px-1 2xl:p-8 dark:bg-dark dark:border-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 md:w-full md:p-0 xl:p-0 cursor-pointer overflow-hidden  rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 md:w-full md:pl-0 flex flex-col items-start justify-between pl-6">
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 mb-10 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="mt-9 flex items-center justify-center  dark:text-light">
          <Link
            className="ml-4  rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> Ahmed | Projects Page</title>
        <meta name="desription" content="A fonrt end developer" />
      </Head>
      <main className=" w-full  mb-16 flex  flex-col items-center justify-center">
        <div className="p-32 sm:p-8">
          <AnimatedText
            className="text-8xl  md:text-6xl md:mb-14 !text-center mx-auto w-auto !mb-20 dark:text-light"
            text="Imagination Trumps Knowldge!"
          />
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={activeweb}
              title="Content For Active 4 Web"
              link={
                'https://docs.google.com/spreadsheets/d/1drR80vqaKf6xV8ZT1-jKGUlh-KeBdf-ojczSAAHvDUE/edit?fbclid=IwAR3oIywbxJeVuANhrI2RLZnFnFHNhmdJBRcrVU4cl0DGYa_FCNmQt_HoRlc&pli=1#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={marktingservise}
              title="Top Keywords Report"
              link={
                'https://docs.google.com/spreadsheets/d/1kCnUU3dGfOFq40iWEr98W0TYUO8Ce4A0ie3ML2LSQE4/edit?fbclid=IwAR0_GZg5vzT9Ikry1lx9OuMntEpoPm4mcLQuW2XcludKFbpEVGGI-FSTfrU#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={fullrebortseo}
              title="Full Rebort SEO"
              link={
                'https://docs.google.com/spreadsheets/d/1V-uUwQo1sZJbBPhAeR81hLnPKiaQtCvFzkegZQ7SyLc/edit?fbclid=IwAR0p39DBZFVch3lWJgIZ49ZmVH3TPPna05W5vzBrv9-HmxkKjJnFLxzqt-U#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={contentforsanako1}
              title="Content For Sanako1"
              link={
                'https://docs.google.com/spreadsheets/d/1vSVu6abArCSh4rQbKEZicA9HPrrQgMyKBSo7zajz26I/edit?fbclid=IwAR2-cNA8ONlMkz2pazO13jzEXitZ2LxFda4I4VzTmMl-Xa0A8yZ_LvVapAM#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={contentforsanako2}
              title="Content For Sanako2"
              link={
                'https://docs.google.com/spreadsheets/d/1x2sgtzLoyH9zsSeRgZoMOf1C8Bfm02s6mPcyuLf5El8/edit?fbclid=IwAR3VtrvtPRjw3Z5l93_ihwyDqzDZ0GnV3dBQ6Ckg6HuzFLffNbnxGo70L8U#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={contentforsanako3}
              title="Content For Sanako3"
              link={
                'https://docs.google.com/spreadsheets/d/1x2sgtzLoyH9zsSeRgZoMOf1C8Bfm02s6mPcyuLf5El8/edit?fbclid=IwAR3VtrvtPRjw3Z5l93_ihwyDqzDZ0GnV3dBQ6Ckg6HuzFLffNbnxGo70L8U#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={curvatvontent}
              title="Curvat Content"
              link={
                'https://docs.google.com/spreadsheets/d/1bi3UYt7MPTGgTxIzyj5TkYQb03hy1U2-XRTNk8VX4E8/edit?fbclid=IwAR0wlLATjZDp6DFSujn2xnBb74JRKtpn_0NzszGm9ckTLhB8HZD08pQiZNk#gid=0'
              }
            />
          </div>
          <div className="mb-24 sm:order-2">
            <FeaturedProject
              img={top}
              title="Top KeyWords For curvat"
              link={
                'https://docs.google.com/spreadsheets/d/16Ste9lI3C-ROrv9gHzT83IRW_aQ0NZOysi16h5ffOas/edit?fbclid=IwAR2Tsbh__D3U3sXQOye0c92nKJ8z3lZOqddp27y8tzTY9-a6h3LDTtEl2gI#gid=0'
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
