const express = require("express");
const router = express.Router();
const { getAllContacts, createContact } = require("../controllers/contactController");

// 공통 url app.js에서 처리 가능

router
    .route("/")
    .get(getAllContacts)
    .post(createContact);

router
    .route("/:id")
    .get((req, res) => {
        res.send(`View Contact for ID : ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update Contact for ID : ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete Contact for ID : ${req.params.id}`)
    })

module.exports = router;