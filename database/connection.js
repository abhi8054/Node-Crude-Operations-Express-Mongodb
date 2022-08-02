const mongo =  require("mongoose")

const PATH_URL = "mongodb://localhost:27017"
const DB_NAME = "studentDb"
const option = {
    dbName : DB_NAME
}
const connectDb = () =>{
    mongo.connect(PATH_URL,option)
    .then((result) =>{
        console.log("Connection is Successfull")
    }).catch((error) =>{
        console.log("Connection Failed",error)
    })
}

module.exports = connectDb