var mongoose=require('mongoose')
//USER: email,name and post schema from the above posts

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
      {
        // reference associations
        type: mongoose.Schema.Types.ObjectId, // refers to id 
        ref: "Post", // refers to Post inside parent schema  
      },
    ],
  });
  
  var User = mongoose.model("User", userSchema);

module.exports=mongoose.model('User',userSchema)