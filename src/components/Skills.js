import React from 'react';

const Skill = ({ name, x, y }) => {
  return (
    <div
      className="flex items-center justify-center md:text-sm m-2 cursor-pointer 
      rounded-full font-medium  bg-dark text-light
        py-3 px-6 shadow-dark w-auto
        lg:py-2 lg:px-4 sm:!text-sm sm!:p-0 
        "
    >
      {name}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="font-bold  text-8xl  mt-56 md:mt-32 mb-6 w-full text-center">
        Skills
      </h2>
      <div className="w-full xl:flex-col flex justify-center">
        <div>
          <Skill name="Microsoeft Office" />
          <Skill name="Keyword Researcher" />
        </div>
        <div>
          <Skill name="Google Adwords" />
          <Skill name="Google Search Console" />
        </div>
        <div>
          <Skill name="HTML" />
          <Skill name="CSS" />
        </div>
        <div>
          <Skill name="Google Analytics" />
          <Skill name="Google Tag Manager" />
        </div>
        <div>
          <Skill name="Canva" />
          <Skill name="Moderator" />
        </div>
        <div>
          <Skill name="SEO Tools" />
          <Skill name="Google Data Studio" />
        </div>
        <div>
          <Skill name="Keyword Tools" />
          <Skill name="Meta ADS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
