class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " " + "is running")
    }
     shout(){
        console.log(this.name + " " + "is Shouting")
    }
     hide(){
        console.log(this.name + " " + "is hiding")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " " + "is eating banana")
    }
}
 let cat = new Animal("Billu", "gray")
 let dog = new Animal("Leo","black")
 let monkey = new Monkey("Coco", "brown")
 let rabbit = new Animal("Bunny", "white")

 monkey.eatBanana()
 dog.shout()
 cat.run()
 rabbit.hide()