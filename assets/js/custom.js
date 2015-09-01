$(document).ready(function(){

	$('.form-signin').vaidate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			password: {
				minlength: 6,
				required: true
			},
			cPassword: {
				minlength: 6,
				equalTo: "#password"
			}
		},
		success: function(element){
			element.text('OK!').addClass('valid');
		}
	});
});