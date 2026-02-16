/************************************************
 M3 Lab 1 – Practice with Arrays
************************************************/

/* QUESTION 1 */
console.log("Question 1:");
var favMovies = ["Interstellar", "The Dark Knight", "Inception", "Whiplash", "The Matrix"];
console.log("Full Array:", favMovies);
console.log("Second Movie:", favMovies[1]);
console.log("\n");


/* QUESTION 2 */
console.log("Question 2:");
var movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "The Dark Knight";
movies[2] = "Inception";
movies[3] = "Whiplash";
movies[4] = "The Matrix";
console.log("Full Array:", movies);
console.log("First Movie:", movies[0]);
console.log("\n");


/* QUESTION 3 */
console.log("Question 3:");
movies.splice(2, 0, "Arrival");
console.log("Updated Array:", movies);
console.log("Array Length:", movies.length);
console.log("\n");


/* QUESTION 4 */
console.log("Question 4:");
movies = ["Interstellar", "The Dark Knight", "Inception", "Whiplash", "The Matrix"];
delete movies[0];
console.log("Array After delete:", movies);
console.log("\n");


/* QUESTION 5 */
console.log("Question 5:");
movies = [
  "Interstellar",
  "The Dark Knight",
  "Inception",
  "Whiplash",
  "The Matrix",
  "Arrival",
  "Gladiator"
];
console.log("Full Array:", movies);
console.log("for/in Output:");
for (var index in movies) {
  console.log(movies[index]);
}
console.log("\n");


/* QUESTION 6 */
console.log("Question 6:");
console.log("for/of Output:");
for (var movie of movies) {
  console.log(movie);
}
console.log("\n");


/* QUESTION 7 */
console.log("Question 7:");
var sortedMovies = movies.slice().sort();
console.log("Sorted Array:", sortedMovies);
for (var movie of sortedMovies) {
  console.log(movie);
}
console.log("\n");


/* QUESTION 8 */
console.log("Question 8:");

var leastFavMovies = ["Movie 43", "Cats", "The Last Airbender"];

console.log("Movies I like:");
console.log(movies);

console.log("\nMovies I regret watching:");
console.log(leastFavMovies);

console.log("\nFormatted Output:");

console.log("Movies I like:\n");
for (var movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
  console.log(movie);
}
console.log("\n");


/* QUESTION 9 */
console.log("Question 9:");
movies = movies.concat(leastFavMovies);
var reverseSorted = movies.slice().sort().reverse();
console.log("Merged Array:", movies);
console.log("Reverse Sorted Array:", reverseSorted);
for (var movie of reverseSorted) {
  console.log(movie);
}
console.log("\n");


/* QUESTION 10 */
console.log("Question 10:");
var lastMovie = movies.slice(-1)[0];
console.log("Last Movie:", lastMovie);
console.log("\n");


/* QUESTION 11 */
console.log("Question 11:");
var firstMovie = movies.at(0);
console.log("First Movie:", firstMovie);
console.log("\n");


/* QUESTION 12 */
console.log("Question 12:");

var dislikedIndices = [];

for (var i = 0; i < movies.length; i++) {
  if (leastFavMovies.includes(movies[i])) {
    dislikedIndices.push(i);
  }
}

console.log("Disliked Indices:", dislikedIndices);

var replacements = [
  "Parasite",
  "The Shawshank Redemption",
  "Spider-Man: Into the Spider-Verse"
];

for (var j = 0; j < dislikedIndices.length; j++) {
  movies[dislikedIndices[j]] = replacements[j];
}

console.log("Updated Array After Replacement:", movies);
console.log("\n");


/* QUESTION 13 */
console.log("Question 13:");

var rankedMovies = [
  ["Interstellar", 1],
  ["The Dark Knight", 2],
  ["Inception", 3],
  ["Whiplash", 4],
  ["The Matrix", 5]
];

console.log("Full 2D Array:", rankedMovies);

console.log("Filtered Movie Names:");
for (var pair of rankedMovies) {
  var nameOnly = pair.filter(function(item) {
    return typeof item === "string";
  });
  console.log(nameOnly[0]);
}
console.log("\n");


/* QUESTION 14 */
console.log("Question 14:");

var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
console.log("Full Employees Array:", employees);

var showEmployee = function(list) {
  console.log("Employees:\n");
  for (var name of list) {
    console.log(name.toUpperCase());
  }
};

showEmployee(employees);
console.log("\n");


/* QUESTION 15 */
console.log("Question 15:");

function filterValues(arr) {
  return arr.filter(function(value) {
    return value !== false && value !== null && value !== 0 && value !== "";
  });
}

console.log("Filtered Result:", filterValues([58, '', 'abcd', true, null, false, 0]));
console.log("\n");


/* QUESTION 16 */
console.log("Question 16:");

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var nums = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:", nums);
console.log("Random Item:", getRandomItem(nums));
console.log("\n");


/* QUESTION 17 */
console.log("Question 17:");

function getLargestNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log("Number Array:", [10, 4, 88, 2, 99, 23]);
console.log("Largest Number:", getLargestNumber([10, 4, 88, 2, 99, 23]));
console.log("\n");
