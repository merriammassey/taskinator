var taskIdCounter = 0;

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

    // add task id as a custom data attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info
    var taskInfoEl = document.createElement("div");
    // give div a class name
    taskInfoEl.className = "task-info";

    // add content
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    // add item to div
    listItemEl.appendChild(taskInfoEl);

//  add task Actions element to list item before list item is appended
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

// add the entire item to the list
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter for next unique id
    taskIdCounter++;
}

//create buttons. taskId tracks which elements are created for which task
var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
// create edit button
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "Edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id", taskId);

actionContainerEl.appendChild(editButtonEl);

// create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-task-id", taskId);

// add the buttons to the div
actionContainerEl.appendChild(deleteButtonEl);

//create dropdown 
var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id", taskId);

// add array of choices and for loop 
var statusChoices = ["To Do", "In Progress", "Completed"];
for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
  
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }
actionContainerEl.appendChild(statusSelectEl);

return actionContainerEl;

}

// run the button function and pass through the create a list item function above
formEl.addEventListener("submit", taskFormHandler);




