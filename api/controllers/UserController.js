/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// This loads the signup page. --> user/new.ejs
	'new': function(req, res){
		res.view();
	},

	//Create a new user
	create: function(req, res, next){
		User.create(req.params.all(), function userCreated(err, user){
			if(err) 
				return next(err);
			res.json(user);
		});
	}
};

