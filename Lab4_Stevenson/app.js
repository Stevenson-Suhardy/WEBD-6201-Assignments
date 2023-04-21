const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config({ path: "./process.env"});

const PORT = process.env.PORT;
const DB_CONN_STRING = process.env.DB_STRING;

mongoose.connect(DB_CONN_STRING, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})
.then(() => {
    console.log("Database Connection Successful!");
})
.catch((err) => {
    console.log(`DB Connection ERROR: ${err}`);
})

const app = express();

app.engine(
    ".hbs",
    exphbs.engine({
        defaultLayout: "main",
        partialsDir: "./views/partials",
        extname: ".hbs"
    })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require("./routes/animal.js"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})