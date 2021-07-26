const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    id : {
        type: String,
        required:true,
        unique:true
    },
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true
    },
    phone : {
        type: String,
        required:true
    }
})

const Index = new mongoose.model("Index", studentSchema);

module.exports = Index;