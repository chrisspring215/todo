

function expandCreateTaskInterface() {
	document.getElementById('createTaskInterface').setAttribute('class', 'row create-task-interface');

	initClearInputs()
}

function initClearInputs() {
	document.getElementById('taskName').value = ' ';


	//hideCreateTaskInterface()
}

function addTask() {

	var taskName = document.getElementById('taskName').value;

	var container = document.createElement('ui');
	var node = document.createElement('li');                 // Create a <li> node
	var textNode = document.createTextNode(taskName); 

	container.appendChild(node);        // Create a text node
	node.appendChild(textNode);                              // Append the text to <li>
	document.getElementById("taskList").appendChild(container);     // Append <li> to <ul> with id="myList"
	
	clearInputs()
}

function clearInputs() {
	document.getElementById('taskName').value = ' ';


	//hideCreateTaskInterface()
}


function hideCreateTaskInterface() {
	document.getElementById('createTaskInterface').setAttribute('class', 'row hide create-task-interface');
}

