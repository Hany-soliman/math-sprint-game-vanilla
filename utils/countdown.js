import {countdown, countdownPage, splashPage} from "./targetedElements.js";
import {renderGamePage, showGamePage} from "./gamePage.js";

const showCountdown = () => {
    splashPage.hidden = true
    countdownPage.hidden = false
}

const countdownTimer = (value) => {
    countdown.textContent = '3'
    let pageCountdown = setInterval(() => {
        countdown.textContent = value
        if (value == 0) {
            countdown.textContent = 'Go!'
            setTimeout(showGamePage, 1000)
            clearInterval(pageCountdown)
        } else {
            value--
        }
    }, 1000)
    renderGamePage()
}

export {showCountdown, countdownTimer}