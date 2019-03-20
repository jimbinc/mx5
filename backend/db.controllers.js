import { PostModel, UserModel } from './db.models'
const setUser = (req, res, next) => {
  const name = req.params.name
  const user = UserModel({name:name}) 
  user.save((err, result) => {
    if(err){
      next(err)
    }else{
      res.status(200).json(result.name)
    }
  })
}

const setPost = (req, res, next) => {
  const { name, message } = req.body
  UserModel.findOne({name:name}).select('_id').exec((err, result) => {
    if(err || !result ){
      next(err)
    }else{
      const post = PostModel({message:message, postedBy:result.id})
      post.save((err, result) => {
        if(err){
          next(err)
        }else{
          const user = { id:result._id, ...req.body }
          res.status(200).json(user)
        }
      })
    }
  })
}

const delPost = (req, res, next) => {
  const id = req.params.id
  PostModel.findById(id).exec((err, post) => {
    if(err){
      next(err)
    }else{
      post.remove((err, result) => {
        if(err){
          next(err)
        }else{
          res.status(200).json(result)
        }
      })
    }
  })
}

const list = (req, res, next) => {
  PostModel.find().populate({
      path:'postedBy',
      select:'name -_id',
    })
    .select('-__v')
    .exec((err, result) => {
      if(err){
        next(err)
      }else{
        result = result.map(each => {
          return {
            id:     each._id,
            name:   each.postedBy.name,
            message:each.message
          }
        })
        res.json(result)
      }
    })
}

export default {
  setUser,
  setPost,
  delPost,
  list
}

