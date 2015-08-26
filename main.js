function theme(cssFile) {
 
        var oldlink = document.getElementsByTagName("link").item(0);
		
        /*create newlink and set the attributes here */
	    var newlink = document.createElement("link")
		newlink.setAttribute("rel", "stylesheet");
    	newlink.setAttribute("type", "text/css");
      	newlink.setAttribute("href", cssFile);

    
        /*replace the old link in the header with the new link */
        document.getElementsByTagName("head").item(0).replaceChild(newlink,  oldlink);
      }