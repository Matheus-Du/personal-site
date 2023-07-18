import React from "react";
import "../../static/css/Home.css";
import Menubar from "../../components/Menubar";

export default function TestBlog() {

    return (
        <div className="body">
            <Menubar type="blog"/>
            <div>
                <h1>A Complete Guide to Building and Deploying a Website on Your Home Server</h1>
                <p>This is a test of the blog page.</p>
            </div>
        </div>
    );
}