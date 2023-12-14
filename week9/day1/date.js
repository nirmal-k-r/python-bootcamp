let now=new Date();
console.log(now.toString());

//time in milliseconds
let time=new Date().getTime();
console.log(time);


let mydate=new Date('12/04/2023');
console.log(mydate);


console.log(mydate.getDay());
console.log(mydate.getDate());
console.log(mydate.getMonth()+1);

let mydate2=new Date('2022-04-10');
var customDate=mydate2.getFullYear()+"-"+(mydate2.getMonth()+1)+"-"+mydate2.getDate();

console.log(customDate);