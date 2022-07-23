import {gamePage} from "./targetedElements.js";
import {playerGuessArray} from "./equations.js"
import {radioValue} from "./selectRadioButton.js";
import {checkPlayerScore} from "./score.js";

let timePlayed = 0
let penaltyTime = 0
let finalTime = 0
let timer

const checkTime = () => {
    if (playerGuessArray.length === +radioValue){
        clearInterval(timer)
        checkPlayerScore(finalTime, timePlayed, penaltyTime)
    }
}

const addTime = () => {
    timePlayed += 0.1
    checkTime()
}

const startTimer = () => {
    timePlayed = 0
    penaltyTime = 0
    finalTime = 0
    timer = setInterval(addTime, 100)
    gamePage.removeEventListener('click', startTimer)
}

export {startTimer, finalTime, penaltyTime, timePlayed}