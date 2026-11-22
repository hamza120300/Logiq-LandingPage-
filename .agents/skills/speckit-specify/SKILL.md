---
name: speckit-specify
description: Create and initialize a new feature specification (spec.md) from natural language descriptions for Spec-Driven Development. Defines WHAT and WHY, user stories, acceptance criteria, and functional requirements before writing any code.
---

# /speckit-specify

Draft and formalize a new feature specification before designing technical architecture or writing code.

## Workflow

1. **Initialize Feature Directory**:
   - Run the PowerShell feature creation script:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\create-new-feature.ps1 -ShortName "<short-name>" -Description "<description>" -Json
     ```
   - This creates `specs/<NNN>-<short-name>/spec.md` from `.specify/templates/spec-template.md` and sets it as the active feature in `.specify/feature.json`.

2. **Draft the Specification**:
   - Open and edit `specs/<NNN>-<short-name>/spec.md`.
   - Fill in:
     - **Overview & Context**: Problem being solved, target audience, out-of-scope boundaries.
     - **User Scenarios & Stories**: High-priority user stories with explicit **Given-When-Then** acceptance criteria.
     - **Functional Requirements**: Unambiguous, testable statements (`FR-001`, `FR-002`, etc.).
     - **Non-Functional Requirements**: Performance, security, and compatibility requirements.
     - **Edge Cases**: Error scenarios and fallback behaviors.
     - **Success Criteria**: Clear definition of done.

3. **Strict Scope Guard**:
   - Focus exclusively on **WHAT** and **WHY**.
   - Do NOT specify tech stacks, database schemas, internal code classes, or implementation details (those belong in `/speckit-plan`).

4. **Verify Quality**:
   - If there are unresolved questions, mark them with `[NEEDS CLARIFICATION]` or suggest running `/speckit-clarify`.

5. **Report to User**:
   - Present a concise summary of the specification.
   - Point the user to the generated `spec.md` file link.
   - Suggest the next step: `/speckit-clarify` (if ambiguities remain) or `/speckit-plan`.
