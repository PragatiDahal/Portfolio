import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black pt-10">
      <div
        name="about"
        className="w-full h-full bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <p className="text-xl mt-10 text-justify">
            I'm a passionate Computer Science student with a keen interest in
            UI/UX design and front-end development. I love creating visually
            appealing and user-friendly digital experiences that not only look
            great but also provide seamless functionality. With a strong
            foundation in design tools like Figma and technical skills in HTML,
            CSS, JavaScript, React, and Tailwind CSS, I bridge the gap between
            design and code, bringing creative concepts to life. My goal is to
            craft interfaces that are both beautiful and intuitive, ensuring a
            positive user experience across all devices. I'm always eager to
            learn, innovate, and contribute to projects that challenge me to
            grow both as a designer and a developer.
          </p>
          <br />
          <p className="text-xl text-justify">
            You should hire me because I bring over a year of focused experience
            in UI/UX design and front-end web development, with a strong emphasis on crafting
            visually appealing and highly functional websites. My proficiency in
            HTML, CSS, JavaScript, React, Tailwind CSS, and Figma enables me to
            deliver responsive and user-friendly web solutions. I'm passionate
            about coding, consistently honing my skills, and I'm eager to bring
            my creativity and technical expertise to your team to help achieve
            your project goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
