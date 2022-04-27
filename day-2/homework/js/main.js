
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
    console.log(error)
})

islonger("sup")
.then( (result) =>{
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})