"use strict";

let hello = "Hello";
let world = 'a';
// console.log(`${hello}, ${world}!`);
// console.log('Hello, world!');

let startup = "";
console.log(startup);

if (startup) {
    console.log(`${hello}, ${startup}`);
} 
else if (world.length > 0) {
    console.log(`${hello}, ${world}`);
} else {
    console.log(`${hello}, ${world} 2`);
}

let x = prompt('what is your name?');
console.log(x);