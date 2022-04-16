var watchID;
var geoLoc;

var lat = document.getElementById("lat");
var long = document.getElementById("long");
var btn = document.getElementById("btn");

/*function showLocation(position) {
   document.getElementById("coords").style.display = "flex"; 
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   lat.innerHTML = latitude;
   lat.innerHTML = longitude;
}


function errorHandler(err) {
   if(err.code == 1) {
      alert("Error: Access is denied!");
   } else if( err.code == 2) {
      alert("Error: Position is unavailable!");
   }
}

function getLocationUpdate(){
   
   if(navigator.geolocation){
      
      // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout:60000};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
   } else {
      alert("Sorry, browser does not support geolocation!");
   }
}

*/

function getLocationUpdate(){
   var latitude = "1234567lt";
   var longitude = "1234567lg";
   lat.innerHTML = latitude;
   long.innerHTML = longitude;
   btn.setAttribute("value","Stop Sharing Location");
   btn.style.backgroundColor = "#e52e2e";
   btn.style.color = "white";

}
