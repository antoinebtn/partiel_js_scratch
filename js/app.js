// Exercice 1
const articles = document.querySelectorAll('article')

const informationDivs = document.querySelectorAll('#information div')
const chapitreSpan = informationDivs[1].lastChild
chapitreSpan.textContent = articles.length + ' Chapitres'

// Exercice 2
temps = 0

const timerElement = document.querySelector(".timer")
const hourGlassElement = document.querySelector(".fa-hourglass")

function addSecond() {
  timerElement.innerText = temps
  temps++
  if (temps > 600) {
    hourGlassElement.style.color = "red"
  }
}
setInterval(addSecond, 1000)

// Exercice 3 
// articles.forEach(article => {
//     const articleTitle = article.firstChild
//     const articleContent = article.lastChild
//     articleTitle.addEventListener("click", handleExpendButton)
// });

// function handleExpendButton() {

// }


// Exercice 4
// #video-play
const videoElem = document.querySelector("#video video");
const playButton = document.querySelector("#video-play");
const playButtonIcon = document.querySelector("#video-play i");

playButton.addEventListener("click", handlePlayButton, false);

function handlePlayButton() {
    if (videoElem.paused) {
        videoElem.play();
        playButtonIcon.classList.remove("fa-play");
        playButtonIcon.classList.add("fa-pause");
    } else {
        videoElem.pause();
        playButtonIcon.classList.remove("fa-pause");
        playButtonIcon.classList.add("fa-play");
    }
}

// #video-reset
const resetButton = document.querySelector("#video-reset");

resetButton.addEventListener("click", handleResetButton, false);

function handleResetButton() {
    videoElem.currentTime = 0;
    videoElem.play();
}

// #video-fullscreen
const fullscreenButton = document.querySelector("#video-fullscreen");

fullscreenButton.addEventListener("click", openFullscreen, false);

function openFullscreen() {
  if (videoElem.requestFullscreen) {
    videoElem.requestFullscreen();
  } else if (videoElem.webkitRequestFullscreen) { /* Safari */
    videoElem.webkitRequestFullscreen();
  } else if (videoElem.msRequestFullscreen) { /* IE11 */
    videoElem.msRequestFullscreen();
  }
}

// Exercice 5
window.onload = function() {
    if (sessionStorage.getItem('timer') == "timer") {
        return;
    }

    let timer = sessionStorage.getItem('timer');
}

window.onbeforeunload = function() {
    sessionStorage.setItem("timer", temps);
}

// Exercice 6