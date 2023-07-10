import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import profilePic from '../../public/images/profile/aziz.jpg';
import Skills from '@/components/Skills';
import google from '../../public/images/projects/google.jpg';
import fwd from '../../public/images/projects/FWD.jpg';
import edrak1 from '../../public/images/projects/edrak11.jpg';
import edrak2 from '../../public/images/projects/edrak2.jpg';
import edrak3 from '../../public/images/projects/edrak3.jpg';
import Link from 'next/link';

const about = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article
        className="w-full md:flex-col  flex items-center justify-between mt-12
      rounded-3xl border border-solid border-dark bg-light
      shadow-2xl p-12  !md:p-2 md:px-1 2xl:p-8 dark:bg-dark dark:border-light"
      >
        <Link
          href={'/'}
          target="_blank"
          className="w-1/2 md:w-full h-[25rem] md:p-0 xl:p-0 cursor-pointer overflow-hidden mt-0 rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-1/2 md:w-full md:pl-0 flex flex-col items-start justify-between pl-6">
          <Link
            className="hover:underline underline-offset-2"
            href={'/'}
            target="_blank"
          >
            <h2 className="my-2 mb-3 w-full text-left text-4xl font-bold dark:text-light">
              {title}
            </h2>
          </Link>
          <span className="text-gray-600 font-medium mb-4 mt-2 dark:text-primaryDark">
            {type}
          </span>
          <p className="dark:text-light font-medium">{summary}</p>
          <div className="mt-9 flex items-center justify-center  dark:text-light">
            <Link className="w-10  " href={'/'} target="_blank"></Link>
            <Link
              className="ml-4  rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              href={'/'}
              target="_blank"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <Head>
        <title> Ahmed | About Page</title>
        <meta name="desription" content="A fonrt end developer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light ">
        <Layout className="!pt-28 sm:!p-10">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-center !text-6xl lg:text-7xl sm:mb-6 mt-0 pt-0 mb-16"
          />
          <div className="grid w-full xl:grid-cols-9 md:grid-cols-9 grid-cols-9 gap-16 sm:gap-8 !text-6xl">
            <div className="col-span-3 md:col-span-3 md:order-2 flex flex-col  items-start  justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-light/75">
                Biography
              </h2>
              <p className=" text-xl w-full">
                As an experienced SEO specialist and content creator, I have a
                deep understanding of the ever-changing digital landscape and
                the strategies needed to succeed in it. My expertise in search
                engine optimization, combined with my creative skills in content
                creation, allows me to develop and implement effective marketing
                campaigns that drive traffic, engagement, and conversions. I am
                passionate about helping businesses improve their online
                presence and reach their target audience. Whether it’s through
                keyword research, on-page optimization, or content creation, I
                am dedicated to finding the best solutions for my clients. In
                addition to my technical skills, I am also a strong communicator
                and collaborator. I work closely with my clients to understand
                their needs and goals, and I am always looking for new and
                innovative ways to help them achieve success online. Overall, my
                goal is to help businesses achieve their full potential online
                by leveraging the power of SEO and content marketing.
              </p>
            </div>

            <div
              className="col-span-3  md:col-span-8 xl:order-1 md:order-1 relative rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 shadow-black shadow-lg my-auto mx-auto  "
            >
              <Image
                src={profilePic}
                alt="Ahmed"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div
              className="col-span-3  xl:order-3 xl:col-span-8 lg:col-span-8 md:col-span-8
             xl:flex-row xl:justify-center xl:items-center flex flex-col 
            gap-6 md:gap-0 items-center xl:flex mt-9 md:order-3 "
            >
              <div>
                <p className=" text-xl  w-full">
                  As a content creator, I have a passion for crafting compelling
                  stories and engaging content that resonates with audiences.
                  With my creative skills and attention to detail, I am able to
                  produce high-quality content that captures the attention of
                  readers and drives engagement. Whether it’s through blog
                  posts, social media updates, or other forms of content, I am
                  dedicated to helping businesses connect with their target
                  audience and achieve their marketing goals. My goal is to help
                  businesses tell their story in a way that is authentic,
                  engaging, and effective
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Skills />
          </div>
          <div className="mt-44 mb-20 md:mt-32 sm:!mt-24"></div>
          <div>
            <FeaturedProject
              img={google}
              title="Fundamentals Digital Marketing "
              summary="Master the basics of digital marketing interactive Advertising Bureau-accredited course.
              There are 26 modules to explore, all created by Google trainers, and packed full of
              practical exercises and real-world examples to help.
                "
              // link="https://e-commerce-eosin-tau.vercel.app/"
              type="
              Issued Dec 2022Issued Dec 2022
              Credential ID FPW CFQ SGW"
              // github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
          <div>
            <FeaturedProject
              img={fwd}
              title="
              DIGITAL MARKETING CHALLENGER TRACK
              "
              summary="Plan your content strategy&
              Create and curate content&
              Optimize landing pages and be able to understand what UX is&
              Measure the impact&
              Define what is KPI and who is the perfect persona that fits your Marketing Strategy&
              Learn how to think in different marketing personas&
              Know what the value proposition is&           
                "
              // link="https://e-commerce-eosin-tau.vercel.app/"
              type="Udacity 
              Issued May 2022 Issued May 2022
              Credential ID QTAADL4ECredential ID QTAADL4E
              Show credential"
              // github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
          <div>
            <FeaturedProject
              img={edrak1}
              title="Improve Search Engines "
              summary="The student learns the basics of improving websites and preparing them for search engines (SEO). What are the most important factors for ranking and appearing at the top of Google search results? What are the best ways to reach the front pages of Google search results? How can local search results be improved using Google My Business"
              // link="https://e-commerce-eosin-tau.vercel.app/"
              type="EDRAK
              Released in May 2022 on May 2022"
              // github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
          <div>
            <FeaturedProject
              img={edrak2}
              title="Digital Analysis"
              summary="The student learns how to measure and track all activities on websites using Google Analytics, interaction maps, and analysis of smartphone applications. They also learn how to use Google Search Console to measure website improvements for search engines"
              // link="https://e-commerce-eosin-tau.vercel.app/"
              type="
              Edraak
              Issued May 2022"
              // github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
          <div>
            <FeaturedProject
              img={edrak3}
              title="DIGITAL MARKETING"
              summary="Digital marketing: SEO, Analytics, and online presence
              "
              // link="https://e-commerce-eosin-tau.vercel.app/"
              type="
              Edraak
              Issued May 2022"
              // github="https://github.com/ahmedkhaledali1/e-commerce"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
