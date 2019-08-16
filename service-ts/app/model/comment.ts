export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CommentSchema = new Schema({
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    to: {  //  代表需要艾特的人*(本文暂不实现该功能)*
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: {
      type: String,
      required: true
    },
    meta: {
      createAt: {
        type: Date,
        default: Date.now()
      }
    }

  });
  return mongoose.model('Comment', CommentSchema);
}