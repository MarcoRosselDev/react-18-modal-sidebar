import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home"
import Team from "./team"
import Projects from "./projects"
import Calendar from "./calendar"
import Documents from "./documents"

const Hero = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <div className="absolute top-0 h-16 flex justify-center">

      <button className="btn" onClick={openModal}>
        show modal
      </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </main>
  );
};

export default Hero;
