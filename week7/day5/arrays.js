numbers=[1,2,3,4,5];

// numbers.forEach(number => {
//     console.log(number);
// });

// numbers.forEach((number, i, arr) => {
//     console.log(i);
// });

numbers = [10,11,12,15,20];

// numbers.forEach(number => {
//     (number%2==0) ? console.log(number) : number ;
// });


// x=numbers.some((num) => {
//     return (num%2==0);
// });

// console.log(x);

numbers = [10,11,12,15,20];
x=numbers.every((num) => {
    return (num%2==0);
});

console.log(x);

console.log(numbers.includes(19));