"use strict";
//Types
let user_name = 'hoodie';
let age = 12;
let isMale;
let something;
let something2;
user_name = 'ajay';
isMale = false;
console.log(user_name, isMale);
//arrays
const stringArrayExample = ['hh', 'kk', 'vv'];
const numberArrayExample = [1, 2];
numberArrayExample.push(5);
stringArrayExample.push('45');
console.log(numberArrayExample[1]);
//object literals
const userdetails = {
    id: 7,
    firstname: 'ajay',
    email: 'ajay@gmail.com',
    isActive: true
};
//functions
//Return type also can be typed
const userFunction = (a, b) => {
    return a + b;
};
console.log(userdetails.email);
console.log(userFunction(4, 4));
//any type
//any type of value can be assigned
let rollno = 'hh';
let anyarray = ['hh', '55', 3, false];
function anyFunc(value) {
    return value + value;
}
console.log(anyFunc('4'));
//tuples
const sampleTuple = ['44', 44, false];
//named tuple
//it will act as identitfier for each index value
const sampleNamedTuple = ['44', 44, false];
const author = { name: 'ajay', avatar: 'graphite', age: 26 };
const newPost = {
    title: 'The Ajay',
    description: 'Developer',
    createdAt: new Date(),
    author: author
};
console.log(newPost);
//use a created interface as a type in function
function createPost(post) {
    console.log('Created Post:', post);
}
createPost(newPost);
//With Arrays
const posts = [];
posts.push(newPost, newPost);
console.log(posts);
function generateRgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(generateRgb());
function generateUser(user) {
    return `${user.name}- ${user.age}`;
}
console.log(generateUser({ name: 'ajay', age: 45 }));
//union types
let userage;
//can be assigned of values either of a string or number
userage = 5;
userage = '5';
let id;
id = 5;
id = '5';
//type guards
// Used to check type of a variable and to perform different operations based on a type
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else if (typeof id === 'number') {
        return id.toString();
    }
}
function logTheDetails(value) {
    if (value.type === 'user') {
        console.log(value.username, value.email);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
logTheDetails({ type: 'person', firstname: 'ajay', age: 45, id: '34' });
