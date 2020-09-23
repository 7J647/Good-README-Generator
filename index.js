var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "title",
      name: "What is the title of your project?"
    },

    {
        type: "input",
        message: "description",
        name: "What is the description of your project?",
      },


// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();













  ])
  .then(function(response) {
      console.log(response);
  })




