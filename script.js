var version = document.getElementById('version'); // checking if updated
version.innerText = 'javascript video 4.5';

var video = document.getElementById('video'); // video streamed 
var canvas = document.getElementById('canvas'); // hidden element 
canvas.style.visibility='hidden'; // makes canvas hidden 
var photo = document.getElementById('photo'); // where the photo is displayed
var startbutton = document.getElementById('startbutton'); // button pressed to capture the photo 

// numbers for the size... arbitrary for now! 
var width = 599; 
var height = 486; 

var codeButton1 = document.getElementById('codeButton1');
var codeButton2 = document.getElementById('codeButton2');
var codeButton3 = document.getElementById('codeButton3');
var compile1 = document.getElementById('compile1');
var compile2 = document.getElementById('compile2');
var compile3 = document.getElementById('compile3');

var result = document.getElementById('result');
var compiled = document.getElementById('compiled');

codeButton1.addEventListener(
  "click",
  (ev) => {
    result.innerText = "sum = 0 / for i in range(1, n + 1): / sum += i * i / return sum";
  },
  false,
);

codeButton2.addEventListener(
  "click",
  (ev) => {
    result.innerText = "public class PrimeSum { public static boolean isPrime(int num) { if (num <= 1) { return false; } for (int i = 2; i <= Math.sqrt(num); i++) { if (num % i == 0) { return false; } } return true; } public static void main(String[] args) { int n = 5; int count = 0; int sum = 0; int num = 2; while (count < n) { if (isPrime(num)) { sum += num; count++; } num++; } System.out.println(sum); } }";
  },
  false,
);

codeButton3.addEventListener(
  "click",
  (ev) => {
    result.innerText = "???";
  },
  false,
);

compile1.addEventListener(
  "click",
  (ev) => {
    compiled.innerText = "385";
  },
  false,
);

compile2.addEventListener(
  "click",
  (ev) => {
    compiled.innerText = "28";
  },
  false,
);

compile3.addEventListener(
  "click",
  (ev) => {
    compiled.innerText = "42";
  },
  false,
);

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
      context.drawImage(video, 0, 0, width, height); // original drawing image

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
    photo.setAttribute("src", data);
  }
