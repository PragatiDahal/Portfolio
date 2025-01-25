import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import mongodb from"../assets/mongodb.png";
import express from"../assets/express.png";
import node from"../assets/node.webp";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: figma,
      title: "Figma",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: node,
      title: "Node.js",
      style: "shadow-green-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-0 pt-20 mt-20">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline" data-aos="zoom-in-down"data-aos-duration="3000">
            Experience
          </p>
          <p className="py-6" data-aos="zoom-in-down"data-aos-duration="3000">
            These are the technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8" data-aos="zoom-in-down"data-aos-duration="3000">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div className="pt-16"></div> {/* Added padding to ensure space */}
      </div>
    </div>
  );
};

export default Experience;

