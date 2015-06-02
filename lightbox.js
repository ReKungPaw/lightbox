/* 
 starts an immediately invoked function, to avoid 
 variable / function conflicts declared in the global scope
*/
(function (){
	/* initialize document once to avoid calling it 
	   out of scope repeatedly. */
	var doc = document; 

	/* get the div container for the images */
	var container = doc.querySelector(".image-container"); 

	/* Check if browser supports addEventListener */
	if(window.addEventListener){
		
		container.addEventListener("click", function(e){

			 /* get the name of the bigger image */
			var image_src = e.target.getAttribute("data-big-image");
			
			
			if(image_src){
				/* start by clearing an already-maximized image. 
				otherwise every click will resize and append the image 
				*/
				doc.querySelector(".resize-image").innerHTML = "";

				/* set the body to transparent black for the lightbox effect */
				doc.body.style.backgroundColor = "rgba(14, 13, 13, 0.83)";

				/* create an image tag to append into the resize-image div */
				var image = doc.createElement("img"); 
				image.setAttribute("src", image_src); 
				
				/* display the image container div */
				var lightbox = doc.querySelector(".resize-image");
				lightbox.style.display = "block";

				/* append the new bigger image, and the 'close me' div */
				var closeMe = doc.createTextNode("close me"),
					paragraph = doc.createElement("p");
					paragraph.setAttribute("class", "close-window");
					paragraph.appendChild(closeMe);
				lightbox.appendChild(image);
				lightbox.appendChild(paragraph);

				/* detect if the close-window tag is clicked and 
					display to none the image container
				*/
				close = doc.querySelector(".close-window"); 
						close.addEventListener("click", function(e){
							var foo = doc.querySelector(".resize-image");
							foo.style.display = "none";
							doc.body.style.backgroundColor = "white";
				});
			}

		}, false);		

	/* yeah, I know about that IE8 < shit */
	}else if(window.attachEvent){

	}else{
		alert("You probably can't see this message");
	}


}());


