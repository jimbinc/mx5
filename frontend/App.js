import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { red, grey, blueGrey } from '@material-ui/core/colors'

import { hot } from 'react-hot-loader'

import K4 from './K4'

const theme = createMuiTheme({
  palette:{
    primary:{
      main:grey['300']
    },
    secondary:{
      main:grey['900']
    }
  },
  typography:{
    useNextVariants:true,
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <K4 />
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)

