import contact from "./contact"
import contactManager from "./contactCollection"

function displayContactList() {
    return contactManager.GET()
        .then((fetchedContacts) => {
            return contact(fetchedContacts)
        })
        .then((contactHTML) => {
            document.querySelector("#contactList").innerHTML = contactHTML
        })
}

export default displayContactList