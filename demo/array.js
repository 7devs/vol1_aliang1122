var arr1=[1,2,3,'12',25,'00','string'];
var arr2=['Google','Facebook','Microsoft','Apple'];
var arr3=arr2.slice(0);
var arr4=arr2.join();


var log=console.log;

function sortNumber(a,b){
  return a-b;
  //return '0';
}

log('arr1=',arr1);
log('arr2=',arr2);
log('arr3=arr2.slice(0):',arr3);
log('arr4=arr2.join()',arr4);
log('type of arr3: ',(typeof arr3));//object
log('type of arr4: ',(typeof arr4));//string
log('arr2==arr3: ',arr2==arr3);//false，值为地址，故不同；
log('arr2===arr3: ',arr2===arr3);//false，值不同，类型相同
log('toString(),toLocaleString(): ',arr1.toString()===arr1.toLocaleString());//true
log('join(),toString(): ',arr2.join()===arr2.toString());//true
log('concat():',arr1.concat(arr2));
log('join():',arr1.join('--'));
log('sort()',arr1.sort());
log('arr1===arr1.sort(): ',arr1===arr1.sort());//true
log('sort by number',arr1.sort(sortNumber));
log('splice:',arr2.splice(0,3,'Twitter','Dropbox'));//['Google','Facebook','Microsoft']
log('arr2: ',arr2);//['Twitter','Dropbox','Apple']
