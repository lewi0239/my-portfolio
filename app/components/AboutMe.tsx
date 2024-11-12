// components/AboutMe.tsx
import React from "react";
import Image from "next/image";

type AboutMeProps = {
  title?: string;
  descriptionIntro?: string;
  descriptionMid?: string;
  CoreCompetencies?: string[];
};

const AboutMe: React.FC<AboutMeProps> = ({
  title = "About Me!",
  descriptionIntro = "I am a Junior Developer with a strong foundation in web and mobile application development, specializing in creating responsive, user-friendly interfaces and full-stack solutions.",
  descriptionMid = "My hands-on experience includes Progressive Web Apps (PWA), native and cross-platform mobile apps, and modern UI/UX design principles. I am eager to contribute to dynamic teams and participate in impactful projects within industries like technology, healthcare, business, and education.",
  CoreCompetencies = [
    "Responsive Web Design: Ensuring seamless, optimized user experiences across devices.",
    "Native Mobile Applications: Developing for iOS and Android using frameworks like Swift and Kotlin.",
    "Cross-Platform Development: Building mobile apps using technologies such as React Native",
    " Front-End and Back-End Proficiency: Expertise in JavaScript, HTML/CSS, and mobile-specific languages.",
    "Full-Cycle Development: Collaborating with teams on the analysis, design, implementation, testing, and deployment of applications.",
  ],
}) => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center bg-white"
    >
      <h1 className="flex text-3xl text-black">{title}</h1>

      <div className="flex justify-center bg-slate-100 gap-y-3 m-3 rounded-xl">
        <Image
          src="/images/about-me.jpg"
          alt=""
          className="w-80 h-80 rounded-lg"
        />
        <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-center align-middle p-5 leading-normal">
          {descriptionIntro}
        </p>
      </div>

      <div className="flex justify-center bg-slate-100 gap-y-3 m-3 rounded-xl">
        <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-center align-middle p-5 leading-normal">
          {descriptionMid}
        </p>
        <Image
          src="/images/techstack.webp"
          alt="This is image shows a stack of servers"
          className="w-80 h-80"
        />
      </div>
      <h3 className="mt-4 font-semibold text-black bg-slate-100">
        Core Competencies:
      </h3>
      <ul className="list-disc ml-3 mt-2 space-y-2">
        {CoreCompetencies.map((item, index) => (
          <li key={index} className="text-black text-sm text-center list-none">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
