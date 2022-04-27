numsArr = [1,2,3,4]
var runningSum = function(nums) {
    let sum = 0;
    let result = []
    nums.forEach(num => {
        result.push(sum += num); 
    })
    return result;
};
console.log()




///continue from Yesterday with control flow
// sswtich case 

let day = new Date().getDay()

let literalDay = new Date().toString()

console.log(day)
console.log(literalDay)

// switch case statement syntax
switch(day) {
    case 0:
        console.log("sleep all sunday")
        break;
    case 1:
        console.log('write code it\'s Monday.')
        break;
    case 2:
        console.log("Tacos for everyone! It's Tuesday!")
        break;
    case 3:
        console.log("keep testing code... It's Wednesday my dudes...")
        break;
    case 4:
        console.log("write a new feature for project, It's Thursday.")
        break;
    case 5:
        console.log("call rebecca black... its friday")
        break;
    case 6:
        console.log("spend saturday out in the sun")
        break;
    default:
        console.log("we dont have a case  for that...")
}

//literal day example
switch (literalDay.split(" ")[0]) {
    case "Sun":
        console.log("sleep all sunday")
        break;
    case "Mon":
        console.log('write code it\'s Monday.')
        break;
    case "Tues":
        console.log("Tacos for everyone! It's Tuesday!")
        break;
    case "Wed":
        console.log("keep testing code... It's Wednesday my dudes...")
        break;
    case "Thu":
        console.log("write a new feature for project, It's Thursday.")
        break;
    case "Fri":
        console.log("call rebecca black... its friday")
        break;
    case "Sat":
        console.log("spend saturday out in the sun")
        break;
    default:
        console.log("we dont have a case  for that...")
}

// creating of objects in Javascript
// simple object in JS

let person = {
    name : 'Tim',
    age : 21,
    favColor : "purple"
}

// accessing info
console.log(person['name']) //bracket notation
console.log(person.favColor) // dot notation

// complex Javascript object\\
let person2 = {
    name : "trini",
    age : 27,
    proLanguages:["Javascript","Python","C++","Java"],
    favColor: "yellow",
    team : [
        {
            baseball : "Chicago White Sox",
            football : "Chicago Bears",
            hockey : "Chicago Blackhawks",
            basketball : ["Chicago Bulls","Chicago Sky"],
            soccer: ["Chicago Fire", "Naperville Yellowjacks"]
        },
        {
            football: [" New Orleans Saints", "San Francisco 49ers","Green Bay Packers", "vikings"],
            baseball: ["SF Giants", "Seattle Mariners" ],
            basketball: [" LA Lakers", 'Cavs','Sac Kings', 'Trail blazers','Wolves', 'Globetrollers'],
            soccer: ['Columbus Crew','timbers','galxy', 'sounders','Manchester United'],
            hockey: ['LA Kings', 'Red Wings', 'Seattle Kraken', 'Dallas Stars','Bruins']
        }
    ]
}
console.log(person2.proLanguages[2])
console.log(person2.team[0].hockey)
console.log(person2.team[1].hockey[0])
console.log(person2)

// javascript object protype methods objectl iteral
console.log(Object.keys(person2))
console.log(Object.values(person2))

// DONT DO THIS WHEN LOOPING
for(let i =0; i < person2.length; i++){
    console.log(person2[i])
}

// correct way to loop through objects
for (let i = 0; i < Object.keys(person2).length; i ++){
    if (Array.isArray(Object.values(person2)[i])){
        Object.values(person2)[i].forEach(element => console.log(element))
    } else{
        console.log(Object.values(person2)[i])
    }
}


// create an object prototype with ES5 Methods
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    //method belonging to the prototype
    this.printInfo = function(color, wheels=4){
        console.log(`this is a ${this.year}, ${this.make}, ${this.model} and it has ${wheels} wheels and the color is ${color}`)
    }
}

// create instance of prototype
let my_car = new Car('volkswagon','jetta','2013')

// call prototype method
my_car.printInfo('Black Black')

//JS classes ES6
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo(){
        return `Name: ${this.name}\nAge: ${this.age} \nGender: ${this.gender}`
    }
}
let bobby = new Human('Bobby',33,'female')
console.log(bobby.printInfo())

// inheritence using javascript classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking(){
        return this.walking ?`${this.name} is walking`:` ${this.name} isnt walking yet`
    }
}

// create an instance of Baby class
let laya = new Baby('Laya', 1, 'female',true)

console.log(laya.printInfo)
console.log(laya.isBabyWalking())

// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic example of callbacks
function first(){
    console.log(1)
}

function second(){
    console.log(2)
}
first()
second()

// But what happens if we add a delay to the first function ???
// simulate delay
function first_delay(){
    
setTimeout(first(), 5000)
}
// function second_delay(){
//     console.log(2)
// }
// first_delay()
// second_delay()

// call back function ssyntax
function doHomework(subject, callback){
    alert(`starting ${subject} homework.`)
    callback()
}
// doHomework("JavaScript", ()=> console.log("done with homework"))
/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/
// we ssolve thiss with promises

//  creating a JS promises
const isEvenNumber =num => {
    return new Promise( ( yessir, nosir ) =>{
        num % 2 == 0 ? yessir(true): nosir(num)
    })
}

// Using JS Promise
isEvenNumber(1)

// happy resolver path
.then((result) =>{
    console.log(`${result} this is an even number`)
})

.catch( (error) =>{
    console.log(`${error} this is an odd number.`)
})

// Another promise example
function increaseSalary(base, increase){
    const newSalary = base + increase
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

//  add ssalary slowly
function slowSalary(n1,n2){
    return new Promise( resolver=>{
        setTimeout( ()=> resolver(n1+n2), 3000)
    })
}

async function increaseSlowSalary(base,increase){
    const newSalary = await slowSalary(base,increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}


// //==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFoods(){
    for (let i = 0; i < Object.keys(person3).length; i++){
        if (Array.isArray(Object.values(person3)[i])){
            console.log(Object.keys(person3)[i].toUpperCase(),':',)
            Object.values(person3)[i].forEach(x => console.log(x))
        }else if (typeof Object.values(person3)[i] == 'string'){
            console.log(Object.keys(person3)[i].toUpperCase(),':',Object.values(person3)[i])
        }
    }
}
printFoods(person3)





//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age}`
    }
    printInfo2 = () =>{
        console.log(`Name: ${this.name}\nAge: ${this.age}`)
    }
    gettingOlder(){
        this.age += 1
        return`I was ${this.age - 1}, now I'm ${this.age}`
    }
    gettingOlder2 = () =>{
        this.age += 1
        console.log(`Former age: ${this.age -1}\nCurrent age: ${this.age}`)
    }
}
let terrel = new Person('Terrel',27)
let ryan = new Person('ryan',28) //dont knock off points for making you older than you already are this was a guess...but if its right...maybe an extra point?

console.log(terrel.printInfo())
console.log(ryan.printInfo())


console.log(terrel.gettingOlder())
console.log(terrel.gettingOlder())
console.log(terrel.gettingOlder())

console.log(ryan.gettingOlder2())
console.log(ryan.gettingOlder2())
console.log(ryan.gettingOlder2())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const islonger = (stringx) => {
    return new Promise ( (resolve, reject) => {
        if(stringx.length > 10){
            resolve("GREAT BIG HUGE GIGANTIC WORD")
        }else {
            reject("tiny")
        }
    })
}

islonger("isthislongerthanten")
.then( (result) =>{
    console.log(result)
})
.catch( (error) => {
    console.log(result)
})

islonger("sup")
.then( (result) =>{
    console.log(result)
})