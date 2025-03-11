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
                    <a href="">
                        <button>Mon histoire</button>
                    </a>
                    <a href="">
                        <button>Mes projets</button>
                    </a>
                    <a href="">
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
            <p>This is where I network and build my professional portfolio</p>
            <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
        </div>
    </div>
        </div>
    )
}

export default Header