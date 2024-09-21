export const initTimers = () => {
  const timerElements = document.querySelectorAll('[data-timer-deadline]');

  timerElements.forEach(timerElement => {
    const deadline =
    new Date(
        new Date(timerElement.getAttribute('data-timer-deadline')).getTime() +
     (3 * 60 * 60 * 1000));

    const getDeclension = (number, forms) =>
      forms[(number % 10 === 1 && number % 100 !== 11) ? 0 :
         (number % 10 >= 2 && number % 10 <= 4 &&
          (number % 100 < 10 || number % 100 >= 20)) ? 1 : 2];

    const updateTimer = () => {
      const currentTime = new Date();
      const remainingTime = deadline - currentTime;

      if (remainingTime <= 0) {
        timerElement.style.display = 'none';
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours =
      Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes =
      Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      const daysElement = timerElement.querySelector('#days');
      const daysElementNext = daysElement.nextElementSibling;


      const hoursElement = timerElement.querySelector('#hours');
      const hoursNextElement = hoursElement.nextElementSibling;


      const minutesElement = timerElement.querySelector('#minutes');
      const minutesNextElement = minutesElement.nextElementSibling;


      const secondsElement = timerElement.querySelector('#seconds');
      const secondsNextElement = secondsElement.nextElementSibling;


      if (remainingTime < 24 * 60 * 60 * 1000) {
        const promoTitle = document.querySelector('.promo__timer');
        promoTitle.style.justifyContent = 'center';
        daysElement.style.display = 'none';
        daysElementNext.style.display = 'none';
        hoursElement.textContent =
         `${(hours + days * 24).toString().padStart(2, '0')} `;
        hoursNextElement.textContent =
        getDeclension(hours + days * 24, ['час', 'часа', 'часов']);
        minutesElement.textContent = `${minutes.toString().padStart(2, '0')} `;
        minutesNextElement.textContent =
         getDeclension(minutes, ['минута', 'минуты', 'минут']);
        secondsElement.textContent =
        `${seconds.toString().padStart(2, '0')} `;
        secondsNextElement.textContent =
        getDeclension(seconds, ['секунда', 'секунды', 'секунд']);
      } else {
        const promoTitle = document.querySelector('.promo__timer');
        promoTitle.style.justifyContent = 'center';
        daysElement.textContent =
        `${days.toString().padStart(2, '0')} `;
        daysElementNext.textContent =
         getDeclension(days, ['день', 'дня', 'дней']);
        hoursElement.textContent = `${hours.toString().padStart(2, '0')} `;
        hoursNextElement.textContent =
        getDeclension(hours, ['час', 'часа', 'часов']);
        minutesElement.textContent = `${minutes.toString().padStart(2, '0')} `;
        minutesNextElement.textContent =
        getDeclension(minutes, ['минута', 'минуты', 'минут']);
        secondsElement.textContent = '';
        secondsNextElement.textContent = '';
      }
    };

    setInterval(updateTimer, 1000);
    updateTimer();
  });
};
