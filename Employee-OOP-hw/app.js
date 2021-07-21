///require classes and inquirer and fs

//package native to node for resolving path
const path = require("path");

//determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
    //where to create our output
const outputPath = path.join(OUTPUT_DIR, "team.html");

//require render function from the page template
const render = require("./src/page-template.js");

//use inquirer to determine what kind of employee you will be adding or to exit and build html
//based on the reponse trigger another inquire block
// use answers to create a "new Employee" and add the employee to the 
//teamMembers array
//

// function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR)
//     }
//     //write html to output/team.html using function exported from page-template.js
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
// }

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const arrEmp = [];

function start() {
    inquirer.prompt([{
        message: "What's the manager's name",
        name: "mgrName"
    }]).then(response => {
        console.log(response)
        const newMgr = new Intern(response.mgrName)

        console.log(newMgr.getRole())
        arrEmp.push(newMgr)
        menu()
    })
}

function menu() {
    inquirer.prompt([{
        message: "Add more?",
        name: "choice",
        type: "list",
        choices: ["Engineer", "Intern", "Done"]
    }]).then(response => {
        if (response.choice == "Engineer") {
            // askEngineer()
            console.log("engineer")
        } else if (response.choice == "Intern") {
            console.log("Intern")
        } else {
            fs.writeFileSync("index.html", "a string of information")
        }
    })
}

start()