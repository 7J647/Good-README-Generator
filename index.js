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


    {
        type: "checkbox",
        message: "contents",
        name: "Which sections will go in your table of contents?",
        choices: ["Introduction", "URL", "Screenshots", "License", "Contact"],
      },


      {
        type: "input",
        message: "installation",
        name: "What are the installation instructions?",
      },


      {
        type: "input",
        message: "usage",
        name: "What are the usage requirements?",
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




