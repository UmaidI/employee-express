// TODO: this file :)
const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees");

app.get("/", (req, res) => {
  res.send("hello employees");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length)
  res.json(employees[randomIndex]);
  
});

app.get("/employees/:index", (req, res) => {
  const {index} = req.params;
  if(index < 0 || index >= employees.length){
    res.status(404).send("that employee does not exist");
  }else {
    res.json(employees[index]);
  }
});



app.listen(PORT, () => {
  console.log(`The server is listening on port #${PORT}.`);
});

