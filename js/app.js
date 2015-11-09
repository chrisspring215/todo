// Expands the task creation interface and clears any values that we left from a previous task add
function expandCreateTaskInterface() {
	document.getElementById('createTaskInterface').setAttribute('class', 'row create-task-interface');
	document.getElementById('addTaskIcon').setAttribute('class', 'right rotate');
	document.getElementById('addTaskIcon').setAttribute('onclick', 'hideCreateTaskInterface()');
	initClearInputs()
}

function initClearInputs() {
	document.getElementById('taskName').value = ' ';
	document.getElementById('initPriorityOption').selected = true;
}

function show() {
	var taskPriority = document.getElementById('id="taskPriority"');
	taskPriority.setAttribute('class', ' ');
};

function addTask() {

	

	var taskName = document.getElementById('taskName').value; // Grabs the UL container


	var node = document.createElement('li'); // Creates a <li> node
	var taskNameContainer = document.createElement('span'); // Creates a <span> node for the Name of the task
		taskNameContainer.setAttribute('class', 'task-name')

	var textNode = document.createTextNode(taskName); // Creates a text node		

	taskNameContainer.appendChild(textNode);
	node.appendChild(taskNameContainer);                              // Append the text to <li>
	document.getElementById('taskList').appendChild(node);     // Append <li> to <ul> with id="myList"

	var listLength = document.getElementById('taskList').getElementsByTagName('li'); // Counts number of task items in list
	var position = listLength.length;
	node.setAttribute('name', position);

	var identifier = Math.floor((Math.random() * 10000) + 1);
	node.setAttribute('id', identifier);                   // Append the text to <li>
	document.getElementById('taskList').appendChild(node);     // Append <li> to <ul> with id="myList"
	
	hideCreateTaskInterface()
	hideTaskPriority()
	hideAddButton()
};

// Enables the task priority options after the task name has been entered
function showTaskPriority() {
	var taskPriority = document.getElementById('taskPriority');
	taskPriority.setAttribute('class', ' ');
};

// Enables the add button options after the priority ranking has been set
function showAddButton() {
	var addButton = document.getElementById('addButton');
	addButton.setAttribute('class', 'tiny radius right add-task-button')
	addButton.disabled = false;
}

// Returns input values to the 'disabled state' after the add task window closes
function hideTaskPriority() {
	var taskPriority = document.getElementById('taskPriority');
	taskPriority.setAttribute('class', 'hide');
};
// Returns input values to the 'disabled state' after the add task window closes
function hideAddButton() {
	var addButton = document.getElementById('addButton');
	addButton.setAttribute('class', 'tiny radius right add-task-button disabled')
	addButton.disabled = true;
}



function hideCreateTaskInterface() {
	document.getElementById('createTaskInterface').setAttribute('class', 'row hide create-task-interface');
	document.getElementById('addTaskIcon').setAttribute('class', 'right');
	document.getElementById('addTaskIcon').setAttribute('onclick', 'expandCreateTaskInterface()');
	hideTaskPriority()
	hideAddButton()
}

