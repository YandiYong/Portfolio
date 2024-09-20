import React from "react";
import styles from './Projects.module.css';
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";


export const Projects = () =>{

    return(
      <section>
          <h2>Projects</h2>
          <div>{ 
                projects.map((project,id) =>{
                  return <div key={id}>
                       <img className={styles.proImg} src={getImageUrl("projects/processpulse.png")}/>
                       <h3>{project.title}</h3>
                       <p>{project.desc}</p>
                       <ul>
                         {project.skills.map((skill,id) =>{
                             <li key={id}>{skill}</li>
                         })}
                       </ul>
                       <div>
                         <a href={project.demo}>Demo</a>
                         <a href={project.demo}>Source</a>
                       </div>
                  </div>
            })}</div>
      </section>
    );
  };