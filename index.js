let randomOne = Math.floor(Math.random() * 6) + 1;
let randomTwo = Math.floor(Math.random() * 6) + 1;
console.log(randomOne, randomTwo);
let neutralDialogue = document.querySelector('.status-tab[0]');

const diceOne = document.querySelector('.dice-one');
const diceDots = document.querySelectorAll('.grid-item');
const buttonRoll = document.querySelector('.button-roll');

compareRoll(randomOne,randomTwo)



function compareRoll(a,b)
{
if (a > b) 
{
    // YOU WIN!
    //toggle the dialogue i win
   
    let winner = document.querySelector('.status-tab:nth-of-type(2)');
    neutralDialogue.classList.add('.hidden')
    winner.classList.toggle('.hidden');
    displayDice(a)
    displayDice(b)
}
else if (a < b)
{
    // YOU LOSE!
    let loser = document.querySelector('.status-tab:nth-of-type(3)');
    neutralDialogue.classList.add('.hidden')
    loser.classList.toggle('.hidden');
    displayDice(a)
    displayDice(b)
}
else 
{
    // IT'S A TIE!
    let draw = document.querySelector('.status-tab:nth-of-type(4)');
    neutralDialogue.classList.add('.hidden')
    draw.classList.toggle('.hidden');
    displayDice(a)
    displayDice(b)
}
}

function displayDice(value)
{
if (value === 1)
{
  diceDots[0].classList.add('hidden');
  diceDots[2].classList.add('hidden');
  diceDots[3].classList.add('hidden');
  diceDots[4].classList.toggle('hidden');
  diceDots[5].classList.add('hidden');
  diceDots[6].classList.add('hidden');
  diceDots[8].classList.add('hidden');
}
else if (value === 2)
{
    
    diceDots[2].classList.add('hidden');
    diceDots[3].classList.add('hidden');
    diceDots[5].classList.add('hidden');
    diceDots[6].classList.add('hidden');
   
}
else if (value === 3)
{
    diceDots[2].classList.add('hidden');
    diceDots[3].classList.add('hidden');
    diceDots[4].classList.toggle('hidden');
    diceDots[5].classList.add('hidden');
    diceDots[6].classList.add('hidden');
}

else if (value === 4)
{
   
    diceDots[3].classList.add('hidden');
    diceDots[5].classList.add('hidden');
    
}
else if (value === 5)
{
    diceDots[3].classList.add('hidden');
    diceDots[5].classList.add('hidden');
    diceDots[4].classList.toggle('hidden');
}
else
{
    return diceDots
}
}



function rollIt() {
    compareRoll(randomOne,randomTwo) 

  }