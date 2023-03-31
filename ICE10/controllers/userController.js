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
    })
}

const formSubmission = (req, res) => {
    console.log(req.body);
}

module.exports = {
    homeView,
    formView,
    formSubmission,
}