//const myStuff = [2, 'HI', true]

/*
const movies = ['Barbie', 'Interstellar', 'Get Out'];

const firstMovie = movies[0];
// firstMovie is 'Barbie'

console.log(movies.length);

const lastMovie = movies[movies.length - 1];
// lastMovie is 'Get Out'
console.log(lastMovie);

const videoGames = ['Halo','COD','SOCOM','SplinterCell',]
for(let game of videoGames){
    console.log(`I love ${game}!`);
    
}
const woodStack = ['pine','cedar','oak']
for (let num = 0; num < 4; num++){
    console.log(num)
}



const books = []
books.push = ('The Shining', 'Pride and Prejudice')
    console.log(books[1])
books[1] = 'Dune'
console.log(books)
 




console.log(me)
me.firstName = 'Matthew'
me.lastName = 'Huntington'
me.age = 45
greet: ()=> {}
console.log(me)
delete.me.firstName
console.log(me)

console.log(me.greet);


const music = {
    currentTrack: 'Just Ken',
    currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
    volume: 70,
    // add the following:
    mute() {
      music.volume = 0;
    },
  };
  
  music.mute();

const me = {
    firstName: 'Dave',
    age: 32,
    hasHome: false,
    greet: ()=> {
        console.log(`Hi I'm ${me.firstName}`);
    },
    stuff: ['home','family','computer'],
    daughter: {
        firstName:'Vivienne',
        age:7
    }
}

me.daughter = {
    firstName: 'Vivienne'
}

console.log(me.firstName)
console.log(me.stuff[2])

const pets = [
    {firstName: 'fido'};
    {firstName: 'princess'};
    {firstName: 'nemo'};

    console.log(peds[1].firstName)
    console.log();

    for(let currentPet of pets){
        console.log(currentPet)
        console.log(currentPet.firstName)
        firstName
    }
    
    
    
]


// Assuming numArrays is given like this:
let numArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
  
  // Declare and initialize total to zero
  let total = 0;
  
  // Iterate through each nested array using a for loop
  for (let i = 0; i < numArrays.length; i++) {
    for (let j = 0; j < numArrays[i].length; j++) {
      total += numArrays[i][j];
    }
  }
  
  console.log('Exercise 15 result:\n', total);

  */
  // practice

  function sum(a,b,c,d) {
    return a+b+c+d;
  }

  const numbers = [1,2,3,4,];

  console.log('Spread Syntax test:',sum(...numbers));

  const iterator = numbers.keys();

  for (const key of iterator) {
    console.log(key);
  }
  console.log();
  
  const nums = [2, 4, 18]

  const movies = ['barbie', 'Get Out', 'Superman', 'The Joker', 'Batman', 'Spiderman', 'Green Lantern', 'Barney', 'The Grinch', 'Santa', 'Home Alone', 'Jurrasic Park']

// console.log(nums[1]);
// console.log(nums.length);
console.log(movies.at(-1));

movies.at(-1) = 'Sharknado'

console.log(movies.at(-1));
