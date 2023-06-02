import React from "react";
import '../static/css/Menubar.css'

export default function Menubar() {
    return (
        <div className="menubar">
            <div className="menubar-item">
                <a href="/">Home</a>
            </div>
            <div className="menubar-item">
                <a href="/about">About</a>
            </div>
            <div className="menubar-item">
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}