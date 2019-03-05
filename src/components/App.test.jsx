import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const app = shallow(<App />)

  it('renders the header', () => {
    expect(app.find('header').exists()).toBe(true)
  })
})
