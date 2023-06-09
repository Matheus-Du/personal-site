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
							I have previous experience working as a software developer at Co-operators, where I worked mainly in full-stack web development and on enterprise-scale Java applications.
							I also have experience working on freelance and personal projects spanning a variety of technologies, which you can check out in the <a href="#projects">Projects</a> section below.
							<br /><br />
							I'm always looking for new opportunities to learn and grow as a developer. If you'd like to get in touch to talk about anything, from freelance work to book recommendations, 
							send me an <a href="mailto:duncanmatheus905@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/matheus-duncan/">LinkedIn</a>!
						</p>
					</section>
					<section id="about">
						<h1>About</h1>
						<p className="text">
							I've been studying Computer Science at the University of Alberta since 2019, and I'm currently in my last year of studies before graduation. My first interaction with software development began well before university however,
							as I wrote my first program, a simple asteroids game using Unity and C#, in 8th grade. Since then, I've been interested in programming and spent most of high school writing small games and programs in Java during my intro to CS class with friends.
							Since starting university, I've been constantly looking for new opportunities to learn more about software development, whether through university courses, programming textbooks, or personal projects.
							<br /><br />
							Outside of school, I've worked as a software developer at Co-operators, where I worked mainly in full-stack web development, successfully delivering a greenfield full-stack internal web application built using React, Spring, and MySQL.
							I also worked on enterprise-scale Java applications, where I gained experience writing unit tests, implementing new features, and fixing bugs in a (very) large codebase.
							I've also worked on freelance projects focused mostly on full-stack web development, some of which you can check out in the <a href="#projects">Projects</a> section below.
							<br /><br />
							Currently, I'm dividing my time between Edmonton, where I attend university, and Toronto, where I grew up and currently work remotely.
							Outside of programming, I enjoy reading, going outdoors, and learning history (admittedly a somewhat unconventional minor to pair with a CS degree).

						</p>
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