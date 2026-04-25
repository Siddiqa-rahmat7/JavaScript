// Session Storage

//sessionStorage.key("name")
//sessionStorage.clear()
//sessionStorage.removeItem("name")
//sessionStorage.setItem("name","harry")
//sessionStorage.getItem("name")

//Storage Event

window.onstorage = (e) => {
    alert("change")
    console.log(e)
}