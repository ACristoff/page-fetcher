const request = require('request');
const fs = require('fs');
let content = "";

request('http://www.example.edu', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(body.length)
  content = body;
  let path = './test.txt';

  if (response.statusCode !== 200) {
    console.log(`Invalid HTTP address, please correct the URL. Error code: ${response.statusCode}`)
    return
  }

  //asynchronous, works but need to implement the rewrite
  // fs.access(path, fs.F_OK, (err) => {
  //   if (!err) {
  //     console.log('This file already exists! Rename file?')
  //     return
  //   }
  // });
  
  //finish this later
  try {
    if (fs.existsSync(path)) {
      //file exists
      console.log('file exists')
    }
  } catch(err) {
    console.error(err)
  }

  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err)
      return
    }

    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
  })
});

//Downloaded and saved 3261 bytes to ./index.html
