marks=60;
let promise = new Promise(function(resolve, reject) {
    if (marks>=50){
        //console.log('before resolving');
        resolve('pass');
    }else{
        reject('fail');
    }
}).then(function(result){
    //console.log(result);
}).catch(function(error){
    //console.log(error);
});

let promise2 = new Promise(function(resolve, reject) {
    if (marks>=50){
        resolve('pass');
    }else{
        reject('fail');
    }
}).then(function(result){
    //console.log(result);
}).catch(function(error){
    //console.log(error);
});

// console.log(promise);
console.log(Promise.all([promise,promise2]));
    
