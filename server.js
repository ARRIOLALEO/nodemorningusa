const express = require("express")
const app = express()
const productsRouter = require("./routes/productsRoutes")
const userRouter = require("./routes/userRoutes")

app.use("/products",productsRouter)
app.use("/users",userRouter)


app.listen(3000,()=>console.log("im listening on the port 3000"))
