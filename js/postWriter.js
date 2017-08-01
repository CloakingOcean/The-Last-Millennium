// <div class="post">
// 	<div class="title">
// 		Post1Title
// 	</div>
// 	<div class="author">
// 		<b><i>Author: </i></b>Cloaking_Ocean
// 	</div>
// 	<div class="date">
// 		<b><i>Date: </i></b>10/17/16
// 	</div>
// 	<div class="message">
// 		</br>
// 		&nbsp;&nbsp;&nbsp;&nbsp;READ
// 	</div>
// </div>

function writePosts() {
    
    function post(title, titleColor, textColor, author, date, message) {
        this.title = title;
        this.titleColor = titleColor;
        this.textColor = textColor;
        this.author = author;
        this.date = date;
        this.message = message;this.message = message;
    }
    
    var posts = [
        
        new post("Post1", "#1FA83F", "#ffffff", "Cloaking_Ocean", "10/17/2016", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), 
        
        new post("Post2" , "#1FA83F", "#ffffff", "RavoTheGreedy", "10/17/2016", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.")
        
        ];
    
    var i = 0;
    while (i < posts.length) {
        document.writeln("<div class=\"post\">");
            document.writeln("<div style=\"color: " + posts[i].titleColor + "\" class=\"title\">");
                document.writeln(posts[i].title);
            document.writeln("</div>");
            
            document.writeln("<div style=\"color: " + posts[i].textColor + "\" class=\"author\">");
                document.writeln("<b><i>Author: </i></b>" + posts[i].author);
            document.writeln("</div>");
            
            document.writeln("<div style=\"color: " + posts[i].textColor + "\" class=\"date\">");
                document.writeln("<b><i>Date:</i></b> " + posts[i].date);
            document.writeln("</div>");
            
            document.writeln("<div style=\"color: " + posts[i].textColor + "\" class=\"message\">");
            
            document.writeln("</br>");
            
            document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;" + posts[i].message);
            
            document.writeln("</div>");
        
        document.writeln("</div>");
        i++;
    }
}