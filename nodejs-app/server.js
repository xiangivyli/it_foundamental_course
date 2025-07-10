const express = require('express');
const app = express();

app.use(express.json()); //register middleware to parse JSON bodies
app.use('/', express.static(__dirname + '/'))

let taskList = [
    {id: 1, task: "Install postgresql"},
    {id: 2, task:"Store data in postgresql"},
    {id: 3, task:"Connect to postgresql from nodejs"},
]
let nextTaskID = 4; // this is a simple way to generate unique IDs for tasks

app.post('/save-task', function(req, res) {
    const taskObj = req.body.task; //2. the body of request comes from the body: JSON.stringify(payload)
    if (!taskObj) {
        return res.status(400).json({ error: "Task text is required" });
    }
    const newTask = { id: nextTaskID++, task: taskObj }; //post-increment operator to generate unique IDs
    console.log('Task received:', newTask);
    taskList.push(newTask); // 3. show the input value in the table
    res.send(newTask);
}) // 4. send back a response to the frontend



app.get('/get-tasks', function(req, res) {
    res.send({tasks: taskList}); //get2. send back the tasks to the frontend
})

app.listen(3000,function () {
    console.log('app listening on port 3000');
})