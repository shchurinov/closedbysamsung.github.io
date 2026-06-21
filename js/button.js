
function copyBTC() {
		// Get the text field
		var copyText = document.getElementById("btc");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
			} 
function copyXMR() {
		// Get the text field
		var copyText = document.getElementById("xmr");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);
			} 
