// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
function greet(){
    console.log("Good Morning")
}
var a = 6; // Declaration hoisted to the top but initialzation is not
console.log()
