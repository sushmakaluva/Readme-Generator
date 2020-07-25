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
      message: 'Enter contributing factors',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'Enter tests to be done',
      name: 'Tests',
    },
    {
      type: 'list',
      message: 'Enter license details',
      name: 'License',
      choices: ['npm', 'PostgreSQL', 'Microsoft', 'Mozilla'],
    },

    {
      type: 'list',
      message: 'Enter table of contents',
      name: 'Contents',
      choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions', 'Badge'],

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
    console.log(response);
    const { Title } = response;
    const { URL } = response;
    const { Description } = response;
    const { Installation } = response;
    const { Usage } = response;
    const { Contributing } = response;
    const { Tests } = response;
    const { License } = response;

    const { Username } = response;
    const { Email } = response;
    const { Contents } = response;


    fs.writeFile('readme.md', `# Title\n\n${Title}\n\n## Website URL\n\n${URL}\n\n### Description\n\n${Description}\n\n### Table of Contents\n\n${Contents}\n\n### Installation\n\n${Installation}\n\n### Usage\n\n${Usage}\n\n### License\n\n![NPM](https://img.shields.io/npm/l/${License})\n\n### Contributing\n\n${Contributing}\n\n### Tests\n\n${Tests}\n\n### Questions\n\nIf any questions,reach out to me at ${Email} /n Github URL: https://github.com/${Username}/\n`, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  });
