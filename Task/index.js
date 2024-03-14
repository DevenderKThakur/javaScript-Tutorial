//  this will import the express file

import express from "express";

import fs from "fs"; // to read the file

import path from "path";

//  this will create a server for the site
const app = express();

app.get("/getProducts", (req, res) => {
  // res.send("Hi!, this is done using Express.js");
  res.json({
    success: true,
    products: [],
  });
});

//  this will start web server and listen to the connections on the specified host and port

app.listen(5000, () => {
  console.log("App is listening at 5000");
});
