class RailwayForm{
    submit(){
        alert(this.name + " : Your form is submitted for train number" +  this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number" +  this.trainno)
    }
    fill(givenname, trainno){
    this.name = givenname
    this.trainno = trainno
    }
}

//Create a form

let harryForm = new RailwayForm()
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()

//Fill the form with details

harryForm.fill("Harry", 14316)
rohanForm1.fill("Rohan" , 12422)
rohanForm2.fill("Rohan" , 12445)

harryForm.submit()
rohanForm1.submit()
rohanForm1.cancel()
rohanForm2.submit()