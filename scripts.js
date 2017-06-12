//scripts.is

/*
var i, j;
 
for (i = 1; i <= 6; i++) {

    for (j = 1; j <= i; j++)
    {
    document.write("*");

    }
    document.write("<br>");
}
document.write("<br>");

*/

function drawTree (i) { 

   for (var i = 1; i < 6; i++) {
      var star = " ";
      for (var j = 1; j <= i; j++) {
      star += "*"; //nie rozumiem tego zapisu. Pierwotnie miałam symbol zmiennej "var" na początku i wyskakiwwało, że += to błąd. usunełam i zadziałało
      }
      console.log(star);
   }
}

drawTree(1) //teraz mam tam pięć choinek. Gdzie jest błąd?
drawTree(2)  
drawTree(3)
drawTree(4)
drawTree(5)





