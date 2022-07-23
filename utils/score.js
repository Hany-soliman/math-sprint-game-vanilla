import {equationsArray, playerGuessArray} from "./equations.js";
import {
    baseTimeEl, bestScores,
    finalTimeEl,
    gamePage, itemContainer,
    penaltyTimeEl,
    playAgainBtn,
    scorePage,
    splashPage
} from "./targetedElements.js";
import {finalTime} from "./time.js";
import {radioValue} from "./selectRadioButton.js";

let bestScoresArr = []

const showScorePage = ()=>{
    gamePage.hidden = true
    scorePage.hidden = false
    setTimeout(()=>playAgainBtn.hidden = false, 1000)
}

const renderScorePage = (final, played, penalty)=>{
    baseTimeEl.textContent = `Base Time: ${played.toFixed(1)}s`;
    penaltyTimeEl.textContent = `Penalty: +${penalty.toFixed(1)}s`;
    finalTimeEl.textContent = `${final.toFixed(1)}s`;
    itemContainer.scrollTo({top:0})
    showScorePage()
}
const playAgain = ()=>{
    finalTimeEl.textContent = ''
    baseTimeEl.textContent = ''
    penaltyTimeEl.textContent = ''
    scorePage.hidden = true
    playAgainBtn.hidden = true
    splashPage.hidden = false
}

const checkPlayerScore = (final, played, penalty)=>{
    for (const [i, equation] of equationsArray.entries()) {
        let correctAnswer = equation.evaluated
        if(correctAnswer !== playerGuessArray[i]){
            penalty += 0.5
        }
    }
    final = played + penalty
    renderScorePage(final, played, penalty)
    updateBestScores(final)
    return final
}

const updateBestScores = (finalScore)=>{
    for (const [i, score] of bestScoresArr.entries()) {
        if(radioValue == score.questions){
            const savedBestScore = bestScoresArr[i].bestScore
            if(savedBestScore === 0 || finalScore < savedBestScore){
                bestScoresArr[i].bestScore = finalScore.toFixed(1)
            }
        }
    }
    renderScoresOnSplashPage()
    localStorage.setItem('BestScores', JSON.stringify(bestScoresArr))
}

const renderScoresOnSplashPage = ()=>{
    for (const [i, value] of bestScores.entries()) {
        value.textContent = `${bestScoresArr[i].bestScore}s`
    }
}

const storeScoreInLocalstorage = ()=>{
    if(!localStorage.getItem('BestScores')){
        bestScoresArr = [
            {questions: 10, bestScore: finalTime},
            {questions: 25, bestScore: finalTime},
            {questions: 50, bestScore: finalTime},
            {questions: 99, bestScore: finalTime},
        ]
        localStorage.setItem('BestScores', JSON.stringify(bestScoresArr))
    }else{
        bestScoresArr = JSON.parse(localStorage.BestScores)
    }
    renderScoresOnSplashPage()
}

export {checkPlayerScore, showScorePage, playAgain, storeScoreInLocalstorage}