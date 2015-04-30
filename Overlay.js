var formOpen = false;
var form;

function ActivateOverlay() {

	var overlayBox = document.getElementById("OverlayContainer");
	var elementClassName = overlayBox.className;

	//overlayBox.setAttribute("class", "OverlayBoxActive");
	overlayBox.style.zIndex = "900";
	overlayBox.style.width = "100%";
	overlayBox.style.height = "100%";
	overlayBox.style.opacity = "0.4";

	form = document.createElement("div");
	form.innerHTML = "Hello";
	form.style.color = "red";
	form.setAttribute("class", "formClass animationIn");

	//form.style.opacity = "0";

	var container = document.getElementById("formContainer");

	container.appendChild(form);
	formOpen = true;

}

function CloseForm() {

	var overlayBox = document.getElementById("OverlayContainer");
	
	overlayBox.style.opacity = "0";
	form.setAttribute("class", "formClass animationOut");

	setTimeout(function () {
		form.parentNode.removeChild(form);
	}, 1500);
	formOpen = false;

	// Wait transition time as argument so overlay fades correctly
	setTimeout(function () {
        overlayBox.style.zIndex = "-999";
    }, 1500);

	if (formOpen) {
		//Close the form. with animation moving out of the screen (down).
	}

}













/*
function ActivateOverlay() {

	var overlayBox = document.getElementById("OverlayContainer");
	var elementClassName = overlayBox.className;
	var overlayStatus = false;

	if (elementClassName == "OverlayBoxInactive") { overlayStatus = true; }
	else if (elementClassName == "OverlayBoxActive") { overlayStatus = false; }

	if (overlayStatus)
	{
		overlayBox.setAttribute("class", "OverlayBoxActive");

		var form = document.createElement("div");
		//newGeneratorElement.innerHTML = gabenSentenceArray[randomSentenceID];
		//newGeneratorElement.style.color = "red";

		form.setAttribute("class", "formClass");


		document.appendChild(form);
	}
	else
	{
		overlayBox.setAttribute("class", "OverlayBoxInactive");
	}

}
*/