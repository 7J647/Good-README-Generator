// function to generate markdown for README
function generateMarkdown(data) {

  let licenseText = "";
  if (data.license ==="MIT") {
    licenseText = "The MIT license text goes here";
  }

    return `# ${data.title} 
## Table of Contents
#### &nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)
#### &nbsp;&nbsp;&nbsp;&nbsp;[Installation](#installation)
#### &nbsp;&nbsp;&nbsp;&nbsp;[Usage](#usage)
#### &nbsp;&nbsp;&nbsp;&nbsp;[License](#license)
#### &nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#contributing)
#### &nbsp;&nbsp;&nbsp;&nbsp;[Tests](#tests)
#### &nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)
    
## Description: 
${data.description} 
## Installation: 
${data.installation} 
## Usage: 
${data.usage} 
## License: 
${data.license}:&nbsp;&nbsp;
${licenseText} 
## Contributing:
${data.contributing} 
## Tests: 
${data.tests} 
## Questions: 
Connect with me at Github: <a href="https://github.com/${data.github}">${data.github}</a> &nbsp;&nbsp;&nbsp;&nbsp;
Contact me via Email: [${data.email}](mailto:${data.email})
 
  
  `;
  }
  
  module.exports = generateMarkdown;
  