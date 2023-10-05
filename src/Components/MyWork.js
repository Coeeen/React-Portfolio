import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  picturesAll,
  PicturesFigma,
  PicturesReactNext,
  PicturesJavascript,
} from "../Components/Database";

function MyWork({ Language }) {
  const [pictureType, setPictureType] = useState(picturesAll);

  return (
    <div className="mt-10" id="Portfolio">
      <h1 className="text-center lg:text-8xl text-6xl">
        {Language ? "Realizacje " : "My work"}
      </h1>
      <h2 className="text-center lg:text-3xl text-2xl">
        <span className="bg-figmaYellow">
          {Language ? "Wyjątkowe projekty" : "awesome projects"}
        </span>
      </h2>
      <div className="flex justify-center ">
        <ul className="flex sm:w-1/2 justify-between my-10 w-4/5 lg:text-xl">
          <li
            className="text-gray-900 hover:text-gray-500  cursor-pointer font-semibold text-md relative after:bg-gray-500 after:absolute after:h-1/6 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setPictureType(picturesAll)}
          >
            {Language ? "WSZYSTKO" : "ALL"}
          </li>
          <li
            className="text-gray-900 hover:text-gray-500  cursor-pointer font-semibold text-md relative after:bg-gray-500 after:absolute after:h-1/6 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setPictureType(PicturesFigma)}
          >
            FIGMA
          </li>
          <li
            className="text-gray-900 hover:text-gray-500  cursor-pointer font-semibold text-md relative after:bg-gray-500 after:absolute after:h-1/6 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
            onClick={() => setPictureType(PicturesJavascript)}
          >
            JAVASCRIPT
          </li>
          <li
            className="text-gray-900 hover:text-gray-500  cursor-pointer font-semibold text-md relative after:bg-gray-500 after:absolute after:h-1/6 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 "
            onClick={() => setPictureType(PicturesReactNext)}
          >
            REACT/NEXT
          </li>
        </ul>
      </div>
      <motion.div
        className="grid md:grid-cols-3 gap-5 grid-cols-1 justify-center justify-items-center  "
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          {pictureType.map((picture, index) => (
            <motion.a
              href={picture.url}
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={picture.picture}
                alt={picture.name}
                className={`cursor-pointer shadow-2xl rounded-md`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default MyWork;
