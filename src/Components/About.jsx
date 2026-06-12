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
            My interest in data science started with a real problem. While
            building HostelHub, a hostel recommendation platform, I noticed
            users kept choosing hostels that scored lower on price and location.
            When I looked into the reviews, I found people actually cared about
            things like cleanliness and staff behavior — factors my system
            wasn't capturing. So I added sentiment analysis on reviews to
            understand what mattered to users.
          </p>
          <br />
          <p className="text-xl text-justify">
            A similar thing happened with &Stitch, an e-commerce platform
            where I worked with large datasets and built dashboards. In both
            projects, the interesting part wasn't collecting the data,it was
            figuring out what it meant.
          </p>
          <br />
          <p className="text-xl text-justify">
            I have a bachelor's degree in Computer Science and IT from Kathford
            International College (Tribhuvan University), along with experience
            in full-stack development (React, Node.js, Express) and UI/UX design
            through two internships. More recently, I built a customer churn
            prediction model using the IBM Telco dataset analyzing over 7,000
            records with Python, pandas, and scikit-learn, and achieving an
            ROC-AUC of 0.84. I'm now pursuing a Master's in Data Science to
            build deeper skills in machine learning and statistical modeling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
