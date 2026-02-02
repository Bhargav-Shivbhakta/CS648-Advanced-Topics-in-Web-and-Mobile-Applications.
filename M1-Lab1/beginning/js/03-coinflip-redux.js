function coinFlipRedux() {
  for (var i = 0; i < 10; i++) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
}
