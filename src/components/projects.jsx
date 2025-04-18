import React from 'react'
import projects from '../data/projectdetail'
import { Link, useParams } from 'react-router-dom'

const ProjectPage = () => {
  const {id} = useParams();

  const project = projects.find((proj) => proj.id.toString() === id);
  if (!project) {
    return <p>sorry.. could not find that specific project.</p>;
  }
  return (
    <section >
         <div key={id} className='project-page'>
          <img src={project.img} alt="" />
       <h1>   {project.title}</h1>
       <a href="#">Full site here{project.link} </a>
<br />
       <p>{project.description}</p>


</div>
     

    </section>

    
  )
}

export default ProjectPage;