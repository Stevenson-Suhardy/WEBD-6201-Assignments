console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
let xhr = new XMLHttpRequest;


// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = () => {
    // check that the state is done
    console.log(`The state: ${xhr.readyState}`);    
    // if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.readyState === 4) {

        if (xhr.status === 200) {
        // console.log(`The response: ${xhr.responseText}`);
            // turn into json
            let jsonResponse = JSON.parse(xhr.responseText);
            // console log to see what we have
            console.log(`The response: ${jsonResponse[0]["url"]}`);
            let photo_url_1 = jsonResponse[0]["url"];
            let photo_url_2 = jsonResponse[1]["url"];
            // update the 1st image
            $("#photo1").attr("src", photo_url_1);
            // update the 1st figcaption
            $("#photo1 ~ figcaption").text("First image is updated using AJAX call");
            // update the 2nd image
            $("#photo2").attr("src", photo_url_2);
            // update the 2nd figcaption
            $("#photo2 ~ figcaption").text("Second image is updated using AJAX call");
        }
        else {
            // send error message
            alert(`NOPE! Did not work - returned with status code ${xhr.status}.`);
        }
    }
}
    

// use the .open() method to configure the object
xhr.open("GET", url_photos);

// add datatype to header

// use the .send() method to send the request
xhr.send();