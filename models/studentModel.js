const mongo = require("mongoose")

const studentSchema = new mongo.Schema({
    name:{type:String},
    age: {type:Number},
    email : {type:String}
})


const studentModel = mongo.model("student",studentSchema)

module.exports = {studentModel}