---
name: speckit-implement
description: Autonomously execute the implementation tasks defined in tasks.md, checking off completed items, running verification tests, and adhering strictly to the spec and constitution.
---

# /speckit-implement

Execute the development tasks defined in `tasks.md` sequentially or in parallel batches.

## Workflow

1. **Verify Prerequisites**:
   - Run:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\check-prerequisites.ps1 -RequireTasks -Json
     ```
   - Ensure `tasks.md`, `plan.md`, and `spec.md` exist and are consistent.

2. **Read Current State**:
   - Inspect `tasks.md` to identify unchecked tasks (`- [ ]`).
   - Group consecutive tasks flagged with `[P]` into parallel execution batches if applicable.

3. **Execute Tasks Step-by-Step**:
   - For each task:
     - Check prerequisite files and dependencies.
     - Implement the code / tests / configurations strictly as designed in `plan.md`.
     - Run verification commands (unit tests, build checks, linter).
     - Upon successful verification, update `tasks.md` to mark the task completed (`- [X]`).
     - If a task fails verification, diagnose and fix the error before proceeding to dependent tasks.

4. **Verify Acceptance Criteria**:
   - After completing all user story tasks, run end-to-end verification against the Acceptance Criteria defined in `spec.md`.
   - Ensure the code complies with `.specify/memory/constitution.md`.

5. **Report to User**:
   - Provide a concise summary of completed tasks.
   - Present verification test results.
   - Point the user to the updated `tasks.md` and modified source files.
