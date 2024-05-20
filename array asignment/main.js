// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
// Question 4
// Change the second element of the numbers array to 25.
// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.
// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
// Q1***********
var fruits = ["apple", "banana", "mango", "orange"];
// Q2***********
var numbers = [10, 20, 30, 40];
// Q3***********
var thirdFruit = fruits[2]; // output is 'mango' a third element.
console.log(thirdFruit);
// Q4***********
numbers[1] = 25;
console.log(numbers);
// Q5***********
fruits.push('Grapes');
console.log(fruits);
// Q6***********
var lastFruit = fruits.pop();
console.log(lastFruit);
