---
name: speckit-checklist
description: Generate a custom requirements quality checklist (checklist.md) to audit spec completeness, consistency, and feasibility before task breakdown.
---

# /speckit-checklist

Generate and evaluate a requirements quality checklist to ensure the specification is ready for execution.

## Workflow

1. **Verify Active Feature**:
   - Check active feature path:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\check-prerequisites.ps1 -RequireSpec -Json
     ```

2. **Generate Checklist**:
   - In the active feature directory, create or update `checklist.md` from `.specify/templates/checklist-template.md`.
   - Add feature-specific verification checks:
     - Check coverage of all User Stories and Acceptance Criteria.
     - Check consistency between `spec.md` and `plan.md`.
     - Check compliance with `.specify/memory/constitution.md`.
     - Check edge cases and boundary conditions.

3. **Audit and Evaluate**:
   - Walk through the checklist items against `spec.md` and `plan.md`.
   - Mark passed items with `[X]`.
   - Flag any failed or incomplete checks and report them clearly.

4. **Report to User**:
   - Present checklist evaluation summary and link to `checklist.md`.
   - If all checks pass, recommend `/speckit-tasks`.
