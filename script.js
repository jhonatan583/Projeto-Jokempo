const playhuman = (humanchoice) => {
    console.log(humanchoice)
    console.log('retorno' + playmachine())
   
}


const playmachine = () => {
    const machine = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return machine[randomnumber]


}