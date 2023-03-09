console.log("pixabay.js loaded");

let PIXABAY_KEY = "34271658-b6a1808a11231872bf5f80761";
PIXABAY_URL = "https://pixabay.com/api/?key=<KEY>&q=dramatic&landscape&image_type=photo&per_page=30";
const url = PIXABAY_URL.replace("<KEY>", PIXABAY_KEY);

