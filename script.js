let todoList = JSON.parse(localStorage.getItem('todos')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
    // for (let i = 0; i < todoList.length; i++) 
        const name = todoObject;

        let tempHTML = `
        <div class="todo-content">
            <label>
                <input class="todo-cb" type="checkbox" onclick="checkComplete(${index});">${name}
            </label>
            <button class="remove-button" onclick="deleteTodo(${index})">
                <img class="bin-icon" src="images/bin.png">
            </button>
        </div>`;
        todoListHTML += tempHTML;   
    });
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}

const buttonElement = document.querySelector('.todo-button');
const inputElement = document.querySelector(".todo-input");

buttonElement.addEventListener('click', addTodo);

function addTodo() {
    let name = inputElement.value;

    if (name === '' || name === undefined) {
        alert("Please enter a task");
        return;                              // return to exit function
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
        label.classList.add('completed');

    } else {
        todoItem.classList.remove('completed');
        label.classList.remove('completed');
    }
}   

// function handleCostKeydown(event) { 
//     if (event.key === 'Enter') {
//         addTodo();
//     }
// }

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});