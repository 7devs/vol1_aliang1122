//Lesson One Exercise

var count = 12;
var a = true;
typeof a === 'boolean';//true

var msg = 'node.js developer';
var len = msg.length;
msg.toUpperCase();//NODE.JS DEVELOPER

var student = {
    name: "aliang1122",
    age: 32,
    gender: male,
    city: 'Beijing'
}

var name = student.name;//aliang1122
var address = student['city'];//Beijing

var cars = ["Audi", "BMW", "Volvo"];
cars[0] = "Bentley";//cars=["Bentley","BMW","Volvo"]
cars[4] = "Buick";//cars=["Bentley","BMW","Volvo",undefined,"Buick"]

var answer = new String;
answer = 'I\'m learning Node.js';

var person = null;

var gender;
a = (gender === 'male') ? 'male' : 'female';//female

var day = new Date().getDay();
switch (day) {
    case 0:
        x = "Sunday";
        break;
    case 1:
        x = "Monday";
        break;
    case 2:
        x = "Tuesday";
        break;
    case 3:
        x = "Wednesday";
        break;
    case 4:
        x = "Thursday";
        break;
    case 5:
        x = "Friday";
        break;
    case 6:
        x = "Saturday";
        break;
    default:
        x = "unknown error"
}
