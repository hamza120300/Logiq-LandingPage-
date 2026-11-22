# Project Rules: Spec-Driven Development (Spec Kit)

This repository is configured to use **GitHub Spec Kit (`github/spec-kit`)** for **Spec-Driven Development (SDD)**.

## Core SDD Principles
1. **Spec-First**: Never jump straight into code implementation without a documented and approved specification (`spec.md`) and technical plan (`plan.md`).
2. **Intent Before Execution**:
   - `spec.md` defines **WHAT** and **WHY** (user stories, acceptance criteria, functional requirements).
   - `plan.md` defines **HOW** (architecture, contracts, data models, tech stack).
   - `tasks.md` defines **WHEN** and **IN WHAT SEQUENCE** (phased, dependency-ordered tasks).
3. **Constitution as Law**: The project constitution at `.specify/memory/constitution.md` governs architectural boundaries, quality standards, and security constraints. Every plan and task must conform to it.

## Available Spec Kit Commands & Skills
- `/speckit-constitution`: Review or update project governance principles and ground rules.
- `/speckit-specify`: Create or initialize a new feature specification (`spec.md`) in `specs/<feature>/`.
- `/speckit-clarify`: Detect and resolve ambiguities or missing edge cases in `spec.md`.
- `/speckit-plan`: Create the technical blueprint (`plan.md`) with architecture and data contracts.
- `/speckit-checklist`: Generate and evaluate a requirements quality checklist.
- `/speckit-tasks`: Break down the spec and plan into actionable items in `tasks.md`.
- `/speckit-implement`: Autonomously execute tasks from `tasks.md`, running verification tests and updating checkboxes.
- `/speckit-analyze`: Run a read-only audit across all artifacts to verify consistency and alignment.

## PowerShell Helper Scripts
When managing specifications and features, use the PowerShell automation helpers:
- `.specify\scripts\powershell\create-new-feature.ps1 -ShortName <name> -Description <desc> -Json`
- `.specify\scripts\powershell\setup-plan.ps1 -Json`
- `.specify\scripts\powershell\setup-tasks.ps1 -Json`
- `.specify\scripts\powershell\check-prerequisites.ps1 -Json`
