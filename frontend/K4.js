import React from 'react'

import Cookies from 'js-cookie'

import BottomBar from './phone-bottom-bar'

import TopList from './phone-top-list'

import { List, ListItem, ListItemText, Typography } from '@material-ui/core'

import { syncClients } from './other-actions'

import 'typeface-roboto'

//import debug from 'debug'
var debug = require('debug')('K4*')

debug('<======debugging ....=========>')

class K4 extends React.Component {
  componentDidMount(){
    document.querySelector('body').style.background = '#ececec'
    syncClients(this.props.setStorePosts)
    this.props.setStorePosts()
  }

  componentDidUpdate(){
    //console.log('name:'+this.props.name)
    //console.log(tellme('name:'+this.props.name))
    //tellme(this.props.name)
    debug('props.name:', this.props.name)

    if(this.props.name != 'ADMIN'){
      document
        .querySelector('html')
        .scrollIntoView(false)
    }

    const bottomBar = document.querySelector('#bottomBar')
    const mainDiv = document.querySelector('#mainDiv')
    if(bottomBar && mainDiv){
      if(bottomBar.scrollHeight != mainDiv.style.paddingBottom){
        mainDiv.style.paddingBottom = bottomBar.scrollHeight + 'px'
      }
    }
  }

  render(){
    //if(this.state.isMobile){
    if(true){
      return this.renderPhone()
    }else{
      return this.renderDesktop()
    }
  }

  renderPhone(){
    return (
      <Typography component="div" id="mainDiv"> 
        <TopList />
        <BottomBar />
      </Typography>
    )
  }
}

import { connectStore } from './other-actions' 

export default connectStore(K4)
