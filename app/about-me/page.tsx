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
In my final academic project, I worked with a real-world client to deliver a complete mobile solution, gaining practical experience in all phases of the development lifecycle. I am adaptable to new technologies and dedicated to leveraging my skills to solve complex problems.

I am eager to contribute to dynamic teams and participate in impactful projects within industries like technology, healthcare, business, and education.`,
  socials = [
    "https://www.linkedin.com/in/brodie-lewis/",
    "https://github.com/lewi0239",
  ],
}) => {
  return (
    <div>
      <img src={profileImage} alt={`${name}'s profile`} />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {socials.map((social, index) => (
          <li key={index}>
            <a href={social} target="_blank" rel="noopener noreferrer">
              {social}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutMe;
