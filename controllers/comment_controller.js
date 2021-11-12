const userpostcomment = require('../models/comments');
const userpost = require('../models/post');

module.exports.createcomment = function(req,res){
   userpost.findById(req.body.post,function(err,post){
       if(post){
           userpostcomment.create({
               content:req.body.content,
               post:req.body.post,
               user:req.user._id
           },function(err,comment){
               if(err){
                req.flash('error','Comment Failed');  
               }
               post.comment.push(comment);
               post.save();
               res.redirect('/');
           });
       }
   });
    req.flash('success','comment ho gya');
} 