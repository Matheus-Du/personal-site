import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeServer from './pages/posts/HomeServer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog/a-complete-guide-to-building-and-deploying-a-website-on-your-home-server" element={<HomeServer />} />
			</Routes>
	</HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
