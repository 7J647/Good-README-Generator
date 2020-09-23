// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
## Table of Contents
    
## Description: 
${data.description} 
## Installation: 
${data.installation} 
## Usage: 
${data.usage} 
## Data: 
${data.license} 
   
  
  `;
  }
  
  module.exports = generateMarkdown;
  