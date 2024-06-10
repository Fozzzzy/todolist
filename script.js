let todoList = JSON.parse(localStorage.getItem('todos')) || [];
renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let temp = todoList[i];
        let tempHTML = `
        <div class="todo-content">
            <label>
                <input class="todo-cb" type="checkbox" onclick="checkComplete(${i});">${temp}
            </label>
            <button class="remove-button" onclick="deleteTodo(${i})">
                <img class="bin-icon" src="images/bin.png">
            </button>
        </div>`;
        todoListHTML += tempHTML;   
    }
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector(".todo-input");
    let name = inputElement.value;


    if (name === '' || name === undefined) {
        alert("Please enter a task")
        return                              // return to exit function
    }
    todoList.push(name);
    inputElement.value = '';

    localStorage.setItem('todos', JSON.stringify(todoList));

    renderTodoList();
}


function deleteTodo(index) {
    todoList.splice(index, 1); 
    localStorage.setItem('todos', JSON.stringify(todoList));
    renderTodoList(); 
}

function checkComplete(index) {
    const todoItems = document.querySelectorAll('.todo-content');
    const todoItem = todoItems[index];
    const checkbox = todoItem.querySelector('.todo-cb');
    
    if (checkbox.checked) {
        todoItem.classList.add('completed');
    } else {
        todoItem.classList.remove('completed');
        todoItem.classList.add('incomplete');
    }
}   


function handleCostKeydown(event) { 
    if (event.key === 'Enter') {
        addTodo();
    }
}