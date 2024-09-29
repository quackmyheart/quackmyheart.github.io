var versionRecognize = document.getElementById('versionRecognize'); // checking if updated
versionRecognize.innerText = 'javascript 1.2';

// text recognition time 
var codeButton = document.getElementById('codeButton'); // button to be pressed to start the text recognition 
var textRecognitionResults = document.getElementById('result'); // where the text recognition results are to be displayed

/* 
// code from the documentation 
const { createWorker } = require('tesseract.js');

const worker = await createWorker('eng');

(async () => {
  const { data: { text } } = await worker.recognize("logo.JPG");
  console.log(text);
  await worker.terminate();
})();
*/ 
