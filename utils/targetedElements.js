// Pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// Splash Page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');
const btn = document.querySelector('button')
// Countdown Page
const countdown = document.querySelector('.countdown');
// Game Page
const itemContainer = document.querySelector('.item-container');
const rightBtn = document.querySelector('.right')
const wrongBtn = document.querySelector('.wrong')
// Score Page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

export {
    gamePage,
    scorePage,
    splashPage,
    countdownPage,
    startForm,
    radioContainers,
    radioInputs,
    bestScores,
    btn,
    countdown,
    itemContainer,
    rightBtn,
    wrongBtn,
    finalTimeEl,
    baseTimeEl,
    penaltyTimeEl,
    playAgainBtn
}