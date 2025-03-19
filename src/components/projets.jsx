import { useState, useEffect, useRef } from 'react';
import '../style/projets.css';
import kasa from '../assets/Kasa3.png';
import nina from '../assets/nina.png'
import sophie from '../assets/sophie.png'
import booki from '../assets/booki.png'

const Projets = () => {

    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (ref.current) {
                const projetsTop = ref.current.getBoundingClientRect().top;

                if (projetsTop < window.innerHeight * 0.75) {
                    setVisible(true);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

return (
    <div className="projets-margin">
        <div 
        id="projets-section" 
        className={`projets-container ${visible ? 'visible' : 'hidden'}`}
            ref={ref}
            >
            <div className="projets-text">
                <h1 className="projets-title">La création commence par la vision</h1>
                <p>Découvrez mes projets réalisés, où chaque ligne de code reflète ma passion pour l'innovation et mon engagement à offrir des solutions créatives et fonctionnelles.</p>
            </div>
            <div className={`all-projets ${visible ? 'visible' : 'hidden'}`}
                ref={ref}>
                <div className="projets-card"
                >
                    <div id="kasa" className='projets-image'>
                    <img src={kasa} alt=""></img>
                    </div>
                    <div className='button-more'>
                         <a href="https://jonathanbret.github.io/Projet-5-OCR/" 
                            className="button-projets" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             Voir plus
                        </a>
                </div>
                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={nina} alt=""></img>
                    </div>
                    <div className='button-more'>
                         <a href="https://jonathanbret.github.io/Projet-5-OCR/" 
                            className="button-projets" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             Voir plus
                        </a>
                </div>

                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={sophie} alt=""></img>
                    </div>
                    <div className='button-more'>
                         <a href="https://jonathanbret.github.io/Projet-5-OCR/" 
                            className="button-projets" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             Voir plus
                        </a>
                </div>
                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={booki} alt=""></img>
                    </div>
                    <div className='button-more'>
                         <a href="https://jonathanbret.github.io/Projet-5-OCR/" 
                            className="button-projets" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             Voir plus
                        </a>
                </div>
                </div>
            </div>

        </div>
    </div>
)
}

export default Projets

