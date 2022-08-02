const express = require("express")
const { insertStudent,viewStudentDoc,insertStudentDoc,updateStudentDoc,updateStudent,deleteStudentDoc} = require("../controllers/studentInsert")

const routes = express.Router()

routes.get("/",viewStudentDoc)

routes.get("/insert",insertStudent)

routes.post("/insert",insertStudentDoc)

routes.get("/edit/:id",updateStudent)

routes.post("/edit/:id",updateStudentDoc)

routes.post("/delete/:id",deleteStudentDoc)


module.exports = routes