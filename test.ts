// function greeter(person: string) {
//     return "Hello, " + person;
// }

// var user = "Jane User";

// document.body.innerHTML = greeter(user);

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = { firstName: "Jane2", lastName: "User" };

// document.body.innerHTML = greeter(user);

// class Student {
//     fullName: string;
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
    document.body.innerHTML = (sentence);
 //enum   
    enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];

alert(colorName);