import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import mongodb from "../assets/Mongodb.png";
import express from "../assets/express.png";
import node from "../assets/node.webp";

const techs = [
  { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
  { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
  { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: react, title: "React", style: "shadow-blue-600" },
  { id: 5, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
  { id: 6, src: figma, title: "Figma", style: "shadow-pink-500" },
  { id: 7, src: github, title: "GitHub", style: "shadow-gray-400" },
  { id: 8, src: mongodb, title: "MongoDB", style: "shadow-green-400" },
  { id: 9, src: express, title: "Express", style: "shadow-gray-400" },
  { id: 10, src: node, title: "Node.js", style: "shadow-green-300" },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-white">
        <div className="pb-8 text-center md:text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-16 sm:w-20 mx-auto" />
              <p className="mt-2 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
