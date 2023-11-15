const items = [
    // html comes here from todo.js with key and value as object
]

const todo = new Todo(items)

UI.addBTn.addEventListener(('click'), () => {
    const text = UI.textInput.value
    if (text.toString().trim()) {
        todo.add(text)
        UI.textInput.value = ''
    }
})

todo.createUI()