const express = require("express"); // import express
const app = express(); // the express app
require("dotenv").config(); // import the dotenv config which will load all the data in .env into process object
const PORT = process.env.PORT || 3000;
app.use(express.json()); // middleware to parse express

const allRoutes = require("./routes/task.route"); // importing all the routes

// mouting the routes to /taskify path
app.use("/taskify", allRoutes);

// app listening to below port
app.listen(PORT, () => {
    console.log("Server Started at PORT : " + PORT);
});

// call the DBconnect function to connect it with database
const DBconnect = require("./config/database");
DBconnect();
