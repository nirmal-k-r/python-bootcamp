marks=60;
let promise = new Promise(function(resolve, reject) {
    if (marks>=50){
        console.log('before resolving');
        resolve('pass');
    }else{
        reject('fail');
    }
});




promise.then(function(result){
    console.log(result);
})
.then(function(){
    console.log('second then');
}).then(function(){
    console.log('third then');
})
.catch(function(error){
    console.log(error);
}).finally(function(result){
    console.log('operation completed');
});

console.log(promise);