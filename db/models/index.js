// models dépendency
const db = require("../config");

// models
const Book = require("./book");

// create a object models for map all the models
const models = {
  book: new Book(db),
};

// export our model object
module.exports = models;
