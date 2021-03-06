import newContactObj from "./newContactObj"

const contactManager = {
    GET: function () {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    POST: function () {
        let newObj = newContactObj()
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
    },
    DELETE: function (id) {
        return fetch(`http://127.0.0.1:8088/contacts/${id}`, {
            method: "DELETE"
        })
    },
    EDITGET: function (id) {
        return fetch(`http://localhost:8088/contacts/${id}`)
            .then(response => response.json())
    },
    EDITPOST: function (id, updatedContactObj) {
        return fetch(`http://127.0.0.1:8088/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedContactObj)
        })
            .then(res => res.json())
    }
}

export default contactManager