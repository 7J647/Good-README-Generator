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
      choices: ["MIT", "Apache", "Boost"],
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
        
  ])
  .then(function (response) {
    console.log(response);
    const readMeText = generateMarkdown(response);
    console.log(readMeText);
    fs.writeFileSync("./output/README.MD", readMeText);
  });