// Array Method
// 1. Mapping

const arr = [5, 6, 3, 7, 8];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3
}

function binary(x) {
    return x.toString(2);
}
const output = arr.map(binary)
console.log(output);

// 2. Filter --- arrange by value

const arr = [5, 3, 2, 8, 9, 6]

function isOdd(x) {
    return x % 2;
}

function isEven(x) {
    return x % 2 === 0;
}

function greaterThan4(x) {
    return x > 4;
}

const output = arr.filter(greaterThan4);
console.log(output);

// 3.  Reduce --- sum or max

const arr = [4, 5, 6, 7, 8];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));
const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax(arr));

const output = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)
console.log(output);

// we use mapping , filter and reduce 

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output = users.map((x) => x.firstName +" " + x.lastName);
console.log(output);

const output = users.reduce(function(acc, curr){
if(acc[curr.age]){
acc[curr.age] = ++ acc[curr.age];
}
else{
    acc[curr.age] = 1
}
return acc;
}, {})
console.log(output);

const output = users.filter((x) => x.age < 30)
.map((x) => x.firstName);
console.log(output);