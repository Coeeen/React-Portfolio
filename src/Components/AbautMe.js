import React from "react";
import { motion } from "framer-motion";
function AbautMe({ Language, isChecked }) {
  const DarkMode = isChecked ? "text-gray-200" : "text-gray-900";

  let skils = [
    "UI/UX DESIGN",
    "GRAPHIC DESIGN",
    "VIDEO EDITING",
    "HTML/CSS",
    "NPM",
    "GITHUB",
    "TAILWIND",
    "STYLED COMPONENTS",
    "SASS",
    "LOTTIE",
    "GATSBYJS",
    "REACT",
    "REDUX",
    "REST API",
    "NEXT",
    "MYSQL",
    "3D MODELING",
    "PHP",
    "NODEJS",
  ];

  return (
    <div className="flex mt-12 flex-col lg:flex-row lg:mt-36">
      <div className="flex-1 justify-center  ">
        <h1
          className={`font-outfit font-medium lg:text-5xl text-center text-4xl ${DarkMode} `}
        >
          {Language ? "Coś" : " Something"}
          <span className="bg-figmaYellow font-outfit font-medium lg:text-5xl text-3xl ml-2 text-gray-900">
            {Language ? "o mnie" : "abaut me "}
          </span>
        </h1>
        <div className="flex justify-center align-middle">
          <motion.p
            className={`lg:text-3xl ${DarkMode} mt-5 tracking-wider font-light text-center mb-10 max-w-xl`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {Language
              ? " Jestem studentem Polsko-Japońskiej Akademii Technik Komputerowych w Gdańsku a Web Developmentem interesuje się już od 3 lat"
              : "Student at the Polish-Japanese Academy of Information Technology inGdansk. I have been interested in front-end for three years by now"}
          </motion.p>
        </div>
      </div>
      <div className=" flex-1">
        <div className="flex flex-wrap lg:w-3/4 justify-center align-middle ">
          {skils.map((skill, key) => (
            <button
              className={`}border-solid border-black rounded-md drop-shadow-2xl w-32 h-12 shadow-md text-center m-1  cursor-default ${DarkMode}`}
              key={key}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AbautMe;
