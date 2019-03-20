export const list = dispatch => {
  fetch('/list', {
    credentials:'include'
  }).then(response => {
      return response.json()
    }).then(result => {
      if(result.error){
        console.log(result.error)
      }else{
        //return result
        dispatch({type:'SET_POSTS', data:result})
      }
    }).catch(err => {
      console.log(err)
    })
}

export function setPost(dispatch, name, message){
  const user = {
    name:name,
    message:message
  }
  fetch('/post', {
    method:'POST',
    credentials:'include',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
  }).then(response => {
    return response.json()
  }).then(result => {
      if(result.error){
        console.log(result.error)
      }else{
        //return result
        dispatch({type:'SET_POST', data:result})
      }
    }).catch(err => {
    console.log(err)
  })
}

export function delPost(dispatch, id){
  fetch('/delPost/'+id, {
    credentials:'include',
    method:'GET'
  }).then(response => {
    return response.json()
  }).then(result => {
      if(result.error){
        console.log(result.error)
      }else{
        //return result
        dispatch({type:'DEL_POST', data:result._id})
      }
    }).catch(err => {
    console.log(err)
  })
}

export function setUser(dispatch, name){
  fetch('/user/'+name, {
    credentials:'include'
  }).then(response => {
    return response.json()
  }).then(result => {
      if(result.error){
        console.log(result.error)
      }else{
        //return result
        console.log('sign up completed:', result)
        dispatch({type:'SET_USER', data:result})
      }
    }).catch(err => {
    console.log(err)
  })
}
