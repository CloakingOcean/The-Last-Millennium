// /* 
// <table style="width:100%">
//     <tr>
//         <td><a href=""><img id="streamImg" src="portraits/cloakingocean.png" /></a></td>
//         <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
//     </tr>
//     <tr>
//         <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
//         <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
//     </tr>
//     <tr>
//         <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
//         <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
//     </tr>
// </table>
// */


/* 
<table style="width:100%">
    <tr>
        <td><a href=""><img id="streamImg" src="portraits/cloakingocean.png" /></a></td>
        <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
    </tr>
    <tr>
        <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
        <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
    </tr>
    <tr>
        <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
        <td><img id="streamImg" src="portraits/cloakingocean.png" /></td>
    </tr>
</table>
*/


function writeGameLinks() {
    
    document.writeln("GAME FUNCTION");
    
    var streamers = ["Minecraft", "lol"];
    

    
    document.writeln("<table style=\"width:100%\">");
    
    
    for (var i = 0; i < streamers.length;) {
        
        if (i <= streamers.length) {
            if ((streamers.length - i) != 1) {
                document.writeln("<tr>");
                document.writeln("<td><a href=\"" + streamers[i].toLowerCase() + ".html\"><img id=\"streamImg\" src=\"images/games/" + streamers[i].toLowerCase() + ".png\" /></a></td>");
                document.writeln("<td><a href=\"" + streamers[(i+1)].toLowerCase() +".html\"><img id=\"streamImg\" src=\"images/games/" + streamers[(i+1)].toLowerCase() + ".png\"/></a></td>");
                
                document.writeln("</tr>");
                i += 2;
            }else{
                document.writeln("<tr >");
                document.writeln("<td><a href=\"games/"+ streamers[i].toLowerCase() + ".html\"><img id=\"streamImg\" src=\"images/games/" + streamers[i].toLowerCase() + ".png\" /></a></td>");
                document.writeln("</tr>");
                i++;
            }
        }
        // //Last one is a loner
        // if (i <= streamers.length - 1) {
        //     alert("Streamers Length: " + streamers.length + "\n" + "I: " + i);
        //     if (streamers.length - i == 1) {
               
        //     }else{
            
        //         document.writeln("<tr>");
        //         document.writeln("<td><a href=\"games/"+ streamers[i].toLowerCase() + ".html\"><img id=\"streamImg\" src=\"images/games/" + streamers[i].toLowerCase() + ".png\" /></a></td>");
        //         document.writeln("<td><a href=\"\"><img id=\"streamImg\" src=\"images/games/" + streamers[i+1].toLowerCase() + ".png\" /></a></td>");
                
        //         document.writeln("</tr>");
                
        //         i+=2;
        //     }
        // }
        
        // document.writeln("<tr>");
        // document.writeln("<td><a href=\"games/"+ streamers[i].toLowerCase() + ".html\"><img id=\"streamImg\" src=\"images/games/" + streamers[i].toLowerCase() + ".png\" /></a></td>");
        // document.writeln("</tr>");
    }
    
    document.writeln("</table>");
}