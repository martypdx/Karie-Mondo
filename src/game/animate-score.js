function animateScore(score) {
    const scoreAnimation = document.getElementById('score-animation');
    const submitButton = document.getElementById('submit-button');
    scoreAnimation.textContent = '+' + score;
    scoreAnimation.classList.add('elementToFadeOut');
    // use properties from JavaScript on DOM elements:
    submitButton.disabled = true;

    setTimeout(function(){
        submitButton.disabled = false;
        scoreAnimation.classList.remove('elementToFadeOut');
    }, 1000);
}

export default animateScore;