
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
import python from "../assets/python.png";
import pandas from "../assets/icons8-pandas-48.png";
import numpy from "../assets/icons8-numpy-48.png";
import sklearn from "../assets/scikit-learn.png";
import jupyter from "../assets/pngaaa.com-1971102.png";
// const [selectedCategory, setSelectedCategory] = useState("All");

const dataScienceTechs = [
  { id: 1, src: python, category:'Data Science', title: "Python", style: "shadow-yellow-400" },
  { id: 2, src: pandas,category:'Data Science', title: "Pandas", style: "shadow-purple-500" },
  { id: 3, src: numpy, category:'Data Science', title: "NumPy", style: "shadow-blue-400" },
  { id: 4, src: sklearn,category:'Data Science', title: "Scikit-learn", style: "shadow-orange-400" },
  { id: 5, src: jupyter,category:'Data Science', title: "Jupyter", style: "shadow-orange-300" },
];

const webDevTechs = [
  { id: 1, src: html,category:'Web Dev', title: "HTML", style: "shadow-orange-500" },
  { id: 2, src: css,category:'Web Dev', title: "CSS", style: "shadow-blue-500" },
  { id: 3, src: javascript, category:'Web Dev',title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: react,category:'Web Dev', title: "React", style: "shadow-blue-600" },
  { id: 5, src: tailwind, category:'Web Dev',title: "Tailwind CSS", style: "shadow-sky-400" },
  { id: 6, src: figma,category:'Web Dev', title: "Figma", style: "shadow-pink-500" },
  { id: 7, src: github,category:'Web Dev', title: "GitHub", style: "shadow-gray-400" },
  { id: 8, src: mongodb,category:'Web Dev', title: "MongoDB", style: "shadow-green-400" },
  { id: 9, src: express,category:'Web Dev', title: "Express", style: "shadow-gray-400" },
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

        <p className="text-xl font-semibold mb-4">Data Science</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center mb-10">
          {dataScienceTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-16 sm:w-20 mx-auto" />
              <p className="mt-2 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>

        <p className="text-xl font-semibold mb-4">Web Development</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {webDevTechs.map(({ id, src, title, style }) => (
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