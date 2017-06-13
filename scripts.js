//scripts.is

function drawTree (h) { 

   for (var i = 1; i < 6; i++) {  
      var star = "";
      for (var j = 1; j <= h; j++) {
      star += "*"; 
      }
      console.log(star);
   }
}

drawTree(1);  
drawTree(2);
drawTree(3);
drawTree(4);
drawTree(5);

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

/*
function drawTree (i) { // tu podaję liczbę petli, więc mi wychodzi mnóstwo choinek, po 5 rzędów

   for (var i = 1; i < 6; i++) { 
      var star = "";
      for (var j = 1; j <= i; j++) {
      star += "*"; 
      }
      console.log(star);
   }
}

drawTree(1)  
drawTree(2)
drawTree(3)
drawTree(4)
drawTree(5)

*/





