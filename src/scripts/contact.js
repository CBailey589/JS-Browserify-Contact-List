function contactHTML(array) {
    let contactHTML = array.map((contact) => {
        return `
        <div id="${contact.phoneNum}">
            <h2>Name: ${contact.name}</h2>
            <h4>Phone: ${contact.phoneNum}</h4>
            <h4>Address: ${contact.address}</h4>
            <button id="delete--${contact.id}">Remove ${contact.name}</button>
            <button id="edit--${contact.id}">Edit ${contact.name}'s Info</button>
        </div>
        `
    }).join("")
    return contactHTML
}

export default contactHTML