// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
## Table of Contents
####    Description
####    Installation
####    Usage
####    License
####    Contributing
####    Tests
####    Questions
    
## Description: 
${data.description} 
## Installation: 
${data.installation} 
## Usage: 
${data.usage} 
## License: 
${data.license} 
## Contributing:
${data.contributing} 
## Tests: 
${data.tests} 
## Questions: 
Follow me at Github: ${data.github} &nbsp;&nbsp;&nbsp;&nbsp;
Contact me via Email: ${data.email} 
 
  
  `;
  }
  
  module.exports = generateMarkdown;
  