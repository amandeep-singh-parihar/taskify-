const mongoose = require("mongoose"); // importing the mongoose
require("dotenv").config(); // importing the dotenv which load the data which are in .env into process object

// below is the DBconnect function -> for connecting with the database
const DBconnect = () => {
    mongoose
        .connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB CONNECTION SUCCESSFULLY");
        })
        .catch(() => {
            console.log("DB connection FAILED");
            console.log(err.message);
            process.exit(1);
        });
};
module.exports = DBconnect; // exporting the function
