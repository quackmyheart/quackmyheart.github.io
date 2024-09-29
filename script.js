var version = document.getElementById('version'); // checking if updated
version.innerText = 'javascript 2.5'

var image_to_recognize = ""; // image to be recognized 

var video = document.getElementById('video'); // video streamed 
var canvas = document.getElementById('canvas'); // hidden element 
canvas.style.visibility='hidden'; // makes canvas hidden 
var photo = document.getElementById('photo'); // where the photo is displayed
var startbutton = document.getElementById('startbutton'); // button pressed to capture the photo 

var codeButton = document.getElementById('codeButton'); // button pressed to extract text out of image 
var userCode = document.getElementById('result'); // where the code extracted from the image should be placed 

// numbers for the size... arbitrary for now! 
var width = 320; 
var height = 320; 

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

// take the photo 
startbutton.addEventListener(
  "click",
  (ev) => {
    takepicture();
    ev.preventDefault();
  },
  false,
);

// takes the photo 
  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height); // original drwaing image

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    } else {
      clearphoto();
    }
  }

// clear photo 
  function clearphoto() {
        const context = canvas.getContext("2d");
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        const data = canvas.toDataURL("image/png");
        image_to_recognize = data; // put the image inside of the global variable
        photo.setAttribute("src", data);
  }


// recognize the text 
codeButton.addEventListener(
  "click",
  (ev) => {
    recognizeText();
    ev.preventDefault();
  },
  false,
);

// recognize the text 
async function recognizeText() {

      // initializing tesseract.js
      const worker = new Tesseract.createWorker();
      await worker.loadLanguage('eng');
      await worker.initialize();

      const { data: { text } } = await worker.recognize(image_to_recognize);
      userCode.innerText = text; 

      await worker.terminate();
      
}
