import React, { useState, useEffect, useRef } from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";
import { clock } from "./clock";
import useTxtRotate from "./useTxtRotate";
import { CardBody, CardContainer, CardItem } from "../UI/3d-card";

export const Me = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heureRef = useRef(null);
  const minuteRef = useRef(null);
  const secondeRef = useRef(null);
  const txtRotateRef = useTxtRotate(
    [
      "DEVELOPPEUR WEB",
      "Actuellement en formation",
      "Concepteur développeur d‘applications",
      "Au Campus Numérique In The Alps",
      "Je suis à la recherche d‘une alternance",
      "Début janvier 2025",
    ],
    1000
  );

  const handleToggleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setIsFlipped(!isFlipped);
    }, 1000);
  };

  useEffect(() => {
    if (isFlipped) {
      clock(heureRef.current, minuteRef.current, secondeRef.current);

      const interval = setInterval(() => {
        clock(heureRef.current, minuteRef.current, secondeRef.current);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isFlipped]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bonjour, je m'appelle Jocelyn</h1>
        <div className={styles.description}>
          <span ref={txtRotateRef} className={styles.txtrotate} />
        </div>
        <a href="#Contact" className={styles.contactBtn}>
          Contacter moi
        </a>
      </div>
      <CardContainer className={styles.cardContainer}>
        <CardBody className={styles.cardBody}>
          {isFlipped ? (
            <CardItem
              translateZ="50"
              className={`${styles.horlogeContainer} ${
                isAnimating ? styles.slideUpAndFadeOut : ''
              }`}
              onClick={handleToggleClick}
            >
              <div className={styles.horloge}>
                <div className={styles.wrap}>
                  <div ref={heureRef} className={`${styles.heure} heure`}></div>
                  <div ref={minuteRef} className={`${styles.minute} minute`}></div>
                  <div ref={secondeRef} className={`${styles.seconde} seconde`}></div>
                  <div className={styles.point}></div>
                </div>
              </div>
            </CardItem>
          ) : (
            <CardItem
              translateZ="50"
              className={`${styles.MeImg} ${
                isAnimating ? styles.slideUpAndFadeOut : ''
              }`}
              onClick={handleToggleClick}
            >
              <img
                src={getImageUrl('Me/Me.png')}
                alt="image of me"
              />
            </CardItem>
          )}
        </CardBody>
      </CardContainer>
      <div className={styles.topBlur} />
    </section>
  );
};
