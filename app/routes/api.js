// Fanny Ståhl 2019

// Requires
const express = require('express');

// Read schema
var NatureRes = require("../models/natureres.js");

// Router
const router = express.Router();

// GET
router.get('/', (req, res, next) => {

    // Gets all NatureRes
    NatureRes.find({}).then((natureres) => {
        res.send(natureres);
    });
});

// GET single
router.get("/:id", (req, res, next) => {

    // Get id from parameter
    var findId = req.params.id;

    // Finds one NatureRes by ID
    NatureRes.findById(findId).then((natureres) => {
        res.send(natureres)
    });
    
});

// POST
router.post('/add', (req, res, next) => {

    // Create a NatureRes object with the request body as reference, then redirects user
    // Catch any errors and forward it to the next middleware
    NatureRes.create(req.body).then(() => {

        // Redirect
        res.redirect("/");

    }).catch(next);

})

// DELETE
router.delete('/:id', (req, res, next) => {

    // Gets id from parameter
    var deleteId = req.params.id;

    // Removes NatureRes by ID
    // Sends a message back that tells which NatureRes was deleted
    NatureRes.findByIdAndRemove({_id: deleteId}).then(() => {
        res.json({
            message: "Naturreservat med id " + deleteId + " raderad."
        })
    });
})

// PUT
router.put('/:id', (req, res, next) => {

    // Gets id from parameter
    var findId = req.params.id;

    // Updates NatureRes by ID, with the request body as reference
    NatureRes.findByIdAndUpdate({_id: findId}, req.body).then(() => {

        // Redirect
        res.redirect("/");

    });

  })

// Export
module.exports = router;