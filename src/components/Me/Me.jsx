import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";
import { clock } from "./clock";
import useTxtRotate from "./useTxtRotate";
import ReCAPTCHA from "react-google-recaptcha";

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

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [capVal, setCapVal] = useState(null);

  const toggleModal = () => {
    setModal(!modal);

    if (modal) {
      document.body.classList.add("activeModal");
    } else {
      document.body.classList.remove("activeModal");
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Valider le captcha
    if (!capVal) {
      Swal.fire({
        title: "Erreur",
        text: "Veuillez valider le captcha",
        icon: "error",
      });
      return;
    }

    const formDataObj = {
      ...formData,
      access_key: "abc48520-a554-420b-a567-e6c373c0319f",
    };

    const json = JSON.stringify(formDataObj);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Envoyé !",
        text: "Message envoyé avec succès !",
        icon: "success",
      });

      // Fermer la popup de formulaire
      toggleModal();

      // Réinitialiser les données du formulaire
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        message: "",
      });
      setCapVal(null);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <h1 className={styles.title}>Salut, je m'appelle Jocelyn</h1>
        <div className={styles.description}>
          <span ref={txtRotateRef} className={styles.txtrotate} />
        </div>
        <button onClick={toggleModal} className={styles.contactBtn}>
          Contacter moi
        </button>
        {modal && (
          <div className={styles.modal}>
            <div onClick={toggleModal} className={styles.overlay}></div>
            <div className={styles.modalContent}>
              <form onSubmit={onSubmit}>
                <div className={styles.formTitle}>
                  <h2>Contacter Moi</h2>
                </div>

                <div className={styles.formRow}>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={styles.appFormControl}
                    placeholder="Nom"
                    required
                  />
                  <div className={styles.space}></div>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className={styles.appFormControl}
                    placeholder="Prénom"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.appFormControl}
                  placeholder="Email"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.appFormControl}
                  placeholder="Message"
                  required
                ></textarea>

                <ReCAPTCHA
                  className={styles.reCaptcha}
                  sitekey="6Le2LQ8qAAAAAB1au6jp3-CEG4IuOjJGwHIEhgV-"
                  onChange={(val) => setCapVal(val)}
                />
                <div className={styles.btnForm}>
                  <button
                    type="submit"
                    className={styles.contactBtn}
                    disabled={!capVal}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
              <div className={styles.closeModal} onClick={toggleModal}>
                CLOSE
              </div>
            </div>
          </div>
        )}
      </div>
      {isFlipped ? (
        <div
          className={`${styles.horlogeContainer} ${
            isAnimating ? styles.slideUpAndFadeOut : ""
          }`}
          onClick={handleToggleClick}
        >
          <div className={styles.horloge}>
            <div className={styles.wrap}>
              <div ref={heureRef} className={`${styles.heure} heure`}></div>
              <div ref={minuteRef} className={`${styles.minute} minute`}></div>
              <div
                ref={secondeRef}
                className={`${styles.seconde} seconde`}
              ></div>
              <div className={styles.point}></div>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={getImageUrl("Me/Me.png")}
          alt="image of me"
          className={`${styles.MeImg} ${
            isAnimating ? styles.slideUpAndFadeOut : ""
          }`}
          onClick={handleToggleClick}
        />
      )}
      <div className={styles.topBlur} />
    </section>
  );
};
