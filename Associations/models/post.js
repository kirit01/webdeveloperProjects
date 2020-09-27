var mongoose=require('mongoose');
//POST: title,comment
var postSchema = new mongoose.Schema({
    title: String,
    comment: String,
  });
  
  var Post = mongoose.model("Post", postSchema);


module.exports=mongoose.model('Post',postSchema);