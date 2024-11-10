// components/AboutMe.tsx
import { desc, li } from "framer-motion/client";
import React from "react";

type AboutMeProps = {
  name: string;
  title: string;
  descriptionIntro: string;
  descriptionMid: string;
  CoreCompetencies: string[];
  socials: string[];
  profileImage: string;
};

const AboutMe: React.FC<AboutMeProps> = ({
  profileImage = "/images/profile.jpg", // Path relative to the public directory
  name = "Brodie Lewis",
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

  socials = [
    "https://www.linkedin.com/in/brodie-lewis/",
    "https://github.com/lewi0239",
  ],
}) => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center bg-white"
    >
      {/* Name and Title */}
      <h1 className="flex text-3xl text-black">{title}</h1>
      {/* Description */}
      <div className="flex justify-center">
        <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-between p-5 leading-normal">
          {descriptionIntro}
        </p>
      </div>
      <div className="flex justify-center flex-col">
        <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-between p-5 leading-normal">
          {descriptionMid}
        </p>
      </div>
      <h3 className="mt-4 font-semibold text-black">Core Competencies:</h3>
      <ul className="list-disc ml-3 mt-2 space-y-2">
        {CoreCompetencies.map((item, index) => (
          <li key={index} className="text-black text-sm">
            {item}
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <ul className="flex space-x-6 mt-6">
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {social.includes("linkedin") ? "LinkedIn" : "GitHub"}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
