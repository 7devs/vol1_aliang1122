//Bible Reference Parser;
//author: aliang1122;
//version:0.1;
//change log:
//2016-9-2:new ,version 0.1;

var str = "创世记1:1-5,31;2:1-3,10,23-24;50:40";
var regex=/u4e00-u9fa50-9a-ZA-Z,;:/

var regex1 = /[,;]/g;

var i, j, k = 0,
    chapter, verse, allverses = [],
    tmp, result = [];
//找到第一个数字出现的位置
for (i = 0; i < str.length; i++) {
    if (Number.isInteger(str[i] * 1) === true) {
        j = i;
        break;
    }
}
//将字符串分为书卷名及章节号；
var bookname = str.substr(0, j);
var substr = str.substring(j);

//分解章节号
var arr = substr.split(regex1);

for (i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(':') !== -1) {
        chapter = arr[i].substr(0, arr[i].indexOf(':')); //chapter number;
        verse = arr[i].substring(arr[i].indexOf(':') + 1); //verse number;
        result[k] = [];
        result[k].push(bookname);
        result[k].push(chapter);
        if (verse.indexOf("-") !== -1) {
            tmp = verse.split('-');
            allverses = [];
            for (j = tmp[0] * 1; j <= tmp[1] * 1; j++) {
                allverses.push(j.toString());
            }
            result[k].push(allverses);
        } else {
            result[k].push(verse);
        }
        k++;

    } else {
        s = result.length - 1;
        if (arr[i].indexOf('-') !== -1) {
            tmp = arr[i].split('-');
            for (j = tmp[0] * 1; j <= tmp[1] * 1; j++) {
                result[s][2].push(j.toString());
            }
        } else {
            result[s][2].push(arr[i]);
        }
    }
}

console.log('The Reference is : '+str);
console.log('Result : 'result);
