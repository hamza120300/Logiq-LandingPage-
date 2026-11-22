---
name: speckit-tasks
description: Break down an approved feature specification (spec.md) and technical plan (plan.md) into an actionable, dependency-ordered checklist of tasks (tasks.md).
---

# /speckit-tasks

Convert `spec.md` and `plan.md` into a granular, dependency-ordered task breakdown in `tasks.md`.

## Workflow

1. **Verify Prerequisites & Setup**:
   - Run the task setup script:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\setup-tasks.ps1 -Json
     ```
   - This copies `.specify/templates/tasks-template.md` into the active feature directory as `tasks.md` (if not already present).

2. **Read Artifacts**:
   - Read `spec.md` (user stories, requirements, acceptance criteria).
   - Read `plan.md` (architecture, components, contracts, verification plan).

3. **Generate Tasks in `tasks.md`**:
   - Follow standard Spec Kit task conventions:
     - Format: `- [ ] Txxx [P?] [Tag] Description`
     - Sequential IDs: `T001`, `T002`, `T003`, etc.
     - `[P]` flag: Label tasks that operate on independent files and can safely run in parallel.
     - Group tasks into clear, chronological phases:
       - **Phase 1: Setup & Scaffolding** (project setup, dependencies, configs).
       - **Phase 2: Foundational Components** (blocking prerequisites, domain models, shared interfaces).
       - **Phase 3+: User Story Implementations** (grouped by user story, with tests and acceptance validation).
       - **Phase Final: Polish & Verification** (integration testing, performance checks, documentation, constitution compliance).

4. **Task Rules**:
   - Every task must be bite-sized and actionable (clear completion condition).
   - User stories must be delivered incrementally.
   - Test tasks must precede or accompany implementation tasks.

5. **Report to User**:
   - Summarize the task breakdown (number of tasks, phases).
   - Link to `tasks.md`.
   - Recommend next step: `/speckit-implement` to begin building the feature.
