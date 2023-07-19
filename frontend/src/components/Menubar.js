import React from "react";
import '../static/css/Menubar.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function Menubar(props) {
    const navigate = (url) => {
        return function() {
            window.location.href = url;
        }
    };

    if(props.type === "home") {
        return (
            <div className="menubar">
                <Link to="#home" className="menubar-button">Matheus Duncan</Link>
                <Link to="#about" className="menubar-button">About</Link>
                <Link to="#projects" className="menubar-button">Projects</Link>
                <Link to="#blog" className="menubar-button">Blog</Link>
            </div>
        );
    } else if(props.type === "blog") {
        return (
            <div className="menubar">
                <button onClick={ navigate("/") } className="menubar-button">Matheus Duncan</button>
            </div>
        );
    }
}