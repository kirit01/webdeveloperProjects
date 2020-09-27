// One to many Relationship
const mongoose = require(`mongoose`);
mongoose.connect("mongodb://localhost:27017/blogDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//POST: title,comment

var postSchema = new mongoose.Schema({
  title: String,
  comment: String,
});

var Post = mongoose.model("Post", postSchema);

//USER: email,name and post schema from the above posts

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});

var User = mongoose.model("User", userSchema);

// USER: New User also implementing other things such as posts inside user

// var newUser = new User({
//   email: "kirito@gmail.com",
//   name: "kirito",
// });
// post is an array thats why we have to push it using push methods (newUser.posts.push({}))

// newUser.posts.push({
//   title: "i can complete embeded.js thing and get good at it",
//   comment: "because he is trash and everything sucks about him "
// });

// // Saving new user information

// newUser.save((err,user)=>{
//     err?console.log('error'):console.log(user);
// });

//POST: User post title and comment

// var newPost = new Post({
//   title: "Earth is the only planet to harbour life",
//   comment:
//     "but recent studies have shows that venus is also found to have life",
// });

// newPost.save((err, posts) => {
//   err ? console.log("error") : console.log(posts);
// });

// Finding existing users only one user
User.findOne({ name: "kirito" }, (err, user) => {
  err
    ? console.log(err)
    : user.posts.push({
        title: "Like of remote web developer",
        comment: "remote developers have lots of fun "
      });
    //  finding and pushing other post.
  user.save((err, user) => {
    err ? console.log(err) : console.log(user);
  });
});