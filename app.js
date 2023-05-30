const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choice =['piedra', 'papel', 'tijeras']
const fileName = {
    'piedra': 'images/rock.png',
    'papel': 'images/paper.png',
    'tijeras': 'images/scissors.png'
}

let positiveScore=0;
let negativeScore=0;

buttons.forEach(button => button.addEventListener('click', starGame));

function starGame(event){
    //player
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;

    //NPC
    const computerChoice = getComputedChoice()

    //Quien gana
    const winner = getWinner(playerChoice, computerChoice);

    //Resultado
    imgPlayerChoice.setAttribute('src', fileName[playerChoice]);
    imgComputerChoice.setAttribute('src', fileName[computerChoice]);

    let result;

    if (winner === 'player') {
        result = 'ganas';
        ++positiveScore;
    } else if (winner === 'computer') {
        result = 'pierdes'
        ++negativeScore;
    } else { // empate
        result = 'empatas'
    }

    pResult.innerHTML = `Tu ${result} escogiendo <strong>${playerChoice}</strong> en contra de <strong>${computerChoice}</strong>.`;
    pScore.innerHTML = `Haz ganado ${positiveScore} veces. Haz perdido ${negativeScore} veces.`
}

function getComputedChoice(){
    const i = parseInt(Math.random()*3);

    return choice[i];
}

function getWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Empate';
    }

    if (playerChoice === 'piedra') {
        if (computerChoice === 'papel') {
            return 'computer';
        } else {//tijeras
            return 'player';
        }
    } else if (playerChoice === 'papel') {
        if (computerChoice === 'piedra') {
            return 'player';
        } else {//tijeras
            return 'computer';
        }
    } else { //tijeras
        if (computerChoice === 'papel') {
            return 'player';
        } else {//piedra
            return 'computer';
        }
    }

if (winner) {
    
} else {
    
}
}