import projects from "../data/projectdetail";
import { Link } from "react-router-dom";
export default function Works(){
    return(
        <section id="work" className="work">
            <div className="works-section">
            {
                
                projects.map((projects) => (
                    <Link target="_blank" to={`${projects.website}`} key="project.id">
                   <div className="works-card" key={projects.id}>
                    <div className="works-img-section">
                    <img src={projects.img} alt="" />
                    </div>
                    <div className="works-card-text">
                    <h1>{projects.title}</h1>
                    <p>{projects.shortDesc}</p>
                        <div className="tags">
                    
                    {projects.tags.map((tags, index) =>(
                       <span key={index}>{tags}</span>
                    ))}
                    </div>
</div>
                   </div>  
                   </Link> 
                
                ))}
                </div>
        </section>
    )
}