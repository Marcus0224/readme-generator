// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'NONE') {
    return ''    
  }
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'    
  }
  if (license == 'Boost1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'    
  }
  if (license == 'BSD2') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'    
  }
  if (license == 'APACHE2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'    
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Github URL

  [${data.github}](Httph://github.com${data.github})

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installations] (#dependencies)

  *[Usage] (#usage)

  ${renderLicenseLink(data.license)}

  *[Contributors](#contributors)

  *[Test](#test)

  ## Usage

  ${renderLicenseSection(data.license)}

  ## Contributors

  ${data.contributors}

  Contact me at $(data.email)


`;
}

module.exports = generateMarkdown;
