var i = 3; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images /IMG_1809.jpeg";
images[1] = "images /IMG_1437.jpeg";
images[2] = "images /IMG_1437.jpeg";
images[3] = "images /IMG_1437.jpeg";

// Change Image
function changeImg(){
	document.slideshow.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;