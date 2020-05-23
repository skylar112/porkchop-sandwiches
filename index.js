const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

function writetoFile(filename, data){
  fs.writeFileSync(path.join(process.cwd(),filename),data);
}
function getInfo(){
  

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?"
  },
  {
    type: "list",
    name: "table",
    choices: ["Project Title", "Description", "Installation", "Usage", "License", "Contributing", "Tests"],
    message: "Table of contents"
  },
  {
    type: "input",
    name: "installation",
    message: "What is the installation?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is usage?"
  },
   {
    type: "list",
    name: "license",
    choices: ["mit", "apache"],
    message: "What is your license?"
  },
  {
    type: "input",
    name: "contribution",
    message: "Who are the contributors?"
  },
   {
    type: "input",
    name: "test",
    message: "What is the test?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your github name?"
  },

  {
    type: "checkbox",
    message: "What languages do you know?",
    name: "stack",
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "MySQL"
    ]
  },
 
]).then(function (inquireResponse){
  writetoFile("README.md",generateMarkdown({...inquireResponse}))
})

};


getInfo();