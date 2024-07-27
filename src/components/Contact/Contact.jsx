import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

import { motion, useScroll } from "framer-motion";

export const Contact = () => {
  const [capVal, setCapVal] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const recaptchaRef = useRef(null);

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", message: "" };

    // Validation pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
      isValid = false;
    }

    // Validation pour le message
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Valider le formulaire
    if (!validate()) {
      return;
    }

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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Envoyé !",
          text: "Message envoyé avec succès !",
          icon: "success",
        });

        // Réinitialiser les données du formulaire
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });
        setCapVal(null);
        setErrors({
          nom: "",
          prenom: "",
          email: "",
          message: "",
        });

        // Réinitialiser le captcha
        recaptchaRef.current.reset();
      } else {
        Swal.fire({
          title: "Erreur",
          text: "Une erreur s'est produite lors de l'envoi du message.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erreur",
        text: "Une erreur s'est produite lors de l'envoi du message.",
        icon: "error",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ---------- animation  ----------  //
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });
  // ---------------------------- //


  return (
    <motion.div
    id="Contact"
    ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }} >
    <section  className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.contain1}></div>
        <div className={styles.containForm}>
          <form onSubmit={onSubmit}>
            <div className={styles.formTitle}>
              <h2>Contacter Moi</h2>
            </div>

            <div className={styles.formRow}>
              <div className={styles.userBox}>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
                <label>Nom</label>
              </div>
              <div className={styles.space}></div>

              <div className={styles.userBox}>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
                <label>Prénom</label>
              </div>
            </div>

            <div className={styles.userBox}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className={styles.userBox}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label>Message</label>
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
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
        </div>
      </div>
    </section>
    </motion.div>
  );
};
