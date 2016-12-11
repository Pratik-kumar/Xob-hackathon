function loadXMLDoc(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", dname, false);
    xhttp.send();
    return xhttp.responseXML;
}
var xmlDoc = loadXMLDoc("Posts.xml");
var x2js = new X2JS();
var jsonObj = x2js.xml2json(xmlDoc);


console.log(jsonObj.posts.row[0]);
console.log(jsonObj.posts.row[1]);
console.log(jsonObj.posts.row[2]);
console.log(jsonObj.posts.row[3]);
