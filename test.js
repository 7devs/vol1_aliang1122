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


//任意个数的加法
function add(...rest) {
    if (rest.length == 0) {
        return 0;
    } else {
        var result = 0;
        for (i = 0; i < rest.length; i++) {
            result += rest[i];
        }
        return result;
    }
}
console.log(add(91, 92, 1, 2, 3));

function test(array) {
    // var i;
    for (i = 0; i < array.length; i++) {
        (function(e) {
            console.log(i);
        }());
    }
}

test(['aliang', 'beijing', 'macbook']);

var arr = [1, 3, 5, 7, 9]
r = arr.reduce(function(x, y) {
    return x * y;
});
console.log(r);

var str = ['1', '3']
console.log(str.map(Number));

function string2int(s) {
    var tmp = s.split("");
    console.log(tmp);
    //var num=tmp.map(Number);
    //var num=tmp.map(eval);
    function returnInt(element){
      return parseInt(element,10);
    }
    var num = tmp.map(returnInt);
    //方法2：使用箭头函数
    var num=tmp.map(x=>x*1);
    for (i = 0; i < tmp.length; i++) {
        console.log(parseInt(tmp[i]));
    }
    console.log(num);
    console.log(num.reduce(function(x, y) {
        return 10 * x + y;
    }));
}
string2int('12300789');

//Javascript Puzzlers #1
['1', '2', '3'].map(parseInt); //[1,NaN,NaN],parseInt(val,radix),
//map parameters(element,index,array)

//Javascript Puzzlers #2
[typeof null, null instanceof Object];

//Javascript Puzzlers #3
[
//    [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)
];

//Javascript Puzzlers #4
var val = 'smtg';
console.log('value is ' + (val === 'smtg') ? 'something' : 'nothing');
//console.lgo('value is true' ? 'something' : 'nothing');
//something;
console.log('value is ' + ((val === 'smtg') ? 'something' : 'nothing'));

//Javascript Puzzlers #5
var name = 'World!';
(function() {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();

//Javascript Puzzlers #6
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i < END; i++) {
    count++;
}
console.log(count);

//Javascript Puzzlers #7
var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function(x) {
    return x === undefined;
});

//Javascript Puzzlers #8
var two = 0.2;
var one = 0.1;
var eight = 0.8;
var six = 0.6;
[two - one == one, eight - six == two]; //[true,false]

//Javascript Puzzlers #9
function showCase(value) {
    switch (value) {
        case 'A':
            console.log('Case A');
            break;
        case 'B':
            console.log('Case B');
            break;
        case undefined:
            console.log('undefined');
            break;
        default:
            console.log('Do not know!');
    }
}
showCase(new String('A')); //typeof new String('A') is object;typeof 'A' is string;

//Javascript Puzzlers #9

null==undefined;//true
null===undefined;//false
+0===-0;//true
1/+0===1/-0;//false
'1'==1;//true
'1'===1;//false

//function sort
//方法会对原始数组进行修改
var a1=['B','A','C'];
var a2=a1.sort();
a1;//['A','B','C'];
a2;//['A','B','C'];
a1===a2;//ture

//123.toString();//SyntaxError
123..toString();
(123).toString();
//Number
var x=Number.MAX_SAFE_INTEGER;
var y=Math.pow(2.53);
var z=y-x;  //1
y===y+1;  //true
x===x+1;  //false
x+1===x+2;  //true

//lamda function
var zero=function (f){
  return function (x){
    return x;
  }
};

var one=function (f){
  return function (x){
    return f(x);
  }
};

function add(n,m){
  return function (f){
    return function (x){
      return m(f)(n(f)(x));
    }
  }
}

var two=add(one,one);
var three=add(one,two);
var five=add(two,three);
(three(function(){
  console.log('print 3 times');
}))();
(five(function(){
  console.log('print 5 times');
}))();
