function finalScoreMessage(score, results, maxLength) {
    if(score <= maxLength * (1 / 3)) {
        return results.lost;
    } 
    else if(score <= maxLength * (2 / 3)) {
        return results.okay;
    }
    else if(score > maxLength * (2 / 3) && score <= maxLength) {
        return results.win;
    }
    else {
        // cheat? ;)
    }
}

export default finalScoreMessage;

