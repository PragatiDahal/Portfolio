import React from "react";
import image from "../assets/heroimage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="absolute top-[66px] left-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
          <div className="flex flex-col justify-center h-full md:w-1/2 items-start">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-left max-w-lg">
              I am a UI/UX designer and Front-end Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-lg text-left space-x-8" style={{ textAlign: 'justify' }}>
              I am a UI/UX designer and Front-end Developer with a focus on creating beautiful and functional user experiences. I am passionate about designing and developing interfaces that are both visually appealing and user-friendly.
            </p>

            <div className="flex justify-start">
              <button className="group flex items-center mt-4 text-white px-6 py-3 my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center space-x-4">
            <img
              src={image}
              alt="my profile"
              className="rounded-2xl w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
