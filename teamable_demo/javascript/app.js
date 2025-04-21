function handleEditProfile() {

    document.getElementById("display-profile").style.display = "none"
    document.getElementById("update-profile").style.display = "block"

    var name = document.getElementById("name").textContent
    var nameInput = document.getElementsByTagName("input")[0]
    nameInput.value = name

    var email = document.getElementById("email").textContent
    var emailInput = document.getElementsByTagName("input")[1]
    emailInput.value = email

    
    var datepickerElement = document.getElementById("birthday");
    new Datepicker(datepickerElement);

    var position = document.getElementById("position").textContent
    var positionInput = document.getElementsByTagName("input")[3]
    positionInput.value = position

    var location = document.getElementById("location").textContent
    var locationInput = document.getElementsByTagName("input")[4]
    locationInput.value = location
    
    var skills = document.getElementById("skills").textContent
    var skillsInput = document.getElementsByTagName("input")[5]
    skillsInput.value = skills
}

function handleUpdateProfile() {
    document.getElementById("display-profile").style.display = "block"
    document.getElementById("update-profile").style.display = "none"

    var updateName = document.getElementsByTagName("input")[0].value
    var name = document.getElementById("name")
    name.textContent = updateName

    var updateEmail = document.getElementsByTagName("input")[1].value
    var email = document.getElementById("email")
    if (validator.isEmail(updateEmail)) {
        email.textContent = updateEmail
    }
    else {
        alert("Please enter a valid email address")
    }

    var updatePosition = document.getElementsByTagName("input")[3].value
    var position = document.getElementById("position")
    position.textContent = updatePosition

    var updateLocation = document.getElementsByTagName("input")[4].value
    var location = document.getElementById("location")
    location.textContent = updateLocation

    var updateSkills = document.getElementsByTagName("input")[5].value
    var skills = document.getElementById("skills")
    skills.textContent = updateSkills
}
