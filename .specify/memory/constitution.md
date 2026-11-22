# Project Constitution & Governance Principles

This constitution serves as the permanent governing framework for the project. Every specification (`spec.md`), technical plan (`plan.md`), task list (`tasks.md`), and code implementation MUST strictly adhere to these principles.

---

## 1. Core Principles

### Principle 1: Spec-First Development (SDD)
- No code is written before a specification (`spec.md`) and technical plan (`plan.md`) are created and reviewed.
- The specification defines **WHAT** needs to be built and **WHY**, without getting bogged down in implementation code.
- The plan defines **HOW** the system will be designed, including architecture, contracts, and data models.
- The task list defines **WHEN** and **IN WHAT SEQUENCE** tasks will be executed.

### Principle 2: Quality & Verification Gates
- Every feature must have verifiable acceptance criteria written in Given-When-Then format.
- Automated tests (unit, integration, or E2E) and verification steps must validate both expected behavior and edge cases.
- Tasks are not marked as completed (`[X]`) until verification passes.

### Principle 3: Architectural Integrity & Modularity
- Preserve clean separation of concerns across domain logic, user interfaces, and external data services/APIs.
- Maintain consistency with existing repository conventions, directory layouts, and code style.
- Avoid introducing unnecessary third-party dependencies unless vetted and justified in the technical plan.

### Principle 4: Security & Operational Safety
- Validate all user inputs and external data at boundary interfaces.
- Never hardcode or commit secrets, credentials, or sensitive tokens.
- Graceful degradation: all failure modes and network/IO exceptions must be handled with meaningful error diagnostics.

---

## 2. Decision Authority & Modification Rules
- Amendments to this constitution must be made deliberately using `/speckit-constitution`.
- In case of any conflict between a feature plan and this constitution, this constitution takes precedence unless an explicit constitutional amendment is approved.
