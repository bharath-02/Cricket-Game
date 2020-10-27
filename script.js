var startButton = document.getElementById('start');
var cskHit = document.getElementById('csk-hit');
var miHit = document.getElementById('mi-hit');
var result = document.getElementById('result');
var table = null;
function createTable() {
    var cskTable = document.getElementById('csk');
    var miTable = document.getElementById('mi');
    for (var i = 0; i < 11; i++) {
        var table_1 = document.createElement('table');
        table_1.setAttribute('class', 'table');
        var head = document.createElement('thead');
        var row1 = document.createElement('tr');
        var heading1 = document.createElement('th');
        heading1.innerHTML = 'Players';
        var heading2 = document.createElement('th');
        heading2.innerHTML = 'B1';
        var heading3 = document.createElement('th');
        heading3.innerHTML = 'B2';
        var heading4 = document.createElement('th');
        heading4.innerHTML = 'B3';
        var heading5 = document.createElement('th');
        heading5.innerHTML = 'B4';
        var heading6 = document.createElement('th');
        heading6.innerHTML = 'B5';
        var heading7 = document.createElement('th');
        heading7.innerHTML = 'B6';
        var heading8 = document.createElement('th');
        heading8.innerHTML = 'Total';
        var body = document.createElement('tbody');
        var row2 = document.createElement('tr');
        var row2data1 = document.createElement('td');
        var row2data2 = document.createElement('td');
        var row2data3 = document.createElement('td');
        var row2data4 = document.createElement('td');
        var row2data5 = document.createElement('td');
        var row2data6 = document.createElement('td');
        var row2data7 = document.createElement('td');
        var row2data8 = document.createElement('td');
        row1.append(heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8);
        row2.append(row2data1, row2data2, row2data3, row2data4, row2data5, row2data6, row2data7, row2data8);
        head.append(row1);
        body.append(row2);
        table_1.append(head, body);
        cskTable.append(table_1);
    }
}
function start() {
    startButton.setAttribute('disabled', 'true');
    result.setAttribute('disabled', 'true');
    miHit.setAttribute('disabled', 'true');
    createTable();
}
