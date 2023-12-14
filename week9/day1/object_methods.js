// person={
//     name:'tom',
//     age:40
// }

// person2=person;
// person2.age=100;
// console.log(person);



// data=[0,1,2,3,4]

// function test(my_list){
//     my_list[0]=100
// }

// console.log(data);
// test(data);
// console.log(data);


person={
    name:'Paul',
    age:40,
    married: false
}

// console.log(person);

//to get the keys of the object
console.log(Object.keys(person));

//to get only the values from the object
console.log(Object.values(person));


for (key of Object.keys(person)){
    console.log(key+" : "+person[key]);
}

//if i want the fillwing: [['name','paul'],['age',40],['married',true]]
console.log(Object.entries(person));


for ([key,value] of Object.entries(person)){
    console.log(key+" : "+value);
}

for (item of Object.entries(person)){
    console.log(item);
    // console.log(item[0]);
    // console.log(item[1]);
}

my_custom_data=[['name','paul'],['age',40],['married',true]];

console.log(Object.fromEntries(my_custom_data));