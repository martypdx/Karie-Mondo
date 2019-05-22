function isGuessCorrect(choiceId, match) {
    let correctChoice;
    if(match) {
        correctChoice = 'sparks-joy';
    }
    else {
        correctChoice = 'thank-you';
    }

    return choiceId === correctChoice;
}

export default isGuessCorrect;