function validate() {
	// body...
	var username = document.getElementById('userName').value;
	var passcode = document.getElementById("passCode").value;

	if (passcode == "" || username == "") {
		alert("Please enter password/username.")
	}

	
	else if(passcode == "msIT" && username != "") {
		alert("Comment Posted Sucessfully :-)");
		// window.location = "https://www.google.com"
		
		var comment = [];
		var commentName = [];
		
		comment = document.getElementById('subject').value;
		commentName = document.getElementById('userName').value;

		// for (var  i = 0; i < comment.length-1; i++) {
		// 	console.log(comment[i]);

		// }
		// for (var  i = 0; i < userName.length-1; i++) {
		// 	console.log(userName[i]);
		// }
		var resetForm = document.querySelector("#postComment");
		resetForm.reset();
	}

	else {
		alert("Wrong password :-(")
	}
}


	
	
	