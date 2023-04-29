// PROJECT: Dog Years
// declared my age
var myAge = 27 
// declare earlyYears to 2
var earlyYears = 2 * 10.5
// subtracted 2 from myAge, saved in new variable
var laterYears = (myAge - 2) 
// multiplying & assigning 4 to laterYears
laterYears *= 4 
console.log( earlyYears, laterYears) // yes, what i expected
// set value of earlyYears + laterYears into myAgeInDogYears
var myAgeInDogYears = earlyYears + laterYears
// using lowercase string method on my name
var myName = 'CheSalyn' 
console.log(myName.toLowerCase()); // did not work in template literal.
    // another way
    var myName2 = 'CheSalyn'.toLowerCase() // worked in template literal
    console.log(myName2)
// using string interpolation to return a string with assigned variables
console.log(`My name is ${myName2}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
