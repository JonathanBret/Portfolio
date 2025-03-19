import '../style/footer.css'


const Footer = () => {
    return(
        <div className="footer-padding">
            <div className="footer-text">
                <h1>Il faut se fixer des buts avant de pouvoir les atteindre.</h1>
            </div>
            <div className="footer-details">
                <div className="footer-me">
                <a href="#aboutme">Jonathan Bret</a>
                <p>From Paris</p>
                </div>
                <div className="footer-nav">
                    <h4 className='footer-menu'>Navigation</h4>
                    <a href="#history-section">Mon histoire</a>
                    <a href="#projets-section">Mes projets</a>
                    <a href="#resume-section">Mon CV</a>
                    <a href="#contact-section">Me contacter</a>
                </div>
                <div className="footer-contact">
                    <h4>Restons en contact 😃</h4>
                    <div className='footer-phone'>
                    <p>06 03 46 36 44</p>
                    </div>
                    <div className='footer-mail'>
                    <p>bret.jonathan@outlook.fr</p>
                    </div>
                </div>
            </div>
            <h5>© 2025 Jonathan Bret. All rights reserved.</h5>
        </div>
    )
}

export default Footer