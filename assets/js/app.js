const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const desc = document.querySelector('#drop');
let isAscending = true;


form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
desc.addEventListener('change', reverseOrder);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);

function addNewTask(e) {
    e.preventDefault(); 
    const li = document.createElement('li');
    li.className = 'collection_item';
    li.appendChild(document.createTextNode(taskInput.value));    

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';    
    
    if (isAscending) {
        taskList.appendChild(li);  
        li.appendChild(link);      
    }
    else {        
        taskList.prepend(li, taskList.children[0]);
        li.appendChild(link);
    }

    if (taskInput.value === "") {
        taskInput.style.borderColor = "red";
        return;
    }
    
}