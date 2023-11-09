// temp=24;

// if (temp>25){
//     console.log('hot');
// }else{
//     console.log('cold');   
// }


// humidity=60;
// temp=24;
// var button = false;

// if ((temp>20 && humidity>50) && button==true){
//     console.log('turning ac ON');
// }else{
//     console.log('turning ac OFF');
// }


// username='admin';
// password='r748903dfji';

// entered_password='r748903dfji';

// if (username=="admin" && password==entered_password){
//     console.log('welcome');
// }else{
//     console.log('wrong login details entered');
// }


// total=900;
// if (total>=5000 && total<10000){
//     console.log('you get 10% discount');
// } else if (total>=10000 && total<15000){
//     console.log('you get 20% discount');
// } else if (total>=15000){
//     console.log('you get 30% discount');
// }else{
//     console.log('no discount');
// }

// number=10;
// switch (number){
//     case 1:
//         console.log('expresso');
//         break;

//     case 2:
//         console.log('mocha');
//         break;
    
//    case 3:
//     console.log('capuchino');
//     break;

//     case 4:
//         console.log('latte');
//         break;

//     case 5:
//         console.log('double expresso');
//         break;

//     default:
//         console.log('water');

// }


loginDetails={
    email: 'test@gmail.com',
    password: '6387ducoijklm',
    roles: ['admin','user','guest']
}

console.log(loginDetails);

console.log(loginDetails.email);

console.log(loginDetails.roles[1]);

loginDetails.password='newpassword';

console.log(loginDetails);

user1={
    name: 'test',
    email: 'test@gmail.com'
}

user2={ 
    name: 'test2',
    email: 'test2@gmail.com'
}

user3={ 
    name: 'test3',
    email: 'test3@gmail.com'
}

users=[user1,user2,user3];

console.log(users[1].name);


newTest={
    a:1,
    b:12,
    c:'test'
}

newTest.d='cgyueihwo';

delete newTest.a;
console.log(newTest);

