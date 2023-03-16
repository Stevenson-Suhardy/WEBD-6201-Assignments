const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello from node.js");

// fs.writeFileSync(`${__dirname}/hello.txt`, "Some text");

// fs.writeFileSync(`./data/hello.txt`, `${__dirname}`);

fs.writeFileSync(`../data/hello.txt`, `Hello from ${__filename}`);