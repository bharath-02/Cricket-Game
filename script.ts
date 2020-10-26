var startGame = false;
var currRow = 0, currCol = 0;
var startGameButton = <HTMLButtonElement>document.querySelector('#start');
var cskHit = <HTMLButtonElement>document.querySelector("#csk-hit");
var miHit = <HTMLButtonElement>document.querySelector("#mi-hit");
var winnerDetails = <HTMLDivElement>document.querySelector("#winner-details");
var cskScore=0, miScore=0;
var cskPlayer=0, miPlayer=0;

var scoreBoard = {
    0 : 'Team',
    1 : 'B1',
    2 : 'B2',
    3 : 'B3',
    4 : 'B4',
    5 : 'B5',
    6 : 'B6',
    7 : 'Total'
};


class Game {
    team: Array<Team>=[];
    winningTeam;
    manOfTheMatch;
    currentTeam:Team;

    constructor() {
        startGameButton.setAttribute("disabled",'false');
        (currRow = 1), (currCol = 1);
        this.team.push(new Team("CSK"));
        this.team.push(new Team("MI"));
        // this.currentTeam = this.team[0];
    }

    displayTeam(name , id) {
        var displayElement = <HTMLDivElement>document.querySelector(`#${id}`);
        displayElement.innerHTML = "";
        for(var i=0;i<11;i++) {
            var row = document.createElement('div');
            row.setAttribute('class','row');
            for(var j=0;j<8;j++) {
                var col;
                if(j==0 || j==7) {
                    col=document.createElement('div');
                    col.setAttribute('class','col-3');
                }
                else {
                    col=document.createElement('div');
                    col.setAttribute('class','col-1');
                }
                col.setAttribute('row',i.toString());
                col.setAttribute('col',j.toString());
                col.setAttribute('name',name.split(' ').join(''));
                if(i===0 && j===0) {
                    col.innerHTML = name;
                }
                else if(i===0) {
                    col.innerHTML = scoreBoard[j];
                }
                else if(j===0) {
                    col.innerHTML = `Player ${i}`;
                }
                row.append(col);
            }
            displayElement.append(row);
        }
    }


}

class Team {
    name;
    players: Array<Player> = [];
    score: number = 0;
    constructor(name: string) {
        this.name = name;
        for(let index=1; index<=11; index++) {
            this.players.push(new Player(`Player${index}`));
        }
    }
}

class Player {
    name: string;
    score: [null,null,null,null,null,null];
    numberOfBalls: number = 0;
    constructor(name: string) {
        this.name= name;
    }
}

let game= new Game();
