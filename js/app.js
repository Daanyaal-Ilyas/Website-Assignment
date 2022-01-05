var i = 0; 
var image = [];
var time = 3000;
	 
image[0] = "images /IMG_1809.jpeg";
image[1] = "images /IMG_1437.jpeg";
image[2] = "images /IMG_1809.jpeg";
image[3] = "images /IMG_1441.jpeg";


function imagechanger(){
	document.slideshow.src = image[i];
	if(i < image.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("imagechanger()", time);
}
window.onload=imagechanger;