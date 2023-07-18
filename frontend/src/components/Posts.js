import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/Posts.css";

export default function Blog() {

    const navigate = useNavigate();

    const goToPost = (url) => {
        return function() {
            navigate("/blog/" + url);
        }
    };

    return (
        <div className="body">
            <button className="post" onClick={goToPost("a-complete-guide-to-building-and-deploying-a-website-on-your-home-server")}>
                <h2>A Complete Guide to Building and Deploying a Website on Your Home Server</h2>
            </button>
        </div>
    );
}