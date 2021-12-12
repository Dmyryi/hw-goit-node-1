// // //IMPORT MODULES
// // import "fs";

const fs = require("fs/promises");
const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
console.log(argv);
//COMMANDER
const { program } = require("commander");

const contactsOperation = require("./db")

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const option = program.opts();
console.log(option);
// //Start work




// // TODO: задокументировать каждую функцию

const contactOperation = async({ action, id, name, email, phone }) => {
    switch (action) {
        case "All":
            const contacts = await contactsOperation.getAll();
            console.table(contacts);
            break;
        case "byId":
            const contact = await contactsOperation.getById(id);
            console.log(contact);
            break;
        case "addId":
            const newContact = await contactsOperation.add({ name, email, phone });
            console.group(newContact);
            break;
        case "updateId":
            const updateContact = await contactsOperation.updateById({ id, name, email, phone });
            console.log(updateContact);
            break;
        case "removeId":
            const removeContact = await contactsOperation.removeById(id);
            console.log(removeContact);
            break;
        default:
            console.log("Uknown action");
    }
};

const actionIndex = process.argv.indexOf("--action");
if (actionIndex !== -1) {
    const action = process.argv[actionIndex + 1];
    contactOperation(action);
}





const id = "1";
// const data = {
//     name: "Katerina",
//     email: "kattis@gmail.com",
//     phone: "(1337)350-399"
// };
// // contactOperation({ action: "All" });
// // contactOperation({ action: "byId", id });
// contactOperation({ action: "addId", ...data });


// const updateData = {
//     name: "Katerina",
//     email: "kattis@gmail.com",
//     phone: "(1337)352-399"
// }

// const updateId = "c40f6b6b-ba3b-43ed-af9a-c74a1d098b6b";
const removeId = "c40f6b6b-ba3b-43ed-af9a-c74a1d098b6b";

contactOperation({ action: "removeId", id: removeId })
contactOperation(option);