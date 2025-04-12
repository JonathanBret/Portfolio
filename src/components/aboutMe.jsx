import { useEffect, useRef, useState } from 'react';
import picture from '../assets/JonathanBret.jpeg';
import '../style/aboutMe.css';

const AboutMe = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleScroll() {
            if (ref.current) {
                const historyTop = ref.current.getBoundingClientRect().top;

                if (historyTop < window.innerHeight * 0.75) {
                    setVisible(true);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            id="history-section" 
            className={`about-me ${visible ? 'visible' : 'hidden'}`} 
            ref={ref}
        >
            <div className='about-me-container'>
                <div className="picture">
                    <img src={picture} alt='Jonathan Bret' />
                </div>
                <div className="history">
                    <h1>Mon Histoire</h1>
                    <p>Passionné de basket depuis 15 ans, j'ai appris à travailler en équipe, à manager et à prendre des décisions sous pression, notamment en tant que capitaine. Ce sport m'a permis de développer des compétences en leadership et en communication, essentielles tant sur le terrain que dans ma vie professionnelle.</p>
                    <p>Titulaire d'une licence Bac+3 en Conseil, Audit et Contrôle de Gestion, j'ai acquis des compétences solides en pilotage de projets et en analyse de données. Mon intérêt croissant pour la technologie et le numérique m'a naturellement orienté vers le développement web.</p>
                    <p>C'est ainsi que j'ai suivi une formation de développeur web, où j'ai appris à maîtriser les technologies modernes comme HTML, CSS, JavaScript et React. À travers mes projets, je conçois des interfaces dynamiques et performantes, en mettant l'accent sur l'expérience utilisateur et l'optimisation du code.</p>
                    <p>Curieux et passionné, j'aime relever des défis techniques et créer des solutions innovantes, alliant performance et design.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
