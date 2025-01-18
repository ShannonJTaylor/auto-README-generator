// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js'; // Importing the default export


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a descritpion of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been created successfully!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
