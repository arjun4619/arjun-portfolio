import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import TYPESCRIPT from "../assets/typescript.png";
import ANGULAR from "../assets/angular.png";
import ReactPng from "../assets/react.png";
import Nextjs from "../assets/nextjs.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-28 mx-auto"
              src={JAVASCRIPT}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-28 mx-auto"
              src={TYPESCRIPT}
              alt="Typescript icon"
            />
            <p className="my-4">Typescript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={ANGULAR} alt="Angular icon" />
            <p className="my-4">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={ReactPng} alt="React icon" />
            <p className="my-4">Reactjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={Nextjs} alt="Nextjs icon" />
            <p className="my-4">Nextjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
