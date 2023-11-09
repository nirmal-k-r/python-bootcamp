//declare a variable
let name = 'John';
name='Paul';

//console.log(name); 

var age= 10;
console.log(age);

//boolean values
let married=true;
console.log(married);
married=false;
console.log(married);


//numbers
let num=1;
console.log(num);
num=num+1;
console.log(num);

var num2= 10*2;
console.log(num2);

var num3=num2/num;
console.log(num3);

let num4= 100-1;
console.log(num4);

num5=num4.toString();
console.log(num5);


let num6=10.659324;
console.log(num6);
num6=num6.toFixed(2);
console.log(num6);

//strings
let my_name='wedhui3929eudfhecj-0&*((*)(*&';
console.log(my_name);

var new_name="this is a test";
console.log(new_name);

new_name='P';
console.log(new_name);

var this_num='6';
this_num=this_num+1;
// this_num=parseInt(this_num)+1;

console.log(this_num);

var firstName='John';
var lastName='Doe';

var fullName=firstName+lastName;

console.log(fullName);

fullName=firstName+' '+lastName;
console.log(fullName);  

let length_firstname=firstName.length;
console.log(length_firstname);

fullName=fullName.toUpperCase();
console.log(fullName);

//array
let names=['Pierre','Paul','Jack','John'];
console.log(names);

let mix=['Pierre',12,true];
console.log(mix);

console.log(names[2]);

var selected_name=names[3];
console.log(selected_name);


console.log(mix[1]);


let student_marks=[ ['pierre',50],['Paul',10],['Jack',90] ];

console.log(student_marks[2][1]);

console.log(student_marks[1]);
console.log(student_marks[1][0]);

average=(student_marks[0][1]+student_marks[1][1]+student_marks[2][1])/3;
console.log(average);


let my_array=['Pierre','Paul','Jack','John'];

//change the value of the first element
console.log(my_array[0]);
my_array[0]='Tom';
console.log(my_array[0]);

my_array[2]='Tic';
console.log(my_array);

my_array.push('Tac');
console.log(my_array);

my_array.pop();
console.log(my_array);

delete my_array[0];
console.log(my_array);


var numbers=[1,2,3,4];
console.log(numbers);
let temp=numbers[2];
numbers[2]= 10;
numbers.push(temp);
console.log(numbers);


let name2=['test','test2','test3'];
name2=[1,2,3];
console.log(name2);


//comparisons - 2possible outcomes - true/false
let married_status=true;
console.log(!married_status);

let num_1=20;
let num_2=20;

console.log(num_1 == num_2);
console.log(num_1 >= num_2);
console.log(num_1 <= num_2);
console.log(num_1 != num_2);


var i=1;
i++; //i=i+1
console.log(i);


var j=1;
j+=2; //j=j+2
console.log(j);