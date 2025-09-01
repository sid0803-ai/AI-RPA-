import { exec } from "child_process";

export function runCodegen(url) {
  exec(`npx playwright codegen ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running codegen: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Codegen stderr: ${stderr}`);
      return;
    }
    console.log(`Codegen output: ${stdout}`);
  });
}
