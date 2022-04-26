var watchID;
var geoLoc;

var lat = document.getElementById("lat");
var long = document.getElementById("long");
var btn = document.getElementById("btn");
var liv = document.getElementById("liv");

var coord = document.getElementById("coords");
function unfade(coord) {
   var op = 0.1;  
   coord.style.display = "flex";
   var timer = setInterval(function () {
       if (op >= 1){
           clearInterval(timer);
       }
       coord.style.opacity = op;
       coord.style.filter = 'alpha(opacity=' + op * 100 + ")";
       op += op * 0.1;
   }, 50);
}




function fade(coord) {
   var op = 1;  
   var timer = setInterval(function () {
       if (op <= 0.1){
           clearInterval(timer);
           coord.style.display = "none";
       }
       coord.style.opacity = op;
       coord.style.filter = 'alpha(opacity=' + op * 100 + ")";
       op -= op * 0.1;
   }, 50);
}

var state = 0;




function getLocationUpdate(){
   
   if (state == 0){
      var latitude = "1234567lt";
      var longitude = "1234567lg";
      lat.innerHTML = latitude;
      long.innerHTML = longitude;
      unfade(coord);
      btn.setAttribute("value","Stop Sharing Location");
      btn.style.backgroundColor = "#2EE59D";
      btn.style.color = "black";
      liv.style.display = "flex";
      state = 1;
   }
   else{
      fade(coord);
      btn.setAttribute("value","Share Live Location");
      btn.style.backgroundColor = "#e52e2e";
      btn.style.color = "white";
      liv.style.display = "none";
      state = 0;
   }
   
}
