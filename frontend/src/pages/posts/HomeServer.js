import React, { useEffect, useState } from "react";
import "../../static/css/Home.css";
import Menubar from "../../components/Menubar";
import ReactMarkdown from "react-markdown";
import markdown from "./HomeServer.md";
import AboutSection from "../../components/AboutSection";

export default function TestBlog() {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(markdown)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            });
    }, []);

    return (
        <div className="body">
            <Menubar type="blog"/>
            <div className="rowFlex">
                <div className="sidebar">
                    <AboutSection />
                </div>
                <div className="columnFlex">
                    <section id="blog">
                        <ReactMarkdown className="text" children={ content } />
                    </section>
                </div>
                <div className="sidebar" />
            </div>
        </div>
    );
}