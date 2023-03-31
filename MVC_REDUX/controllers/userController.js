const { getSWAPI } = require("../helpers/apiCalls");

const homeView = (req, res) => {
    const pageTitle = "Home";
    const homeContent = "This is the homepage. Welcome!";
    res.render("home", {
        pageTitle: pageTitle
    });
};

const planetView = async (req, res) => {
    const planet_url = "http://swapi.dev/api/planets/";
    let full_planet_data = await getSWAPI(planet_url);
    // console.log(full_planet_data);
    planets_data = full_planet_data["results"];
    res.render("planets", { planets_data: planets_data});
}

module.exports = {
    homeView,
    planetView
}