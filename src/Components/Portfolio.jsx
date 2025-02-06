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
import ecommerce from "../assets/ecommerce.png";
import hostelhub from "../assets/hostelhub.png";

const PortfolioCard = ({ src, demoLink, codeLink, altText }) => {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg">
      <img
        src={src}
        alt={altText}
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center">
        {demoLink && (
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
        )}
        {codeLink && (
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
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolio = [
    {
      id: 1,
      src: runway,
      category: "Web Design",
      demoLink: "https://runway02.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/Runway",
      altText: "Runway Portfolio",
    },
    {
      id: 2,
      src: cake,
      category: "Web Design",
      demoLink: "https://usacake.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/cakeshop",
      altText: "Cake Shop Website",
    },
    {
      id: 3,
      src: tech,
      category: "Web Design",
      demoLink: "https://techwebsite-eight.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/techwebsite",
      altText: "Tech Website",
    },
    {
      id: 4,
      src: aero,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/mR7ntJAgVgqZ5yWrccyTmF/Aerospace?node-id=1-2&t=TXgz6eG2qi5DUrvU-1",
      codeLink:
        "https://www.figma.com/design/mR7ntJAgVgqZ5yWrccyTmF/Aerospace?node-id=1-2&t=TXgz6eG2qi5DUrvU-1",
      altText: "Aerospace UI/UX Design",
    },
    {
      id: 5,
      src: pnet,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/6Lz92iuaMAMRmF4ILHw5wr/Pnet?node-id=9-2&t=W6OQw9H781LIZKpz-1",
      codeLink:
        "https://www.figma.com/design/6Lz92iuaMAMRmF4ILHw5wr/Pnet?node-id=9-2&t=W6OQw9H781LIZKpz-1",
      altText: "PNet UI/UX Design",
    },
    {
      id: 6,
      src: anta,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
      altText: "Anta UI/UX Design",
    },
    {
      id: 7,
      src: school,
      category: "UI/UX",
      demoLink:
        "https://www.figma.com/design/VitWRnYNkyhjnxsfMqmWYi/School?node-id=1-2&t=wy87YznTtYDtENV1-1",
      codeLink:
        "https://www.figma.com/design/VitWRnYNkyhjnxsfMqmWYi/School?node-id=1-2&t=wy87YznTtYDtENV1-1",
      altText: "School UI/UX Design",
    },
    {
      id: 8,
      src: glam,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
      altText: "Glam UI/UX Design",
    },
    {
      id: 9,
      src: micasa,
      category: "UI/UX",
      demoLink: "",
      codeLink: "",
      altText: "MiCasa UI/UX Design",
    },
    {
      id: 10,
      src: ecommerce,
      category: "Web Design",
      demoLink: "https://ecommerce-dusky-one-45.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/ecommerce",
      altText: "E-commerce Website",
    },
    {
      id: 11,
      src: hostelhub,
      category: "MERN",
      demoLink: "https://hostel-hub-dun.vercel.app/",
      codeLink: "https://github.com/PragatiDahal/HostelHub",
      altText: "Hostel Hub MERN Application",
    },
  ];

  const categories = ["All", "Web Design", "UI/UX", "MERN"];

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
          <div className="flex flex-wrap justify-center w-full bg-gray-800 p-4 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                className={`mx-2 px-4 py-2 border-b-4 ${
                  selectedCategory === category
                    ? "border-cyan-600 text-cyan-600 font-bold"
                    : "border-transparent text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {filteredPortfolio.map(({ id, src, demoLink, codeLink, altText }) => (
            <PortfolioCard
              key={id}
              src={src}
              demoLink={demoLink}
              codeLink={codeLink}
              altText={altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
