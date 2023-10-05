import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ Language, setLanguage }) {
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();
    const PortfolioSection = document.getElementById("Portfolio");
    if (PortfolioSection) {
      window.scrollTo({
        top: PortfolioSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToQustion = (e) => {
    e.preventDefault();
    const QuestionsSection = document.getElementById("Questions");
    if (QuestionsSection) {
      window.scrollTo({
        top: QuestionsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const ContactSection = document.getElementById("Contact");
    if (ContactSection) {
      window.scrollTo({
        top: ContactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  function changeLanguage() {
    setLanguage(!Language);
  }

  return (
    <nav className="mb-12">
      <div className="flex justify-between p-5">
        <h1>
          <span className="bg-figmaYellow font-outfit font-medium lg:text-5xl cursor-default hidden sm:block">
            Krystian Jank
          </span>
        </h1>
        <ul className="flex justify-evenly sm:w-1/2 lg:text-2xl w-full ">
          <li className="text-gray-900 hover:text-gray-400 cursor-pointer">
            {Language ? "O mnie " : "Abaut Me"}
          </li>
          <li
            className="text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={handleScrollToPortfolio}
          >
            Portfolio
          </li>
          <li
            className="text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={handleScrollToQustion}
          >
            {Language ? "Pytania " : "Questions"}
          </li>
          <li
            className="text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={handleScrollToContact}
          >
            {Language ? "Kontakt " : "Contact"}
          </li>
          <li
            className="text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={changeLanguage}
          >
            {Language ? "ENG" : "PL"}
          </li>
        </ul>

        <button
          type="button"
          className="text-white bg-gray-500 hover:bg-gray-800  font-medium rounded-lg text-sm px-4 py-2 sm:px-6 sm:py-3 text-center md:mr-3 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <BsFillMoonStarsFill className="text-xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
