// function to generate markdown for README
function generateMarkdown(data) {

  let licenseText = "";
  if (data.license ==="MIT") {
    licenseText = `
MIT License

Copyright (c) [2020] [Jeff Flynn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  }

  if (data.license ==="Apache") {
    licenseText = "The Apache license text goes here";
  }

  if (data.license ==="License3") {
    licenseText = "The License3 license text goes here";
  }

  if (data.license ==="License4") {
    licenseText = "The License4 license text goes here";
  }

    return `# ${data.title} 
![License](https://img.shields.io/badge/license-${data.license}-green)
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
  