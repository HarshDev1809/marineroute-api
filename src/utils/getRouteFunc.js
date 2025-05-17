import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// For ESM modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 👇 Adjust relative to *this JS file*, or better: the project root
const pythonFilePath = path.resolve(__dirname, "../../python_script/main.py");

const pythonCmd = process.platform === "win32" ? "python" : "python3";

export const getRouteFunc = (input) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn(pythonCmd, [pythonFilePath]);

    pythonProcess.stdin.write(JSON.stringify(input));
    pythonProcess.stdin.end();

    let output = "";

    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (err) => {
      console.error("[PYTHON STDERR]:", err.toString());
    });

    pythonProcess.on("close", () => {
      try {
        const message = JSON.parse(output);
        resolve(message);
      } catch (err) {
        console.error("[ERROR] Failed to parse output:", output);
        reject(err);
      }
    });
  });
};
