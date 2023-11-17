class Todo {
    constructor(todos) {
        this.todos = todos;
        this.todoId = false // check editable todo
    }
    getTodoIndexById(id) {
        return this.todos.findIndex(i => i.id == id);
    }
    getId() {
        return Math.floor(Math.random() * 10000)
    }
    add(name) {
        if (this.todoId) {
            const index = this.getTodoIndexById(this.todoId)
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


    delete(id) {
        const index = this.getTodoIndexById(id)
        this.todos.splice(index, 1);
        this.createUI()
    }
    update(id) {
        const index = this.getTodoIndexById(id)
        if (index != -1) {
            const todo = this.todos[index];
            if (todo) {
                UI.textInput.value = todo.name
                this.todoId = todo.id;
            }
        }
    }

    updateStatus(id, status) {
        const index = this.getTodoIndexById(id)
        // this.todos[index]; //todo object
        this.todos[index].status = status;
        this.createUI()
    }

    createUI() {
        const tasks = todos.map((todo) => {
            return `   <article class="flex border items-center border p-8 space-y-6 justify-between border-theme">
            <div>
                <input  ${todo.status ? "checked" : ''} data-id=${todo.id} class="updateStatus" type="checkbox">
                <span class="${todo.status ? 'line-through' : ''}">${todo.name}</span>
            </div>
            <div>
                <button data-id=${todo.id} class="btnEdit btn btn-primary btn-rounded btn-sm">
                    <i class="icon icon-pen  "></i>
                </button>
                <button data-id=${todo.id} class="btnDelete btn btn-danger btn-rounded btn-sm">
                    <i class="icon icon-trash "></i>
                </button>
            </div>
        </article>`
        })
        UI.container.innerHTML = tasks

        document.querySelectorAll('.updateStatus').forEach((input) => {
            const id = input.getAttribute('data-id')
            input.addEventListener('change', (e) => this.updateStatus(id, e.target.checked ? 1 : 0))
        })
        document.querySelectorAll('.btnDelete').forEach((btnDelete) => {
            const id = btnDelete.getAttribute('data-id')
            btnDelete.addEventListener('click', () => this.delete(id))
        })
        document.querySelectorAll('.btnEdit').forEach((btnEdit) => {
            const id = btnEdit.getAttribute('data-id')
            btnEdit.addEventListener('click', () => this.update(id))
        })


    }
}