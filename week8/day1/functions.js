// function eat(){
//     console.log('I am eating');
// }

// eat();


// eat();

// let eat = function (){
//     console.log('I am eating');
// }

//self invoking
// (function (){
//     console.log('I am eating');
// })();


// function test(){  //parent function
//     console.log('test');
//     function test2(){  //child function
//         console.log('test2');
//     }
//     test2();
// }
// test();
// test2(); //shopuld be an erro

// function add() {
//     let counter = 0;
//     function plus() {
//         counter += 1;
//         console.log(counter) ;
//     }
//     plus();  
//   }
  
//   add();


function first(x){
    function second(y){
        return x+y;
    }

    return second;
}

a=first(3);
console.log(a);

b=a(2);
console.log(b);