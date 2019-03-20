function enableChattr() {
	// if (process.env.NODE_ENV === 'production') {
	// 	const BASE_URL= 'https://labs10-webchat.netlify.com/customersignup/';
	// } else {
	// 	const BASE_URL= 'http://localhost:3000/customersignup/'
	// }

	let wcaBtn = document.querySelector(".webChatAppBtn");
	let wcaBtnImg = document.querySelector(".webChatAppBtnImg");
	if (wcaBtn === null) return;

	let wcaIFRAME = document.querySelector(".wcaIFRAME");
	wcaIFRAME.style.display = "none";
	wcaIFRAME.style.width = "450px";
	wcaIFRAME.style.height = "600px";
	wcaIFRAME.style.border = "2px gray solid";
	wcaIFRAME.scrolling = "no";
	wcaIFRAME.style.overflow = "hidden";
	wcaBtn.style.textAlign = "center";
	wcaBtn.style.verticalAlign = "middle";
	wcaBtn.style.borderRadius = "60px";
	wcaBtn.style.position = "fixed";
	wcaBtn.style.bottom = "20px";
	wcaBtn.style.right = "20px";
	wcaBtnImg.style.width = "80px";
	wcaBtnImg.style.height = "80px";
	wcaBtnImg.src = "https://freeiconshop.com/wp-content/uploads/edd/chat-alt-flat.png";
	wcaIFRAME.style.position = "fixed";
	wcaIFRAME.style.bottom = "120px";
	wcaIFRAME.style.right = "20px";
	wcaIFRAME.style.backgroundColor ="white";
	wcaBtn.onclick = function() {
		if (wcaIFRAME.style.display == "none") {
			wcaIFRAME.style.display = "";
			let company_id = wcaIFRAME.getAttribute("data-company-id");
			console.log('company_id in snippet', company_id);

			// wcaIFRAME.src = "https://labs10-webchat.netlify.com/customersignup/"+company_id;
			wcaIFRAME.src = "http://localhost:3000/customersignup/"+company_id;

		} else {
			wcaIFRAME.style.display = "none";
		}
	}
}

window.onload = function (e) {
	enableChattr();
}

window.onpopstate = function(e){
	enableChattr();
};
