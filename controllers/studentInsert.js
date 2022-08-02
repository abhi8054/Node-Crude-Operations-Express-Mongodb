const { studentModel } = require("../models/studentModel")
const routes = require("../routes/studentRoutes")
const viewStudentDoc = (req,res) =>{

    const viewAllDoc = () =>{
        studentModel.find()
        .then((result)=>{
            res.render("detailStudent.ejs",{data:result})
        })
    }
    viewAllDoc()
}

const insertStudent = (req,res) =>{
    res.render("addStudent.ejs")
}

const insertStudentDoc = (req,res) =>{
    const {name,age,email} = req.body
    const studentDoc = new studentModel({
        name:name,
        age:age,
        email:email
    })
    studentDoc.save()
    .then(
        (result) =>{
            res.redirect("/student/")
        }
    )
       
}
const updateStudent = (req,res) =>{
    var data = {}
    studentModel.findById(req.params.id)
    .then((result)=>{
        data = {...result}
        res.render("editStudent.ejs",{prevData:data._doc})
    })
}

const updateStudentDoc = (req,res) =>{
    const id = req.params.id
    const {name,age,email} = req.body
    const newData = {
        name:name,
        age:age,
        email:email
    }
    studentModel.findByIdAndUpdate(id,newData,{returnDocument:"after"})
    .then((result) =>{
        res.redirect("/student/")
    })
    
}

const deleteStudentDoc = (req,res) =>{
    studentModel.findByIdAndDelete(req.params.id)
    .then((result) =>{
        res.redirect("/student/")
    })
}

module.exports = {insertStudent,viewStudentDoc,insertStudentDoc,updateStudent,updateStudentDoc,deleteStudentDoc}