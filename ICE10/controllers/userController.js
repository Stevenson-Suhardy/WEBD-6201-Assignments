const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../models/User.js");
const User = mongoose.model("User");

const homeView = (req, res) => {
    const pageTitle = "Home Page";
    res.render("home", {
        pageTitle: pageTitle,
    });
};

const formView = (req, res) => {
    const pageTitle = "Registration Form";
    res.render("form", {
        pageTitle: pageTitle
    });
}

const formSubmission = (req, res) => {
    // console.log(req.body);
    const { fullName, email, password, confirm } = req.body;

    if (password != confirm) {
        console.log("Passwords must match!");
    }
    else {
        User.findOne({email: email})
        .then((user) => {
            if (user) {
                console.log("Found user! Email already registered");
                const pageTitle = "Already Registered";
                let message = "You are already registered.";
                res.render("form-submission", {
                    pageTitle: pageTitle,
                    alreadyRegistered: true,
                    message: message,
                })
            }
            else {
                const newUser = new User({
                    fullName, email, password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) throw err;
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;

                        newUser.password = hash;
                        newUser.save().then(() => {
                            const pageTitle = "New User Registered";
                            const registeredMessage = "You have just registered";
                            res.render("form-submission", {
                                pageTitle: pageTitle,
                                registeredMessage: registeredMessage,
                                alreadyRegistered: false,
                            })
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                    });
                });
            }
        })
    }
}

module.exports = {
    homeView,
    formView,
    formSubmission,
}