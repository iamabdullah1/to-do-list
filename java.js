const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const warning = document.getElementById('warning');


addTaskBtn.addEventListener('click', (e) => {
    

    const taskText = taskInput.value;
    if (taskText === '') {
        warning.textContent = 'Task cannot be empty';
        return;
    }

    
    warning.textContent = '';

    
    const li = document.createElement('li');
    li.textContent = taskText;

    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editTask(li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    
    taskInput.value = '';
})


function editTask(taskItem) {
    
    addTaskBtn.innerHTML = 'Submit';
    
    
    taskInput.value = taskItem.firstChild.textContent;
    let newLi=document.createElement('li')
    newLi=taskInput.value
    
    
    
    taskInput.focus();
    
    
    addTaskBtn.addEventListener('click', function() {
        if (taskItem) {
            deleteTask( taskItem)
            taskItem.firstChild.textContent = taskInput.value;
            taskItem = null;
            addTaskBtn.innerHTML = 'Add Task'; 
            taskInput.value = ''; 
            
        }
    });
}





function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}
