/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 3, 2023
 */

// Create heading with class and text
let title = document.createElement("h1");
title.className = "h1 text-center";
title.innerHTML = "Main Interests";

// Creating 3 divs for 3 different images along with their class
let divImage = document.createElement("div");
divImage.className = "container text-center";
let divImage2 = document.createElement("div");
divImage2.className = "container text-center";
let divImage3 = document.createElement("div");
divImage3.className = "container text-center";

// Creating the first image
let image = document.createElement("img");
image.src = "./images/anime.jpg";
// Creating the first image description
let imageDesc = document.createElement("p");
imageDesc.innerHTML =
  "As you can see, and probably can predict based on the picture, I am an anime fan. The picture above is from and anime called Demon Slayer or Kimetsu no Yaiba in Japanese. I love this anime just because of the amazing musics they made and also, excellent visuals. The plot is very interesting and especially the fight scenes, are spectacular.";

// Creating the second image
let image2 = document.createElement("img");
image2.src = "./images/movie.png";

// Creating the second image description
let image2Desc = document.createElement("p");
image2Desc.innerHTML =
  "The Avatar 2 is one of the best movies I have watched this year, even though it took who knows how many years after the first avatar came out. When it came out, I forgot what was the first avatar like that I had to watch it all over again before watching the movie. This movie has many plot twists and great visual effects. Overall, it is a pretty cool movie that is worth watching.";

// Creating the third image
let image3 = document.createElement("img");
image3.src = "./images/music.jpg";
// Creating the third image description
let image3Desc = document.createElement("p");
image3Desc.innerHTML =
  "The music I am into is J-Rock and J-Pop, which means they are japanese songs. This song is a unique genre which mixes both the genres I love into one. The song is called Chainsaw Blood by Vaundy and it is featured as the ending in the anime Chainsaw Man. Anyone who loves rock should listen to this song, even though we don't get the meaning, we still get the feels.";

// Appending the images and it's description to their divs
divImage.appendChild(image);
divImage.appendChild(imageDesc);
divImage2.appendChild(image2);
divImage2.appendChild(image2Desc);
divImage3.appendChild(image3);
divImage3.appendChild(image3Desc);

// Appending the title and divs to the body
document.body.appendChild(title);
document.body.appendChild(divImage);
document.body.appendChild(divImage2);
document.body.appendChild(divImage3);
