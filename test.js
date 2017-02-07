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
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
document.body.innerHTML = (sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
