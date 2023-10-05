import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsGithub, BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";

function Footer({ Language }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0qy9wii",
        "template_jff7npz",
        form.current,
        "89YEmMwrb25szBh_Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-figmaBlack rounded-b-2xl" id="Contact h-full">
      <h1 className="text-center lg:text-7xl text-6xl text-gray-100">
        {Language ? "Poznajmy się" : "Get in touch..."}
      </h1>
      <h2 className="text-center lg:text-3xl text-2xl mb-10">
        <span className="bg-figmaYellow">
          {" "}
          {Language ? "Kontakt" : "Contact"}
        </span>
      </h2>
      <div className="flex flex-col justify-center items-center ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center items-center w-full p-5 "
        >
          <input
            type="text"
            name="to_name"
            placeholder={Language ? "Imie i nazwisko" : "Fullname"}
            className="bg-transparent lg:text-xl border-b-4 w-1/4 p-5 text-gray-200 focus:outline-none text-md"
            required
          />
          <input
            type="email"
            name="from_name"
            placeholder="E-Mail"
            className="bg-transparent  border-b-4 w-1/4 p-5 text-gray-200 focus:outline-none text-md lg:text-xl"
            required
          />
          <textarea
            name="message"
            placeholder={Language ? "Wiadomość" : "Message"}
            className="bg-transparent  border-b-4 w-1/4 p-5 text-gray-200 focus:outline-none text-md lg:text-xl"
            required
          />
          <input
            type="submit"
            value={Language ? "Wyślij wiadomość" : "Send a Message"}
            className="text-gray-200 border-solid border-2 mt-10 border-gray-200 rounded-lg p-3 flex justify-center items-center  hover:outline outline-offset-4 outline-1 hover:scale-110	"
          />{" "}
        </form>
      </div>
      <div>
        <h2 className="text-center lg:text-3xl text-2xl my-10">
          <span className="bg-figmaYellow">
            {" "}
            {Language ? "Alternatywnie przez" : "Alternatively, via..."}
          </span>
        </h2>
        <div className="flex justify-center lg:gap-20 gap-10 flex-col sm:flex-row items-center">
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <motion.span className="text-gray-200 mr-5 lg:text-2xl">
              <BsTelephoneFill />
            </motion.span>
            <motion.h1 className="text-gray-200 lg:text-2xl">
              +48 511-439-852
            </motion.h1>
          </motion.div>
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <motion.span className="text-gray-200 mr-5 lg:text-2xl">
              <IoMdMailUnread />
            </motion.span>
            <motion.h1 className="text-gray-200 lg:text-2xl">
              kjank.designs@gmail.com
            </motion.h1>
          </motion.div>
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <motion.span className="text-gray-200 mr-5 lg:text-2xl">
              <BsTwitter />
            </motion.span>
            <motion.h1 className="text-gray-200 lg:text-2xl">Coeen__</motion.h1>
          </motion.div>
        </div>

        <div className="flex justify-between lg:p-10 p-5 my-5">
          <div className="flex">
            <span className="text-gray-200 mr-1 text-2xl">
              <AiOutlineCopyrightCircle />
            </span>
            <h1 className="text-gray-200">
              {Language
                ? "Wszystkie prawa zastrzeżone"
                : "All rights reserved "}
            </h1>
          </div>
          <a href="https://github.com/Coeeen">
            <div className="flex">
              <span className="text-gray-200 mr-1 text-2xl">
                <BsGithub />
              </span>
              <h1 className="text-gray-200">
                {Language
                  ? "Sprawdz jeszcze mojego githuba"
                  : "Also check my gihub for more! "}
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
