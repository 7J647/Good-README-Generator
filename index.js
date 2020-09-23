var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "title",
      name: "What is the title of your project?"
    },

  ])
  .then(function(response) {
      console.log(response);
  })




