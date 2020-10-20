//created switch statement with game options

const gameRules = choice => {
    const lowChoice = choice.toLowerCase();
    let beatsIt;
switch(lowChoice){
    case 'scissors':
        beatsIt = "rock";
         break;
    case 'paper': 
        beatsIt = "scissors";
        break;
    case 'rock':
        beatsIt = "paper";
        break;
    default: 
        beatsIt = "tie";

}

return beatsIt;
};

/* I feel this statement is easiest to read. However, I don't know 
how to get my return statement to "add" to the counter 
(my C and P arrays). Or should I be doing that with a different
function? */

