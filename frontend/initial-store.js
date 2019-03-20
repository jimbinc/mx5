import React from 'react'

import { Provider } from 'react-redux'

import { createStore } from 'redux'

import reducer from './reducer'
const store = createStore(reducer)

const InitialStore = props => 
  <Provider store={store}>{...props.children}</Provider>
  
export default InitialStore
