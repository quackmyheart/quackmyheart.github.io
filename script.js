(() => {
  const width = 320;
  let height = 0;

  let streaming = false; // starts as false because we're not streaming videos from the start 

  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;

  video = document.getElementById("video"); // camera to capture the code 
  canvas = document.getElementById("canvas"); // canvas is a hidden thing to do things to the images without the user knowing 
  startbutton = document.getElementById("startbutton"); // button to capture the photo 
  photo = document.getElementById("photo"); // where the taken photo will be stored 

  //  makes the camera on the site 
  navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  // ends making the camera on the site 

  // works with the startButton 
  startbutton.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false,
    );

    clearphoto();
  }
  
})
