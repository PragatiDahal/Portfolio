import React from "react";
import { FaMobileAlt, FaFigma, FaSearch, FaBullhorn } from "react-icons/fa";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { HiMiniCodeBracket } from "react-icons/hi2";

const Services = () => {
  const techs = [
    {
      id: 1,
      icon: <FaMobileAlt size={40} />,
      title: "Responsive Design",
      style: "shadow-cyan-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
    {
      id: 2,
      icon: <MdOutlineLaptopWindows size={40} />,
      title: "Web Design",
      style: "shadow-blue-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
    {
      id: 3,
      icon: <FaFigma size={40} />,
      title: "UI/UX Design",
      style: "shadow-cyan-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
    {
      id: 4,
      icon: <FaSearch size={40} />,
      title: "SEO",
      style: "shadow-blue-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
    {
      id: 5,
      icon: <HiMiniCodeBracket size={40} />,
      title: "Clean Code",
      style: "shadow-cyan-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
    {
      id: 6,
      icon: <FaBullhorn size={40} />,
      title: "Great Support",
      style: "shadow-blue-800",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt...",
    },
  ];

  return (
    <div
      name="service"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Services
          </p>
          <p className="py-6">These are the services I provide</p>
        </div>

        <div className="w-full grid grid-cols sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {techs.map(({ id, icon, title, style, description }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="w-20 mx-auto bg-slate-600 rounded-full pl-5">
                {icon}
              </div>
              <p className="mt-4 text-xl font-semibold">{title}</p>
              <p className="text-sm mt-2 px-3 text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
