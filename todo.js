let todos = [];

const filters = {
    serachText: '',
    hideCompleted: false
};

const todoToAdd = {
    text: '',
    completed: false
};

const todoJSON = localStorage.getItem('todos');
if(todoJSON != null){
    todos = JSON.parse(todoJSON);
}

const incompleteTodoCount = function(todos){
    const incompletetodos = todos.filter(function(todo){
        return !todo.completed;
    });

    return incompletetodos.length;
};

const renderSummary = function(todos ){
    const message = document.createElement('h2');
    message.textContent = `You have ${incompleteTodoCount(todos)} todos left`;

    document.querySelector('#todos').appendChild(message);
};

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function(todo){
        if(filters.hideCompleted){
            return todo.text.toLowerCase().includes(filters.serachText.toLowerCase()) && !todo.completed
        }
        
        return todo.text.toLowerCase().includes(filters.serachText.toLowerCase())
    });

    document.querySelector('#todos').innerHTML = '';
    
    renderSummary(filteredTodos);

    filteredTodos.forEach(function(todo){
        const todoToAdd = document.createElement('p');
        todoToAdd.textContent = todo.text;

        document.querySelector('#todos').appendChild(todoToAdd);
    });
}

const addTodoToList = function(todos, todo){
    todos.push(todo);

    console.log(todos);
}

renderSummary(todos);
renderTodos(todos, filters);

document.querySelector('#filter-todo').addEventListener('input', function(e){
    filters.serachText = e.target.value;

    renderTodos(todos, filters);
});

document.querySelector('#form-todo').addEventListener('submit', function(e){
    e.preventDefault();
    todoToAdd.text = e.target.elements.todoText.value;

    addTodoToList(todos, todoToAdd);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);

    e.target.elements.todoText.value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;

    renderTodos(todos, filters);
});