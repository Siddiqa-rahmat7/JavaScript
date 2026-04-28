let a = {
    name: "harry",
    language: "JavaScript",
      run:() => {
        alert("self run")
    }
}
console.log(a)

let p = {
    run:() => {
        alert("run")
    }
}

p.__proto__ = {
    code: "OOPs"
}

a.__proto__ = p

a.run()
console.log(a.code)