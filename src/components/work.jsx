import projects from "../data/projectdetail";
import { Link } from "react-router-dom";
export default function Works(){
    return(
        <section id="work" className="work">
            <div className="works-section">
            {
                
                projects.map((projects) => (
                    <Link to={`/project/${projects.id}`} key="project.id">
                   <div className="works-card" key={projects.id}>
                    <div className="works-img-section">
                    <img src={projects.img} alt="" />
                    </div>
                    <div className="works-card-text">
                    <h1>{projects.title}</h1>
                    <p>{projects.description}</p>
                    <p> tags</p>
                    </div>

                   </div>  
                   </Link> 
                
                ))}
                </div>
        </section>
    )
}