import '../style/resume.css'

const Resume =() => {
    return(
        <div className="resume-margin">
            <div className="resume-container">
                <div className="resume-title">
                    <h2>Télécharger directement mon CV ici 👉</h2>
                    <p>Vous voulez en savoir plus sur Jonathan Bret ?</p>
                </div>
                    <div className='resume-button'>
                        <a href="">
                            <button className="resume-download">Télécharger</button>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Resume