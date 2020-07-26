const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter title',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Enter URL of the website',
      name: 'URL',
    },

    {
      type: 'input',
      message: 'Enter description',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Enter installation steps',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Enter Usage',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Enter tests to be done',
      name: 'Tests',
    },
    {
      type: 'checkbox',
      message: 'Enter license details',
      name: 'License',
      choices: ['util', 'https', 'inquirer', 'axios'],
    },

    {
      type: 'input',
      message: 'Enter github username',
      name: 'Username',
    },
    {
      type: 'input',
      message: 'Enter your email id',
      name: 'Email',
    },

  ])
  .then((response) => {
    // console.log(response);
    const { Title } = response;
    const { URL } = response;
    const { Description } = response;
    const { Installation } = response;
    const { Usage } = response;
    const { Tests } = response;
    const { License } = response;
    const badges = License.map((badge) => `![NPM](https://img.shields.io/npm/l/${badge})`).join(' ');
    const { Username } = response;
    const { Email } = response;
    const ContentTitles = ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];
    const toc = ContentTitles.map((title) => `* [${title}] (#${title})`).join('\n');

    const result = [
      `# Title\n\n${Title}\n\n`,
      `## Website URL\n\n${URL}\n\n`,
      `## Description\n\n${Description}\n\n`,
      `## Table of Contents\n\n${toc}\n\n`,
      `## Installation\n\n${Installation}\n\n`,
      `## Usage\n\n${Usage}\n\n`,
      `## License\n\n${badges}\n\n`,
      `## Contributing\n\nContributions, issues and feature requests are welcome.If interested, please contribute to the project at https://github.com/${Username}/\n\n`,
      `## Tests\n\n${Tests}\n\n`,
      `## Questions\n\nIf any questions, reach out to me at ${Email}\n`,
    ].join('');

    fs.writeFileSync('README.md', result, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  });
