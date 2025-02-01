const mongoose = require("mongoose");
require("dotenv").config();

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
module.exports = DBconnect;
