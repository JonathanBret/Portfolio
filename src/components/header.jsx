import '../style/header.css'

const Header = () => {
    return (
        <div className="portfolio-header">
            <div className='portfolio-header-nav'>
                <div className="portfolio-title">
                    <h1>Jonathan Bret</h1>
                    <h2>Développeur Full-stack</h2>
                </div>
                <div className="portfolio-navigation">
                    <a href="#history-section">
                        <button>Mon histoire</button>
                    </a>
                    <a href="#projets-section">
                        <button>Mes projets</button>
                    </a>
                    <a href="#resume-section">
                        <button>Mon CV</button>
                    </a>
                    <a href="">
                        <button>Me contacter</button>
                    </a>
                </div>
                </div>

                <div className="square linkedin">
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
            <h2>
                LinkedIn
            </h2>
            <p>C'est ici que je développe mon réseau et saisis de nouvelles opportunités.</p>
            <a href="https://www.linkedin.com/in/jonathan-bret-a291ba219/" target="_blank">_Jonathan</a>
        </div>
    </div>
        </div>
    )
}

export default Header