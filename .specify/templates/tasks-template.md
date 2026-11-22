# Tasks: [FEATURE_NAME]

**Inputs**: `specs/[FEATURE_DIR]/spec.md`, `specs/[FEATURE_DIR]/plan.md`  
**Prerequisites**: Approved `spec.md` and `plan.md`

## Format Conventions
- `- [ ] Txxx`: Sequential task identifier (`T001`, `T002`, ...)
- `[P]`: Parallelizable task (independent files, no blocking dependencies)
- `[Tag]`: Area of work (e.g., `[Setup]`, `[US1]`, `[US2]`, `[Polish]`)

---

## Phase 1: Setup & Scaffolding
- [ ] `T001` [Setup] Set up initial project structure, folders, and dependencies.
- [ ] `T002` [Setup] Configure test harness or validation scripts.

## Phase 2: Foundational Components
- [ ] `T003` [P] [Foundation] Implement core domain models, shared types, or data schema.
- [ ] `T004` [Foundation] Set up core service interfaces and data access layer.

## Phase 3: User Story 1 - [US1 Title]
- [ ] `T005` [US1] Implement core logic / handler for User Story 1.
- [ ] `T006` [P] [US1] Build UI components / CLI command / API endpoint for User Story 1.
- [ ] `T007` [US1] Add unit / integration tests validating US1 acceptance criteria.

## Phase 4: User Story 2 - [US2 Title]
- [ ] `T008` [US2] Implement core logic / handler for User Story 2.
- [ ] `T009` [P] [US2] Build UI components / CLI command / API endpoint for User Story 2.
- [ ] `T010` [US2] Add unit / integration tests validating US2 acceptance criteria.

## Phase Final: Polish & Verification
- [ ] `T011` [Polish] End-to-end regression testing against all functional requirements.
- [ ] `T012` [Polish] Code cleanup, documentation, and quickstart verification.
