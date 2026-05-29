# PROJECT_CONTEXT.md

## Project Name

Vishwakarma

## Vision

Vishwakarma is an AI-powered coding agent that helps developers analyze, modify, create, and manage codebases through natural language commands.

The system acts as an intelligent software engineer capable of:

- Understanding project structure
- Reading and modifying code
- Generating implementation plans
- Executing approved shell commands
- Managing files safely
- Assisting with debugging and refactoring

The project follows an approval-first architecture where all destructive or mutating actions require user confirmation.

---

# Core Principles

## 1. Safety First

The agent must never:

- Modify files outside the workspace
- Execute dangerous commands without approval
- Leak secrets
- Access unauthorized resources

All file and shell operations must pass through safety checks.

---

## 2. Human-in-the-Loop

AI suggests.

Human approves.

Workflow:

User Request
→ AI Analysis
→ Proposed Changes
→ Diff Generation
→ User Approval
→ Execution

The AI should never directly mutate the system without approval.

---

## 3. Tool-Based Architecture

The LLM interacts with the environment through tools.

Examples:

- read_file
- create_file
- modify_file
- delete_file
- list_directory
- search_code
- execute_shell

The model must never assume tool results.

Always call tools when information is required.

---

## 4. Deterministic Operations

All tool operations should be:

- Reproducible
- Auditable
- Logged
- Traceable

Every action should produce structured output.

---

# Architecture

CLI
│
├── Agent Engine
│ ├── LLM Provider
│ ├── Tool Registry
│ ├── Planning Layer
│ └── Execution Layer
│
├── File System Layer
│ ├── Safe Path Resolver
│ ├── Workspace Manager
│ └── Diff Generator
│
├── Shell Layer
│ ├── Approval Manager
│ ├── Command Executor
│ └── Process Monitor
│
└── Persistence Layer
├── Session Store
├── Agent History
└── Audit Logs

---

# Coding Standards

## TypeScript

- Strict mode enabled
- No any unless unavoidable
- Prefer interfaces for public contracts
- Use zod for validation
- Prefer async/await over promise chains

## Error Handling

Never swallow errors.

Bad:

try {
...
} catch {}

Good:

try {
...
} catch (error) {
logger.error(error)
throw error
}

---

# Logging Standards

All important events must be logged.

Examples:

- Agent started
- Tool invoked
- File modified
- Command executed
- Approval granted
- Approval rejected

Use structured logging.

Example:

{
"event": "tool_invoked",
"tool": "read_file",
"path": "src/index.ts"
}

---

# Security Rules

## Workspace Isolation

All file access must remain inside the configured workspace.

Block:

../../../etc/passwd

Allow:

src/services/user.service.ts

---

## Shell Restrictions

Never execute commands without approval.

Potential future enhancements:

- Command allowlists
- Docker sandboxing
- Resource limits

---

# Future Roadmap

## Phase 1

- Core agent loop
- File operations
- Shell execution
- Approval workflow

## Phase 2

- Planning mode
- Code search
- Diff visualization

## Phase 3

- Multi-agent architecture

Planner Agent
→ Executor Agent
→ Reviewer Agent

## Phase 4

- IDE integration
- Git integration
- CI/CD integration

---

# Success Criteria

A successful agent should:

- Understand a repository
- Generate implementation plans
- Modify code safely
- Explain changes clearly
- Require minimal user intervention
- Never compromise security

---

# Non-Goals

The project is NOT:

- A fully autonomous developer
- A replacement for human review
- A system with unrestricted shell access
- A production deployment orchestrator

Human oversight is mandatory.
