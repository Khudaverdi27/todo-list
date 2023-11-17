const todos = [
    { name: 'Task 1', id: 1, status: 0 },
    { name: 'Task 2', id: 2, status: 1 },
    { name: 'Task 3', id: 3, status: 0 }
]

const todo = new Todo(todos)
UI.addBtn.addEventListener('click', () => {

    todo.add(UI.textInput.value);
})

todo.createUI()