console.log("fetch_script.js loaded");

// get the button for fetch
let btnFetch = $("#fetchJoke");
// create a url variable
let urlFetch = "https://icanhazdadjoke.com/";
//need a header Accept value set to 'application/json'
let myFetchHeaders = {"Accept": "application/json"};

// create the callback for the click
$(btnFetch).click(() => {
    // use fetch
    fetch(
        urlFetch, {
            // give the necessary header data
            headers: myFetchHeaders
        })
        // first then() to recieve the promise
        .then((res) => {
            return res.json();
        // send the json from the promise on to the next then()
        })
        .then((jsonRes) => {
            // console log the json
            console.log(jsonRes);
            // set the output
            $("#output").text(jsonRes["joke"]);
        })
})
    

