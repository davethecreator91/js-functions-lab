// Messing around
function wish() {
    statement;
    return statement;
}

function printBanner() {
    console.log('=======================================');
    console.log('=======================================');
    console.log('The Greeting ');
    console.log('=======================================');
    console.log('=======================================');
}

printBanner();


function nameGenerator() {

    console.log(`Hello ${name}`);
    return ;
}

//another version
firstName = ['james', 'stephan', 'nancy']
function greet(firstName) {
    console.log("Hello, "+ firstName + "!");
}

greet('Dave');
greet('Steve');
greet(firstName);

const add = (a, b) => a + b;
console.log(add(2,3));

const mult = (c,d) => c * d + 1;
console.log(mult(5,5));

function addNums(e,f) {
    let sum = e + f;
    return sum
};

console.log(addNums(4,5));

//plant has water

function planetHasWater(planet) {
    if (planet === 'Earth' || planet === 'Mars'){
        console.log('true');
}
    else {
    console.log('false');
}
}

planetHasWater('Earth');
// Idea: play UNO
color = 'green'
if (color === blue) {
    console.log(the color is );
    
}