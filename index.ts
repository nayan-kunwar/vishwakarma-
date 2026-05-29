#!/usr/bin/env bun  // Shebang to allow execution as a CLI tool

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program
    .name("vishwakarma")
    .description("An AI-powered coding agent that helps developers analyze, modify, create, and manage codebases through natural language commands.")
    .version("1.0.0");

program
    .command("analyze")
    .description("Analyze a codebase and provide insights.")
    .action(() => {
        console.log("Analyzing codebase...");
        // Add analysis logic here
    });

program
    .command("wakeup")
    .description("Show the banner and pick cli or telegram mode")
    .action(async () => {
        await runWakeup()
    });

await program.parseAsync(process.argv);