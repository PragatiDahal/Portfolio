import React from "react";
import { FaFigma, FaCode, FaPython } from "react-icons/fa";
import { TbChartBar, TbChartDots, TbMessageCircle } from "react-icons/tb";

const Services = () => {
  const techs = [
    {
      id: 1,
      icon: <TbChartBar size={40} />,
      title: "Data Analysis",
      style: "shadow-cyan-800",
      description: "I work with real-world datasets to clean, explore, and extract meaningful patterns using Python and pandas.",
    },
    {
      id: 2,
      icon: <FaPython size={40} />,
      title: "Machine Learning",
      style: "shadow-blue-800",
      description: "I build and evaluate predictive models, such as logistic regression and random forest, and interpret what their results actually mean.",
    },
    {
      id: 3,
      icon: <TbChartDots size={40} />,
      title: "Data Visualization",
      style: "shadow-cyan-800",
      description: "I turn analysis into clear visual insights using matplotlib, seaborn, and dashboard tools.",
    },
    {
      id: 4,
      icon: <TbMessageCircle size={40} />,
      title: "Sentiment Analysis",
      style: "shadow-blue-800",
      description: "I apply NLP techniques to extract insights from unstructured text data, such as customer reviews.",
    },
    {
      id: 5,
      icon: <FaCode size={40} />,
      title: "Full-Stack Development",
      style: "shadow-cyan-800",
      description: "I build web applications using React, Node.js, Express, and MongoDB.",
    },
    {
      id: 6,
      icon: <FaFigma size={40} />,
      title: "UI/UX Design",
      style: "shadow-blue-800",
      description: "I design intuitive interfaces using Figma, with a strong focus on usability.",
    },
  ];

  return (
    <div
      name="service"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline" >
            Services
          </p>
          <p className="py-6">These are the services I provide</p>
        </div>

        <div className="w-full grid grid-cols sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8" >
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
