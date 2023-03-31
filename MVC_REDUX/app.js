// REQUIRES
const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");

// Pre-app config
dotenv.config({ path: "./process.env"});

const PORT = process.env.PORT;

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

// ROUTES
app.use('/', require("./routes/user.js"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
