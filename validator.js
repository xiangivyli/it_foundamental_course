function isInvalidEmail(userObjECT) {
    return !userObjECT.email.includes("@")
}

function isEmptyPayload(userObject) {
    return Object.keys(userObject).length === 0
}

module.exports = {
    isInvalidEmail,
    isEmptyPayload
}