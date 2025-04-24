 <template>   
    <div v-show="!isEditMode">
        <h1>Member Profile</h1>
        <img :src="img" alt="Profile Background"/>
        
        <span>Name: </span><b id="name">{{ name }}</b>
        <hr />
        <span>Email: </span><b id="email">{{ email }}</b>
        <hr />
        <span>Position: </span><b id="position">{{ position }}</b>
        <hr />      
        <span>Location: </span><b id="location">{{ location }}</b>
        <hr />
        <span>Skills: </span><b id="skills">{{ skills }}</b>
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
            name: "Ivy Li",
            email: "xiangivyli@gmail.com",
            position: "Data Engineer",
            location: "Bristol, the United Kingdom",
            skills: "Python, JavaScript, SQL, Cloud",
            isEditMode: false,
        }
    },
    methods: {
        handleEditProfile () {
            this.isEditMode = !this.isEditMode
        },
        handleUpdateProfile () {
            this.isEditMode = !this.isEditMode
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