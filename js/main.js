// Basics of JavaScript

/* 
*multiline comment in JavaScript
*-- variable declaration in JS --
*Primittive types: Strings, numbers, booleans, arrays, objects(aka python dictionaries)
*Functions in JS
* loops in JS

*/

//String Variable
var first_name ='Nevada'

// Display our String in the JS Console
console.log(first_name)

// number Variable
var some_number = 32;  //this semicolon is 'sysntactic sugar', it isnt necessary but we like it
console.log(some_number)

// Float Variable
var some_float = 3.14;
console.log(some_float)

// arrays
var some_array = [1,2,3,4];
console.log(some_array)

// Object variable
var some_object = { "tesst" : "tesst me please"}
console.log(some_object);

//JS hoisting
console.log(something_random);
var something_random = 'This is a random string.';
console.log(something_random)

// a better way of declaring variables 
// use 'let' or 'const'
// console.log(some_random); //wont work because of 'let' keyword
let some_random = 948;
console.log(some_random);

const super_hero = 'Naruto';
console.log(super_hero)

//reassingning variable
// (you dont need to use let again)
some_random = first_name + "Las Vegas"
console.log(some_random)


/**
 *  === Bassic Math operations in JS ===
 */

// addition
let sum = 5 + 5
console.log(sum)
sum += 5;
console.log(sum);
//subtraction
let diff = 5-5
console.log(diff)
//multiply
let product = 5 * 5;
console.log(product);

// division
let quotient = 5/5;
console.log(quotient);

//Exponents
let square = 5 ** 2;
console.log(square)

//modulo
let remainder = 12 % 5;
console.log(remainder)

// more math stuff
let find_floor = Math.floor(33.9)
console.log(find_floor)

// Find ceiling
let find_ciel = Math.ceil(33.9)
console.log(find_ciel)

//mind bender
let crazy_stuff = "4" + some_float  // undefined, 7.14, 3.14+4, 3.144, 43.14
console.log(crazy_stuff)

// mind bender 2
let crazyStuff2 = some_float + parseFloat('4')
console.log(crazyStuff2)

//using the 'let' keyword and changing varialbe
let nbaGoat = 'MJ' ;
console.log(nbaGoat)

nbaGoat = 'kobe';
console.log(nbaGoat);

/*
bad redeclaration
let nbaGoat = 'LeBron'
console.log(nbaGoat)
*/

/*
======== JS FUNCTIONS =========
Regular named function syntax
function nameOfFunction(param){
    function body
}
*/
function addNums(){
    let num = 4;
    let num2 = 6;

    return num + num2
}

//Calling addNums
console.log(addNums())

// Variable Named Function w/ parameters
let addNums2 = function( num, num2){
    return num + num2
}
//calling addNums2
console.log(addNums2(11,29))

//Regualar named Fucntion w/ parameters
function addNums3(x,y){
    return x + y
}

//calling addNum3
console.log(addNums3(99,1))

//ES6+ ARROW FUNCTION
/*
 Using a single parameter in an arrow function
 can be done WITHOUT parens() BUT this can only 
 be done with a single parameter
*/

let cubed = (num) => {
    return num ** 3
}
console.log(cubed(9))

let cubed2 = num => {
    return num ** 3
}
console.log(cubed2(5))

//write an arrow function or two to get used to it.
// your function shsould take a number, double it and subtract 7

let x = num =>{
    return x * 2 - 7
}
console.log(x(10))

// JS closure
// self-invoking function
console.log(function(name){
    let hello = "hello world from " + name
    return hello
}('Josh'))
// console.log(hello)

//Javascript control flow
// if statement
let determineAge = age =>{
    if (age < 18){
        return "minor"
    } else if (age >= 18 && age <= 65){
        return "Adult Not Retired"
    }else{
        return "elderly Person - retired"
    }
}
console.log(determineAge(86))

// JS Ternary
let determineAge2 = age =>{
    return (age < 18)?"Minor" : (age >=18 && age <= 65)? 
    "Adult Not Retired" : 'Elderly Person -- retried'
}
console.log(determineAge2(31))

// Lopps in JS -- for loop
// for loop syntax -- "for" keyword(counter; condition; incrementation/decrementation)

let countByOne = () =>{
    //for loop 
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has finished...'
}
console.log(countByOne())

function decreaseByOne(){
    //for loop
    for(let i =20; i>0; i--){
        console.log(i)
    }
    return 'decrementing has stopped'
}
console.log(decreaseByOne())

// while loop - Javascript
function countWithWhile(){
    let i = 0; // the counter
    let text = '';

    //while loop
    while(i<10){
        text += `This is the number... ${i}\n`
        i++
    }
    return text
}
console.log(countWithWhile())

// do while loop
let countWithDoWhile = () => {
    let  i= 0;
    let text = '';

    //do
    do{
        text += ` this is the number...${i}\n`
        i++
    } while(i < 10)

    return text
}
console.log(countWithDoWhile())

//**
/*=== Looping with Arrays and Array Methods, Array String Methods ===
*/

//create array: groupOfNames
let groupOfNames = ['Brock', 'ash', 'misty','gary','james','jessie']

//index poisitoin on array
console.log(groupOfNames[0])// Broke

//Looping through array in JS
for (let i in groupOfNames){
    console.log(groupOfNames[i])
}

// deconstruction of array
let brock, ash, misty
[brock, ash, misty,...teamROcket] = groupOfNames
console.log(ash)
console.log(teamROcket)

// other methods of Looping an array
let showNames = (names) =>{
    for(let i = 0; i <names.length; i++){
        console.log(names[i])
    }
    return 'Done with Names'
}
console.log(showNames(groupOfNames))

// Method 3 for looping
groupOfNames.forEach(element => console.log(element))

//Js array methods
//array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

//. map(), .filter(), .reduce()

let jNames = groupOfNames.map( name =>{
    return (name[0] == 'j') ? name : false
})
console.log(jNames)

// .reduce()
const nums = [2,4,6,8,10]
let numsReduced = nums.reduce((accumulator, currentNum) =>{
    return accumulator + currentNum
})
console.log(numsReduced)

let longNames = groupOfNames.filter(name => name.length > 4)
console.log(longNames)

//.join(), .slice(), .search(), splice()
console.log(groupOfNames.join())
console.log(groupOfNames.slice(0,3))
console.log(groupOfNames.splice(0,1,'Prof. Oak'))
console.log(groupOfNames)

console.log(groupOfNames[0].search('ak'))


// homework
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/



let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    let found_names =  arr.map(i =>{
        return (str.includes(i) ? "matched dog_name" : "No matches")
    })
    
    return found_names
}

console.log(findWords(dog_string, dog_names))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(list1){
    for(i = 0; i < list1.length; i++){
        if(i % 2 == 0){
            list1.splice(i, 1, "even index")
        }
    }
    return list1
}
console.log(replaceEvens(arr))
