// let person={
//     id: 1234,
//     name:'Paul'
// };

// console.log(person.name);


// let person= new Object();
// person.name='Tom';
// person['age']=20;
// console.log(person);


let name='Pierre',age=20,married=false;

// console.log(married);

// property1='name';
// property2='age';
// property3='married';

// let person= new Object();

// person[property1]=name;
// person[property2]=age;
// person[property3]=married;

// console.log(person);

function add(x,y){
    z=x+y
    return {
        x,y,z
    };


}

result=add(2,3);

console.log(result);
for (property in result){
    console.log(property+" : "+result[property]);
}
