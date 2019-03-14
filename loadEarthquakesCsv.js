//Loads text file data and prints to console

const file = require('./jsToolkit/file.js');

file.read("./data/earthquakes.csv")
  .then(textFileData => {
    console.log(textFileData);
  })
  .catch(err => {
    console.error("An error occurred.");
  });
