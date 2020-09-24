var inquirer = require("inquirer");
var fs = require("fs");

//importing from generateMarkdown.js
var generateMarkdown = require("./generateMarkdown");

//generating the command line questions
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      //this below is what appears in the prompt
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
      //these are the license choices
      choices: ["MIT", "other", "other"],
    },

    {
        type: "input",
        name: "contributing",
        message: "Who contributed to the development of this project?",
      },
      
      {
        type: "input",
        name: "tests",
        message: "What are the testing instructions for this project?",
      },

      {
        type: "input",
        name: "github",
        message: "What is your Github username/handle?",
    
      },

      {
        type: "input",
        name: "email",
        message: "What is your email address?",
    
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
    //created variable to hold the response data
    const readMeText = generateMarkdown(response);
    console.log(readMeText);
    //wrote the response data to the README file, used synch to avoid asynchronicity issues
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