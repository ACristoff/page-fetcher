const request = require('request');
const fs = require('fs');
let content = "";

request('http://www.example.edu/4ghgjfdh', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(body.length)
  content = body;

  if (response.statusCode !== 200) {
    console.log(`Invalid HTTP address, please correct the URL. Error code: ${response.statusCode}`)
    return
  }

  fs.writeFile('./test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    if ('/test.txt') {
      console.log('test.txt already exists!')
    }

    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
  })
});

//Downloaded and saved 3261 bytes to ./index.html

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })