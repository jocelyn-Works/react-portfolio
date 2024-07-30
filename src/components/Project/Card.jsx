import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";

const Card = ({ img, githubLink, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div className={styles.card}>
      <motion.div
        className={styles.cardInner}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className={styles.cardFront}>
          <div className={styles.carousel}>
            <img
              src={img}
              alt={`Image of ${title}`}
            />
          </div>
          <div className={styles.navProject}>
            <div className={styles.btnGit}>
              <a className={styles.github} href={githubLink} target="_blank">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                github
              </a>
            </div>
            <a
              className={styles.show}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleFlip();
              }}
            >
              en savoir plus{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.navBack}>
            <a
              className={styles.showBack}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleFlip();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              retour{" "}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
