const express = require('express');
const mongoose = require("mongoose");
const Router = require("./Routes")

const app = express();
app.use(express.json());

const dbString = "mongodb+srv://gatoverflow:Ni2ZKkGtUk9OzMwR@cluster0.jdegmx5.mongodb.net/?retryWrites=true&w=majority";
const connection = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbString, connection);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("Connected successfully")
});

app.use(Router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});