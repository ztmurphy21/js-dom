//image swapper js code
//11-24-2018
//zachary murphy

$ = function (id){
	return document.getElementById(id);
}
window.onload = function (){
	var listNode = $("image_list"); //ul element
	var captionNode = $("caption"); //h2 element
	var imageNode = $("image"); //main img element
	var imageLinks = listNode.getElementsByTagName("a"); // create array of a elements within the image list and save it in this variable
	
	//process img links
	var i, linkNode, image;
	for (i = 0; i < imageLinks.length; i++){
		linkNode = imageLinks[i];
		
		//attach event handler
		linkNode.onclick = function (evt){
			//use 'this' keyword so a diff event handler is applied to each link 
			var link = this;
			//change src attribute in the images node to the href attribute of the link
			imageNode.src = link.getAttribute("href");
			
			//nchange value of the first child of the caption node to the title attribute of the link
			captionNode.firstChild.nodeValue = link.getAttribute("title");
			
			//cancel default action of event
			if (!evt) evt = window.event;
			if (evt.preventDefault) {
				evt.preventDefault(); //dom complain code
			}
			else{
				evt.returnValue = false;
			}
		}
		//preload images
		image = new Image();
		image.src = linkNode.getAttribute("href");
	}
	$("first_link").focus();
} 