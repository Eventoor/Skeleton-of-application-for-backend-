const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

con.connect(function(err) {
  if (err) {
    return console.error('ERROOR!!!: ' + err.message);
  } 
  console.log("Connect MySQL!");
});
 
con.query('Create Database EvEntor', function (err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log("Database created");
  }
});






