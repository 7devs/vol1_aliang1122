var myDate=new Date();//当前时间，对象
var log=console.log;
var date=Date();//当前时间，字符串
log(myDate);//object;
log(date);//string;
log(date===myDate.toString());//true;
log(myDate.getDate());//(1-31)，月中的第N天；
log(myDate.getDay());//(0-6)，星期中的某一天，0为星期天；
log(myDate.getMonth());//(0-11)，0为一月；
log(myDate.getFullYear());//四位数字的年份;
log(myDate.getHours());//(0-23);
log(myDate.getMinutes());//(0-59);
log(myDate.getSeconds());//(0-59);
log(myDate.getMilliseconds());//(0-999);
log(myDate.getTime());//
log(myDate.getTimezoneOffset());//分钟数；
log(myDate.getUTCDate());//
log(myDate.getUTCDay());//
log(myDate.getUTCMonth());//
log(myDate.getUTCFullYear());//
log(myDate.getUTCHours());//(0-23);
log(myDate.getUTCMinutes());//(0-59);
log(myDate.getUTCSeconds());//(0-59);
log(myDate.getUTCMilliseconds());//(0-999);
log(Date.parse("2016-9-2"));
log(myDate.setDate(28));//必须给参数；myDate对象改变；
log(Date.UTC(1984,9,28));//可选参数小时、分钟、秒及毫秒数；
