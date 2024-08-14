import React from "react";
import image from "../assets/heroimage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  left-0">
        <div
          name="home"
          className="w-full h-full flex flex-col md:flex-row items-center justify-between px-4"
        >
          <div className="flex flex-col justify-center h-full md:w-1/2 items-start">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-left max-w-lg">
              I am a UI/UX designer and Front-end Developer
            </h2>
            <p
              className="text-gray-500 py-4 max-w-lg text-left"
              style={{ textAlign: "justify" }}
            >
              I am a UI/UX designer and Front-end Developer with a focus on
              creating beautiful and functional user experiences. I am
              passionate about designing and developing interfaces that are both
              visually appealing and user-friendly.
            </p>

            <div className="flex justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group flex items-center mt-4 text-white px-6 py-3 my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="my profile"
              className="rounded-2xl w-2/3 md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
