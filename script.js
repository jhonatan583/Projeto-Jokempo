const result = (document.querySelector('.result'))
const humanScore = (document.querySelector('#human-score'))
const machineScore = (document.querySelector('#machine-score'))

let humanScoreNumber = 0
let machineScoreNumber = 0

const playhuman = (humanchoice) => {
    playTheGame(humanchoice, playmachine())
}


const playmachine = () => {
    const machine = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)


    return machine[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('human:' + human + "maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    }
    else if ((human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você Ganhou!"
    }
    else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Você Perdeu!"
    }

}