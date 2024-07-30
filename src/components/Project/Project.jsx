import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./Project.module.css";
import Card from "./Card";
import { getImageUrl } from "../../utils"; // Assurez-vous que ce chemin est correct

export const Project = () => {
  // animation scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "3 1"],
  });

  const cardsData = [
    {
      img: getImageUrl('projects/Socialworld2.png'),
      githubLink: "https://github.com/jocelyn-Works/Social-World",
      title: "Social World",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos, recusandae repellendus, dolores eum placeat suscipit doloribus cupiditate aliquid autem ipsum doloremque et rerum ea quasi tenetur error, amet dolorem."
    },
    {
      img: getImageUrl('projects/Socialworld2.png'),
      githubLink: "",
      title: "Social World",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos, recusandae repellendus, dolores eum placeat suscipit doloribus cupiditate aliquid autem ipsum doloremque et rerum ea quasi tenetur error, amet dolorem."
    },
    {
      img: getImageUrl('projects/Socialworld2.png'),
      githubLink: "",
      title: "Social World",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos, recusandae repellendus, dolores eum placeat suscipit doloribus cupiditate aliquid autem ipsum doloremque et rerum ea quasi tenetur error, amet dolorem."
    },
    {
      img: getImageUrl('projects/Socialworld2.png'),
      githubLink: "",
      title: "Social World",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos, recusandae repellendus, dolores eum placeat suscipit doloribus cupiditate aliquid autem ipsum doloremque et rerum ea quasi tenetur error, amet dolorem."
    }
  ];

  return (
    <section className={styles.container} id="Project">
      <div className={styles.contain}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            githubLink={card.githubLink}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};
