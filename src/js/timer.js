import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Timer {
  #date;
  #selector;
  #intervalId = null;
  #refs = {};

  #datasetValues = {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  };

  constructor(rootSelector, targetDate) {
    this.#date = targetDate;
    this.#selector = rootSelector;
  }

  start() {
    console.log(this.#date);
    if (this.#date < Date.now()) {
      return Notify.failure('Selected date is in past');
    }
    this.getRefs();
    this.#intervalId = setInterval(() => {
      const diff = this.#date - Date.now();
      if (diff <= 0) {
        Notify.success('Time is up!');
        clearInterval(this.#intervalId);
        return;
      }

      const date = this.#convertMs(diff);

      Object.entries(date).forEach(([name, value], index) => {
        const item = this.#refs.fields[index];
        item.textContent = this.#addLeadingZero(value);
        item.dataset.title = this.#declensionNum(
          value,
          this.#datasetValues[name]
        );
        this.#drawCircle(index, value);
      });
    }, 1000);
  }

  getRefs() {
    this.#refs.fields = document.querySelectorAll(
      `${this.#selector} .timer__item`
    );
    this.#refs.canvasArray = document.querySelectorAll(
      `${this.#selector} canvas`
    );
  }

  #convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  }

  #addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }

  #declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  #drawCircle(index, value) {
    if (index === 0) {
      return;
    }
    const ctx = this.#refs.canvasArray[index].getContext('2d');
    ctx.clearRect(0, 0, 200, 200);
    ctx.beginPath();
    ctx.strokeStyle = 'red';

    ctx.lineWidth = 4;
    // ctx.lineCap = 'round';

    let path = 60 / 2;

    if (index === 1) {
      path = 24 / 2;
    }
    ctx.arc(
      100,
      100,
      100 - 2,
      (Math.PI / path) * (value - path / 2),
      (Math.PI / path) * (path * 2 - path / 2 - 0.01),
      true
    );

    ctx.stroke();
  }
}

const timer = new Timer('.timer', new Date('2023-03-14'));

const btnStartEl = document.querySelector('.start');

btnStartEl.addEventListener('click', () => {
  timer.start();
});
