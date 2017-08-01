function writeGeneralHead(title, prefix) {
    document.writeln("<link rel=\"stylesheet\" href=\"css/main.css\"> <!-- Linking to the main.css StyleSheet -->");
    document.writeln("<meta charset=\"utf-8\" /> <!-- Just plain nessessary -->");
    if (prefix == true) {
        document.writeln("<title>TLM : " + title + "</title>");
    }else{
        document.writeln("<title>" + title + "</title>");
    }
    document.writeln("<script src=\"js/navigationBar.js\"></script>");
}

// function writeGeneralHead(title) {
//     document.writeln("<link rel=\"stylesheet\" href=\"css/main.css\"> <!-- Linking to the main.css StyleSheet -->");
//     document.writeln("<meta charset=\"utf-8\" /> <!-- Just plain nessessary -->");
//         document.writeln("<title>" + title + "</title>");
//     document.writeln("<script src=\"js/navigationBar.js\"></script>");
// }