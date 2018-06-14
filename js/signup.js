$(document).ready(function() {
	$("#signup").validate({
		rules: {
			fname: {
				required: true,
				minlength: 2
			},
			lname: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			username: {
				required: true,
				minlength: 5
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			fname: {
				required: "Please enter your first name",
				minlength: "Please enter a minimum of 2 characters"
			},
			lname : {
				required: "Please enter your last name",
				minlength: "Please enter a minimum of 2 characters"
			},
			email: {
				required: "Please enter your email",
				email: "Please enter a valid email"
			},
			username: {
				required: "Please enter your username",
				minlength: "Please enter a minimum of 5 characters"
			},
			password: {
				required: "Please enter your password",
				minlength: "Please enter a minimum of 5 characters"
			}
		}
	});
});