 <template>   
    <div id="display-profile">
        <h1>Member Profile</h1>
        <img :src="img" alt="Profile Background"/>
        
        <span>Name: </span><b id="name">Ivy Li</b>
        <hr />
        <span>Email: </span><b id="email">xiangivyli@gmail.com</b>
        <hr />
        <span>Position: </span><b id="position">Data Engineer</b>
        <hr />      
        <span>Location: </span><b id="location">Bristol, the United Kingdom</b>
        <hr />
        <span>Skills: </span><b id="skills">Python, JavaScript, SQL, Cloud</b>
        <hr />
        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div id="update-profile" style="display:none;">
        <h1>Member Profile</h1>
        <img :src="img" alt="Profile Background"/>
        
        <span>Name: </span>
        <input type="text" placeholder="Ivy Li"/>
        <hr />
        <span>Email: </span>
        <input type="text" placeholder="xiangivyli@gmail.com"/>
        <hr />
        <span>Position: </span>
        <input type="text" placeholder="Software Engineer"/>
        <hr />      
        <span>Location: </span>
        <input type="text" placeholder="Bristol, the United Kingdom"/>
        <hr />
        <span>Skills: </span>
        <input type="text" placeholder="Python, JavaScript, SQL, Cloud"/>
        <hr />
        <button @click="handleUpdateProfile">Update Profile</button>
    </div>
</template>

<script>
import image from "./team_background.jpg"
export default {
    name: 'App',
    data () {
        return {
            img: image,
        }
    },
    methods: {
        handleEditProfile() {

            document.getElementById("display-profile").style.display = "none"
            document.getElementById("update-profile").style.display = "block"

            var name = document.getElementById("name").textContent
            var nameInput = document.getElementsByTagName("input")[0]
            nameInput.value = name

            var email = document.getElementById("email").textContent
            var emailInput = document.getElementsByTagName("input")[1]
            emailInput.value = email

            var position = document.getElementById("position").textContent
            var positionInput = document.getElementsByTagName("input")[2]
            positionInput.value = position

            var location = document.getElementById("location").textContent
            var locationInput = document.getElementsByTagName("input")[3]
            locationInput.value = location

            var skills = document.getElementById("skills").textContent
            var skillsInput = document.getElementsByTagName("input")[4]
            skillsInput.value = skills
            },

        handleUpdateProfile() {
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

            var updatePosition = document.getElementsByTagName("input")[2].value
            var position = document.getElementById("position")
            position.textContent = updatePosition

            var updateLocation = document.getElementsByTagName("input")[3].value
            var location = document.getElementById("location")
            location.textContent = updateLocation

            var updateSkills = document.getElementsByTagName("input")[4].value
            var skills = document.getElementById("skills")
            skills.textContent = updateSkills
            }
        }
                
    }
</script>

<style>
    /* Reset CSS */
 
* {
    margin: 0;
    padding: 0;
    padding: 0px;
    box-sizing: border-box
 }

/* Global Styles */
body {
    background-color: #f4f4f4;
    color: #333;
    font-size: 15px;

}

.content {
    min-height: 80vh;
}

div {
    margin: 40px auto;
    width: 30%;
}

img {
    display: block;
    width: auto;
    height: 30vh;
    margin: 40px 10px;
}

hr {
    margin: 5px 0px 20px 0px;
    width: 300px;
    border: 1px solid gray;
}

button {
    width: 160px;
    height: 45px;
    font-size: 15px;
    border-radius: 5px;
}

button:hover {
    background-color: lightcyan;
    color: #333;
    cursor: pointer;
}

/* Form Styles */
input {
    width: 200px;
    font-size: 12px;
    margin: 0;
    padding: 0px;
}


</style>