const User = require('../models/users');
const userpost = require('../models/post');

module.exports.home = function(req,res){

    
        userpost.find({}).populate('user')
        .populate({
            path:'comment',
            populate:{
                path:'user'
            }
        })
        .exec(function(err,allpost){
            if(err){
                console.log('Error in Fetching Contact from DB');
                return;
            }
            
            return res.render('home',{
                title:"Sociade",
                postforhome:allpost
             
            });
            
        });
    
    //  return res.render('home',{
    //      title:"Sociade"
    //  });
}