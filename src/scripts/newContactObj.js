function newContactObj() {
    let name = document.querySelector("#newName").value
    let phoneNum = document.querySelector("#newPhone").value
    let address = document.querySelector("#newAddress").value
    return {
        "name": name,
        "phoneNum": phoneNum,
        "address": address
    }
}

export default newContactObj