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
const arr = [];

const getRendom = elem => {
    arr.push(Math.trunc(Math.random() * 100) + 1);
    console.log('arr: ', arr);
}

getRendom();



