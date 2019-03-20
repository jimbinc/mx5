import React from 'react'
import { syncClients } from './other-actions'
import { withStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'

const i = 20
const marginSet = {margin:`${i}px ${i/2}px`}
const style = {
  divPage:{
    position:'fixed',
    bottom:'0',
    width:'100%',
    backgroundColor:'#F7F7F7',

    display:'flex',
    justifyContent:'space-between',
  },
  divButton:{
    ...marginSet,
    paddingRight:'5px'
  },
  divInput:{
    flex:'1 1 auto',
    ...marginSet
  },
  input:{
    fontSize:'48pt',
    width:'100%',

    borderColor:'#F7F7F7',
    borderRadius:'18px',
    borderWidth:'1px',
    borderColor:'black',

    overflow:'visible',
    resize:'none',
    outline:'none',
  },
  button:{
    outline:'none',
    textTransform:'none',
    fontSize:'48pt',

    borderRadius:'18px',
  }
}

class Bar extends React.Component {
  constructor(){
    super()

    this.state = {
      message:'',
      submitTitle:'',
      inputHeight:'',
      inputMaxHeight:'',
    }
  }

  componentDidMount(){
    const input = document.querySelector('textarea')
    this.setState({
      inputMaxHeight:input.scrollHeight * 3,
    })
  }

  componentDidUpdate(prevProps, prevState){
    const input = document.querySelector('textarea')
    const { scrollHeight  } = input
    const { inputMaxHeight, inputHeight, message } = this.state
    if(message && scrollHeight < inputMaxHeight && inputHeight != scrollHeight - 4){
      this.setState({
        inputHeight : scrollHeight - 4
      })
    }else if(!message && inputHeight != inputMaxHeight / 3){
      this.setState({
        inputHeight : inputMaxHeight / 3
      })
    }
      /*
    console.log('\n\n\nLast on DidUpdate:',
      '<<<'+prevState.message,
      '<<<'+prevProps.name, 
      '<<<'+prevState.submitTitle
    )

    console.log('\n\n\nNow on DidUpdate:',
      '>>>'+this.state.message,
      '>>>'+this.props.name, 
      '>>>'+this.state.submitTitle
    )
    */
    const { submitTitle } = this.state
    const { name } = this.props
    if(message && submitTitle != 'Send'){
      this.setState({
        submitTitle:'Send'
      })
    }else if(!message && name && submitTitle != 'Logout'){
      this.setState({
        submitTitle:'Logout'
      })
    }else if(!message && !name && submitTitle != 'Login'){
      this.setState({
        submitTitle:'Login'
      })
    }
  }

  handleOnChange = e => {
    const {target:{name, value}} = e
    this.setState({
      [name]:value,
    })
  }

  submitLogin = () => {
    const { posts, setStoreUser, setStoreName } = this.props
    let newName = prompt('A name you like:')
    if(newName){
      if(posts.filter(p => p.name == newName).length == 0){
        console.log('ready for signning up...')
        setStoreUser(newName)
      }else{
        setStoreName(newName)
      }
      return newName
    } 
  }

  handleOnSubmit = e => {
    e.preventDefault()

    const { setStoreName, setStorePost, name } = this.props

    switch(this.state.submitTitle){
      case 'Login':
        this.submitLogin()
        break

      case 'Logout':
        setStoreName('')
        break

      case 'Send':
        const nameMust = name ? name : this.submitLogin()
        if(nameMust){
          setStorePost(nameMust, this.state.message)
          syncClients()
      
          this.setState({
            message:''
          })
        }

        break

      default:
        console.log('---submit error---')
    }
  }

  render(){
    const { classes } = this.props
    let submitStyle = {}
    if(this.state.submitTitle == 'Send'){
      submitStyle = {
        color:'white',
        backgroundColor:'#07C160',
        borderWidth:'0px',
      }
    }else{
      submitStyle = {
        color:'black',
        backgroundColor:'#F7F7F7',
        borderWidth:'2px',
        borderColor:'black',
      }
    }

    return (
      <form 
        onSubmit={this.handleOnSubmit}
        id="bottomBar" 
        className={classes.divPage}>

        <div className={classes.divInput}>
          <textarea
            name='message'
            rows='1'
            style={{ 'height':this.state.inputHeight, }}
            value={this.state.message}
            onChange={this.handleOnChange}
            className={classes.input}></textarea>
        </div>

        <div className={classes.divButton}>
          <button style={submitStyle} className={classes.button}>
            {this.state.submitTitle}
          </button>
        </div>

      </form>
    )
  }
}

const StyledBar = withStyles(style)(Bar)

import { connectStore } from './other-actions' 

export default connectStore(StyledBar)
