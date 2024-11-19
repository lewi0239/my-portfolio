// components/AboutMe.tsx
import React from "react";
import Image from "next/image";

type AboutMeProps = {
  title?: string;
  descriptionIntro?: string;
  descriptionMid?: string;
  CoreCompetencies?: string;
};

const AboutMe: React.FC<AboutMeProps> = ({
  title = "About Me!",
  descriptionIntro = "I am a Junior Developer with a strong foundation in web and mobile application development, specializing in creating responsive, user-friendly interfaces and full-stack solutions.",
  descriptionMid = "My hands-on experience includes Progressive Web Apps (PWA), native and cross-platform mobile apps, and modern UI/UX design principles. I am eager to contribute to dynamic teams and participate in impactful projects within industries like technology, healthcare, business, and education.",
  CoreCompetencies = `I create seamless and optimized user experiences through responsive web design and mobile app development. I specialize in native iOS and Android applications using Swift and Kotlin, as well as cross-platform solutions like React Native. With expertise in front-end and back-end technologies, I deliver comprehensive solutions while collaborating with teams to design, develop, test, and deploy high-quality applications.`,
}) => {
  return (
    <section
      id="about-me"
      className="min flex flex-col items-center justify-center bg-white"
    >
      <h1 className="flex text-3xl text-black">{title}</h1>
      <ul>
        <li>
          <div className="flex justify-center flex-col md:flex-row bg-slate-100 gap-y-3 m-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/about-me.jpg"
              alt="An image about"
              width={80}
              height={80}
              className="w-80 h-80 rounded-lg"
            />
            <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-center align-middle p-5 leading-normal">
              {descriptionIntro}
            </p>
          </div>
        </li>
        <li>
          <div className="flex justify-center flex-col-reverse md:flex-row bg-slate-100 gap-y-3 m-3 rounded-xl">
            <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-center align-middle p-5 leading-normal shadow-md hover:shadow-lg transition-shadow">
              {descriptionMid}
            </p>
            <Image
              src="/images/techstack.webp"
              alt="This is image shows a stack of servers"
              width={80}
              height={0}
              className="w-80 h-80"
            />
          </div>
        </li>
        <li>
          <div className="flex justify-center flex-col md:flex-row bg-slate-100 gap-y-3 m-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/tech-skills.webp"
              alt="This image shows a tablet, phone, and a computer screen"
              width={80}
              height={80}
              className="w-80 h-80 "
            />
            <p className="text-lg text-gray-700 text-center max-w-2xl whitespace-pre-line flex flex-col justify-center  p-5 leading-normal">
              {CoreCompetencies}
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
