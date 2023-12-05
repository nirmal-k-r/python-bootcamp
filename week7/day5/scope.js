// let x=1;
// console.log(x);


// function test(){
//     let y=5;
//     console.log(y);
// }

// test();
// console.log(y);


// let x=1;

// function test(){
//     var x=5;
//     console.log('Function: '+x);
// }
// test();

// x=2;

// console.log('Main program: '+x);

// var x=1;

// function test(){
//     console.log(x);
//     x=3;
// }

// test();
// console.log(x);

// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();


function payment(amount, paid=amount, type='cash'){
    if (type=='cash' && amount>paid){
        console.log('Take your change');
    }else{
        console.log('thanks for your purchase');
    }
}


payment(2000,'card');
