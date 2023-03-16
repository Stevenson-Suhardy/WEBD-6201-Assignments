/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: March 16, 2023
 */

/**
 * This function will make all the necessary HTML elements to create 20 posts with all the id of each element is set by utilizing a for loop. At the end, it will call 2 other function to populate the data with images, titles, and the content of the post
 */
const makePosts = () => {
    for (let i = 0; i < 20; i++) {
        let idNum = i;
        let postNum = i+1;
        // Creating all necessary HTML element for a post
        let card = $(`<div class="card blog text-center"></div>`)
                    .attr("id", `card-${idNum}`)
                    .appendTo($(".blog-column"));


        let body = $(`<div class="card-body blog"></div>`)
                    .attr("id", `card-body-${idNum}`)
                    .appendTo(card);

        let br = $(`<br>`).appendTo($(".blog-column"));

        let title = $(`<h5 class="card-title blog"></h5>`)
                    .attr("id", `card-title-${idNum}`)
                    .appendTo(body);
        
        let pic = $("<img>").attr("id", `img-${idNum}`).addClass("blog-pic").css("max-height", "100px").appendTo(body);
        
        let sub = $(`<p class="userId blog"></p>`).attr("id", `sub-${idNum}`).appendTo(body);

        let post_id = $(`<span></span>`).attr("id", `post-${idNum}`).text(`Post #${postNum}: `).appendTo(sub);
        
        let text = $(`<p class="card-text blog"></p>`).attr("id", `card-text-${idNum}`).appendTo(sub);

        let user_id = $(`<span></span>`).attr("id", `user-${idNum}`).appendTo(sub);

        getPictures();
        getPosts();
    }
}

/**
 * This function is used to get pictures from pixabay using my account's API key. This function utilizes fetch to get data from the specified URL and then put the images inside the appropriate HTML img element
 */
const getPictures = () => {
    PIXABAY_KEY = "34271658-b6a1808a11231872bf5f80761";
    PIXABAY_URL = "https://pixabay.com/api/?key=<KEY>&q=dramatic&landscape&image_type=photo&per_page=21";
    const url = PIXABAY_URL.replace("<KEY>", PIXABAY_KEY);

    let pics = [];
    fetch(
        url
    )
    .then((res) => {
        return res.json();
    })
    .then((jsonRes) => {
        pics = jsonRes["hits"];
        for (let i = 0; i < 20; i++) {
            $(`#img-${i}`).attr("src", pics[i]["webformatURL"])

            let altText = jsonRes["hits"][i]["tags"];
            $(`#img-${i}`).attr("alt", altText);
        }
    })
    .catch(err => console.log(err));
}

/**
 * This function is used to get posts from a URL. This function utilizes fetch to get data from the specified URL and then put all the necessary data inside the appropriate HTML elements
 */
const getPosts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(
        url
    )
    .then((res) => {
        return res.json();
    })
    .then((jsonRes) => {
        for (let i = 0; i < 20; i++) {
            $(`#card-title-${i}`).text(jsonRes[i]["title"]);
            $(`#card-text-${i}`).text(jsonRes[i]["body"]);
            $(`#user-${i}`).text(`Posted by User ID ${jsonRes[i]["userId"]}`);
        }
    })
    .catch(err => console.log(err));
}

// Call the makePosts function
makePosts();