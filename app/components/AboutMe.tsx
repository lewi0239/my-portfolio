// components/AboutMe.tsx
import React from "react";

type AboutMeProps = {
  name: string;
  title: string;
  description: string;
  socials: string[];
  profileImage: string;
};

const AboutMe: React.FC<AboutMeProps> = ({
  profileImage = "/images/profile.jpg", // Path relative to the public directory
  name = "Brodie Lewis",
  title = "Junior Developer | Web & Mobile Applications",
  description = `
  I am a Junior Developer with a strong foundation in web and mobile application development, specializing in creating responsive, user-friendly interfaces and full-stack solutions. My hands-on experience includes Progressive Web Apps (PWA), native and cross-platform mobile apps, and modern UI/UX design principles.

  Core Competencies:
  Responsive Web Design: Ensuring seamless, optimized user experiences across devices.
  Native Mobile Applications: Developing for iOS and Android using frameworks like Swift and Kotlin.
  Cross-Platform Development: Building mobile apps using technologies such as React Native.
  Front-End and Back-End Proficiency: Expertise in JavaScript, HTML/CSS, and mobile-specific languages.
  Full-Cycle Development: Collaborating with teams on the analysis, design, implementation, testing, and deployment of applications.

  I am eager to contribute to dynamic teams and participate in impactful projects within industries like technology, healthcare, business, and education.`,
  socials = [
    "https://www.linkedin.com/in/brodie-lewis/",
    "https://github.com/lewi0239",
  ],
}) => {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      {/* Profile Image */}
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg"
      />

      {/* Name and Title */}
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{title}</h2>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line">
        {description}
      </p>

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
