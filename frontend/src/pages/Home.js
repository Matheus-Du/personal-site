import React from "react";
import '../static/css/Home.css'
import Menubar from "../components/Menubar";
import AboutSection from "../components/AboutSection";

export default function Home() {

	return (
		<div className="body">
			<Menubar />
			<div className="rowFlex">
				<div className="sidebar">
					<AboutSection />
				</div>
				<div className="columnFlex">
					<section id="home">
						<h1>Matheus Duncan</h1>
							<p className="text">
								Hi! I'm Matheus, a software developer from Canada. I'm currently studying Computer Science at the University of Alberta in sunny Edmonton, Alberta.
								<br /><br />
								I have previous experience working as a software developer at Co-Operators, where I worked mainly in full-stack web development and on enterprise-scale Java applications.
								I also have experience working on freelance and personal projects spanning a variety of technologies, which you can check out in the <a href="#projects">Projects</a> section below.
								<br /><br />
								I'm always looking for new opportunities to learn and grow as a developer. If you'd like to get in touch to talk about anything, from freelance work to book recommendations, 
								send me an <a href="mailto:duncanmatheus905@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/matheus-duncan/">LinkedIn</a>!
							</p>
					</section>
					<section id="about">
						<h1>About</h1>
					</section>
					<section id="projects">
						<h1>Projects</h1>
					</section>
					<section id="blog">
						<h1>Blog</h1>
					</section>
				</div>
				<div className="sidebar" />
			</div>
		</div>
	);
}