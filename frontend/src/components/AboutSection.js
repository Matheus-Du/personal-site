import React from "react";
import '../static/css/AboutSection.css'
import '../static/media/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function AboutSection() {

    return (
        <div className="main">
            <div className="profile">
                <img src={require('../static/media/profile.jpg')} alt="Profile" />
                <h4 className="profileTitle">Matheus Duncan</h4>
            </div>
            <div className="about">
                <p>Student @ University of Alberta</p>
                <p>Bsc - Computer Science (2019 - present)</p>
            </div>
            <div className="links">
                <div className="link">
                    <FontAwesomeIcon icon={faGithub} />
                    <a href="https://www.linkedin.com/in/matheus-duncan/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faLinkedin} />
			        <a href="https://github.com/Matheus-Du" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div className="link">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:duncanmatheus905@gmail.com">Email</a>
                </div>
            </div>
        </div>
    );
}