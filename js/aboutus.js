function writeProfiles() {
    
    var shawn = {name:"Cloaking Ocean", titles:"The Best Person Ever", description:"Hello everyone. Cloaking Ocean here. I'm a mid lane yasuo main and I'm currently Silver IV. My other favorite mid laners are Syndra, Ahri, Leblanc, and Veigar. I'm comfortable going any lane by my worst lane is top (because I usually die early with Riven). I started playing around 2013. StarCraft II and Minecraft are other games I enjoy playing. The rose is obviously the best icon in the game so that's why I chose it."};
    var todd = {name:"EGG MAN", titles:"The Candy King", description:"THE CANDY KING. HE COMES TO YOUR HOUSE AND GIVES YOU CANDY FOR A CERTAIN FEE. IT'S LIKE HALOWEEN BUT YOU STILL HAVE TO GIVE HIM MONEY. HE'S RUNNING A BUSSINESS AFTER ALL!"};
    
    var people = [shawn, todd];
    
    for (var p in people) {
        var test = people[p];
        
        
        document.writeln("<div id=\"container\">");
            document.writeln("<div id=\"picture\">");
                document.writeln("<img width=\"255px\" src=\"images/portraits/" + test.name.toLowerCase().replace(" ", "") + ".png\" />");
            document.writeln("</div>");
        
        
            document.writeln("<div id=\"information\">");
                
                
                
                document.writeln("<div id=\"name\">");
                    document.writeln("<b><i>Name:</i></b> " + test.name);
                document.writeln("</div>");
                
                
                document.writeln("<div id=\"titles\">");
                    document.writeln("<b><i>Titles:</i></b> " + test.titles);
                document.writeln("</div>");
                
                
                document.writeln("<p>&nbsp;&nbsp;&nbsp;&nbsp;" + test.description + "</p>");
                
                
                
                
                
                
            document.writeln("</div>");
        
        
        
        
        
        
        
        
        document.writeln("</div>");
         
        document.writeln("</br>");
    }
    
    
    
    
    
    
    
    
    
//  <div id="shawn">
	
// 				<div id="picture"> <!-- Picture -->
// 					<img width="225px" src="ProfileIcon08.jpg" />
// 				</div>
				
// 				<div id="information"> <!-- Information -->
// 				<p>POTATO</p>
// 				</div>
				
// 	</div>
	
}

function person(n, t, tx) {
    this.name = n;
    this.titles = t;
    this.text = tx;
}