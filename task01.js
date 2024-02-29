'use strict';

//__________-первый вариант
/*
const length = 100;

const numbres = [...Array(length)];

const getRendomNunbers = (numbres) => {
    for (let i = 0; i < numbres.length; i++) {
        numbres[i] = Math.trunc(Math.random() * 100);
        }
        return numbres
}
const result = getRendomNunbers(numbres)
console.log('result: ', result);

//__________-второй вариант

const generateArray = (length) => (
    [...new Array(length)]
    .map(() => Math.trunc(Math.random() * 100))
);

const num = generateArray(1, 100);
console.log(num);

*/
// третий вариант


const getRandom = (elem) => {
    const randomArray = [];

    for(let i = 0; i < elem; i++) {
        const randomNum = Math.trunc((Math.random() * 100) + 1);
        randomArray.push(randomNum); 
    }
    return randomArray;
    }

console.log(getRandom(101));


const getRandomNumber = elem => {
    const array = [];

    elem.map(() => {
        const randomNumber = Math.trunc((Math.random() * 100) + 1);
        array.push(randomNumber);
    });
    return array;
}

const result = getRandomNumber([101]);
console.log('result: ', result);










/*
let dogs = new Array('Beagle', 'Boxer', 'Bulldog', 'Corgi');
let newDog = [ ];
dogs.forEach ( ( element ) => {
newDog.push ( element );
console.log('element: ', element);
})

*/


