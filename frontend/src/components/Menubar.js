import React from "react";
import '../static/css/Menubar.css'

export default function Menubar() {

    const navigate = (page) => {
        return function() {
            window.location.href = page;
        }
    };

    return (
        <div className="menubar">
            <button onClick={ navigate("#home") } className="menubar-button">Matheus Duncan</button>
            <button onClick={ navigate("#about") } className="menubar-button">About</button>
            <button onClick={ navigate("#projects") } className="menubar-button">Projects</button>
            <button onClick={ navigate("#blog") } className="menubar-button">Blog</button>
        </div>
    );
}