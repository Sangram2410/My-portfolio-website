import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>java Developer</h3>
              <p>
                I'm a full stack wipro certified java developer with experience in working with different projects and 
                learning algorithms using java.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>WEB Developer</h3>
              <p>
                I'm a skilled Front-End Developer and UI/UX Developer, passionate about creating intuitive, user-friendly interfaces with modern technologies to enhance digital experiences and drive innovative web solutions.
                I also have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Databases & Cloud</h3>
              <p>
                I also have experience in working with databases like SQL and MongoDb for building full stack websites 
                also i have a an hands-on working experience with the cloud system like AWS and virtual machines. 
              </p>
            </div>
          </li>    
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>
                My Resume
              </h3>
              <p>Here's My Resume ,to see it please click on click here .
              <a href="assets/about/CV.png">[Click Here]</a> </p>
            </div>
          </li>  
        </ul>
      </div>
    </section>
  );
};
