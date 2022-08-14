const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");


router.get("/", (req, res, next) => {   
    console.log("This is rendering movies properly")
    Movie.find()
        .then( result =>{
            res.render("movies", {result})
        })    
})


module.exports = router;