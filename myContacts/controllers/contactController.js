const asyncHandler = require("express-async-handler");

// Get All Contacts
const getAllContacts = asyncHandler(async (req, res) => {
    res.send("Contact Page");
});

// Create Contact
const createContact = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;

    if(!name || !email || !phone) {
        return res.send("필수 값이 입력되지 않았습니다.")
    }
    res.send("Create Contacts");
})

module.exports = { getAllContacts, createContact };