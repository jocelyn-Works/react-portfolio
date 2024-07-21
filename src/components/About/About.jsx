import React from "react";
import styles from "./About.module.css";
import cv from "../../../assets/about/jocelynCv.pdf";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>Compétences</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <h3>Frontend</h3>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutlogo}>
                <img
                  loading="lazy"
                  src={getImageUrl("about/html-css.png")}
                  alt="html css"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/javascript.png")}
                  alt="js"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/sass.png")}
                  alt="sass"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/react.png")}
                  alt="react"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/vue.js.png")}
                  alt="vue"
                />
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <h3>Backend</h3>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutlogo}>
                <img
                  loading="lazy"
                  src={getImageUrl("about/php.png")}
                  alt="php"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/java.png")}
                  alt="java"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/mysql.png")}
                  alt="MySQL"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/mongoDB.png")}
                  alt="MongoDB"
                />
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <h3>FrameWork</h3>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutlogo}>
                <img
                  loading="lazy"
                  src={getImageUrl("about/symfony.png")}
                  alt="symfony"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/spring.png")}
                  alt="spring"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/laravel.jpg")}
                  alt="laravel"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/nodeexpress.png")}
                  alt="express"
                />
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <h3>WorkFlow</h3>
            <div className={styles.aboutItemText}>
              <div className={styles.aboutlogo}>
                <img
                  loading="lazy"
                  src={getImageUrl("about/apple.png")}
                  alt="apple"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/windows.png")}
                  alt="windows"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/ubuntu.png")}
                  alt="ubuntu"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/vscode.png")}
                  alt="vscode"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/postman.png")}
                  alt="postman"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/git.png")}
                  alt="git"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/figma.png")}
                  alt="figma"
                />
                <img
                  loading="lazy"
                  src={getImageUrl("about/docker.png")}
                  alt="docker"
                />
              </div>
            </div>
          </li>
              <button className={styles.cvButton} type="button">
            <a href={cv} download="jocelynCv.pdf" className={styles.cvLink}>
                <span className={styles.buttonText}>Télécharger mon CV</span>
                <span className={styles.buttonIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    className={styles.svg}
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
            </a>
              </button>
        </ul>
      </div>
    </section>
  );
};
/* <img src={getImageUrl("about/mongoDB.png")} alt="vscode" /> */
