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
    }
}

export default contactManager