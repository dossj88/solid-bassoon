// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
     type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
     type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
    default: 'npm i',
  },
  {
  type: 'input',
    name: 'usage',
    message: 'Please provide an example of the application usage.',
  },
  {
 type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
  {
     type: 'input',
    name: 'test',
    message: 'What command is used to test your project?',
    default: 'npm test',
  },
  {
     type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
     type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
