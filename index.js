// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {   //The information about the first question, also with validation that asks for a value to be inputted if the user does not enter anything
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
         
    },
    {
        type: 'input',
        message: 'Enter a Discription of your project...',
        name: 'description',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'What installation did you use for your project?',
        name: 'installtion',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'How is your app to be used?',
        name: 'usage',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'What liccense was used for your project?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'GPL', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        messgae: 'What is your GitHub username?',
        name: 'username',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'Who are the contributors on your project?',
        name: 'contribution',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        messsage: 'What tests were used for your project?',
        name: 'tests',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'Project questions...',
        name: 'questions',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if(value){return true} else {return 'In order to continue, please enter a value...'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('ReadMe.md', data, err => {
        if (err) throw err;
        console.log("ReadMe created")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
     .then(generateMarkdown)
     .then(writeToFile)
}

// Function call to initialize app
init();
