let b = 6
function ax(){   // function scope
let a = 5;
console.log(a)
console.log(b)
}
ax()
console.log(a)
console.log(b)

{
let a = 5;        // block scope
}
console.log(a)