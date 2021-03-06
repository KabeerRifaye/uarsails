/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// This loads the signup page. --> user/new.ejs
	new: function(req, res){
		res.view();
	},

	//Create a new user
	create: function(req, res, next){
		User.create(req.params.all(), function userCreated(err, user){

			// If there is an error 
			if(err){
				console.log(err);
				req.session.flash = {
					err: err
				}

				//If there's an error. Redirect to registration page.
				return res.redirect('/user/new');
			}

			// If the user is successfully created.
			// res.json(user);
			res.redirect('/user/show/'+user.id);
		});
	},

	show: function(req, res, next){
		User.findOne(req.param('id'), function(err, user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user: user
			});
		});
	}
};

