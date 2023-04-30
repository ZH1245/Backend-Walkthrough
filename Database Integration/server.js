const express = require("express"); // import express

const app = express(); // create an express app.
const PORT = 5000; // You can assign Unique Port you want.

// Database integration Logic.

// For Reference:
// https://expressjs.com/en/guide/database-integration.html

// import specific package
// const db = require("");

// Create Database Connection
// const connection = db.connect({
//  username:"",
//  password:""
// });
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
}); // Express App Listen Function use to start server at some port.

//NOW We will Create a Simple Route that will return Hello.
app.get("/", (request, response) => {
  return response.json("Hello World");
});

// Lets try to send some data over response

app.get("/users", async (request, response) => {
  // getting users from database
  // const users = await  database.execute_command(`SELECT * FROM "USERS"`);
  let users = [
    {
      id: "1",
      name: "Ali",
      age: 18,
      message: "Hello This is Some Data over GET Request",
    },
  ];
  return response.json(users);
});
