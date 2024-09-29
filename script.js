var version = document.getElementById('version'); // checking if updated
version.innerText = 'javascript 1.0'

var video = document.getElementById('video'); // video streamed 
var canvas = document.getElementById('canvas'); // hidden element 
var photo = document.getElementById('photo'); // where the photo is displayed
var startbutton = document.getElementById('startbutton'); // button pressed to capture the photo 

// get the media from the user's device 
navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("An error occurred");
      });

