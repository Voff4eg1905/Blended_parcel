import { Notify } from 'notiflix/build/notiflix-notify-aio';



class Timer {
    #date;
    #selector;
    #intervalId = null;
    #refs = {};

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
            const date = this.#convertMs(diff)

            Object.entries(date).forEach(([name, value], index) => {
                this.#refs.fields[index].textContent = this.#addLeadingZero(value);
            })
        }, 1000)
    }
    
    getRefs() {
        this.#refs.fields = document.querySelectorAll(`${this.#selector} .timer__item`);
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
}


const timer = new Timer('.timer', new Date('2023-03-14'));

timer.start();

