 <template>   
    <div id="display-profile">
        <h1>Member Profile</h1>
        <img class="background-image" src="src/team_background.jpg" alt="Profile Background"/>
        
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
        <button type="button" onClick="handleEditProfile()">Edit Profile</button>
    </div>

    <div id="update-profile" style="display:none;">
        <h1>Member Profile</h1>
        <img class="background-image" src="src/team_background.jpg" alt="Profile Background"/>
        
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
        <button type="button" onClick="handleUpdateProfile()">Update Profile</button>
    </div>
</template>

<script>
export default {
    name: 'App'
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

.background-image {
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