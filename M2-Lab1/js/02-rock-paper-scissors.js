window.playGame = function () {
  const userChoice = prompt("Enter rock, paper, or scissors:");

  if (userChoice === null) {
    alert("Game cancelled.");
    return;
  }

  const user = userChoice.trim().toLowerCase();

  if (user !== "rock" && user !== "paper" && user !== "scissors") {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return;
  }

  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) computerChoice = "rock";
  else if (computerChoice === 1) computerChoice = "paper";
  else computerChoice = "scissors";

  if (user === computerChoice) {
    alert(`Tie! You both chose ${user}.`);
  } else if (
    (user === "rock" && computerChoice === "scissors") ||
    (user === "scissors" && computerChoice === "paper") ||
    (user === "paper" && computerChoice === "rock")
  ) {
    alert(`You win! You chose ${user} and the computer chose ${computerChoice}.`);
  } else {
    alert(`Computer wins! You chose ${user} and the computer chose ${computerChoice}.`);
  }
};
