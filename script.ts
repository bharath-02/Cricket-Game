let startButton = document.getElementById('start');
let cskHit = document.getElementById('csk-hit');
let miHit = document.getElementById('mi-hit');
let result = document.getElementById('result');

function start() {
    startButton.setAttribute('disabled','true');
    result.setAttribute('disabled','true');
    miHit.setAttribute('disabled','true');
}