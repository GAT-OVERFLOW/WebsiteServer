const express = require('express');
const mongoose = require("mongoose");
const Router = require("./Routes")
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

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
app.use(express.static('assets'))
app.listen(8080, () => {
    console.log("Server is running on port 8080"); 
});