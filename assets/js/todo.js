class Todo {
    constructor(todos) {
        this.todos = todos;
        this.todoId = false
    }
    getIndexById(id) {
        return this.todos.findIndex(i => i.id == id);
    }
    getId() {
        return Date.now();
    }
    updateStatus(id, status) {
        const index = this.getIndexById(id)
        this.todos[index].status = status
        this.createUI()
    }
    add(name) {

        const index = this.getIndexById(this.todoId)
        console.log(index);
        if (this.todoId >= -1) {
            this.todos[index].name = name
            this.todoId = false
        } else {
            this.todos.unshift({
                name,
                id: this.getId(),
                status: 0
            })
        }

        this.createUI()
    }
    edit(id) {
        const index = this.getIndexById(id)
        UI.textInput.value = this.todos[index].name
        this.todoId = id
    }
    delete(id) {
        const index = this.getIndexById(id)
        this.todos.splice(index, 1)
        this.createUI()
    }
    createUI() {

        const tasks = this.todos.map(todo => {
            return `   <article class="flex items-center justify-between border border-theme p-8">
            <div>
                <input ${todo.status ? "checked" : ''} data-id="${todo.id}" class="btnStatus" type="checkbox">
                <span class="${todo.status ? 'line-through' : ''}">${todo.name}</span>
            </div>
            <div>
                <button class="btn btnEdit btn-rounded btn-primary btn-sm"  data-id="${todo.id}">
                    <i class="icon-pen icon"></i>
                </button>

                <button class="btn btnDelete btn-rounded btn-danger btn-sm"  data-id="${todo.id}">
                    <i class="icon-trash icon"></i>
                </button>
            </div>
        </article>`
        }).join('');
        UI.container.innerHTML = tasks
        document.querySelectorAll('.btnStatus').forEach((input) => {
            const id = input.getAttribute('data-id');
            input.addEventListener('change', (e) => { this.updateStatus(id, e.target.checked ? 1 : 0) })
        })
        document.querySelectorAll('.btnDelete').forEach((btnDelete) => {
            const id = btnDelete.getAttribute('data-id');
            btnDelete.addEventListener('click', () => { this.delete(id) });
        })
        document.querySelectorAll('.btnEdit').forEach((btnEdit) => {
            const id = btnEdit.getAttribute('data-id');
            btnEdit.addEventListener('click', () => { this.edit(id) });
        })
    }

}
