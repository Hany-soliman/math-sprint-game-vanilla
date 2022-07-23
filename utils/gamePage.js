import {countdownPage, gamePage, itemContainer} from "./targetedElements.js";
import {createEquations} from "./equations.js"
import {startTimer} from "./time.js";

const showGamePage = ()=>{
    countdownPage.hidden = true
    gamePage.hidden = false
}

const renderGamePage= ()=> {
    itemContainer.textContent = '';
    const topSpacer = document.createElement('div');
    topSpacer.classList.add('height-240');
    const selectedItem = document.createElement('div');
    selectedItem.classList.add('selected-item');
    itemContainer.append( selectedItem);
    createEquations();
    const bottomSpacer = document.createElement('div');
    bottomSpacer.classList.add('height-500');
    itemContainer.appendChild(bottomSpacer);
    gamePage.addEventListener('click', startTimer)
}

export {showGamePage, renderGamePage}