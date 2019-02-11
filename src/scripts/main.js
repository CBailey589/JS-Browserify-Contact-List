import displayContactList from "./contactList"
import contactForm from "./contactForm"
import contactManager from "./contactCollection";

contactForm()
displayContactList()

document.querySelector("#saveButton").addEventListener("click", () => {
    document.querySelector("#contactList").innerHTML = ""
    return contactManager.POST()
    .then(() => {
        return displayContactList()
    })
})

document.querySelector("#contactList").addEventListener("click", (event) => {
    if (event.target.id.startsWith("delete--")) {
        let id = parseInt(event.target.id.split("--")[1])
        return (contactManager.DELETE(id))
        .then(() => {
            displayContactList()
        })
    }
})
