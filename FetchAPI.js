let p = fetch('')
p.then((Response)=>{
    console.log(Response.status)
    console.log(Response.ok)
    console.log(Response.headers)
    return Response.json()

}).then((value2)=>{
    console.log(value2)
})