export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passWord: {
      type: 'string',
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    meta: {
      createAt: {
        type: Date,
        default: Date.now(),
      },
    },
  });
  return mongoose.model('User', UserSchema);
}