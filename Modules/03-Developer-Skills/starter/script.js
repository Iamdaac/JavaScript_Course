// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//const x = 23;
//if (x == 23) console.log(23);

//const calcAge = (birthYear) => 2037 - birthYear;
//console.log(calcAge);

// FIXME
// TODO
// BUG

/*
//PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do we do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //Returns the amplitude
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //Returns the amplitude
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Software bug: Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bus.
// Bugs are completely normal in software development!
// Debugging: Finding, fixing and preventing bugs.
*/

/*
//Debugging with the console
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C) Fix the bug
    value: Number(prompt("Degrees celsius:")),
  };
  //B) Find the bug
  console.log(measurement);
  console.table(measurement); //forms to show objects in the console.

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify the bug
console.log(measureKelvin(10));
*/
/*
//Debugging using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //Returns the amplitude
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

//Code Challenge 1
//Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
//Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
//Use the problem-solving framework: Understand the problem and break it up into sub-problems!

//1. Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

//2. Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log(str);
// };
// printForecast([12, 5, -5, 0, 4]);
// printForecast([17, 21, 23]);

//Code Challenge 2 with AI
/*
Imagine you are building a time tracking application designed for freelancers. 
At some point, you need a function that receives daily work hours for a certain 
week and returns five data points:

1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. The number of days worked
5. Whether the current week was a full-time week (meaning the freelancer worked 35 hours or more)

test data: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// 1. Understanding
// - User give data of daily worked hours weekly
// - Return 5 points of data
// - Function for daily worked hours
// - If the freelance work >= 35 hours === full-time week

// 2. Break
// - Function for the data
// - For function
// - Transform the array into string

const arr = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracking = function (arr) {
  let totalHours = 0;
  let averageHours;
  let maxDay = Math.max(...arr); //desempaquetar el array en argumentos con el operador spread '...'
  let daysWorked = arr.filter((h) => h > 0).length;
  //Filter: metodo que recorre todo el array
  //(h) => h > 0 Se esta declarando una variable llamada 'h' en donde se dice que sí los elementos del array
  //son mayores a 0, la condicion es true y pasa a un nuevo array, en otro caso lo ignora.

  let shiftType;

  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
  }

  averageHours = arr.length > 0 ? totalHours / arr.length : 0; //condición ? valor_si_true : valor_si_false
  shiftType = totalHours >= 35 ? "Full-time week" : "Not full-time week";
  return { totalHours, averageHours, maxDay, daysWorked, shiftType };
};

const result = timeTracking(arr);

console.log(result);
