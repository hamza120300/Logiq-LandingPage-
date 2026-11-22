---
name: speckit-analyze
description: Run a read-only audit across spec.md, plan.md, tasks.md, and constitution.md to detect inconsistencies, coverage gaps, or constitutional violations.
---

# /speckit-analyze

Perform a read-only cross-artifact audit to ensure complete alignment across all Spec Kit documents.

## Workflow

1. **Locate Artifacts**:
   - Run:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\check-prerequisites.ps1 -Json
     ```
   - Load `.specify/memory/constitution.md`, active `spec.md`, `plan.md`, and `tasks.md`.

2. **Cross-Artifact Verification Matrix**:
   - **Spec vs. Constitution**: Do any requirements violate governance principles or architectural boundaries?
   - **Spec vs. Plan**: Does `plan.md` address every functional requirement (`FR-xxx`) and user story in `spec.md`? Are any technical choices unmentioned in `spec.md`?
   - **Plan vs. Tasks**: Does `tasks.md` cover all components, data models, contracts, and verification steps from `plan.md`? Are task dependencies correctly ordered?
   - **Spec vs. Tasks**: Are all acceptance criteria mapped to at least one task?

3. **Generate Analysis Report**:
   - Produce a concise findings table:
     - **Status**: Pass / Warning / Failure
     - **Category**: Constitution / Scope / Technical / Task Coverage
     - **Issue Description**: Specific inconsistency or missing element
     - **Recommended Remediation**: Actionable fix
   - Mark overall verdict: `Ready for Implementation` or `Needs Revision`.

4. **Report to User**:
   - Present the analysis table clearly to the user.
