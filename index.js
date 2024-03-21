import inquirer from "inquirer";
import chalk from "chalk";
const result = await inquirer.prompt([
    { message: "firstnumber", type: "number", name: "firstnumber", },
    { message: "secondnumber", type: "number", name: "secondnumber", },
    { message: "Select Operation", type: "list", name: "opertaors", choices: ["+", "-", "*/.", "x"] }
]);
if (result.opertaors === "+") {
    console.log(chalk.bgBlue(result.firstnumber + result.secondnumber));
}
else if (result.opertaors === "-") {
    console.log(chalk.bgBlue(result.firstnumber - result.secondnumber));
}
else if (result.opertaors === "x") {
    console.log(chalk.bgBlue(result.firstnumber * result.secondnumber));
}
else if (result.opertaors === "*/.") {
    console.log(chalk.bgBlue(result.firstnumber / result.secondnumber));
}
else {
    console.log("ERROR !!! Go back");
}
