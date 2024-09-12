import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Yandiswa Ndarane </h1>
            <p className={styles.description}>
              I'm a Full-stack developer    
            </p>
            <a className={styles.contactBtn} href="mailto:yandiswa.ndarane311@gmail.com">Contact me</a>  
        </div>
        <img className={styles.heroImg} src={getImageUrl("nav/me.png")}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>;
     
}