const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 3000;

// create an express app
const app = express();

// set up the Handlebars engine
app.engine("handlebars", exphbs.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = "Stevenson"

    next();
})

// index route
app.get('/', (req, res) => {
    // render the home.handlebars
    res.render("home");
})

// about route
app.get("/about", (req, res) => {
    res.send("This is the about page for WEBD6201.");
})

// run the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})