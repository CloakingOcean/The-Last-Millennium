function writeNavigationBar(currentWebpage) {
    var webPages = ["Home", "Games", "Join Us", "Our Streams", "About Us",];
    
    
    var toWrite = "<ul>\n";
    
    
    for (var i in webPages) {
        var page = webPages[i];
        
        if (i == 0) {
            if (currentWebpage == 0) {
                toWrite += "<li id=\"current\">Home</li>\n"
            }else{
                toWrite += "<li><a href=\"index.html\">Home</a><li>\n"
            }
        }else{
            
            if (i == currentWebpage) {
                toWrite += "<li id=\"current\">" + page + "</li>\n";
            }else{
                toWrite += "<li><a href =\"" + page.toLowerCase().replace(" ", "") + ".html\">" + page + "</a></li>\n";
            }
        }
        
        
        
    }
    
    
    document.write(toWrite);
    
    /**
     * 
     * <ul>
	 *			<li id="current">Home</li>
	 *			<li><a href="games.html">Games</a></li>
	 *			<li><a href="joinus.html">Join Us</a></li>
	 *			<li><a href="ourstreams.html">Our Streams</a></li>
	 *			<li><a href="aboutus.html">About Us</a></li>
	 *			<script>
	 *				writeNavigationBar();
	 *			</script>
     * 
     * </ul>
     * 
     * 
     * **/
    
}