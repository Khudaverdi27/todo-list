
class Todo {
    constructor(todos) {
        this.todos = todos

    }
    getID() {
        return Math.floor(Math.random() * 10000)
    }
    add(name) {
        this.todos.unshift({
            name,
            id: this.getID(),
            status: 0
        })
        this.createUI()
    }
    update() {

    }
    delete(id) {
        const index = this.todos.findIndex(i => i.id == id);
        this.todos.splice(index, 1);
        this.createUI()
    }
    // checked
    updateStatus(id, status) {
        const index = this.todos.findIndex(i => i.id == id);
        this.todos[index].status = status;
        this.createUI()
    }
    createUI() {

        let html = ''
        for (const items of this.todos) {
            html += `    <article class="flex border items-center border p-8 space-y-6 justify-between border-theme">
            <div>
                <input type="checkbox" ${items.status ? "checked" : ''} class="updateStatus" data-id=${items.id}>
                <span class="${items.status ? 'line-through' : ''}">${items.name}</span>
            </div>
            <div>
                <button class=" btn btn-primary btn-rounded btn-sm">
                    <i class="icon icon-pen  "></i>
                </button>
                <button class="btnDelete btn btn-danger btn-rounded btn-sm" data-id=${items.id}>
                    <i class="icon icon-trash "></i>
                </button>
            </div>
        </article>`
        }
        UI.container.innerHTML = html

        document.querySelectorAll('.updateStatus').forEach((input) => {
            const id = input.getAttribute('data-id')
            input.addEventListener('change', (e) => this.updateStatus(id, e.target.checked ? 1 : 0))
        })
        document.querySelectorAll('.btnDelete').forEach((input) => {
            const id = input.getAttribute('data-id')
            input.addEventListener('click', () =>
                this.delete(id))
        })
    }
}