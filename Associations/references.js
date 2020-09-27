// One to many Relationship
const mongoose = require("mongoose");
// mongoose requires ./ to verify the current directory
var Post = require("./models/post.js");
var User = require("./models/user.js");
mongoose.connect("mongodb://localhost:27017/blogDemo_2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Post

Post.create(
  {
    title: `why rio is the best dog part 4`,
    comment: "rio is super cute and he is the cutest buddy and the bestest, i miss rio :(",
  },
  (err, post) => {
    // finding puppy using findOne in mongoose
    User.findOne({ email: "rio@goodpuppuy.com" }, (err, foundUser) => {
            if (err) {
                console.log("error");
            } else {
                 // pushing comments into the user with reference from the posts
                 // POSTS refers to post created inside user Schema
                 // post refers to callback function created inside Post.create schema
                foundUser.posts.push(post);
                // Save the post
                foundUser.save((err,data)=>{
                    err?console.log(err):console.log(data);
                })
            }
        });
    // err?console.log('of no error'):console.log(post);
  }
);

// find user
// find all the posts of that user
// populate will find all and the posts (title, comment) by email, exec will execute the post
// User.findOne({email:'rio@goodpuppuy.com'}).populate('posts').exec((err,user)=>{
// err?console.log("error") : console.log(user);
// });

// Create new user

// User.create({
//     email:'rio@goodpuppuy.com',
//     name:'Rio'
// });
