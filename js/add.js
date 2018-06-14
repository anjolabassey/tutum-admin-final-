$(document).ready(function() {
	$("#addDetails").validate({
		rules: {
			name: "required",
			countryImage: "required"
		},
		messages: {
			name: "Please enter a name for this country",
			countryImage: "Please upload a flag for this country"
		}
	});
});