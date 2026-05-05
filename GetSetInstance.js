// Getter , Setter , Instnace Operator

class Animal {
    constructor(name){
        this._name = name
    }
    fly(){
        alert("Mai ud raha hu")
    }
    get name(){
        return this._name
    }
    set name(newName){
       this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating carrot")
    }
}

let a = new Rabbit("Bird")
a.fly()
console.log(a.name)
a.name = "Parrot"
console.log(a.name)

let c = 58
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)