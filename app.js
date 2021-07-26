const { json } = require("express");;
const express = require('express');
const { request } = require("http");
const path = require('path');
const app = express();

require("./db/conn");
const Index = require("./modules/indexs");
const fs = require('fs');
const { isValidObjectId } = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const static_path = path.join(__dirname, "../");
app.use(express.static(static_path))

const port = 8000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.post("/index", async (req, res) => {
  try {
    const registerStudent = new Index({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    })
    const indexed = await registerStudent.save();
    res.redirect("/");
    console.log('done');

    registerStudent.find({}, function(err, data){
      console.log(data);
    });

    var stream = fs.createWriteStream("employee.txt");
  stream.once('open', function(fd) {
  stream.write(req.body.id);
  stream.write(req.body.name);
  stream.write(req.body.email);
  stream.write(req.body.phone);
  stream.end();
});
  }
  catch (error) {
    res.redirect("/");
    console.log('not done');
  }
});

app.get("/find", async (req, res) => {
  router.get('/:id', function(req, res, next) {
    var id = req.body.id
    models.index.findById(id)        
        .lean().exec(function (err, results) {
        if (err) return console.error(err)
        try {
            console.log(results)            
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        } 
    })
})
})

app.listen(port, () => {
  console.log('server is running now');
})