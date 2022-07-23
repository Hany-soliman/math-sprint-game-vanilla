import {countdown, countdownPage, splashPage} from "./targetedElements.js";
import {renderGamePage, showGamePage} from "./gamePage.js";

const showCountdown = () => {
    splashPage.hidden = true
    countdownPage.hidden = false
}

const countdownTimer = (value) => {
    countdown.textContent = value
    const pageCountdown = setInterval(() => {
        value--
        if (value === 0) {
            countdown.textContent = 'Go!'
        } else if (value === -1) {
            showGamePage()
            clearInterval(pageCountdown)
        } else {
            countdown.textContent = value
        }
    }, 1000)
    renderGamePage()
}

export {showCountdown, countdownTimer}