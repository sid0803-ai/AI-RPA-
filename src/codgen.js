import { spawn } from "child_process";

export function runCodegen(url = "https://dev.indiafilings.com") {
  const child = spawn("npx", ["playwright", "codegen", url], { stdio: "inherit" });

  child.on("exit", (code) => {
    console.log(`Codegen exited with code ${code}`);
  });
}
