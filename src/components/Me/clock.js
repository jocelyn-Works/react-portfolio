export const clock = (heureElem, minuteElem, secondeElem) => {
    // clock.js

  if (!heureElem || !minuteElem || !secondeElem) return;

  const date = new Date();
  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  heureElem.style.transform = `rotate(${hour}deg)`;
  minuteElem.style.transform = `rotate(${minute}deg)`;
  secondeElem.style.transform = `rotate(${second}deg)`;


  };