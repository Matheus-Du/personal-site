import React from "react";
import '../static/css/Projects.css'

export default function Projects() {

    function goToProject(url) {
        return function() {
            window.open(url, "_blank");
        }
    };

    return (
        <div className="body">
            <div className="colFlex">
                <div className="projectRow">
                    <button className="project" onClick={ goToProject("https://github.com/open-uofa/pronunciation-practice") }>
                        <h2>Pronunciation Practice App</h2>
                        <p>
                            Full-Stack web app built for a local Edmonton non-profit.
                            Helps users practice their pronunciation of English words using a variety of exercises assigned by a teacher.
                            <br /><br />
                            <b>Stack: </b> React, Django, and PostgreSQL.
                        </p>
                    </button>
                    <button className="project" onClick={ goToProject("https://github.com/Matheus-Du/personal-site") }>
                        <h2>Personal Site</h2>
                        <p>
                            You are here! This site was built to be a lightweight personal portfolio and blog.
                            Containerized using Docker and deployed on a personal Ubuntu server using Nginx.
                            <br /><br />
                            <b>Stack: </b> React, Flask, and MongoDB.
                        </p>
                    </button>
                </div>
                <div className="projectRow">
                <button className="project" onClick={ goToProject("https://github.com/Matheus-Du/HabitTracker") }>
                        <h2>Habit Tracker</h2>
                        <p>
                            Android app built for a university course. Allows users to track their habits and view statistics about their progress.
                            Also allows for users to add friends and view their stats.
                            <br /><br />
                            <b>Stack: </b> XML, Java, and Firebase.
                        </p>
                    </button>
                    <button className="project" onClick={ goToProject("https://github.com/Matheus-Du/kNN-classifier") }>
                        <h2>kNN Text Classifier</h2>
                        <p>
                            Supervised ML text classifier built for a university course. Classifies text documents based on their similarity to other documents using only the Python standard library.
                            Without feature selection, achieves an F1 score of &gt;0.9 on the IMDb movie dataset.
                            <br /><br />
                            <b>Stack: </b> Python, Python, and Python.
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}