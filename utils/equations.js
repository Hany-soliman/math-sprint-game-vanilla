import {radioValue} from "./selectRadioButton.js";
import {shuffle} from "./shuffle.js";
import {itemContainer, rightBtn, wrongBtn} from "./targetedElements.js";

let valueY = 0;
let playerGuessArray = []
let equationsArray = []
let firstNumber
let secondNumber
let equationObject = {}
const wrongFormat = []


const getRandomInt = (x) => Math.floor(Math.random() * Math.floor(x))

const createCorrectEquations = (correctEquations) => {
    for (let i = 0; i < correctEquations; i++) {
        firstNumber = getRandomInt(9);
        secondNumber = getRandomInt(9);
        const equationValue = firstNumber * secondNumber;
        const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
        equationObject = {value: equation, evaluated: 'true'};
        equationsArray.push(equationObject);
    }
}
const createWrongEquations = (wrongEquations) => {
    for (let i = 0; i < wrongEquations; i++) {
        firstNumber = getRandomInt(9);
        secondNumber = getRandomInt(9);
        const equationValue = firstNumber * secondNumber;
        wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
        wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
        wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
        const formatChoice = getRandomInt(2);
        const equation = wrongFormat[formatChoice];
        equationObject = {value: equation, evaluated: 'false'};
        equationsArray.push(equationObject);
    }
}

const createEquations = () => {
    playerGuessArray = []
    equationsArray = []
    valueY = 0
    const correctEquations = getRandomInt(radioValue)
    const wrongEquations = radioValue - correctEquations
    createCorrectEquations(correctEquations)
    createWrongEquations(wrongEquations)
    shuffle(equationsArray)
    renderQuestionsOnDom(equationsArray)
}


const renderQuestionsOnDom = () => {
    for (const equation of equationsArray) {
        const item = document.createElement('div')
        item.classList.add('item')
        const equationText = document.createElement('h1')
        equationText.textContent = equation.value
        item.appendChild(equationText)
        itemContainer.appendChild(item)
    }
}

const selectAndScroll = (bool)=>{
        valueY += 80;
        itemContainer.scroll(0, valueY);
        return  bool ? playerGuessArray.push('true') : playerGuessArray.push('false');

}


rightBtn.addEventListener('click', () => selectAndScroll(true))
wrongBtn.addEventListener('click', () => selectAndScroll(false))

export {createEquations, renderQuestionsOnDom, playerGuessArray, equationsArray, valueY}


