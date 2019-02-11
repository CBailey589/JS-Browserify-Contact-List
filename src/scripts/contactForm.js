function contactForm() {
    document.querySelector("#contactForm").innerHTML = `
    <input type="hidden" id="contactToEdit" value="0">
    <fieldset>
        <label for="">Contact Name</label>
        <input type="text" name="newName" id="newName"></input>
    </fieldset>
    <fieldset>
        <label for="">Contact Phone Number</label>
        <input type="text" name="newPhone" id="newPhone"></input>
    </fieldset>
    <fieldset>
        <label for="">Contact Address</label>
        <input type="text" name="newAddress" id="newAddress"></input>
    </fieldset>
    <button id="submitButton">Save New Contact</button>
    `
}

export default contactForm