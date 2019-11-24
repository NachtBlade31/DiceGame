var randomNumber1=randomizer();
var randomNumber2=randomizer();
changepic1(randomNumber1);
changepic2(randomNumber2);
checkWinner(randomNumber1,randomNumber2);
function randomizer()
{
  var randomNumber=Math.random();
  randomNumber=randomNumber*6;
  randomNumber=Math.floor(randomNumber)+1;
  return randomNumber;
}

function changepic1(diceNum)
{
  var newSrc="images/dice"+diceNum+".png";
  document.querySelector(".img1").setAttribute("src",newSrc);
}
function changepic2(diceNum)
{
  var newSrc="images/dice"+diceNum+".png";
  document.querySelector(".img2").setAttribute("src",newSrc);
}
function checkWinner(player1,player2)
{
  if(player1 === player2)
  {
    document.querySelector(".container h1").textContent="Draw";
  }
  else if(player1 >player2)
  {
    document.querySelector(".container h1").textContent=" 🚩 Player 1 Wins!";
  }
  else
  {
        document.querySelector(".container h1").textContent="Player 2 Wins! 🚩";
  }
}
