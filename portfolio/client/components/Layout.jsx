import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
return (
<div className="layout-container">
<div className="header-section">
<div className="logo">JJ</div>
<h1 className="layout-title">Jallini Joachimpillai</h1>
</div>

<nav className="layout-nav">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/education">Education</Link>
<Link to="/projects">Projects</Link>
<Link to="/services">Services</Link>
<Link to="/contact">Contact</Link>
</nav>

<hr className="layout-divider" />
</div>
);
}