
const todo = new Todo()

UI.addBtn.addEventListener("click", () => {
    const text = UI.textInput.value
    if (text) {
        todo.add(text)
    }
})
UI.btnStatus.forEach((btn) => {
    btn.addEventListener("click", () => {
        const status = btn.getAttribute('data-status')
        UI.btnStatus.forEach(b => {
            b.classList.remove('btn-grey')
            b.classList.add('btn-gray-outline')
        })
        btn.classList.add('btn-grey')
        if (status != -1) {
            todo.status = status

        } else {
            todo.status = -1

        }
        todo.createUI()
    })
})

todo.createUI()