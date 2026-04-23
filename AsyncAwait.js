async function harry () {
let DelhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("27 Degree")
    }, 3000)
    })

    let BangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=> {
        resolve("21 Degree")
    }, 7000)
    })
    console.log("Fetchinng Delhi Weather Please wait...")
    let DelhiW = await DelhiWeather
    console.log("Fetched Delhi Weather : " + DelhiW)
     console.log("Fetchinng Bangalore Weather Please wait...")
    let BangaloreW = await BangaloreWeather
    console.log("Fetched Bangalore Weather : " + BangaloreW)
    return [DelhiW , BangaloreW]

/*DelhiWeather.then((value)=>{
    console.log("Delhi Weather is " + value)
})
BangaloreWeather.then((value)=>{
    console.log("Bangalore Weather is " + value)
})*/

}
console.log("Welcome to weather control room")
let a = harry()
a.then((value)=>{
console.log(value)    
})
