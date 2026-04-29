// Use Constructor for one problem
/*
class RailwayForm{
    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
         this.name = givenname
        this.trainno = trainno
    }
    submit(){
        alert(this.name + " : Your form is submitted for train number" +  this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number" +  this.trainno)
    }
}

//Create and fill forms

let harryForm = new RailwayForm("Harry", 114360)
let rohanForm1 = new RailwayForm("Rohan" , 12422)
let rohanForm2 = new RailwayForm("Rohan" , 12445)

harryForm.submit()
rohanForm1.submit()
rohanForm1.cancel()
rohanForm2.submit()
*/

// Use Constructor for another problem

class RailwayForm{
    constructor(givenname, trainno, address){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
         this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview(){
        alert(this.name + " : Your form is for train number" + " " + this.trainno + " and your address is" + " " +this.address)
    } 
    submit(){
        alert(this.name + " : Your form is submitted for train number" + " " + this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number" + " " + this.trainno)
        this.trainno = 0
    }
}
let harryForm = new RailwayForm("Harry", 11456, "430, baker street, London")
harryForm.preview()
harryForm.submit()
harryForm.cancel()
harryForm.preview()