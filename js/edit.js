$(document).ready(function() {
	$("#editDetails").validate({
		rules: {
			name: {
				required: true,
			},
			countryImage: "required"
		},
		messages: {
			name: "Please enter a name for this country",
			countryImage: "Please upload a flag for this country"
		}
	});
});