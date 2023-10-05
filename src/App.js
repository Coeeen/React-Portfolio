import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AbautMe from "./Components/AbautMe";
import MyWork from "./Components/MyWork";
import Footer from "./Components/Footer";
import FAQ from "./Components/FaqSection";
import { useState } from "react";

function App() {
  const [Language, setLanguage] = useState(false);

  return (
    <div className="bg-slate-100 h-full rounded-md shadow-lg rounded-b-2xl">
      <Navbar setLanguage={setLanguage} Language={Language} />
      <Home Language={Language} />
      <AbautMe Language={Language} />
      <MyWork Language={Language} />
      <FAQ Language={Language} />
      <Footer Language={Language} />
    </div>
  );
}

export default App;
