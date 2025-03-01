import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sangram </h1>
        <p className={styles.description}>
        I'm a Full Stack Java Developer, Front-End Developer, and UI/UX Developer.
               I specialize in crafting seamless digital experiences, combining efficient 
               back-end logic with intuitive front-end design. Passionate about creating user-friendly 
               applications,I thrive on solving complex challenges with innovative solutions. 
               Always eager to learn and grow in tech!

        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
