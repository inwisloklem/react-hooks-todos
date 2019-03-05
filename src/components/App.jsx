import React, { useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import StoreContext, { reducer, initialState } from './StoreContext'
import 'rsuite/dist/styles/rsuite.min.css'

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Header />
      <Main />
    </StoreContext.Provider>
  )
}

export default App
