//Types
let user_name : string= 'hoodie';
let age : number = 12;
let isMale : boolean;
let something : null;
let something2: undefined;

user_name = 'ajay';
isMale = false
console.log(user_name,isMale);

//arrays
const stringArrayExample : string[] = ['hh','kk','vv'];
const numberArrayExample :number[] = [1,2];

numberArrayExample.push(5);
stringArrayExample.push('45');
console.log(numberArrayExample[1]);

//object literals
const userdetails : {id:number,firstname:string,email:string,isActive:boolean} = {
    id : 7,
    firstname : 'ajay',
    email : 'ajay@gmail.com',
    isActive : true
}

//functions
//Return type also can be typed
const userFunction = (a:number,b:number) : number =>{
   return a+b;
}

console.log(userdetails.email);
console.log(userFunction(4,4));

//any type
//any type of value can be assigned
let rollno :any = 'hh';
let anyarray : any[] = ['hh','55',3,false];

function anyFunc (value:any) {
  return value+value;
}

console.log(anyFunc('4'));

//tuples

const sampleTuple : [string,number,boolean] = ['44', 44, false];

//named tuple
//it will act as identitfier for each index value
const sampleNamedTuple : [name :string, age:number, isActive:boolean] = ['44', 44, false];

//interfaces
interface Author {
    name : string,
    avatar: string,
    age : number
}

const author : Author = {name:'ajay',avatar:'graphite',age:26};

interface Post {
    title : string,
    description :string,
    createdAt : Date,
    author : Author
}

const newPost : Post = {
    title : 'The Ajay',
    description : 'Developer',
    createdAt : new Date(),
    author : author
}

console.log(newPost);

//use a created interface as a type in function

function createPost(post :Post) {
    console.log('Created Post:',post)
}

createPost(newPost);

//With Arrays
const posts : Post[] = [];
posts.push(newPost, newPost);
console.log(posts);

//type aliases (custom type)

//with tuples
type rgb = [number,number,number];

function generateRgb(): rgb {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);

   return [r,g,b];
}
console.log(generateRgb());

//with object literals
type userObj = {
    name:string,
    age:number
}

function generateUser(user : userObj) {
    return `${user.name}- ${user.age}`
}

console.log(generateUser({name:'ajay',age:45}));

//union types
let userage : number|string;

//can be assigned of values either of a string or number
userage = 5;
userage = '5';

//custom type with union

type Id = number|string;
let id : Id;
id = 5;
id = '5';

//type guards
// Used to check type of a variable and to perform different operations based on a type
function swapIdType (id :Id) {
    if (typeof id === 'string') {
       return parseInt(id);
    } else if(typeof id === 'number') {
      return id.toString();
    }
}

//tagged interfaces
//we can tag a interface with a type property by giving a unique name
interface User {
    type : 'user',
    username : string,
    email: string,
    id :Id
}

interface Person {
    type : 'person'
    firstname : string,
    age : number,
    id:Id
}

function logTheDetails(value : User | Person) {
   if (value.type === 'user') {
    console.log(value.username,value.email);
   }
   if (value.type === 'person') {
    console.log(value.firstname,value.age);
   }
}

logTheDetails({type:'person',firstname:'ajay',age:45,id:'34'});


