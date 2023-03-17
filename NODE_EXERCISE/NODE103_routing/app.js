const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
    // get the url from the req
    let url = req.url;
    // get the method from the req
    let method = req.method;
    // if the url '/'
    if (url == '/') {
        // write the html for the index page
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Getting Data from Request Object</title>
        </head>
        <body>
            <h1>Enter some data that we will write to a file</h1>
            <form action="/message" method="post">
                <label for="fname">First Name:</label>
                <input type="text" name="fname" id="fname" />
                <br /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </body>
        </html>`);
    }
    // else if the url '/message' and the method is 'POST'
    else if (url == "/message" && method == "POST") {
        // write the input to a file, and return the html from the message.html
        console.log(req);

        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message</title>
        </head>
        <body>
            <h1>Message from the server - thank you for your submission!</h1>
        </body>
        </html>`);
        // end the res object
        res.end();
    }
});

server.listen(PORT, "127.0.0.1");