import logo from '../assets/logoGit.png';
import '../style/nav.css'

const Nav = () => {
    return (
        <div className="git">
            <div className="logo-container">
                <a href="https://github.com/JonathanBret" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="logo-git" className="logo-git" />
                </a>
            </div>
        </div>    
    )
}

export default Nav;
