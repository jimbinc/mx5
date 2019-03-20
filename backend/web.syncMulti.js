import http from 'http'
import socketIO from 'socket.io'
import config from './webConfig'

export default function syncMulti(app){
  const server = http.createServer(app)

  const socketServer = socketIO(server)
  socketServer.on('connection', socket => {
    console.log('User Connected') 

    socket.on('sync', (clientData) => {
      console.log(clientData)
      socketServer.sockets.emit('sync', 'sync data from server')
    })

    socket.on('disconnect', () => {
      console.log('User Disconnected')
    })
  })

  server.listen(config.port, (err) => {
    if(err){
      console.log(err)
    }else{
      console.log('Server started on '+config.port)
    }
  })
}

