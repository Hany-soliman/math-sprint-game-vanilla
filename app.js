import {startForm,  playAgainBtn} from "./utils/targetedElements.js";
import {deselectRadioButton, selectRadioButton} from "./utils/selectRadioButton.js";
import {showCountdown, countdownTimer} from "./utils/countdown.js"
import {playAgain, storeScoreInLocalstorage} from "./utils/score.js";

const selectQuestionsAmount = (e) => {
    e.preventDefault()
    deselectRadioButton()
    showCountdown()
    countdownTimer(3)
}

startForm.addEventListener('click', selectRadioButton)
startForm.addEventListener('submit', selectQuestionsAmount)
playAgainBtn.addEventListener('click', playAgain)
window.addEventListener('DOMContentLoaded', storeScoreInLocalstorage)