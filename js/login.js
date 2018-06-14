$(document).ready(function() {
	$("#login").validate({
		rules: {
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