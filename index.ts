#!/usr/bin/env bun

import { Command } from "commander";

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

await program.parseAsync(process.argv);