const mongoose = require("mongoose");
const {Schema} = mongoose;

const movieSchema = new Schema({
    title: String,
    director: String,
    image: String,
    description: String,
    showtimes: [String]
})


module.exports = mongoose.model("Movie", movieSchema);
