import React from 'react'
import socketIOClient from 'socket.io-client'
import { indigo, lightGreen, grey } from '@material-ui/core/colors'
import { TextField, Button, List, ListItem, ListItemText, Typography, Divider, Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import DeleteIcon from '@material-ui/icons/Delete';

import Triangle from './Triangle'

const style = theme => ({
  list:{
    top:'0',
  },
  itemText:{
    fontSize:'5em',
    margin:'20px',
    display:'flex',
    flexDirection:'row',
    alignItems:'baseline',
  },
  button:{
    fontSize:"60%",
    border:"none",
    textAlign:'left',
    textTransform:'none'
  }
})

const ListMsgs = props => {
  const { classes, posts, delStorePost, name } = props

  const delShow = name == 'ADMIN' ? 'block' : 'none'

  const isUser = user => {
    let result = {}
    if(user == name){
      result = {
        'backgroundColor':'#07C160',
        'flexDirection':'row-reverse',
        'reverse':true
      }
    }else{
      result = {
        'backgroundColor':'#fff',
        'flexDirection':'row',
        'reverse':false
      }
    }
    return result
  }
  return (
    <List className={classes.list}>
      {
        posts.map((m, k) =>
          <ListItem key={k} 
            style={{'flexDirection':isUser(m.name).flexDirection}} 
            className={classes.itemText}>

            <Button
              className={classes.button}
              style={{display:delShow}} 
              onClick={() => delStorePost(m.id)}
            ><DeleteIcon /></Button>
            
            <Button 
              className={classes.button}
              style={{ textDecoration:"underline solid green"}}>
              {m.name}
            </Button>

            <Triangle bgColor={isUser(m.name).backgroundColor} 
                        reverse={isUser(m.name).reverse} />

            <Button 
              className={classes.button}
              style={{backgroundColor:isUser(m.name).backgroundColor}}>
              {m.message}</Button>

          </ListItem>)
      }
    </List>
  )
}

const StyledListMsgs = withStyles(style)(ListMsgs)

import { connectStore } from './other-actions' 

export default connectStore(StyledListMsgs)
