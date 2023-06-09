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
					<header className="Home-header">
						<h1>Home</h1>
					</header>
					<div className="text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis maximus augue. Nunc viverra, massa vel dictum faucibus, dui lectus bibendum enim, iaculis auctor arcu enim a arcu. Suspendisse eget ligula eu ex porttitor maximus. Nullam eleifend lacinia dui eu tincidunt. Sed ut lobortis lorem, vel laoreet mi. Donec nec libero id enim dignissim pretium in nec est. Nulla eleifend et nisl ut semper. In consequat, magna accumsan tempor efficitur, ipsum leo fringilla elit, quis placerat sem nunc eget est. Maecenas ac libero eros. Nullam lacinia velit non bibendum maximus. Ut urna felis, cursus ac diam sit amet, viverra tincidunt quam. Nunc hendrerit, nisl a congue aliquet, erat purus dictum metus, facilisis lobortis quam ligula et massa.
							Praesent eget ante quis ipsum aliquet aliquam nec non purus. Praesent bibendum lacinia urna ultrices auctor. Nam interdum vitae ipsum eget pellentesque. Phasellus diam justo, porttitor eu dui quis, tempus vulputate arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis tincidunt ultricies. Nunc vitae varius ante, ultrices scelerisque ante. Pellentesque quis sagittis quam. Aenean feugiat varius ante, vitae sagittis eros venenatis sit amet. Proin maximus viverra leo venenatis imperdiet. Maecenas sollicitudin dolor ac mauris tempor malesuada.
							Etiam faucibus, tortor quis tincidunt placerat, sapien nulla malesuada felis, sed aliquet nisl nunc sit amet nulla. Praesent faucibus augue quis neque fermentum cursus. Aliquam sagittis fermentum vulputate. Aenean fermentum ex augue, sit amet iaculis diam sodales luctus. Nullam nec turpis vehicula, aliquet sapien sit amet, facilisis est. Aenean sit amet semper lectus. Fusce ac leo accumsan odio condimentum viverra.
							Praesent laoreet convallis dui nec faucibus. Mauris mattis tellus sit amet urna vulputate ultrices in id dolor. Aliquam eget tellus congue, lacinia justo vel, tempor odio. Nam pharetra velit libero. Nulla sit amet justo neque. Donec tincidunt sapien eget justo pulvinar, nec rhoncus quam egestas. Etiam maximus venenatis venenatis. Suspendisse porta sollicitudin fermentum. Pellentesque sed libero nec nisl efficitur aliquam ut eget orci. Cras vel metus vitae nisl aliquet convallis. Nunc egestas felis non tempor condimentum. Morbi non leo pharetra urna dignissim sagittis at ut purus. Fusce at metus vestibulum, tristique quam sed, egestas ligula.
							Morbi interdum tortor justo, quis venenatis turpis venenatis in. Etiam eget consequat tellus. Aliquam rhoncus tempor congue. Aliquam id ultrices velit, ac venenatis ex. Maecenas vehicula dolor turpis, eu sollicitudin massa luctus nec. Nunc suscipit, ipsum ac placerat sodales, diam orci ornare sapien, id suscipit nunc mi vehicula ligula. Integer lacinia ligula ut sagittis posuere. Vivamus a eros ac velit volutpat pharetra. Fusce non pellentesque nisl. Aenean euismod lacus ut est iaculis facilisis. Donec aliquet ipsum pulvinar, sodales est in, blandit nisl. Fusce rutrum sed velit sed sodales.
						</p>
					</div>
				</div>
				<div className="sidebar" />
			</div>
		</div>
	);
}