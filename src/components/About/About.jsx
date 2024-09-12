import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{
    return <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
            {/* <img className={styles.myAbt} src={getImageUrl("nav/about.png")}/> */}
            <ul className={styles.aboutItems}>
               <li className={styles.aboutItem}><img className={styles.cursorIcon} src={getImageUrl("nav/cursor.png")}/>
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer </p>
                </div>
               </li>
               <li className={styles.aboutItem}> 
                <img className={styles.serverIcon} src={getImageUrl("nav/serverIcon.png")}/>
                 <div>
                    <h3>Backend Developer</h3>
                    <p>
                        I have experience developing APIs
                    </p>
                 </div>
               </li>
            </ul>    
            </div>
            </section>;
};