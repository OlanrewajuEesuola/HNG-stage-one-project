const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();
const day = daysOfTheWeek[date.getDay()];


document.querySelector('.currentDay').innerHTML = day;


function updateCurrentTime () {
    const date = new Date();
    const UTCTimeInMilliseconds = date.getTime();
    document.querySelector('.timeInMilliseconds').innerHTML = UTCTimeInMilliseconds;
}

setInterval(updateCurrentTime, 1000)



