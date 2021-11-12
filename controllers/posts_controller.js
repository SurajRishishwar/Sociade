const userpost = require('../models/post');
const postmailer = require('../mailers/post_mail')
module.exports.createpost = function(req,res){
    userpost.create({
        content:req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){console.log('Error in posting');return;}
        postt=req.user.email;
        postmailer.newpost(postt);
        return res.redirect('back');
            
          
        });
        
    req.flash('success','hnnn.... ye krlo pehle');
} 