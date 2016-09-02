// // demo javascript
// console.log('hello world!');
//
// //if
// if (undefined) {
//     console.log("true");
// } else {
//     console.log("false");
// }
//
// //for
// for (i = 0; i < 20; i++) {
//     //break;
//     if (i == 7) {
//         break;
//     }
//     //continue;
//     if (i > 0 && i % 3 == 0) {
//         continue;
//     }
//     console.log('i=' + i);
// }
//
// var result = 1;
// for (i = 1; i < 10; i++) {
//     result *= i;
// }
// console.log('result=' + result);
//
// //define function
// function func1() {
//     console.log("this is a function");
// }
// func1();
//
// function fun2(str) {
//     console.log("argument is " + str);
// }
// fun2("javascript", "node");
//
// function fun3(...args) {
//     console.log(args, func5());
//     for (i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }
// fun3("nodejs", "weixin", "javascript", "Yokeneng");
//
// var func4 = new Function('return 3;');
//
// function func5() {
//     return 4;
// }
//
// console.log(func4() + "\n" + func5());
//
// fun3(1, 2, func4());
//
// // alert(func4());
//
// // alert(func5);
//
// var obj={
//   name:'aliang',
//   xxx:[
//     1,'str',{x:1},[1,2,3]
//   ],
//   walk:function(x){
//     console.log('walk',x,'minites')
//   }
// }
// console.log(obj.xxx[2]);
// console.log(obj.name);
// obj.walk(5);

var arr=[1,2,3];
var str=['x','y','z'];
console.log(arr.concat(str));//[1,2,3,'x','y','z']
console.log(arr.join('-'));//1-2-3
console.log(arr.pop());//3
console.log(arr);//[1,2]
console.log(arr.push(5));//3,数组长度
console.log(arr);//[1,2,5]
