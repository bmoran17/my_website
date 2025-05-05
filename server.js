require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}
@cluster0.4x9ytlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Successful connection to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();
app.listen(PORT, () => console.log(`Server started on ${PORT}`));