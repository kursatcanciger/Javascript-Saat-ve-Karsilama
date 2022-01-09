let userName = prompt("Adınız nedir?")

let nameSpan = document.querySelector("#myName");

nameSpan.innerHTML = userName;

let clockSpan = document.querySelector("#myClock");

showTime();

function showTime() {
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let today = new Date();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = gunler[today.getDay()];

    function checkTime(i) {
        if (i < 10) { i = '0' + i };
        return i;
    };

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    clockSpan.innerHTML = `${hour}:${minute}:${second} ${day}`;

    setTimeout(showTime, 500);
}