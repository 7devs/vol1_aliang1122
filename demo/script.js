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
