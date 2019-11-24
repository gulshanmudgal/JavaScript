const todos = [{
    text: 'Order Grocery',
    completed: false
},
{
    text: 'Clean Room',
    completed: true
},
{
    text: 'Wash Clothes',
    completed: false
},
{
    text: 'Do Work',
    completed: false
}];

// console.log(`You have ${todo.length} todos`);

// todo.forEach(function(item, index){
//     console.log(`${index+1}. ${item}`);
// });

const deletetodo = function(todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });

    if(index >= 0){
        todos.splice(index, 1);
    }
}

const getThingsTodo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed;
    });
}

const sortTodos = function(todos){
    todos.sort(function(a, b){
        let returnval = -1;
        if(!a.completed && b.completed){
            returnval = -1;
        } else if(a.completed && !b.completed){
            returnval = 1;
        } else {
            returnval = 0;
        }

        return returnval;
    });
}

//deletetodo(todos, 'Do Work');

//console.log(getThingsTodo(todos));

sortTodos(todos);
console.log(todos);