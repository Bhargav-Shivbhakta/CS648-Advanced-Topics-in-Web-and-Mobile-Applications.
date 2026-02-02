function largerOrSmaller() {
  var num1 = parseInt(prompt("Enter the first integer"));
  var num2 = parseInt(prompt("Enter the second integer"));

  if (num1 > num2) {
    alert(num1 + " is larger");
  } else if (num2 > num1) {
    alert(num2 + " is larger");
  } else {
    alert("Both numbers are equal");
  }
}
