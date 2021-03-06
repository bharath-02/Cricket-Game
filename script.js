var startButton = document.getElementById('start');
var cskHit = document.getElementById('csk-hit');
var miHit = document.getElementById('mi-hit');
var result = document.getElementById('result');

// Creating table for ScoreBoard
function createTable() {
    var cskTable = document.getElementById('csk');
    var miTable = document.getElementById('mi');

    // CSK Scoreboard
    var table1 = document.createElement('table');
    table1.setAttribute('class', 'table table-bordered table-striped table-dark');
    var headCsk = document.createElement('thead');
    var bodyCsk = document.createElement('tbody');
    var rowCsk = document.createElement('tr');
    var heading1csk = document.createElement('th');
    heading1csk.innerHTML = 'Players';
    var heading2csk = document.createElement('th');
    heading2csk.innerHTML = 'B1';
    var heading3csk = document.createElement('th');
    heading3csk.innerHTML = 'B2';
    var heading4csk = document.createElement('th');
    heading4csk.innerHTML = 'B3';
    var heading5csk = document.createElement('th');
    heading5csk.innerHTML = 'B4';
    var heading6csk = document.createElement('th');
    heading6csk.innerHTML = 'B5';
    var heading7csk = document.createElement('th');
    heading7csk.innerHTML = 'B6';
    var heading8csk = document.createElement('th');
    heading8csk.innerHTML = 'Total';
    rowCsk.append(heading1csk, heading2csk, heading3csk, heading4csk, heading5csk, heading6csk, heading7csk, heading8csk);
    headCsk.append(rowCsk);
    for (var i = 0; i < 11; i++) {
        var row = document.createElement('tr');
        var data1 = document.createElement('td');
        data1.innerHTML = 'Player ' + (i + 1);
        var data2 = document.createElement('td');
        data2.id = 'Player' + (i + 1) + 'B' + (i + 1);
        var data3 = document.createElement('td');
        data3.id = 'Player' + (i + 1) + 'B' + (i + 2);
        var data4 = document.createElement('td');
        data4.id = 'Player' + (i + 1) + 'B' + (i + 3);
        var data5 = document.createElement('td');
        data5.id = 'Player' + (i + 1) + 'B' + (i + 4);
        var data6 = document.createElement('td');
        data6.id = 'Player' + (i + 1) + 'B' + (i + 5);
        var data7 = document.createElement('td');
        data7.id = 'Player' + (i + 1) + 'B' + (i + 6);
        var data8 = document.createElement('td');
        data8.id = 'Player' + (i + 1) + 'Total';
        row.append(data1, data2, data3, data4, data5, data6, data7, data8);
        bodyCsk.append(row);
    }
    table1.append(headCsk, bodyCsk);
    cskTable.append(table1);

    // MI Scoreboard
    var table2 = document.createElement('table');
    table2.setAttribute('class', 'table table-bordered table-striped table-dark');
    var headMi = document.createElement('thead');
    var bodyMi = document.createElement('tbody');
    var rowMi = document.createElement('tr');
    var heading1mi = document.createElement('th');
    heading1mi.innerHTML = 'Players';
    var heading2mi = document.createElement('th');
    heading2mi.innerHTML = 'B1';
    var heading3mi = document.createElement('th');
    heading3mi.innerHTML = 'B2';
    var heading4mi = document.createElement('th');
    heading4mi.innerHTML = 'B3';
    var heading5mi = document.createElement('th');
    heading5mi.innerHTML = 'B4';
    var heading6mi = document.createElement('th');
    heading6mi.innerHTML = 'B5';
    var heading7mi = document.createElement('th');
    heading7mi.innerHTML = 'B6';
    var heading8mi = document.createElement('th');
    heading8mi.innerHTML = 'Total';
    rowMi.append(heading1mi, heading2mi, heading3mi, heading4mi, heading5mi, heading6mi, heading7mi, heading8mi);
    headMi.append(rowMi);
    for (var i = 0; i < 11; i++) {
        var row = document.createElement('tr');
        var data1 = document.createElement('td');
        data1.innerHTML = 'Player ' + (i + 1);
        var data2 = document.createElement('td');
        var data3 = document.createElement('td');
        var data4 = document.createElement('td');
        var data5 = document.createElement('td');
        var data6 = document.createElement('td');
        var data7 = document.createElement('td');
        var data8 = document.createElement('td');
        row.append(data1, data2, data3, data4, data5, data6, data7, data8);
        bodyMi.append(row);
    }
    table2.append(headMi, bodyMi);
    miTable.append(table2);
}

// Timer Function
function startTimer() {
    var currTeam = 'CSK';
    var timer = document.getElementById('timer');
    var time = 1;
    var interval = setInterval(() => {
        timer.innerHTML = (time++).toString();
        if (time === 61 && currTeam === 'MI') {
            miHit.setAttribute('disabled', 'true');
            result.removeAttribute('disabled');
            clearInterval(interval);
        } else if (time === 61) {
            cskHit.setAttribute('disabled', 'true');
            miHit.removeAttribute('disabled');
            time = 1;
            currTeam = 'MI';
        }
    }, 1000);
}
// CSK Score Generator
function cskScore() {
    var run = Math.floor(Math.random() * 7);
    totalTeamScore(run);
    totalPlayerScore(run);
    perBallScore(run);
}
// MI Score Generator
function miScore() {

}

//  Total Team Score
function totalTeamScore(run) {
    var total = document.getElementById('csk-score');
    var currRun = parseInt(total.innerHTML);
    run = parseInt(run);
    total.innerHTML = currRun + run;
}

//  Total Player Score
function totalPlayerScore(run) {

}

// Score Per Ball
function perBallScore(run) {

}

function start() {
    startButton.setAttribute('disabled', 'true');
    result.setAttribute('disabled', 'true');
    miHit.setAttribute('disabled', 'true');
    createTable();
    startTimer();
}