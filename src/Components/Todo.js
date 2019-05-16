import React, { useState } from 'react'


function TodoItem ({todo, index, completeTodo, deleteTodo}) {
    return(
        <div 
            className='todo-item'
            style={{textDecoration: todo.isCompleted && 'line-through'}}
            >
            {todo.text}
            <button className='todo-item__button' onClick={() => completeTodo(index)}>Complete</button>
            <button className='todo-item__button' onClick={() => deleteTodo(index)}>X</button>
        </div>
    )
}

function TodoForm({addTodo}) {
    
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input' 
                value={value} 
                placeholder='add item'
                onChange={e => setValue(e.target.value)}/>
        </form>
    )

}

export default function Todo() {

  const [todos, setTodos] = useState([
      {
          text: 'learn about react',
          isCompleted: false,
      },
      {
          text: 'eat food',
          isCompleted: false,
      },
      {
          text: 'sleep',
          isCompleted: false,
      },
  ])

  const addTodo = text => {
      const NewTodos = [...todos, { text }]
      setTodos(NewTodos)
  }

  const completeTodo = index => {
      const newTodos = [...todos]
      newTodos[index].isCompleted = true
      setTodos(newTodos)
  }

  const deleteTodo = index => {
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
  }

  return (
    <div className='todo-list'> 

        <h2>Todo list</h2>

        {
            todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            ))
        }
        <TodoForm
            addTodo={addTodo}
        />
    </div>
  )
}
