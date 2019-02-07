import displayContactList from "./contactList"
import contactForm from "./contactForm"
import contactManager from "./contactCollection";

contactForm()
displayContactList()

document.querySelector("#saveButton").addEventListener("click", () => {
    document.querySelector("#contactList").innerHTML = ""
    return contactManager.POST()
    .then((newEntry) => {
        return displayContactList()
    })
})