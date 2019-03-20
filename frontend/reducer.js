const getNewState = (data) => Object.assign({}, data)

const initialState = {
  posts:[],
  post:'',
  name:''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'DEL_POST':
      state['posts'] = state.posts.filter(p => p.id != action.data)
      return getNewState(state)
    case 'SET_POSTS':
      state['posts'] = action.data
      return getNewState(state)
    case 'SET_POST':
      state['name'] = action.data.name
      state['post'] = action.data.message
      state['posts'] = [...state.posts, action.data]
      return getNewState(state)
    case 'SET_USER':
      state['name'] = action.data
      return getNewState(state)
    default:
      return state
  }
}

export default reducer

