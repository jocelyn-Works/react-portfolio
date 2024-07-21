import { useEffect, useRef } from 'react';

const useTxtRotate = (toRotate, period) => {
  const elRef = useRef(null);
  const loopNumRef = useRef(0);
  const txtRef = useRef("");
  const isDeletingRef = useRef(false);
  const isWaitingRef = useRef(false);
  const timeoutRef = useRef(null); // Référence pour le timeout

  useEffect(() => {
    const tick = () => {
      if (isWaitingRef.current) {
        isWaitingRef.current = false;
        timeoutRef.current = setTimeout(tick, period); // Pause après chaque phrase
        return;
      }

      const i = loopNumRef.current % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeletingRef.current) {
        txtRef.current = fullTxt.substring(0, txtRef.current.length - 1);
      } else {
        txtRef.current = fullTxt.substring(0, txtRef.current.length + 1);
      }

      if (elRef.current) {
        elRef.current.innerHTML = `<span class="wrap">${txtRef.current}</span>`;
      }

      let delta = 150; // Délai constant pour la frappe de chaque caractère

      if (isDeletingRef.current) {
        delta /= 2; // Suppression plus rapide
      }

      if (!isDeletingRef.current && txtRef.current === fullTxt) {
        isWaitingRef.current = true; // Indique d'attendre après l'affichage complet de chaque phrase
        timeoutRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          tick();
        }, period); // Pause après chaque phrase
        return;
      } else if (isDeletingRef.current && txtRef.current === "") {
        isDeletingRef.current = false;
        loopNumRef.current++;
        delta = 900; // Petite pause avant de commencer une nouvelle phrase
      }

      timeoutRef.current = setTimeout(tick, delta);
    };

    tick();

    // Nettoyer le timeout à la sortie de l'effet
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [toRotate, period]);

  return elRef;

  
};

export default useTxtRotate;
