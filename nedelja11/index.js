import express from 'express'

const app = express()
app.use(express.json())

const todos = [
    {
        id: 1,
        text: 'dsjhfsdjk',
        done: true
    }
]

// Рута за читање целог низа

app.get('/todos',(req,res) => {
    res.json(todos)
})

// Рута за читање једног елемента (по id)

app.getById('/todos/:id',(req,res) => {
    const id = req.params.id
    const todo = todos.find(todo => todo.id == id)
    res.json(todo)
})

// Рута за брисање једног елемента (по id)

app.delete('/todos/:id',(req,res) => {
    const id = req.params.id
    todos = todos.filter(todo => todo.id != id)

    res.status(204).end()
})

// Рута за додавање елемента

app.post('/todos',(req,res) => {
    
})

// Рута за мењање елемента (по id)



const PORT = 3005
app.listen(PORT, () => {
    console.log(`Server je pokrenut na: http://localhost:${PORT}`)
})