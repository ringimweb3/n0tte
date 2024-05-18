import { program } from "commander"
import { exec } from "child_process"
import { log } from "console";
import { welcome } from "./shared";

program
  .command("run-task <task>")
  .description("commands w/ hardhat tasks")
  .action((task) => {

    welcome()
    
    exec(`npx hardhat ${task}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      log(stdout);
    });
  });

program.parse(process.argv);
