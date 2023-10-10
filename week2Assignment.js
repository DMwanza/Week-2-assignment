// No1: Convert a string to a number
const numberStr = "42";  // Declare a string variable with the value "42"
const toNumber = Number(numberStr);  // Use the Number() constructor to convert the string to a number
console.log(toNumber);  // Display the converted number in the console

// No2: Convert a number to a string
let num = 2023;  // Declare a number variable with the value 2023
let toString = String(num);  // Use the String() constructor to convert the number to a string
console.log(toString);  // Display the converted string in the console

// No3: Convert truthy and falsy values to Boolean
const truthyValue = "hello";  // Declare a variable with a truthy value (non-empty string)
let toTruthy = Boolean(truthyValue);  // Use the Boolean() constructor to convert the truthy value to a Boolean
console.log(toTruthy);  // Display the converted truthy value in the console

const falsyValue = 0;  // Declare a variable with a falsy value (zero)
let toFalsy = Boolean(falsyValue);  // Use the Boolean() constructor to convert the falsy value to a Boolean
console.log(toFalsy);  // Display the converted falsy value in the console



//NO4
// Step 1: Declare a variable `currentDate` and assign the current date and time
const currentDate = new Date();

// Step 2: Use the `getTime()` method to convert `currentDate` to a number representing UNIX epoch time
const millisecondsEpoch = currentDate.getTime();

// Step 3: Display the converted number in the console
console.log(millisecondsEpoch);


// NO5
// Step 1: Declare a variable `eventDate` and assign a specific future date and time
const eventDate = new Date('2023-12-31T20:00:00');

// Step 2: Use the `toLocaleString()` method to convert `eventDate` to a localized date and time string
const localizedDateString = eventDate.toLocaleString();

// Step 3: Display the converted string in the console
console.log(localizedDateString);
