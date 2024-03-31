// strings
// arrays
// objects
// inf
// biolean
// inf

const suv = [
{
    name: "Tesla",
    color: "Black",
    model: "svg",
    price: "200,000,000",
    weight: "200kg"
},

 
{
    name:"Toyota",
    color: "Black",
    model: "rav4",
    price: "100,000,000",
    weight: "200kg"
}
]
console.log(suv)


const Paragraph = document.getElementById('Paragraph')

const button = document.getElementById('button')
button.addEventListener('click', function(){
    Paragraph.textContent = "Try again nigga"
})


const mydiv = document.getElementById('mydiv')
const p = document.querySelector('.myp')
const createsomething = document.createElement('p')
createsomething.textContent = "Book nigga"
p.appendChild(createsomething)



Paragraph.classList.remove('.float')


// Arithmetric operators + * - /
// Comparison operators == != > <
// Logical operators And-&& |or- || | Not-!

let Elvisnetworth = 3000000;
let Idrisnetworth = 1000000

if (Elvisnetworth = Idrisnetworth){
    console.log("Elvis and Idris are both rich")
}
else{
    console.log("Elvis is richer than Idris")
}
{
    Elvisnetworth == Idrisnetworth ? console.log("Elvis and Idris are both rich") : console.log("Elvis is richer than Idris")


    
}

function calculateArea(lenght, width){
    return lenght * width
}

let area = calculateArea(50,100)

console.log(area)

const statement = "This is a full stack class"

console.log(statement.slice(0,12))


let nun = 400.3455748394 
console.log(nun.toFixed(2))
console.log(Number.isInteger(nun))
console.log(Math.floor(nun))
console.log(Math.max,(400, 600, 700))


let x = 500, y = 600 
console.log(x - y)
console.log(x + y)
console.log(x / y)
console.log(x * y)

// comparison operators
console.log(x > y)
console.log(x == y)

// Logical operators
console.log(x && y)
console.log(x || y)

// Assignment operators
console.log(x += 200)

// Unary operators
console.log(++x)
console.log(--y)

// Tinary operators
let result =(x > y) ? "x is greater" : "y is greater"
console.log(result)


let a = 500, b = 600
if (a > b){
    console.log("a is greater")

}
else{
    console.log("b is greater")
}


// if, else if, else
let MICHAELAGE = 100
if (MICHAELAGE = 50){
    console.log("you're still not qualified for the pension")
} 
else if(MICHAELAGE >= 18 && MICHAELAGE < 65){
    console.log("Try again nigga!")
}
else if(MICHAELAGE > 65){
    console.log("Congratulations! you're qualified")
}
else{
    console.log("please specify your age")
}

// Loops for

for (let healthrecord = 0; healthrecord < 50; healthrecord ++){

    console.log(healthrecord)
}

const Billionaires = ["Elvis", "Yahaya", "Funmi", "Michael", "Comfort", "Abimbola"]
for (const richpeople of Billionaires){
    console.log("Richperson "+ richpeople)
}


// Change content, modifies structure
// Change styling
// Add or Remove Elelments
// Respond to event (click e.t.c)
// Access Elements (getElement)
// FAMILIES OF DOCUMENT CLASS




// my workings
function classscore  (Elvis, Abimbola, Michael, Samuel, Wealth){
    return Elvis + Abimbola + Michael + Samuel + Wealth
}
let total = classscore(1,2,3,4,5)
console.log(total)



// examples
const Students = [
        {name: "Judge", Age: 18},
        {name: "Judge", Age: 18},
        {name: "Judge", Age: 18},
        {name: "Judge", Age: 18},
        {name: "Judge", Age: 18},
        {name: "Judge", Age: 18}
]
// examples

let Nigerians = ["Elvis", "Abimbola", "Michael", "Samuel", "Wealth", "Funmi",]

let Canadians = [

    "Ayobami", "Yahaya", "Idris"
]

const Newnations = Nigerians.concat(Canadians)
console.log(Newnations)

let numbers = [1,2,3,4,5,6,7,8,9,10]
let squarednumbers = numbers.map(num=> num * num)
console.log(squarednumbers)

const fruits = ["Apple", "Banana", "Orange"]
const newfruit =fruits.slice(1,2) 
console.log(newfruit)
console.log(fruits.slice(2))

let statements = "i am accepted"
const newest = statements.slice(1,6)
console.log(newest)


let things = ["Coconut", "Cherry", "Pawpaw", "Tangarine", "Lemon" ]
const newthings = things.sort()
console.log(newthings)

let networth = [100,250, 300, 400, 600]
let nworth = networth.filter(numm=> numm > 300)
console.log(nworth)


function addition (a,b){
    let c = a + b
    return c

}

function subtractions (a,b){
    let c = a - b
    return c
}

console.log(addition(50,50))
console.log(subtractions(25,6))