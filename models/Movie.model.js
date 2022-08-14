const { __express } = require("hbs");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: String,
    director: String,
    image: String,
    description: String,
    showtimes: [{type: String}]
})


const Movie = mongoose.model("Movie", movieSchema);
module.export = Movie;