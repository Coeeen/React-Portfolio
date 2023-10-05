import React, { useState } from "react";

function FAQ({ question, answer, isChecked }) {
  const [isOpen, setIsOpen] = useState(false);
  const DarkMode = isChecked ? "text-gray-200" : "text-gray-900";
  function Toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      onClick={() => Toggle()}
      className={`mb-14 lg:w-3/5 w-5/6 ${DarkMode}`}
    >
      <div>
        <div
          className={`flex justify-between shadow-xl cursor-pointer items-center ${DarkMode}`}
        >
          <div>
            <h1 className="lg:text-2xl p-8 text-base ">{question}</h1>
          </div>
          <div>
            <h1 className="cursor-pointer lg:text-5xl font-light text-2xl lg:mr-5 md:mr-5 mr-3">
              {isOpen ? "-" : "+"}
            </h1>
          </div>
        </div>
        {isOpen && (
          <div className=" flex justify-between shadow-lg cursor-pointer ">
            <div>
              <h1 className="lg:text-2xl text-base font-light p-5">{answer}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
