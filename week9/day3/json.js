console.log([1,2,3]);
console.log(JSON.stringify([1,2,3]));

person={
    name:'Paul',
    age:40,
    employed:true,
    books:['harry potter','twilight','lord of the rings']
}

console.log(person);

//generate json string
data=JSON.stringify(person,null,4);
console.log(data);


//get back object by parsing

myString='{"name":"Eric","age":31,"employed":false,"books":["harry potter","twilight","lord of the rings"]}';
console.log(myString);

myObject=JSON.parse(myString);
console.log(myObject);


now= new Date();
console.log(now);

// info=JSON.stringify(now);
info=now.toJSON();
console.log(info);
