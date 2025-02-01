const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const allRoutes = require("./routes/task.route");

app.use("/taskify", allRoutes);

app.listen(PORT, () => {
    console.log("Server Started at PORT : " + PORT);
});

const DBconnect = require("./config/database");
DBconnect();
