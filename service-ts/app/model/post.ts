export default (app)=>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    author:{
      type:Schema.Types.ObjectId,
      ref:'User',
      require:true
    }
  });
  return mongoose.model('Post', PostSchema);
}