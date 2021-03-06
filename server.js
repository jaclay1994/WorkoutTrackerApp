const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")

const PORT = process.env.PORT || 4000

const app = express()

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true});

// app.post("/", ({ body }, res) => {

// })
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});