import { createContext } from 'react'
import uuid from 'uuid'

export const initialState = {
  todos: [
    {
      id: uuid.v4(),
      value: `I'm swerving off, my eyes closed, graveyard's what I call home`,
      done: true
    },
    {
      id: uuid.v4(),
      value: `Razor blade on my fuckin bones, touch me and I'ma cut you off`,
      done: false
    },
    {
      id: uuid.v4(),
      value: `Raindrops on my white skin, turn ghost and I'm in my zone (what?)`,
      done: false
    },
    {
      id: uuid.v4(),
      value: `Hair long, my blunt’s short, always smoke so we rollin' more`,
      done: false
    }
  ]
}

export const reducer = (state, action) => {
  const { todos } = state
  const { id, type, value } = action

  switch (type) {
    case 'addTodo':
      return {
        todos: [
          ...todos,
          {
            id: uuid.v4(),
            value,
            done: false
          }
        ]
      }
    case 'removeTodo':
      return {
        todos: todos.filter(todo => todo.id !== id)
      }
    case 'toggleDone':
      const doneItemIndex = todos.findIndex(todo => todo.id === id)
      let updatedTodos = [...todos]
      updatedTodos[doneItemIndex].done = !updatedTodos[doneItemIndex].done
      return {
        todos: updatedTodos
      }
    default:
      return state
  }
}

export default createContext()
