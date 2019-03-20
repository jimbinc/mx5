const config = {
  env: process.env.NODE_ENV || 'development',
  mongoUri:'mongodb://' + ( process.env.MONGO_HOST || 'localhost') + ':' + ( process.env.MONGO_PORT || '27017') + '/db',
  port: process.env.PORT || '3000',
}
export default config
