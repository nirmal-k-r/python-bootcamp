// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');

// // console.log('test');

// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');


// function hello(){  //function definition
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
// }
// hello(); //function call
// console.log('test');
// hello();



// function drinkCoffee(){
//     console.log("The user drinks coffee in the morning");
// }

// drinkCoffee();

// num1=50;
// num2=100;
// total=num1+num2;
// average=total/2;
// console.log(average);

// num1=10;
// num2=20;
// total=num1+num2;
// average=total/2;
// console.log(average);

// num1=100;
// num2=200;
// total=num1+num2;
// average=total/2;
// console.log(average);


// function addTwoNumbers(num1,num2){
//     total=num1+num2;
//     average=total/2;
//     console.log(average);
// }

// addTwoNumbers(50,100);
// addTwoNumbers(10,20);
// addTwoNumbers(100,200);

// function calculate_age(current_year, dob){
//     age=current_year-dob;
//     console.log(age);
// }

// calculate_age(2023, 1990);
// calculate_age(2023, 1995);
// calculate_age(2023, 2000);


// function calculate_age(current_year, dob){
//     age=current_year-dob;
//     return age;
// }


// my_age= calculate_age(2023, 1990);
// console.log(my_age);

// console.log(calculate_age(2023, 1995));



// function multiplication(num1,num2,num3){
//     return num1*num2*num3;
// }
// results=[];

// results.push(multiplication(4,5,6));
// results.push(multiplication(10,20,1));
// results.push(multiplication(5,5,5));

// console.log(results);

// result=multiplication(4,5,6);
// console.log(result);


// function register_person(name,father_name,mother_name,age=0){
//     person={
//         name:name,
//         father_name:father_name,
//         mother_name:mother_name,
//         age:age
//     }
//     return person;
// }

// person1=register_person('joe smith','john smith','jane smith');
// console.log(person1);
// person2=register_person('joe smith','john smith','jane smith', 30);
// console.log(person2);


// function mult(num1=1,num2=1){
//     result= num1*num2;
//     console.log(result);
// }

// mult();


person={
    name:'joe smith',
    dob:1990,
    age: function (current_year){
        console.log(current_year-this.dob);
    }
}


person.age(2023);


person2={
    name:'joe smith',
    dob: new Date("2022-03-25")
}
