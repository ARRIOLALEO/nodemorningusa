// show informationc
app.get("/",(req,response,next)=>{
    response.send("hello im a data from the backend")
})
// another to create information
app.put("/",(req,response)=>{
    response.send("im creating a new product")
})

// this one lets us delete data
app.delete("/",(req,response)=>{
    response.send("i deleted product")
})
// this is update
app.patch("/",(req,response)=>{
    response.send("im changin my user")
})