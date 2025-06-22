 <template>   
    <div v-show="!isEditMode">
        <h1>Member Profile</h1>
        <img :src="img" alt="Profile Background"/>
        
        <span>Name: </span><b>{{ name }}</b>
        <hr />
        <span>Email: </span><b>{{ email }}</b>
        <hr />
        <span>Position: </span><b>{{ position }}</b>
        <hr />      
        <span>Location: </span><b>{{ location }}</b>
        <hr />
        <span>Skills: </span><b id>{{ skills }}</b>
        <hr />
        <button @click="handleEditProfile">Edit Profile</button>
    </div>

    <div v-show="isEditMode">
        <h1>Member Profile</h1>
        <img :src="img" alt="Profile Background"/>
        
        <span>Name: </span>
        <input type="text" v-model="name"/>
        <hr />
        <span>Email: </span>
        <input type="text" v-model="email"/>
        <span v-if="emailError" style="color: red;">{{ emailError }}</span>
        <hr />
        <span>Position: </span>
        <input type="text" v-model="position"/>
        <hr />      
        <span>Location: </span>
        <input type="text" v-model="location"/>
        <hr />
        <span>Skills: </span>
        <input type="text" v-model="skills"/>
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
            name: "",
            email: "",
            position: "",
            location: "",
            skills: "",
            isEditMode: false,
            emailError: null
        }
    },
    async created () { //is called when the component instance was created
        const userData = await this.fetchUserProfile()
        this.name = userData.name || ""
        this.email = userData.email || ""
        this.position = userData.position || ""
        this.location = userData.location || ""
        this.skills = userData.skills || ""
    },
    methods: {
        handleEditProfile () {
            this.isEditMode = !this.isEditMode
        },
        handleUpdateProfile () {
            if (!this.email.includes('@')) {
                this.emailError = "Please enter a valid email address"
                return
            } else {
                this.emailError = null
            }
            if (this.name === "" || this.email === "" || this.position === "" || this.location === "" || this.skills === "") {
                alert("Please fill in all fields")
                return
            }
            alert("Profile updated successfully")
            this.isEditMode = !this.isEditMode
        },

        async fetchUserProfile() {
            const res = await fetch('/get-profile')
            return await res.json()
        }
    },
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
    width: 50%;
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