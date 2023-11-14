import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AbautMe from "./Components/AbautMe";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";
import FAQ from "./Components/FaqSection";
import { useState } from "react";

function App() {
  const [Language, setLanguage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const DarkMode = isChecked ? "bg-figmaBlack" : "bg-slate-100";
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className={`${DarkMode} h-full rounded-md shadow-lg rounded-b-2xl dark`}
    >
      <Navbar
        setLanguage={setLanguage}
        Language={Language}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isMobile={isMobile}
      />
      <Home Language={Language} isChecked={isChecked} isMobile={isMobile} />
      <AbautMe Language={Language} isChecked={isChecked} isMobile={isMobile} />
      <MyWork Language={Language} isChecked={isChecked} isMobile={isMobile} />
      <FAQ Language={Language} isChecked={isChecked} isMobile={isMobile} />
      <Footer Language={Language} isChecked={isChecked} isMobile={isMobile} />
    </div>
  );
}

export default App;
