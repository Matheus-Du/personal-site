import React from "react";
import '../static/css/Menubar.css'

export default function Menubar(props) {
    const navigate = (url) => {
        return function() {
            window.location.href = url;
        }
    };

    if(props.type === "home") {
        return (
            <div className="menubar">
                <a href="#home" className="menubar-button">Matheus Duncan</a>
                <a href="#about" className="menubar-button">About</a>
                <a href="#projects" className="menubar-button">Projects</a>
                <a href="#blog" className="menubar-button">Blog</a>
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