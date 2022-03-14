const deadline = '2022-12-31';

const getTimeRemaining = endTime => {
    const t = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    const time = {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
    
    return time;
}

const initializeClock = endTime => {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const updateClock = () => {
        const t = getTimeRemaining(endTime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
        clearInterval(timeInterval);
        }
    }

    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
}

initializeClock(deadline);
