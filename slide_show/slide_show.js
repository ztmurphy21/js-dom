var $ = function (id) {
	return document.getElementById(id);
}

window.onload = function(){
	var listNode = $("image_list"); //ul element
	var captionNode = $("caption"); //h2 element for caption
	var imageNode = $("image"); //img element
	
	//create array for the 'a' element
	var links = listNode.getElementsByTagName("a");
	
	//process image links
	var i, linkNode, image;
	var imageCache = []; //array to hold each image
	
	//proload images and set title properties
	for (i = 0; i < links.length; i++){
		linkNode = links[i];
		//create image object
		image = new Image();
		image.src = linkNode.getAttribute("href");
		image.title = linkNode.getAttribute("title");
		//push each image object to this array
		imageCache.push(image);
	}
	
	//start the slideshow
	var imageCounter = 0;
	
	//interval timer with embedded function
	var timer = setInterval(
	//function to display next slide when time is up
	function(){
		imageCounter = (imageCounter + 1) % imageCache.length;
		image = imageCache[imageCounter];
		imageNode.src = image.src;
		captionNode.firstChild.nodeValue = image.title;
		//time set to 2 seconds
	}, 2000);
}