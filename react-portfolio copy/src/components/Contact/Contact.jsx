import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      {/* <li className={styles.link}>
          <img src={getImageUrl("contact/file.png")} alt="file icon" />
          <a href="https://www.linkedin.com/in/sangram-ghosh-729a0a249/">My-Resume</a>
        </li> */}
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ghoshsangram24@email.com">ghoshsangram24@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sangram-ghosh-729a0a249/">linkedin.com/sangram-ghosh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Sangram2410">github.com/sangram-ghosh</a>
        </li>
      </ul>
    </footer>
  );
};
