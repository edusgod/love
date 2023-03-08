
// PRIMER MENSAJE

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "Hola Amor!"
}, 0);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "Este mensaje"
}, 2500);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "es para ti"
}, 4000);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "desde lo más"
}, 6000);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "profundo de mi corazón."
}, 7600);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "porque..."
}, 9100);

setTimeout(function () {
    const message = document.getElementById('mensaje');
    message.innerHTML = "TE AMO <a>❤️</a>"
}, 10600);

// AUTOR

setTimeout(function () {
    const message = document.getElementById('creditos');
    message.innerHTML = "de Edu"
}, 0);

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

