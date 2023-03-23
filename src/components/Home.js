import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Arjun Shankar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <TypewriterComponent
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "I am a Frontend Developer",
                "I am a SDE-1",
                "I am a Human???",
                "I am everywhere",
                "I love Dogs",
                `I love Food`,
              ],
            }}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a frontend developer with more than 1+ years of experience
          specializing in building amazing fully responsive UI designs come to
          life.
        </p>
        <div>
          <a
            href={resume}
            target="_blank"
            className="text-white border-2 px-6 py-3 my-2 max-w-[200px] cursor-pointer flex items-center hover:bg-pink-600 duration-300"
          >
            View Resume <FaArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
