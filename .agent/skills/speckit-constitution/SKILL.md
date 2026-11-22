---
name: speckit-constitution
description: Create or update the project constitution and governance rules in .specify/memory/constitution.md. Use at the start of a project or when project architectural guidelines, testing policies, or quality standards change.
---

# /speckit-constitution

Manage the foundational principles, architectural boundaries, coding standards, and quality guardrails that govern this project.

## Workflow

1. **Locate or Initialize the Constitution**:
   - The constitution is stored at `.specify/memory/constitution.md`.
   - If it does not exist, initialize it from `.specify/templates/constitution-template.md` (or standard constitution structure).

2. **Understand the User's Inputs**:
   - Extract governing rules, tech stack mandates, testing standards, security policies, and architectural requirements requested by the user.

3. **Scope Guard**:
   - Only edit governance, architectural, and quality rules in `.specify/memory/constitution.md`.
   - Do NOT write application code or feature specs during this step.

4. **Update the Constitution**:
   - Structure the constitution into clear, numbered principles:
     - **Principle 1**: Spec-First Development (SDD) & Lifecycle gates.
     - **Principle 2**: Quality & Verification criteria (e.g. testing requirements).
     - **Principle 3**: Architectural integrity, modularity, and repository conventions.
     - **Principle 4**: Security, boundary validation, and secret protection.
   - Include decision authority rules (how amendments are made).

5. **Report to User**:
   - Summarize the updated principles and confirm that all future specs, plans, and implementations will be checked against this constitution.
