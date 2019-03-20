import mongoose from 'mongoose'
import config from './webConfig'

export default function dbConnect(){
  mongoose.connect(config.mongoUri, {
    useNewUrlParser:true,
    useCreateIndex:true
  })
  
  mongoose.connection.on('error', (err) => {
    if(err){
      console.log(err)
    }else{
      console.log('database listening on url '+config.mongoUri)
    }
  })
}
