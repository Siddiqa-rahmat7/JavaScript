class Employee{
    constructor(name){
        console.log(`Employee's constructor is here : ${name}`)
        this.name = name
    }
    login(){
        console.log(`Employee is logged in`);
    }
    logout(){
        console.log(`Employee is logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`);
    }
}

class Programmer extends Employee{
   constructor(name){
        super(name)                                                               // calling parent class constructor
        console.log(`Programmer's constructor is here : ${name}`)
    }                                   
      requestCoffee(coffee){
        console.log(`Programmer has requested ${coffee} coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(5)             
        console.log("One extra leave granted")
    }
}

let e = new Programmer("Jhon")
e.login()
e.requestLeaves(4)
