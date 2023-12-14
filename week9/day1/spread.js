old={
    name: 'Pail',
    age:30
}
// person=old;
// person.married=false;

// console.log(old);


// person={...old};
// person.married=false;
person={...old, married:false}

console.log(old);
console.log(person);


emp={
    name: 'Tom',
    age:40,
    employment:{
        type:'full time',
        salary: 40000
    }
}

//shallow copying
employee={...emp};

console.log(employee);

employee.employment.salary=employee.employment.salary+10000;

console.log(employee);
console.log(emp);


//deep copying for nested objects
employee2={
    ...emp,employment:{...emp.employment}
};

employee2.employment.salary=1000000;
console.log(employee2);

console.log(emp);
    
