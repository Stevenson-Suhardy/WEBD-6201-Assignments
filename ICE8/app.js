const express = require("express");
const PORT = 3000;

// create an express app
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, WEBD6201 World! Now improved with NODEMON");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})