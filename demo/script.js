// demo javascript
console.log('hello world!');

//if
if (undefined) {
    console.log("true");
} else {
    console.log("false");
}

//for
for (i = 0; i < 20; i++) {
    //break;
    if (i == 7) {
        break;
    }
    //continue;
    if (i > 0 && i % 3 == 0) {
        continue;
    }
    console.log('i=' + i);
}

var result = 1;
for (i = 1; i < 10; i++) {
    result *= i;
}
console.log('result=' + result);

//define function
function func1() {
    console.log("this is a function");
}
func1();

function fun2(str) {
    console.log("argument is " + str);
}
fun2("javascript", "node");

function fun3(...args) {
    console.log(args, func5());
    for (i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
fun3("nodejs", "weixin", "javascript", "Yokeneng");

var func4 = new Function('return 3;');

function func5() {
    return 4;
}

console.log(func4() + "\n" + func5());

fun3(1, 2, func4());

// alert(func4());

// alert(func5);

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

//ProjectEuler#78
//P(1)=1;P(2)=2;P(3)=3;P(4)=5;P(5)=7;
