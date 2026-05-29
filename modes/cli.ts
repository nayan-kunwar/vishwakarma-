import chalk from "chalk";
import { isCancel, select } from "@clack/prompts";

export async function runCLI() {
    while (true) {
        const mode = await select({
            message: "Select a mode",
            options: [
                {
                    label: "Agent Mode",
                    value: "agent",
                },
                {
                    label: "Plan Mode",
                    value: "plan",
                },
                {
                    label: "Ask Mode",
                    value: "ask",
                },
                {
                    label: "Exit",
                    value: "exit",
                },
            ],
        });

        if (isCancel(mode) || mode === "exit") {
            console.log(chalk.green("Goodbye!"));
            break;
        }

        switch (mode) {
            case "agent":
                console.log(chalk.blue("Entering Agent Mode..."));
                // Add Agent Mode logic here
                break;
            case "plan":
                console.log(chalk.blue("Entering Plan Mode..."));
                // Add Plan Mode logic here
                break;
            case "ask":
                console.log(chalk.blue("Entering Ask Mode..."));
                // Add Ask Mode logic here
                break;
            default:
                console.log(chalk.red("Invalid mode selected. Please try again."));
                break;

        }
    }

}
