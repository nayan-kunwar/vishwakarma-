import { select, isCancel } from "@clack/prompts";
import chalk from "chalk"
import figlet from "figlet";
import { runCLI } from "../modes/cli";


const BANNER_FONT = "ANSI Shadow";


function displayBanner() {
    let ascii: string;
    try {
        ascii = figlet.textSync("VISHWAKARMA", {
            font: BANNER_FONT,
        });
    } catch {
        ascii = figlet.textSync("VISHWAKARMA", {
            font: "Standard",
        });
    }

    console.log(chalk.yellowBright(ascii));

    console.log(
        chalk.hex("#f4b942")(
            "⚒ Divine Architect of Code & Systems ⚒"
        )
    );

    console.log(
        chalk.gray(
            "Build • Analyze • Refactor • Automate"
        )
    );

    console.log(chalk.dim("v1.0.0"));
    console.log();

}

export async function runWakeup() {
    displayBanner();

    const mode = await select({
        message: "Select a mode",
        options: [
            {
                label: "CLI",
                value: "cli",
            },
            {
                label: "Telegram",
                value: "telegram",
            },
            {
                label: "Exit",
                value: "exit",
            },
        ],
    });

    if (isCancel(mode) || mode === "exit") {
        console.log(chalk.red("Exiting..."));
        process.exit(0);
    }
    if (mode === "cli") {
        console.log(chalk.green("Starting in CLI mode..."));
        // Add CLI mode logic here
        await runCLI();
    } else if (mode === "telegram") {
        console.log(chalk.green("Starting in Telegram mode..."));
        // Add Telegram mode logic here
    }
}