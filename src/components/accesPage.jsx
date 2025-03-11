import { useState } from "react";
import "../style/accessPage.css";
import Nav from "../components/nav";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Projets from "./projets";
import Resume from "./resume";

function Portfolio() {
  const [lightOn, setLightOn] = useState(false); 
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "yes") {
      setLightOn(true);
    } else {
      setError(true);
      setInput("");
    }
  };

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
          {error && <p className="error">Commande incorrecte.</p>}
        </div>
      ) : (  
      
        <div className="portfolio">
          <Header />
          <Nav />
          <AboutMe />
          <Projets />
          <Resume />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
