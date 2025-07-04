const express = require('express');
const app = express();

app.use(express.json()); //register middleware to parse JSON bodies
app.use('/', express.static(__dirname + '/'))


app.get('/get-tasks', function(req, res) {
    const tasks = [
        "Write JS code",
        "Write HTML code",
    ]
    res.send({tasks: tasks});
})

app.post('/save-task', function(req, res) {
    const taskObj = req.body
    // next step is to connect to the database and save the task
    console.log('Task received:', taskObj.task);
    res.send({savedTask: taskObj.task});
})

app.listen(3000,function () {
    console.log('app listening on port 3000');
})