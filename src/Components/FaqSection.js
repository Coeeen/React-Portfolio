import React from "react";
import { FAQTextPL, FAQTextENG } from "./Database";
import Faq from "./FAQ";
function FaqSection({ Language, isChecked }) {
  const DarkMode = isChecked ? "text-gray-200" : "text-gray-900";

  return (
    <div className="my-14" id="Questions">
      <h1 className={`text-center lg:text-7xl text-6xl ${DarkMode}`}>
        {Language ? "Często zadawane" : " Frequently Asked "}
      </h1>
      <h2 className="text-center lg:text-3xl text-4xl mb-10">
        <span className="bg-figmaYellow">
          {Language ? "Pytania" : " Questions"}
        </span>
      </h2>
      <div className="flex flex-col  justify-center items-center" layout>
        {Language
          ? FAQTextPL.map((faq, index) => (
              <Faq
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isChecked={isChecked}
              />
            ))
          : FAQTextENG.map((faq) => (
              <Faq
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isChecked={isChecked}
              />
            ))}
      </div>
    </div>
  );
}

export default FaqSection;
