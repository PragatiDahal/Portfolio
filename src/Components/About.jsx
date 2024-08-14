import React from "react";

const About = () => {
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
          <p className="text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            nulla illo corrupti dolorum labore maxime officia ipsa assumenda
            veniam, aliquam eius alias, sed, repudiandae porro at iure!
            Exercitationem ullam explicabo amet inventore odio maxime,
            cupiditate at vero ad unde non expedita. Neque laudantium error
            temporibus tenetur autem dicta, magni placeat.
          </p>
          <br />
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quas iure aliquid harum assumenda corrupti architecto, pariatur,
            animi, dignissimos amet illo omnis! Aliquid ratione harum doloribus
            quibusdam quis nulla fugiat nam sint! Voluptatum, nisi eligendi et
            quis quos quam quibusdam dolor neque. Totam quas dignissimos facilis
            molestias, amet nostrum repellendus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

