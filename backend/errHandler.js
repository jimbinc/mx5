export default (err, req, res, next) => {
  console.log('\n------------error-------------\n')
  console.log(err)
  let message
  if(err.name == 'UnauthorizedError'){
    message = 'invalid token'
  }else if(err.code == 11000 || err.code == 11001) {
    message = err.errmsg
  }else{
    const errStr = JSON.stringify(err)
    const matchStr = errStr.match(/"message":"(.*?)"/)
    if(matchStr){
      message = matchStr[1]
    }else{
      message = errStr
    }
  }
  res.status(400).json({
    error:message
  })
}
