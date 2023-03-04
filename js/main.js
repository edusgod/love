
// PRIMER MENSAJE

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "Hola Amor!"
}, 1000);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "Espero que"
}, 2500);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "estés bien."
}, 4000);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "Esta pequeña sorpresa"
}, 6000);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "es para ti"
}, 7600);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "porque..."
}, 9100);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "TE AMO <3"
}, 10600);

// AUTOR

setTimeout(function () {
    const message = document.getElementById('autor');
    message.innerHTML = "Para Sindy de Edu"
}, 7600);

// AUDIO MENSAJE

var audio = document.getElementById('audioedu');
var audioBTN = document.getElementById('audioBTN');
var count = 0;

function audioFunciones() {

    if (count == 0) {
        count = 1;
        audio.play();

    } else {
        count = 0;
        audio.pause();
    }

}

