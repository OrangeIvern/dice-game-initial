
  

function displayDice(value)
{
   
if (value === 6)
{
  dice[0].classList.add('hidden');
  dice[1].classList.add('hidden');
  dice[2].classList.add('hidden');
  dice[3].classList.add('hidden');
  dice[4].classList.add('hidden');
  dice[5].classList.remove('hidden');
}
else if (value === 5)
{
  dice[0].classList.add('hidden');
  dice[1].classList.add('hidden');
  dice[2].classList.add('hidden');
  dice[3].classList.add('hidden');
  dice[4].classList.remove('hidden');
  dice[5].classList.add('hidden');

   
}
else if (value === 4)
{
  dice[0].classList.add('hidden');
  dice[1].classList.add('hidden');
  dice[2].classList.add('hidden');
  dice[3].classList.remove('hidden');
  dice[4].classList.add('hidden');
  dice[5].classList.add('hidden');

}

else if (value === 3)
{
  dice[0].classList.add('hidden');
  dice[1].classList.add('hidden');
  dice[2].classList.remove('hidden');
  dice[3].classList.add('hidden');
  dice[4].classList.add('hidden');
  dice[5].classList.add('hidden');

 
    
}
else if (value === 2)
{
    dice[0].classList.add('hidden');
    dice[1].classList.remove('hidden');
    dice[2].classList.add('hidden');
    dice[3].classList.add('hidden');
    dice[4].classList.add('hidden');
    dice[5].classList.add('hidden');


}
else
{
  dice[0].classList.remove('hidden');
  dice[1].classList.add('hidden');
  dice[2].classList.add('hidden');
  dice[3].classList.add('hidden');
  dice[4].classList.add('hidden');
  dice[5].classList.add('hidden');
}
}
function displayDiceComp(value)
{
   
if (value === 6)
{
  diceComp[0].classList.add('hidden');
  diceComp[1].classList.add('hidden');
  diceComp[2].classList.add('hidden');
  diceComp[3].classList.add('hidden');
  diceComp[4].classList.add('hidden');
  diceComp[5].classList.remove('hidden');
}
else if (value === 5)
{
  diceComp[0].classList.add('hidden');
  diceComp[1].classList.add('hidden');
  diceComp[2].classList.add('hidden');
  diceComp[3].classList.add('hidden');
  diceComp[4].classList.remove('hidden');
  diceComp[5].classList.add('hidden');

   
}
else if (value === 4)
{
  diceComp[0].classList.add('hidden');
  diceComp[1].classList.add('hidden');
  diceComp[2].classList.add('hidden');
  diceComp[3].classList.remove('hidden');
  diceComp[4].classList.add('hidden');
  diceComp[5].classList.add('hidden');

}

else if (value === 3)
{
  diceComp[0].classList.add('hidden');
  diceComp[1].classList.add('hidden');
  diceComp[2].classList.remove('hidden');
  diceComp[3].classList.add('hidden');
  diceComp[4].classList.add('hidden');
  diceComp[5].classList.add('hidden');

 
    
}
else if (value === 2)
{
  diceComp[0].classList.add('hidden');
  diceComp[1].classList.remove('hidden');
  diceComp[2].classList.add('hidden');
  diceComp[3].classList.add('hidden');
  diceComp[4].classList.add('hidden');
  diceComp[5].classList.add('hidden');


}
else
{
  diceComp[0].classList.remove('hidden');
  diceComp[1].classList.add('hidden');
  diceComp[2].classList.add('hidden');
  diceComp[3].classList.add('hidden');
  diceComp[4].classList.add('hidden');
  diceComp[5].classList.add('hidden');
}
}
function facialExpression(x,y)
{
  let heads = document.querySelectorAll('.heads');
        if (x > y) 
      {
         
        heads[0].classList.add('hidden');
        heads[1].classList.remove('hidden');
        heads[2].classList.add('hidden');
       
        
         
      }
      else if (x < y)
      {
        heads[0].classList.add('hidden');
        heads[1].classList.add('hidden');
        heads[2].classList.remove('hidden');
       
      }
      else 
      {
        heads[0].classList.remove('hidden');
        heads[1].classList.add('hidden');
        heads[2].classList.add('hidden');
       
      }
}



  const dice = document.querySelectorAll('.dice');
  const diceComp = document.querySelectorAll('.dice-comp');
  function buttonClicked()
   {
    //css animation
    // let slideDiv = document.getElementById("slideDiv");
    // slideDiv.classList.toggle("visible");
      let randomOne = Math.floor(Math.random() * 6) + 1;
      let randomTwo = Math.floor(Math.random() * 6) + 1;
      
    //call compare dice
    facialExpression(randomOne,randomTwo);
      compareRoll(randomOne,randomTwo);
      
       //display the dice
    displayDice(randomOne)
    displayDiceComp(randomTwo)
   
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
        console.log(a,b);
         
      }
      else if (a < b)
      {
        stats[0].classList.add('hidden');
        stats[1].classList.add('hidden');
        stats[2].classList.remove('hidden');
        stats[3].classList.add('hidden');
        console.log("You Lose!");
        console.log(a,b);
      }
      else 
      {
        stats[0].classList.add('hidden');
        stats[1].classList.add('hidden');
        stats[2].classList.add('hidden');
        stats[3].classList.remove('hidden');
        console.log("Draw");
        console.log(a,b);
      }
      }

