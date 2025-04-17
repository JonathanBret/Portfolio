import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import des icônes
import '../style/dropdownList.css'; // À créer pour le style

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="burger-container">
      <button className="burger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}  {/* Affichage de l'icône en fonction de l'état */}
      </button>

      {isOpen && (
        <nav className="burger-menu">
          <a href="#history-section" onClick={toggleMenu}>Mon histoire</a>
          <a href="#projets-section" onClick={toggleMenu}>Projets</a>
          <a href="#resume-section" onClick={toggleMenu}>CV</a>
          <a href="#contact-section" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </div>
  );
};

export default DropdownList;
