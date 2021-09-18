// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `<br> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`
  }
  else if (license === "GNU") {
    return `<br> [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n
    `}
  else if (license === "Apache-2.0") {
    return `<br> [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`
  }
  else if (license === "ISC") {
    return `<br> [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n
  `}
  else {
    return `<br> [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n
  `}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}` +
    renderLicenseBadge(data.licenses) +

    `## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Application](#application)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [License](#license)
  - [Questions](#questions)

  ## Description 
   ${data.description} 
  
  ## Installation 
   ${data.install} 

  ## Application
   ${data.application} 

  ## Testing
   ${data.test} 
  
  ## Contribution
   ${data.contributers} 

  ## License
   ${data.licenses} 
   Background: 
  
  ## Questions
   How to Reach me:
  <br>
   Github: [https://github.com/${data.github}](https://github.com/${data.github}) 
  <br> 
   Email: [${data.email}](${data.email}) 
 
` ;
}

module.exports = generateMarkdown;
