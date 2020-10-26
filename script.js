var startButton = document.getElementById('start');
var cskHit = document.getElementById('csk-hit');
var miHit = document.getElementById('mi-hit');
var result = document.getElementById('result');
function start() {
    startButton.setAttribute('disabled', 'true');
    result.setAttribute('disabled', 'true');
    miHit.setAttribute('disabled', 'true');
}
