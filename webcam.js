// Check if the webcam can be accessed using JavaScript
if(navigator.webkitGetUserMedia != null) {

  var options = {
    video: true,
	audio: false
  }
  
  navigator.webkitGetUserMedia(options,
  
    function(stream) {
	  var video = document.querySelector("video");
	  video.src = window.webkitURL.createObjectURL(stream);
	},
	
	function(e) {
	  alert("There was a problem with webkitGetUserMedia");
	}
  
  );
  
}

// Code to launch once the page has loaded
window.onload = function() {

  document.getElementById("capture").onclick = function() {
    
    var video = document.querySelector("video");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, 300, 250);
  
  };
  
};