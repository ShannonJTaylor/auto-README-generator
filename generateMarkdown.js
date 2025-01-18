// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch  (license) { 
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0] (https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
            return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
    case 'BSD 3':
            return '![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)';
    default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
        return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
        return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
  return `${renderLicenseBadge(license)}\n${renderLicenseLink(license)}\n`;
 }
 return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description
${data.description}

## Table of Contents 
- [Installation](#installation) 
- [Usage](#usage) 
- [License](#license) 
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at [${data.email}](mailto:${data.email}).
GitHub: [${data.github}](https://github.com/${data.github})

`;
}

// exporting the function
export default generateMarkdown;

// usage of the function
const markdownContent = generateMarkdown(data);
console.log(markdownContent); // This will log the generated Markdown to the console



module.exports = generateMarkdown;
