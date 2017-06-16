//scripts.is

function drawTree (h) { //liczba poziomów, wysokość

   for (var i = 1; i <= h; i++) {  // mogę też zacząć od 0
      var star = "";
      for (var j = 1; j <= i; j++) {
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



// h = 2

// for (var i = 1; 1 < 2; i++) {  // 
//       var star = "";
//       for (var j = 1; j <= i; j++) {
//       star += "*"; 
//       }
//       console.log(star);
//    }


// for (var i = 2; 2 < 2; i++) {  // 
//       var star = "";
//       for (var j = 1; j <= i; j++) {
//       star += "*"; 
//       }
//       console.log(star);
//    }


// for (var i = 1; i < h; i++) {  // 
//       var star = "";
//       for (var j = 1; j <= i; j++) {
//       star += "*"; 
//       }
//       console.log(star);
//    }




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





