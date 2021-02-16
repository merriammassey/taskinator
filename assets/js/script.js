var buttonEl = document.querySelector("#save-task");
// select the ul and give it a var
var tasksToDoEl = document.querySelector("#tasks-to-do");

// create a function for the event listener
var createTaskHandler = function() {
    // create a new task item
    var listItemEl = document.createElement("li");
    // give the new li a class
    listItemEl.className = "task-item";
    // add content
    listItemEl.textContent = "This is a new task.";
    // add the item to the list
    tasksToDoEl.appendChild(listItemEl);
};

// run the button function and pass through the create a list item function above
buttonEl.addEventListener("click", createTaskHandler);




