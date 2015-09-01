module.exports = function(req, res, next){

	//assign empty object to the locals flash
	res.locals.flash = {};

	if(!req.session.flash) return next();

	res.locals.flash = _.clone(req.session.flash);

	//clear flash
	res.locals.flash = {}

	next();
};