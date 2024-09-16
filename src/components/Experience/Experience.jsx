import React from "react";
import styles from './Experience.module.css'
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience =() =>{

    return (
        <section className={styles.container} id="experience">
        <h2>Experience</h2>
        <div>
            <div>{
               skills.map((skill,id)=>{
                  return <div key={id}>
                      
                      <div><img className={styles.imgSkill} src={getImageUrl(skill.imageSrc)}/></div>
                       <p>{skill.title}</p>
                  </div>
               })
                } </div>
            <ul>
                {
                    history.map((historyItem, id)=>{
                        return(
                            <li key={id}> <img className={styles.imgHistory} src={getImageUrl(historyItem.imageSrc)}/>
                               <div>
                                 <h3>{`${historyItem.role},${historyItem.organisation}` }</h3>
                                 <p>{`${historyItem.startDate} - ${historyItem.endDate}` }</p>
                                 <ul>
                                    {historyItem.experiences.map((experience,id)=>{
                                       return <li key={id}>{experience}</li>;
                                     })}
                                    </ul>
                               </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
       </section>
    );
};