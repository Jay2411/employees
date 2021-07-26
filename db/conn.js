const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('connected');
}).catch((e)=>{
    console.log('not connected');
})