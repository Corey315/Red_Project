 $(document).ready(function() {
 	$("#submit").click(function() {
	//User clicks on submit function//
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var comments = $("#comments").val();
	//If those values are blank return message below//
	$("#returnmessage").empty();
	if (name == '' || email == '' || phone == '' || comments == '') {
	alert("Please Fill Required Fields");
	} else {
	//If values are entered return message below//
	$("#returnmessage").append(); 
	if (name == '' || email == '' || phone == '' || comments == '') {
	alert("Your submission has been received, we will contact you shortly")
	$(".form_area")[0].reset();

}
}
});
});
