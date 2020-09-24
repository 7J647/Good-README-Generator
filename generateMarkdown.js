// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
## Table of Contents
#### &nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)
#### &nbsp;&nbsp;&nbsp;&nbsp;Installation
#### &nbsp;&nbsp;&nbsp;&nbsp;Usage
#### &nbsp;&nbsp;&nbsp;&nbsp;License
#### &nbsp;&nbsp;&nbsp;&nbsp;Contributing
#### &nbsp;&nbsp;&nbsp;&nbsp;Tests
#### &nbsp;&nbsp;&nbsp;&nbsp;Questions
    
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
Connect with me at Github: <a href="https://github.com/${data.github}">${data.github}</a> &nbsp;&nbsp;&nbsp;&nbsp;
Contact me via Email: ${data.email} 
 
  
  `;
  }
  
  module.exports = generateMarkdown;
  