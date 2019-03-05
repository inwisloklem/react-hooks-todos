import React, { useContext } from 'react'
import { Icon } from 'rsuite'
import StoreContext from './StoreContext'
import classNames from 'classnames'
import styles from './Main.module.sass'

function Main () {
  const {
    state: { todos },
    dispatch
  } = useContext(StoreContext)

  const listTodos = todos.map(todo => {
    const { id, done, value } = todo
    const textStyles = classNames({
      [styles.mainListItemText]: true,
      [styles.mainListItemTextChecked]: done
    })

    return (
      <li className={styles.mainListItem} key={id}>
        <span
          className={textStyles}
          onClick={() => {
            dispatch({ type: 'toggleDone', id })
          }}
        >
          {value}
        </span>
        <Icon
          className={styles.mainListItemClose}
          icon='close'
          onClick={() =>
            dispatch({
              type: 'removeTodo',
              id
            })
          }
        />
      </li>
    )
  })

  return <ul className={styles.mainList}>{listTodos}</ul>
}

export default Main
