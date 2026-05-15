const sayHello = name => { 
    console.log("greeting" + " " + name) 
    console.log("hello")
}
const x = {
name : "Harry",
role : "JS Developer",
exp : 30,
show : function() {
    //let that = this
    setTimeout(() => {
          console.log(`The name is ${this.name} \n The role is ${this.role}`)
    },2000)
}
}
sayHello("Harry" , "Good Afternoon")
//x.show()