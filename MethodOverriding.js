class Employee{
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
    requestCoffee(coffee){
        console.log(`Programmer has requested ${coffee} coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(5) // calling parent class method
        console.log("One extra leave granted")
        //console.log(`Employee has requested ${leaves + 1 } leaves (one extra )`);
    }
}

let e = new Programmer()
e.login()
e.requestLeaves(4)
