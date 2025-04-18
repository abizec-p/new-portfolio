import Hero from "./components/hero"
import Nav from "./components/nav"
import { Route,Router, Routes } from "react-router-dom"
import Profile from "./components/profile"
import Contact from "./components/contact"
import Footer from "./components/footer"
import About from "./components/about"
import ProjectPage from "./components/projects"
export default function App(){
  return(
    <section>
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/:id" element={<ProjectPage/>}/>
      </Routes> 
      <Footer/>
      
    </section>
  )
}