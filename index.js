const getAll = require("./db/getAll");
const getById = require("./db/getById");

module.exports = {
    getAll,
    getById
}

const { contact } = require("./contacts");
console.log(contact);