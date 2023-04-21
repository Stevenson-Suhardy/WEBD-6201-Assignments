const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../model/animal.js");
const Animal = mongoose.model("Animal");

/**
 * This function is used to render the home page
 * @param req 
 * @param res 
 */
const homeView = (req, res) => {
    const pageTitle = "Home Page";
    res.render("index", {
        pageTitle: pageTitle
    });
}

/**
 * This function is used to render the entryForm page
 * @param req 
 * @param res 
 */
const entryFormView = (req, res) => {
    const pageTitle = "Add Animal Form";
    res.render("animals/entry-form", {
        pageTitle: pageTitle
    });
}

/**
 * This function is used to get all animals from the database and pass it to the handlebars page and display all data
 * @param  req 
 * @param  res 
 */
const getAllAnimals = (req, res) => {
    Animal.find().lean().then((animals) => {
        if (animals) {
            res.render('animals/all-animals', {
                pageTitle: "List of All Animals",
                animals: animals
            });
        };
    });
};

/**
 * This function is used to display an edit animal page depending on what animal the user clicks
 * @param req 
 * @param res 
 */
const editAnimal = (req, res) => {
    let id = req.params.id;
    Animal.findOne({_id: id}).lean().then((animal) => {
        let gender = (animal.gender == "Male");
        let available = (animal.isTransportable == true);
        res.render("animals/edit-animal", {
            animal: animal,
            id: id,
            gender: gender,
            available: available,
            pageTitle: "Edit Animal"
        });
    });
};

/**
 * This function is used to add a new animal to the database
 * @param req 
 * @param res 
 */

const formSubmission = (req, res) => {
    const { zoo, scientificName, commonName, givenName, gender, dateOfBirth, age, isTransportable } = req.body;

    const newAnimal = new Animal({
        zoo, scientificName, commonName, givenName, gender, dateOfBirth, age, isTransportable
    });

    newAnimal.save().then(() => {
        res.redirect("/animals/all-animals");
    })
    .catch((err) => {
        console.log(err);
    });
};

/**
 * This function is used to update an animal in the database
 * @param req 
 * @param res 
 */
const updateAnimal = async (req, res) => {
    const update = { 
        zoo: req.body.zoo, 
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        isTransportable: req.body.isTransportable
    };
    const id = req.params.id;
    const filter = { _id: id };
    let doc = await Animal.findOneAndUpdate(filter, update, {new: true});
    res.redirect("/animals/all-animals");
}

/**
 * This function is used to delete an animal from the database
 * @param req 
 * @param res 
 */
const deleteAnimal = async (req, res) => {
    const id = req.params.id;
    const filter = { _id: id };
    let deletedCount = await Animal.deleteOne(filter);
    res.redirect("/animals/all-animals");
};

module.exports = {
    homeView,
    entryFormView,
    getAllAnimals,
    formSubmission,
    editAnimal,
    updateAnimal,
    deleteAnimal,
}   