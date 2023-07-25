import React from "react";
import '../static/css/Home.css';
import Menubar from "../components/Menubar";
import Posts from "../components/Posts";

export default function Blog() {

    return(
        <div className="body">
            <Menubar type="blog" />
            <div className="rowFlex">
                <div className="columnFlex">
                    <br />
                    <Posts />
                </div>
                <div className="sidebar" />
                <div className="sidebar" />
            </div>
        </div>
    );
}
