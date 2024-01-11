// a=1;
// b=2;

// //wait 10 seconds
// setTimeout(function(){
//     console.log("10 seconds have passed");

// },10000);

// c=a+b;
// console.log(c);

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

