import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
export default function App(){

  const [todos, setTodos] = useState([])
  function addTodo(title){
    setTodos((currentTodos) =>{
      return [ ...currentTodos,
          {id: crypto.randomUUID(),title, completed: false }
      ]
  })
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if (todo.id === id){
          return{...todo, completed}
        }

        return todo
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return(
  <>
  <NewTodoForm onSubmit ={addTodo}/>
  <h1 className="header">TODO List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}

// https://www.youtube.com/watch?v=Rh3tobg7hEo -Link to tutorial used look over it if confused later