function timer() {
    const currentDay = document.querySelector(".current-day");
    const currentTime = document.querySelector(".current-time");

    const date = new Date();
    const day = date.getDay();
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayOfWeek = daysOfWeek[day];
    console.log(dayOfWeek);

    const time = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
    console.log(time);

    currentDay.innerHTML = dayOfWeek;
    currentTime.innerHTML = time;

    setTimeout("timer();", 1000);
}
