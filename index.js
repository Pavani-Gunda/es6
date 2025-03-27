//1.Q
const person ={
  name : "John Doe",
  age : "30",
  address : {
    city : "New York",
    country: "USA"
  },
  Hobbies : ["Reading","Travelling"]
};
let{name : Fullname, age,address:{city,country = "Unknown"},Hobbies}= person;
console.log(Fullname,age,city,country);
let[a,,] = Hobbies;
let Hobby = a;
console.log(Hobby)


//2Q
const fruits = ["Apple", "Banana", "Mango","Orange","pineapple"];
let[c,b,...rest] = fruits;
[c,b] = [b,c];
console.log(c,b);


//3Q
function sumNumbers(...a){
  return a.reduce((sum,next) => sum+next);
}
console.log(sumNumbers(2,3,5,8))
console.log(sumNumbers(7,8));


//4Q
const user = {
  name : "Alice", age: 25
}
const job = {title: "developer", company: "TechCorp"};
let userProfile = {...user,...job, experince: "2 years"};
console.log(userProfile);


//5Q
const numbers = [1,2,3,4,5]
let arr = [...numbers];
arr.unshift(0);
arr.push(6);
console.log(arr);