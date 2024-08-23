/*
//ACTIVATING STRICT MODE 
'use strict'; //Para activar este modo, debe estar al inicio de cada codigo.

let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriversLicense = true; 
if (hasDriversLicense) console.log('I can drive.');*/

/*
//FUNCTIONS
//Function Declaration
function logger(){
    console.log('My name is Jonas');
}
//Llamar a la funcion
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)

//DECLARATION VS EXPRESSION

//Function Declaration
function calcAge1 (birthYear){
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1 (2003);
console.log(age1);

//Function Expressions
const calcAge2 = function (birthYear){
    const age = 2037 - birthYear;
    return age;
}

const age2 = calcAge2 (2003);
console.log(age1, age2);

//ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement; 
}
console.log(yearsUntilRetirement(1991));

//Multiple parameters 
const yearsUntilRetirement = (birthYear, firtsName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firtsName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
//Functions Calling Other Functions 

function cutFruitPieces(fruit){
    return fruit * 3;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice; 
}
console.log(fruitProcessor(2,3)); 
*/

/*
//CODE CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage 
// function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), 
//and then logs the winner to the console, together with the victory points, according to the rule above. 
//Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
const calcAverage = (firstScore, secondScore, thirdScore) => {
    return (firstScore + secondScore + thirdScore) / 3
}

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgDolphins *2 <=  avgKoalas){
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
    } else{
        console.log('No team wins...');
    }
}
const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

const avgDolphins = scoreDolphins;
const avgKoalas = scoreKoalas;

checkWinner(avgDolphins, avgKoalas);
*/

/*
//ARRAYS
//Literal Syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);   

const years = new Array(1991, 1984, 2008, 2020);

//Para llamar a un dato en especifico.
console.log(friends[0]);
console.log(friends[2]);

//La propiedad .length nos muestra la cantidad de elementos en nuestro arreglo. 
console.log(friends.length);
console.log(friends[friends.length - 1])

//Reemplazar un dato de nuestro arreglo.
friends[2] = 'Jay';
console.log(friends) 

const firstName = 'Diego';
const diego = [firstName, 'Alvarado', 2024 - 2003];
console.log(diego)
console.log(diego.length)

//Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearBirth = [1990, 1967, 2002, 2010, 2015];

const age1 = calcAge(yearBirth[0]);
const age2 = calcAge(yearBirth[1]);
const age3 = calcAge(yearBirth[yearBirth.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(yearBirth[0]), calcAge(yearBirth[1]), calcAge(yearBirth[yearBirth.length - 1])]
*/

/*
//Basic Array Methods
//Agrega un elemento al final del arreglo (Push)
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

//Agregar un elemento al INICIO del arreglo (unshift)
friends.unshift('John')
console.log(friends)

//Elimina el elemento final del arreglo 
friends.pop();
console.log(friends);

//Elimina el elemento al INICIO del arreglo
friends.shift();
console.log(friends);

//Metodo (indexOf) nos muestra la ubicacion de nuestro elemento en el arreglo, o -1 si no existe en el. 
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

//Metodo (includes) nos muestra si el elemento esta en el arreglo 'true' o no esta 'False'
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
*/

/*
//CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — 
//tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
//calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). 
//Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.


function calcTip (bills){ 
    if (bills <= 300 && bills >= 50){
        return bills * 0.15;
    } else {
        return bills * 0.20;
    }
}
const bills = [125, 555, 44];
const tips = bills.map(calcTip); // .map es un metodo en arrays para aplicar una funcion a cada uno de sus elementos. 

console.log(tips);
*/

/*
//OBJECTS
const jonasArray = [ 
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher'
]

const jonas = {
    firtsName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher'
}
*/

/*
//Dot vs Bracket Notation 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']); //En las bracket notation podemos colocar cualqueir expresion deseada

//Ejemplo de uso del Bracket Notation
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//En casos que debamos computar dos expresiones que contengan el mismo nombre, utilizar el bracket
//En todos los otros casos se recomienda el dot notation. 

//Ejemplo de uso Bracket Notation
const interestIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
if(jonas[interestIn]){
    console.log(jonas[interestIn]);
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal'; //Agregando otros keys a nuestro object.
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
*/

//Module Challenge
//"Jonas has 3 friends, and his best friend is called Michael".
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

//Solucion Diego Alvarado
const howMany = jonas.friends
console.log(jonas.firstName + ' has ' + howMany.length + ' friends, and his best friend is called ' + jonas.friends[0]);

//Solucion de Jonas (Video)
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);