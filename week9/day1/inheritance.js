class Person{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    info(){
        console.log(`${this.id} : ${this.name}`);
    }
}

pierre=new Person(123435,'Pierre Vale');
pierre.info();

// class Employee{
//     constructor(id,name,salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }

//     info(){
//         console.log(`${this.id} : ${this.name}`);
//         console.log('Salary : '+this.salary);
//     }
// }

class Employee extends Person{
    constructor(id,name,salary){
        super(id,name);
        this.salary=salary;
    }
    
    info(){
        super.info();
        console.log('Salary : '+this.salary);
    }

}

tom=new Employee(4321,'Tom cruise',560500);
tom.info();