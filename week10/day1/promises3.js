marks=60;
let promise = new Promise(function(resolve, reject) {
    if (marks>=50){
        setTimeout(function(){
            resolve('pass');
        },10000);
      
    }else{
        reject('fail');
    }
})

let promise2 = new Promise(function(resolve, reject) {
    if (marks>=50){
        setTimeout(function(){
            resolve('pass');
        },2000);
    }else{
        reject('fail');
    }
})


// Promise.all([promise,promise2])
// .then(function(result){
//     console.log(result);
// });

Promise.race([promise,promise2]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});