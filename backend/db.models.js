import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    unique:'name must be unique',
    trim:true,
    required:'name must be required'
  }
})

export const UserModel = mongoose.model('User', UserSchema)

//------------------------------

const PostSchema = new mongoose.Schema({
  message:{
    type:String,
    trim:true
  },

  postedBy:{
    type: mongoose.Schema.ObjectId,
    ref:'User'
  }
})

export const PostModel = mongoose.model('Post', PostSchema)

