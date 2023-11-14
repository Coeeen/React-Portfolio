import React from "react";
import Avatar from "../Images/Avatar.png";
import { motion } from "framer-motion";

function Home({ Language, isChecked, isMobile }) {
  const DarkMode = isChecked ? "text-gray-200" : "text-gray-900";

  return (
    <div className="flex flex-col md:flex-row">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex justify-center items-center ">
          <div className="bg-gradient-to-r from-pinkGradient to-blueGradient rounded-lg ">
            <img src={Avatar} alt="My Avatar" width={350}></img>
          </div>
        </div>
      </motion.div>
      <div className="flex-1">
        <motion.h1
          className="mt-10 text-center lg:text-start"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span
            className={`bg-figmaYellow font-outfit font-medium lg:text-7xl md:text-6xl  text-5xl`}
          >
            {Language ? "Cześć! " : "Hello there! "}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className={`${DarkMode} lg:text-3xl max-w-xl  mt-5 tracking-wider md:text-xl font-light text-center lg:text-start`}
        >
          {Language
            ? "Nazywam się Krystian Jank,zajmuję się Web Developmentem oraz UI/UX designem.Moja pasja kręci się wokół tworzenia funkcjonalnych i wizualnie atrakcyjnych stron internetowych oraz interfejsów użytkownika.Więcej o mnie niżej! "
            : "I'm Krystian Jank, a seasoned Web & UI/UX Developer. My passion revolves around crafting functional and visually appealing websites and user interfaces. Learn more about my journey below!"}
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
