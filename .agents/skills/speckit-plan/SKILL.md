---
name: speckit-plan
description: Create or update an implementation plan (plan.md) with technical architecture, stack decisions, contracts, and constitution checks for the active feature.
---

# /speckit-plan

Translate an approved feature specification (`spec.md`) into a technical implementation blueprint (`plan.md`).

## Workflow

1. **Verify Prerequisites & Setup**:
   - Run the plan setup script:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\setup-plan.ps1 -Json
     ```
   - This copies `.specify/templates/plan-template.md` into the active feature directory as `plan.md` (if not already present).

2. **Read Project Context & Governance**:
   - Read `.specify/memory/constitution.md` to review non-negotiable architectural and testing standards.
   - Read the active `spec.md` to understand all functional and non-functional requirements.

3. **Develop the Technical Plan**:
   - Fill in `plan.md`:
     - **Summary**: Concise technical strategy.
     - **Technical Context**: Language versions, libraries, frameworks, runtime constraints.
     - **Constitution Check**: Explicit checklist verifying alignment with `.specify/memory/constitution.md`.
     - **Architecture & Component Design**: Component responsibilities, data flow, error handling strategy.
     - **Data Models**: Entities, fields, types, and persistence models.
     - **Interface Contracts**: Public function signatures, API contracts, schemas, or CLI arguments.
     - **Risk Mitigation**: Technical risks, complexities, and mitigations.
     - **Verification Plan**: Step-by-step test strategy and verification commands.

4. **Verify Plan Feasibility**:
   - Ensure the chosen architecture directly satisfies every requirement in `spec.md`.
   - Ensure no extraneous complexity or unwanted dependencies are introduced.

5. **Report to User**:
   - Link the user to `plan.md`.
   - Suggest next step: `/speckit-checklist` (to audit requirements quality) or `/speckit-tasks` (to break down tasks).
