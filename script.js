var taskObject = [
    {
        name: 'Task 1'
    },
    {
        name: 'Task 2'
    },
]


function addWindowToggle() {
    document.getElementById('addTaskWindow').style.display = "flex";
}

function cancel() {
    document.getElementById('addTaskWindow').style.display = "none";
}



function addTaskButton() {
    let value = document.getElementById('newTaskInput').value;

    var template = '<div class="listItems">' +
        '<input type="checkbox"></input>' + value +
        '</div>';

    document.getElementById('taskList').innerHTML += template;

    if (!value) {
        alert('Please enter task');
    } else {
        document.getElementById('addTaskWindow').style.display = "none";
        document.getElementById('newTaskInput').value = "";
    }
}