// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create Array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your Github username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter Github Username');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (check all that apply)',
        choices: ['javaScript', 'HTML', 'CSS', 'ES6', 'JQUERY', 'BOOTSTRAP', "Node"]
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ['MIT', 'Boost1.0', 'BSD2', 'APACHE2.0', 'NONE']
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributted to the repository?',

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./dist/README.md", generateMarkdown({...inquirerAnswers}));
    })
}

// Function call to initialize app
init();
