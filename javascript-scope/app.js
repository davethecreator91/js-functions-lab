
const addNums = (numA) => {
    const numB = 10;
    console.log(numA + numB);
    //15
}
addNums(5)

//
const chooseDinner =() => {
    let isHungry = true;
    let mainDish;

    if (isHungry) {
        mainDish = 'turkey'
}
    else {
    mainDish = 'meatballs'
}
console.log(`Dinner tonight is ${mainDish}`);

}

chooseDinner();

