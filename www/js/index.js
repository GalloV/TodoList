document.addEventListener('DOMContentLoaded', function() {
    var itemInput = document.getElementById('item');
    var addButton = document.getElementById('add');
    var todoList = document.getElementById('todo');
    var completedList = document.getElementById('completed');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        var itemText = itemInput.value.trim();
        if (itemText !== '') {
            var todoItem = createTodoItem(itemText);
            todoList.appendChild(todoItem);
            itemInput.value = '';
            itemInput.focus();
        }
    }

    function createTodoItem(text) {
        var li = document.createElement('li');
        li.textContent = text;

        var buttons = document.createElement('div');
        buttons.className = 'buttons';

        var removeButton = document.createElement('button');
        removeButton.className = 'remove';
        removeButton.innerHTML = '<button style="font-size: 8px" >delete</button>';
        removeButton.addEventListener('click', removeTodo);

        var completeButton = document.createElement('button');
        completeButton.className = 'complete';
        completeButton.innerHTML = '<button style="font-size: 8px" >Complete</button>';
        completeButton.addEventListener('click', completeTodo);

        buttons.appendChild(completeButton);
        buttons.appendChild(removeButton);
        li.appendChild(buttons);

        return li;
    }

    function removeTodo() {
        var item = this.parentNode.parentNode;
        var parent = item.parentNode;
        parent.removeChild(item);
    }

    function completeTodo() {
        var item = this.parentNode.parentNode;
        var parent = item.parentNode;
        var target = (parent.id === 'todo') ? completedList : todoList;

        parent.removeChild(item);
        target.appendChild(item);
    }
});
