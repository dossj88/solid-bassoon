// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:


${data.installation}


## Usage

${data.usage}

${renderSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:


${data.test}


## Questions

To reach me with additional questions, email me at ${
    data.email
  }. View more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
