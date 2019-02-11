import contactManager from "./contactCollection";
import displayContactList from "./contactList"

function addEventListeners() {
    document.querySelector("#submitButton").addEventListener("click", () => {
        if (event.target.textContent === "Save New Contact") {
            document.querySelector("#contactList").innerHTML = ""
            return contactManager.POST()
            .then(() => {
                return displayContactList()
            })
        } else if(event.target.textContent === "Update Contact") {
            let id = document.querySelector("#contactToEdit").value
            let updatedContactObj = {}
            updatedContactObj.name = document.querySelector("#newName").value
            updatedContactObj.phoneNum = document.querySelector("#newPhone").value
            updatedContactObj.address = document.querySelector("#newAddress").value

            contactManager.EDITPOST(id, updatedContactObj)
            .then(() => {
                document.querySelector("#contactList").innerHTML = ""
            })
            .then (() => {
                displayContactList()
            })
            .then (() => {
                document.querySelector("#newName").value = ""
                document.querySelector("#newPhone").value = ""
                document.querySelector("#newAddress").value = ""
                document.querySelector("#submitButton").textContent = "Save New Contact"
            })
        }
    })

    document.querySelector("#contactList").addEventListener("click", (event) => {
        if (event.target.id.startsWith("delete--")) {
            let id = parseInt(event.target.id.split("--")[1])
            return (contactManager.DELETE(id))
            .then(() => {
                displayContactList()
            })
        }

        if (event.target.id.startsWith("edit--")) {
            let id = parseInt(event.target.id.split("--")[1])
            document.querySelector("#contactToEdit").value = id
            document.querySelector("#submitButton").textContent = "Update Contact"
            return contactManager.EDITGET(id)
            .then((contact) => {
                document.querySelector("#newName").value = contact.name
                document.querySelector("#newPhone").value = contact.phoneNum
                document.querySelector("#newAddress").value = contact.address
            })
        }
    })
}

export default addEventListeners