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
                <button onClick={ navigate("#home") } className="menubar-button">Matheus Duncan</button>
                <button onClick={ navigate("#about") } className="menubar-button">About</button>
                <button onClick={ navigate("#projects") } className="menubar-button">Projects</button>
                <button onClick={ navigate("#blog") } className="menubar-button">Blog</button>
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