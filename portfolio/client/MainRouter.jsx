import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/education'
import Projects from './src/projects'
import Layout from './components/Layout'
import Services from './src/Services'
import './components/Layout.css'


const MainRouter = () => {
return (<div>
    <Layout/>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About  />} />
<Route exact path="/education" element={<Education />} />
<Route exact path="/projects" element={<Projects />} />
<Route exact path="/services" element={<Services />} />
<Route exact path="/contact" element={<Contact />} />
</Routes>
<footer className="layout-footer">
<p>&copy; Jallini Joachimpillai 2024. All rights reserved.</p>
</footer>
</div>
)
}
export default MainRouter