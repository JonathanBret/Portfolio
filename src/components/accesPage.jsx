import { useState, useCallback, useEffect } from "react";
import "../style/accessPage.css";
import Nav from "../components/nav";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Projets from "./projets";
import Resume from "./resume";
import Contact from "./contact";

function Portfolio() {
  const [lightOn, setLightOn] = useState(false); 
  const [input, setInput] = useState("");

//    const handleSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (input.toLowerCase() === "yes") {
//       setLightOn(true)
//     } else {
//       setInput("");
//       setError(true);
//     }
//   }, [input]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setInput("");
  }, [setInput])

useEffect(() => {
    if(input.toLowerCase() === "yes") {
        setLightOn(true)
    }
},[input]);

  return (
    <div className={`container ${lightOn ? "light-mode" : "dark-mode"}`}>
      {!lightOn ? (  
       
        <div className="terminal">
          <p>Enter 'yes' if you want to enter the secret portfolio</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              className="input-terminal"
              autoFocus
            />
          </form>
        </div>
      ) : (  
      
        <div className="portfolio">
          <Header />
          <Nav />
          <AboutMe />
          <Projets />
          <Resume />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
