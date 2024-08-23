/*
//VALUES & VARIABLES

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable names can't start with a number. 
//Don't name the variables with a reserve keywords.
let jonas_matilda = "JM";
let $function = 27; 

//Constants in JavaScript is in upperCase. 
let PI = 3.1415;

//Naming your variables 
let firstJob = "Programmer";
let currentJob = "Teacher";

console.log(currentJob)

//LECTURE PRACTICE
//Declare variables called country, continent and population and assign their values according to your own country (population in millions).
//Log their values to the console.

let country = "Panama";
let continent = "America";
let population = 4000000;

console.log("I live in " + country + " that's in the " + continent + " continent. Our population is " + population)
*/

//DATA TYPE

/*console.log(true);
let javaScriptIsFun = true; 
console.log(javaScriptIsFun);*/

/*
//Boolean
console.log(typeof true);
//String
console.log(typeof javaScriptIsFun);
//Number
console.log(typeof 23);
//String
console.log(typeof "Jonas");

//String
javaScriptIsFun = "!FUN"; 
console.log(typeof javaScriptIsFun);

//Undefined
//This first code part is undefined because we don't give the "year" variable a value to hold. 
let year; 
console.log(year);
console.log(typeof year);
//Now we defined the value of the variable. 
year = 1991;
console.log(typeof year);*/

/*
//Basic Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1997;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName)

//Assigment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x ++; // x = x + 1 = 26
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018); */

/*
//Operator Precedence
const now = 2037;
const ageJonas = now - 1997;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);*/

//CODE CHALLENGE 1
// Mark and John are trying to compare their BMI (Body Mass Index), 
// which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
//      1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
//      2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
//      3. Log the value of BMIMark and BMIJohn to the console.
// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

/*
//Marks
const marksWeight = 78;
const marksHeight = 1.69;
//John
const johnWeight = 92;
const johnHeight = 1.95;

let BMIJohn = johnWeight / (johnHeight * johnHeight); 
let BMIMark = marksWeight / (marksHeight * marksHeight);

let markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

console.log(`Mark BMI is ${BMIMark.toFixed(2)} and John BMI is ${BMIJohn.toFixed(2)}.`);
*/

/*
// IF ELSE STATEMENTS

const age = 15;
const isOldEnough = age >= 18; 

if(isOldEnough) {
    console.log('Sarah can start driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
}

const birthYear = 1991;

if (birthYear <= 2000) {
    let century = 20; 
    console.log(century);
} else {
    let century = 21;
    console.log(century);
}
*/

/*
    // //CODE CHALLENGE 2
    // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

    // 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

    // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

    // 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

    // Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

    // Note: Don't round the BMI values. Leave them as they are.

    // 👋 OPTIONAL: You can watch my solution in video format in the next lecture

    // IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

    const massMark = 78;
    const heightMark = 1.69;
    const massJohn = 92;
    const heightJohn = 1.95;
    
    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    console.log(BMIMark, BMIJohn);
    
    if (BMIMark > BMIJohn) { 
        console.log(`Mark's BMI ${BMIMark.toFixed(1)} is higher than John's ${BMIJohn.toFixed(1)}!`)
    } else {
        console.log(`John's ${BMIJohn.toFixed(1)} BMI is higher than Mark's ${BMIMark.toFixed(1)}!`)
    }
*/

/*
//Falsy values: 0, '', undefined, null, NaN; 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0; 
if(money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
} */

/*
//Equality Operators == vs. ===
const age = 18; 

//Exactly the same === (Strict equality operator)
if(age === 18){
    console.log('You just became an adult :D (Strict)');
}

// == (Loose equality operator)
if(age == 18){
    console.log('You just became an adult :D (Loose)');
}

// Ask for input using "prompt"
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite); 

if(favorite === 23){
    console.log(`Cool! ${favorite} is an amazing number`);
} else if (favorite === 7){
    console.log(`${favorite} is also a cool number`);
} else {
    console.log('Number ir not 23 or 7');
}

if(favorite !== 23){
    console.log(`Why you choose ${favorite} -_-`);
} */

/*
//Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

//AND
console.log(hasDriversLicense && hasGoodVision);
//OR
console.log(hasDriversLicense || hasGoodVision);
//NOR
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// } else{ 
//     console.log('Someone else should drive...')
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else{ 
    console.log('Someone else should drive...')
}*/

/*
// CODING CHALLENGE 3

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Your tasks:

    // 1. Calculate the average score for each team, using the test data included below. 
    // The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
    // 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

const scoreDolphins = (97 + 112 + 101)/3;
const scoreKoalas = (109 + 95 + 106)/3;

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) { 
    console.log("Both win the trophy")
}*/


/*
//SWITCH STATEMENT 
const day = prompt('Ingrese el dia de su interes: ');

// Codigo utilizando Case y break
switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break; 
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break; 
    default: //Para que tenga una opcion determinada en caso tal no haya una correcta seleccion. 
        console.log('Not a valid day!');
}   

// El mismo codigo pero con condiconales if / else
if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday'){
    console.log('Prepare theory videos');
} else if (day === 'wednesday' && day === 'thursday'){
    console.log('Write code examples');
} else if (day === 'friday'){
    console.log('Record Videos');
} else if (day === 'saturday' && day === 'sunday'){
    console.log('Enjoy the weekend');
} else { 
    console.log('Not a valid day!');
} */

/*
// CONDITIONAL (TERNARY) OPERATOR
const age = 15; 
// age >= 18? console.log('I like to drink wine'): console.log('I like to drink water');

const drink = age >= 18? 'wine' : 'water';
console.log(drink);

let drink2; 
if(age >= 18){
    drink2 = 'wine';
} else { 
    drink2 = 'water';
}
console.log(drink2);

// Podemos añadir 'expresions' a nuestro templates literals
console.log(`I like to drink ${age >= 18? 'wine' : 'water'}`); */

/*
// CODE CHALLENGE 4

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
//In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
    // Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement 
    //(if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

    // Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
// TEST DATA: Test with different bill values: 275, 40, and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

const bill = 275;  
const tip = bill <= 300  && bill >= 50 ? bill * 0.15 : bill * 0.20;
    console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/
