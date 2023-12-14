// person={};

// person= new Object();

// person.name='paul';
// person.age=40;

// console.log(person);

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.baseSalary=5000;
        this.experience=10;
    }
    //create new property salary
    //getter
    get salary(){
        return this.baseSalary*this.experience;
    }

    //setter
    set salary(amount){
        this.baseSalary=amount/this.experience;
    }


    //setter

    eat(){
        console.log(this.name+' is eating');
    }

    info(){
        console.log(`${this.name} is aged ${this.age}`);
    }
}

paul=new Person('Paul',40);
eric=new Person('Eric',50)

console.log(paul);
console.log(eric);


paul.eat();
eric.eat();

// eric.age=eric.age+1;
eric.info();

paul.salary=10000000;
console.log(paul.salary);
console.log(paul.baseSalary);




