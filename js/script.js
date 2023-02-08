let hours = document.getElementById("h"),
    minutes = document.getElementById("m"),
    seconds = document.getElementById("s"),
    amPm = document.getElementById("ap");

setInterval(() => {
    setTimes()
})

function setTimes() {
    let d = new Date();
    let h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
    halfDay = "AM";

    halfDay =  (h >= 12) ? "PM" : "AM";

    h = (h === 0) ? 12 : (h > 12) ? (h - 12) : h;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    amPm.innerText = halfDay;
}