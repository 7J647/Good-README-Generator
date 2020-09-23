var inquirer = require("inquirer");
var fs = require("fs");

var generateMarkdown = require("./generateMarkdown");


inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },

    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },

    // {
    //   type: "checkbox",
    //   name: "contents",
    //   message: "Which sections will go in your table of contents?",
    //   choices: ["Introduction", "URL", "Screenshots", "License", "Contact"],
    // },

    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },

    {
      type: "input",
      name: "usage",
      message: "What are the usage requirements?",
    },

    {
      type: "list",
      name: "license",
      message: "Which license do you want to include?",
      choices: ["MIT", "other", "other"],
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
  .then(function (response) {
    console.log(response);
    const readMeText = generateMarkdown(response);
    console.log(readMeText);
    fs.writeFileSync("./output/README.MD", readMeText);
  });



//   fs.writeFile("log.txt", process.argv[2], function(err) {

//     if (err) {
//       return console.log(err);
//     }
  
//     console.log("Success!");
  
//   });
  //need right format for data
  //create the file