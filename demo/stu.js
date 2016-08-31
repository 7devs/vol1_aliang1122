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
