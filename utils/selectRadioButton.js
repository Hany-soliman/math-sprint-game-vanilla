import {btn, radioContainers} from "./targetedElements.js";
let radioValue;

const selectRadioButton = () => {
    radioContainers.forEach(radioEl => {
        radioEl.classList.remove('selected-label')
        if (radioEl.children[1].checked) {
            radioEl.classList.add('selected-label')
            btn.disabled = false
            btn.title = 'Start the game!'
            getRadioValue(radioEl)
        }
    })
}

const deselectRadioButton = () => {
    radioContainers.forEach(radioEl => {
        radioEl.classList.remove('selected-label')
            btn.disabled = true
        btn.title = 'Select the amount of questions first!'
    })
}

const getRadioValue = (el) => {
    return radioValue = el.children[1].value
}

export {selectRadioButton, getRadioValue, radioValue, deselectRadioButton}