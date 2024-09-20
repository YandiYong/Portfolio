import React from "react";
import { getImageUrl } from "../../utils";

export const ProjectsCard = ({project:{title, desc, skills,demo} }) =>{

    <div>
    <img className={styles.proImg} src={getImageUrl("projects/processpulse.png")}/>
    <h3>{title}</h3>
    <p>{desc}</p>
    <ul>
      {project.skills.map((skill,id) =>{
          <li key={id}>{skill}</li>
      })}
    </ul>
    <div>
      <a href={demo}>Demo</a>
      {/* <a href={project.demo}>Source</a> */}
    </div>
</div>


};
                   