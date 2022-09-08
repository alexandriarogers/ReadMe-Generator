// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseName = license.license; 
  let chosenLicense = ''
  if(licenseName === 'MIT') {
    chosenLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseName === 'GPLv3') {
    chosenLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseName === 'GPL') {
    chosenLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return chosenLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ![badge](https://shields.io/category/license-${data.license})

 ##Description
 ${data.description}

 ##Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contribution](#contribution)
 - [Tests](#tests)
 - [Questions](#questions)

 ##Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## License
 Licensed by ${data.license}

 ## Contribution
 ${data.contribution}

 ## Tests
 ${data.tests}

 ## Questions
 ${data.questions}
 * Email: ${data.email}
 * GitHub: [${data.username}](https://github.com/${data.username})
 

`;
}

module.exports = generateMarkdown;
