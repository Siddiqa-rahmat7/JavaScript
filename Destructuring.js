// Destructuring 

let arr = [3,5,7,11,13,17]
let [a,b,c,...rest] = arr
console.log (a,b,c,rest)

let [a,b, ,...rest]
console.log(a,b,rest)

let {a,b} = {a:1, b:2}
console.log(a,b)

// Spread Operator

let arr = [2,4,6,8,10]
let obj = {...arr}
console.log(obj)

function sum(v1, v2, v3, v4, v5){
    return v1 + v2 + v3 + v4 + v5
}
console.log(sum(...arr))

let obj2 = {
    name: "Tushar",
    company: "Tata Pvt lim.",
    address: "IET Campus"
}
console.log({...obj2, name:"siddiqa"}) // in this obj2 object is change
console.log({name:"siddiqa", ...obj2}) // in this obj2 object does not change