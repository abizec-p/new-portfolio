import { Link } from "react-router-dom";
import "../components/projectworks.css"

export default function ProjectWorks(){
    return(
        <section className="project-works">
            <div className="heading-project">
                <h1>Project Works</h1>
                <p>My work spans both graphic design and web development, combining strong visual design with practical, functional websites. I focus on creating work that looks good, works smoothly, and serves a real purpose adapting my approach based on the project’s needs.</p>
            </div>
            <div className="main-projects-section">
                <Link to="/webdev">
                <div className="web-development-section">
                    <h2>Web development</h2>
                    <p>I build responsive, user-focused websites using modern front-end technologies, balancing performance, accessibility, and clean design.</p>

                </div>
                </Link>
                <Link to="/graphics designing">
                <div className="graphics-design-section">
                    <h2>Graphics design</h2>
                    <p>I create visual designs that focus on clarity, brand identity, and strong visual storytelling across digital and print media.</p>

                </div>
                </Link>
            </div>

        </section>
    )
}