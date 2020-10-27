let startButton = document.getElementById('start');
let cskHit = document.getElementById('csk-hit');
let miHit = document.getElementById('mi-hit');
let result = document.getElementById('result');
var table = null;

function createTable() {
    let cskTable = document.getElementById('csk');
    let miTable = document.getElementById('mi');
    for(let i=0;i<11;i++) {
        let table = document.createElement('table');
        table.setAttribute('class','table');

        let head = document.createElement('thead');
        let row1 = document.createElement('tr');
        let heading1 = document.createElement('th');
        heading1.innerHTML = 'Players';
        let heading2 = document.createElement('th');
        heading2.innerHTML = 'B1';
        let heading3 = document.createElement('th');
        heading3.innerHTML = 'B2';
        let heading4 = document.createElement('th');
        heading4.innerHTML = 'B3';
        let heading5 = document.createElement('th');
        heading5.innerHTML = 'B4';
        let heading6 = document.createElement('th');
        heading6.innerHTML = 'B5';
        let heading7 = document.createElement('th');
        heading7.innerHTML = 'B6';
        let heading8 = document.createElement('th');
        heading8.innerHTML = 'Total';

        let body = document.createElement('tbody');
        let row2 = document.createElement('tr');
        let row2data1 = document.createElement('td');
        let row2data2 = document.createElement('td');
        let row2data3 = document.createElement('td');
        let row2data4 = document.createElement('td');
        let row2data5 = document.createElement('td');
        let row2data6 = document.createElement('td');
        let row2data7 = document.createElement('td');
        let row2data8 = document.createElement('td');

        row1.append(heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8);
        row2.append(row2data1, row2data2, row2data3, row2data4, row2data5, row2data6, row2data7, row2data8);
        head.append(row1);
        body.append(row2);
        table.append(head, body);
        cskTable.append(table);
    }
}

function start() {
    startButton.setAttribute('disabled','true');
    result.setAttribute('disabled','true');
    miHit.setAttribute('disabled','true');
    createTable();
}