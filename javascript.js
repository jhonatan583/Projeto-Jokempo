const result = document.querySelector('.result')
const ScorePlayer = document.querySelector('#player-score')
const ScoreMachine = document.querySelector('#machine-score')
const ResetButton = document.querySelector('#reset')


let ScorePlayerNumber = 0
let ScoreMachineNumber = 0

const GAME_OPTIONS = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
const playhuman = (humanchoice) => {

    playTheGame(humanchoice, playmachine())
}


const playmachine = () => {
    const choices = [GAME_OPTIONS.STONE, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]
}

const playTheGame = (human, machine) => {

    console.log('humano :' + human + ' maquina :' + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate"

    }
    else if ((human === 'paper' && machine === 'stone')
        || (human === 'stone' && machine === 'scissors')
        || (human === 'scissors' && machine === 'paper')) {

        ScorePlayerNumber++
        ScorePlayer.innerHTML = ScorePlayerNumber


        result.innerHTML = "Você Ganhou"


    }
    else {
        ScoreMachineNumber++
        ScoreMachine.innerHTML = ScoreMachineNumber
        result.innerHTML = "Você Perdeu"
    }

    const ResetGame = () => {

        ScorePlayerNumber = 0;
        ScoreMachineNumber = 0;

        ScorePlayer.innerHTML = ScorePlayerNumber
        ScoreMachine.innerHTML = ScoreMachineNumber
        result.innerHTML = "Jogo Reiniciado!";
    };
    ResetButton.addEventListener('click', ResetGame)

}