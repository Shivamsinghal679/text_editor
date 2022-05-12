import "./App.css";


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#122d54";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    }
  };
  return (
    <>
        <BrowserRouter>
       <Navbar title="TextEditor" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} /> 

          <div className="container my-3">
      
          <Routes>
          <Route exact  path="/" element={<TextForm />} />
          
          <Route exact path="/about" element={<About />} />
          </Routes>
        
      </div>
        </BrowserRouter>

       
    </>
  );
}

export default App;
