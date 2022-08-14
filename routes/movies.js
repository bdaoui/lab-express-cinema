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


router.get("/:id", (req, res, next) =>{
    const {id} = req.params;
    
    Movie.find({_id:id})
        .then(result =>{
            console.log(result)
            res.render("movieSpec", {result})
        })
})


module.exports = router;