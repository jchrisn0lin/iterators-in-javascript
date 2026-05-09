//Iterator forEach() ex1
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
//Logs each artist's name in a sentence
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

//forEach() ex2
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//Method function
/*
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
*/

 //Arrow function & callback
const printFruit = fruit => {
  console.log(`I want to eat a ${fruit}`);
};

fruits.forEach(printFruit);


/*------------*/


//Iterator .map() examples 1
const numbers = [1, 2, 3, 4, 5];
//Calculate numbers' square root
const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

//Calculate numbers into tens
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(bigNumbers);




//Iterator .map() examples 2
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//Return first letter of each index in a secretMessage array
const secretMessage = animals.map(firstLetter => {
  return firstLetter[0];
});

console.log(secretMessage.join(''));




//Calculate each bigNumbers divided by 100
const hundreds = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = hundreds.map(num => {
  return num / 100;
});

console.log(smallNumbers);


/*------------*/


//Iterator filter() ex 1
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
//Return only the array's numbers
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
//Return only the array's strings
const onlyStrings = things.filter(thing => {
    return typeof thing === 'string';
})

console.log(onlyNumbers);
console.log(onlyStrings);

//Iterator filter() ex2
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
//Filter by limited number of words
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words);
console.log(shortWords);

//Iterator filter() ex3
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNum = randomNumbers.filter(number => {
  return number < 250;
});

console.log(smallNum);

//Iterator filter() ex4
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

console.log(longFavoriteWords);

/* Synthesis */
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);