import React, { useContext, useState } from 'react'
import { Input, InputGroup, Icon } from 'rsuite'
import StoreContext from './StoreContext'
import styles from './Header.module.sass'

function Header () {
  const [value, setValue] = useState('')

  const {
    state: { todos },
    dispatch
  } = useContext(StoreContext)

  return (
    <header className={styles.header}>
      <h1>
        Todo list: {todos.filter(todo => todo.done).length}/{todos.length}
      </h1>
      <InputGroup>
        <Input
          autoFocus
          value={value}
          onChange={value => {
            console.info(value)
            setValue(value)
          }}
        />
        <InputGroup.Button
          onClick={() => {
            dispatch({ type: 'addTodo', value })
            setValue('')
          }}
        >
          <Icon icon='plus' />
        </InputGroup.Button>
        <InputGroup.Button
          onClick={() => {
            setValue('')
          }}
        >
          <Icon icon='close' />
        </InputGroup.Button>
      </InputGroup>
    </header>
  )
}

export default Header
