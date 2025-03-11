import picture from '../assets/JonathanBret.jpeg'
import '../style/aboutMe.css'

const AboutMe =() => {
    return (
        <div className="about-me">
            <div className='about-me-container'>
            <div className="picture">
                <img src={picture} alt='Jonathan Bret'/>
            </div>
            <div className="history">
                <h1>Mon Histoire</h1>
                <p>Passionné de basket depuis 15 ans, j'ai appris à travailler en équipe, à manager et à prendre des décisions sous pression, notamment en tant que capitaine. Ce sport m'a permis de développer des compétences en leadership et en communication, essentielles tant sur le terrain que dans ma vie professionnelle.</p>
                <p>Titulaire d'une licence Bac+3 en Conseil, Audit et Contrôle de Gestion, j'ai acquis des compétences solides en gestion de projets et en analyse de données. Mon bon niveau en anglais et mon intérêt pour l'informatique m'ont naturellement conduit vers le développement web. Aujourd'hui, je me consacre à créer des sites, en utilisant mes compétences techniques et ma passion pour l'innovation.</p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe