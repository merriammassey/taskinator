var formEl = document.querySelector("#task-form");
// select the ul and give it a var
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create a function for the event listener
var taskFormHandler = function(event) {
    // keep page from refreshing and deleting the task
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
// check if input values are empty strings
if (!taskNameInput || ! taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
}

// reset form
formEl.reset();

// package data as an object
var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
    // create a new task item
    var listItemEl = document.createElement("li");
    // give the new li a class
    listItemEl.className = "task-item";

    // create div to hold task info
    var taskInfoEl = document.createElement("div");
    // give div a class name
    taskInfoEl.className = "task-info";

    // add content
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    // add item to div
    listItemEl.appendChild(taskInfoEl);

    // add the entire item to the list
    tasksToDoEl.appendChild(listItemEl);
}
// run the button function and pass through the create a list item function above
formEl.addEventListener("submit", taskFormHandler);




