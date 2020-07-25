const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter title',
      name: '## Title',
    },
    {
      type: 'input',
      message: 'Enter description',
      name: '## Description',
    },
    {
      type: 'list',
      message: 'Enter table of contents',
      name: '## Table of Contents',
      choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions', 'Badge'],
    },
    {
      type: 'input',
      message: 'Enter installation steps',
      name: '## Installation',
    },
    {
      type: 'input',
      message: 'Enter Usage',
      name: '## Usage',
    },
    {
      type: 'input',
      message: 'Enter license details',
      name: '## License',
    },
    {
      type: 'input',
      message: 'Enter contributing factors',
      name: '## Contributing',
    },
    {
      type: 'input',
      message: 'Enter tests to be done',
      name: '## Tests',
    },
    {
      type: 'input',
      message: 'Enter the questions',
      name: '## Questions',
    },
    {
      type: 'input',
      message: 'Badge details',
      name: '## Badge',
    },

  ])
  .then((response) => {
    console.log(response);

    //  fs.writeFile('readme.md', JSON.stringify(response), (err) => {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
  });
