import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full py-12 bg-gradient-to-b from-gray-800 to-black px-6 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto">
        <div className="pb-8 text-center md:text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center">
          <form action="https://getform.io/f/bjjeqoxb" method="POST" className="flex flex-col w-full sm:w-3/4 md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter your email"
              className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" placeholder="Enter your message" rows="6"
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
