export default (app)=>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    author:{
      type:Schema.Types.ObjectId,
      ref:'User',
      require:true
    },
    title:{
      type:String,
      require:true
    },
    content:{
      type:String,
      require:true
    },
    pv:{
      type:Number,
      default:0
    },
    meta:{
      createdAt:{
        type:Date,
        default:Date.now()
      }
    },
    updatedAt:{
      type:Date,
      default:Date.now()
    }
  });
  // PostSchema.pre('save',function(next){
  //   if(this.isNew){
  //     this.meta.createdAt = this.meta.updatedAt = Date.now()
  //   }else{
  //     this.meta.updatedAt = Date.now()
  //   }
  //  next()
  // })
  return mongoose.model('Post', PostSchema);
}