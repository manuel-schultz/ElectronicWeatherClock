let timeIntervallID;

$(document).ready(function () {
    updateTime();
    timeIntervallID = setInterval(updateTime, 1000);
})

function updateTime() {
    let timeobject = new Date();
    let h = ('00' + timeobject.getHours()).slice(-2);
    let m = ('00' + timeobject.getMinutes()).slice(-2);
    let s = ('00' + timeobject.getSeconds()).slice(-2);
    console.log(h + ':' + m + ':' + s);

    $('span#time-houres').text(h);
    $('span#time-minutes').text(m);
    $('span#time-seconds').text(s);
}