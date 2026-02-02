function coinFlipGame() {
  var coinFlip = Math.floor(Math.random() * 2);
  var choice = prompt("Choose Heads or Tails").toLowerCase();

  if (coinFlip === 0 && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (coinFlip === 0 && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  } else if (coinFlip === 1 && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else {
    alert("The flip was tails and you chose tails...you win!");
  }
}
