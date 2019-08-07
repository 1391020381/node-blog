export default function (app) {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    meta: {
      createAt: {
        type: Date,
        default: Date.now()
      }
    }
  })
  return mongoose.model('User', UserSchema)
}