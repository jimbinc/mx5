import React from 'react'

import { render } from 'react-dom'

import { hot } from 'react-hot-loader'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      Text:null
    }
  }

  handleOnClick = () => {
    import('./Text').then(this.setState({Text:Text.default}))
  }

  render(){
    const { Text } = this.state
    return (
      <div>
        <button onClick={this.handleOnClick}>AAAAA</button>
        {Text ? <Text /> : null}
      </div>
    )
  }
}

//import default hot(module)(App)

const TheApp = hot(module)(App)

render(<TheApp />,
  document.querySelector('#root'))
//https://github.com/brandonmowat/react-chat-ui
