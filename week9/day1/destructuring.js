user={
    username: 'fog321',
    password:'gjh44637834rfj',
    name: 'John smith',
    token: '78943ewfwkejlidj78932002HJLKD',
    age: 30,
    address: 'morc avcds phoenix',
    job:'administrator'
}

// user_formatted={
//     name: 'John smith',
//     address: 'morc avcds phoenix',
// }

let {name: uname,address: uaddress}=user;

console.log(uname);
console.log(uaddress);

let{x,y}={x:10,y:10};
console.log(x);

//destructure large objects
let {job,age}=user;
console.log(job);
console.log(age);

console.log('Nested destructuring');
//nested destructuring
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 64
    }
};

let {scores:{maths,english}}=student;

console.log(maths);
console.log(english);


// function average_marks(student){
//     let avg=(student.scores.maths+student.scores.english)/2;
//     return avg
// }


function average_marks({scores:{maths,english}}){
    let avg=(maths+english)/2;
    return avg
}

console.log("avg: "+average_marks(student));