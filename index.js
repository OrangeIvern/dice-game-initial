
  

function displayDice(value)
{
    const diceDots = document.querySelectorAll('.grid-item');
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





// }
  
  // Get a reference to the button element
  
  
  let neutralDialogue = document.querySelector('.status-tab:nth-of-type(1)');
  const diceOne = document.querySelector('.dice-one');

    



  function buttonClicked()
   {
      let randomOne = Math.floor(Math.random() * 6) + 1;
      let randomTwo = Math.floor(Math.random() * 6) + 1;
      
    //call compare dice
      compareRoll(randomOne,randomTwo)
      displayDice(randomOne)
      displayDice(randomTwo)
      console.log(displayDice(randomOne));
    console.log(displayDice(randomTwo));
  }
  
 
  const button = document.getElementById("button-roll");
  
  // Add event listener to the button
  button.addEventListener("click", buttonClicked);




//compare dice values
  function compareRoll(a,b)
      {
        let stats = document.querySelectorAll('.stats');
        if (a > b) 
      {
         
        stats[0].classList.add('hidden');
        stats[1].classList.remove('hidden');
        stats[2].classList.add('hidden');
        stats[3].classList.add('hidden');
        console.log("You win!");
         
      }
      else if (a < b)
      {
        stats[0].classList.add('hidden');
        stats[1].classList.add('hidden');
        stats[2].classList.remove('hidden');
        stats[3].classList.add('hidden');
        console.log("You Lose!");
      }
      else 
      {
        stats[0].classList.add('hidden');
        stats[1].classList.add('hidden');
        stats[2].classList.add('hidden');
        stats[3].classList.remove('hidden');
        console.log("Draw");
      }
      }