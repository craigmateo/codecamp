function loadJSON(file, callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

let searchUrl="https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&generator=search&origin=*&explaintext&prop=extracts&exintro&exsentences=1&gsrsearch=";

function display_search() {
    var term = document.getElementById("search_term").value;
    document.getElementById("demo").innerHTML = term;

    // var url="https://en.wikipedia.org/wiki/Special:Random"
  
    let url=searchUrl+term;
    document.getElementById("url").innerHTML = url;  
  
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  
  var dataparsed=JSON.parse(data);
  
  console.log(dataparsed);
  
  var data_all=JSON.stringify(dataparsed.query.pages);
  
  while(data_all.charAt(0) === '{') {
 data_all = data_all.slice(1,-1);
}
  
 var data_1 = data_all.split("},"); 
 
 // console.log(data_1);
  
 var start = "title";
 var end = "index";
 var start1 = "pageid";
 var end1 = ',"ns":'; 
 var start2 = "extract"; 
 var titles = []; 
  
 for (var i = 0; i < data_1.length; i++) {
   var n = data_1[i].indexOf(start);
   var m = data_1[i].indexOf(end);
   var o = data_1[i].indexOf(start1);
   var p = data_1[i].indexOf(end1);
   var q = data_1[i].indexOf(start2);
   var title = data_1[i].substring(n+8,m-3);
   var id = data_1[i].substring(o+8,p);
   var extract = data_1[i].substring(q+10);
   titles.push([id,title,extract]);
}
  
  console.log(titles);
  document.getElementById("resulttable").style.visibility = "visible";
  
   for (var i = 0; i < titles.length; i++) {
     var id = "article"+String(i+1);
     var linkid = "article"+String(i+1)+"link";
     var extractid = "extract"+String(i+1);
     document.getElementById(id).style.visibility = "visible";
     document.getElementById(linkid).innerHTML = titles[i][1];
     document.getElementById(extractid).innerHTML = titles[i][2];
     var page = 'https://en.wikipedia.org/?curid='+String(titles[i][0]);
     
     document.getElementById(linkid).href=page;
     
     console.log(page);
     
   }
  
}