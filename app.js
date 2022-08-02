const express = require("express")
const routes = require("./routes/studentRoutes")
const app = express()
const PORT = 5000
const connectDb = require("./database/connection")
require("./models/studentModel")

connectDb()
// use built in middleware for getting the form data
app.use(express.urlencoded({ extended : false }))

// we want to serve the static files
app.use(express.static("public"))
// adding routes
app.use("/student",routes)

// set up of ejs engine and view path
// app.set("views","./views")
// app.set("view engin","ejs")


app.listen(5000,()=>{
    console.log(`The Server is running at http://localhost:${PORT}`)
})