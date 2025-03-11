import '../style/projets.css';
import kasa from '../assets/Kasa3.png';
import nina from '../assets/nina.png'
import sophie from '../assets/sophie.png'
import booki from '../assets/booki.png'

const Projets = () => {
return (
    <div className="projets-margin">
        <div className="projets-container">
            <div className="projets-text">
                <h1 className="projets-title">La création commence par la vision</h1>
                <p>Découvrez mes projets réalisés, où chaque ligne de code reflète ma passion pour l'innovation et mon engagement à offrir des solutions créatives et fonctionnelles.</p>
            </div>
            <div className="all-projets">
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={kasa} alt=""></img>
                    </div>
                    <div className='button-more'>
                    <button className="button-projets">Voir plus</button>
                    </div>
                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={nina} alt=""></img>
                    </div>
                    <div className='button-more'>
                    <button className="button-projets">Voir plus</button>
                    </div>
                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={sophie} alt=""></img>
                    </div>
                    <div className='button-more'>
                    <button className="button-projets">Voir plus</button>
                    </div>
                </div>
                <div className="projets-card">
                    <div className='projets-image'>
                    <img src={booki} alt=""></img>
                    </div>
                    <div className='button-more'>
                    <button className="button-projets">Voir plus</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}

export default Projets

