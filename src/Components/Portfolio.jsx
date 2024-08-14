import React, { useState } from "react";
import runway from "../assets/runway.png";
import cake from "../assets/Cake.png";
import tech from "../assets/tech.png";
import aero from "../assets/aerospace.png";
import pnet from "../assets/pnet.png";
import anta from "../assets/Anta.png";
import school from "../assets/schooool.png";
import glam from "../assets/glam.png";
import micasa from "../assets/micasa.png";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolio = [
    {
      id: 1,
      src: runway,
      category: "Web Design",
      demoLink: "https://runway02.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/Runway",
    },
    {
      id: 2,
      src: cake,
      category: "Web Design",
      demoLink: "https://usacake.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/cakeshop",
    },
    {
      id: 3,
      src: tech,
      category: "Web Design",
      demoLink: "https://techwebsite-eight.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/techwebsite",
    },
    {
      id: 4,
      src: aero,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/mR7ntJAgVgqZ5yWrccyTmF/Aerospace?node-id=1-2&t=TXgz6eG2qi5DUrvU-1",
      codeLink:
        "https://www.figma.com/design/mR7ntJAgVgqZ5yWrccyTmF/Aerospace?node-id=1-2&t=TXgz6eG2qi5DUrvU-1",
    },
    {
      id: 5,
      src: pnet,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/6Lz92iuaMAMRmF4ILHw5wr/Pnet?node-id=9-2&t=W6OQw9H781LIZKpz-1",
      codeLink:
        "https://www.figma.com/design/6Lz92iuaMAMRmF4ILHw5wr/Pnet?node-id=9-2&t=W6OQw9H781LIZKpz-1",
    },
    {
      id: 6,
      src: anta,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
    },
    {
      id: 7,
      src: school,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/VitWRnYNkyhjnxsfMqmWYi/School?node-id=1-2&t=wy87YznTtYDtENV1-1",
      codeLink:
        "https://www.figma.com/design/VitWRnYNkyhjnxsfMqmWYi/School?node-id=1-2&t=wy87YznTtYDtENV1-1",
    },
    {
      id: 8,
      src: glam,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
    },
    {
      id: 9,
      src: micasa,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
    },
  ];

  const categories = ["All", "Web Design", "UI/UX"];

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-10">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work here</p>
            <div className="flex justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`mx-2 px-4 py-2 border-b-4 ${
                    selectedCategory === category
                      ? "border-cyan-600 text-cyan-600"
                      : "border-transparent text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0">
            {filteredPortfolio.map(({ id, src, demoLink, codeLink }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                  >
                    <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                  >
                    <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Portfolio;
