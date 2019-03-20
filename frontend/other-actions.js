function mapStateToProps(state){
  return {...state} 
}

import * as db from './db-actions'

function mapDispatchToProps(dispatch){
  return {
    setStorePosts:() => db.list(dispatch),
    delStorePost:(id) => db.delPost(dispatch, id),
    setStorePost:(name, message) => db.setPost(dispatch, name, message),
    setStoreUser:(name) => db.setUser(dispatch, name),
    setStoreName:(name) => dispatch({type:'SET_USER', data:name}),
  }
}

import { connect } from 'react-redux'

export const connectStore = component => 
  connect(mapStateToProps, mapDispatchToProps)(component)

import socketIOClient from 'socket.io-client'

export const syncClients = (...args) => {
  if(args.length == 0){
    socketIOClient('/').emit('sync', 'data from client')
  }else if(args.length == 1){
    socketIOClient('/').on('sync',(serverData) => args[0]())
  }else{
    console.log('---socketIOClient Error in syncClients---')
  }
}
