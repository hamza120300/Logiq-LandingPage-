# Requirements Quality Checklist: [FEATURE_NAME]

**Feature Spec**: `specs/[FEATURE_DIR]/spec.md`  
**Review Date**: [YYYY-MM-DD]  
**Status**: [ ] Pending | [ ] Passed | [ ] Needs Revision

---

## 1. Completeness & Clarity
- [ ] Every user story has unambiguous Given-When-Then acceptance criteria.
- [ ] All functional requirements (FR-xxx) are testable and measurable.
- [ ] Boundary conditions and edge cases (EC-xxx) are explicitly documented.
- [ ] Out-of-scope boundaries are clearly defined.

## 2. Technical Feasibility & Alignment
- [ ] Requirements align with the Project Constitution (`.specify/memory/constitution.md`).
- [ ] Dependencies and third-party interactions are identified.
- [ ] Non-functional constraints (performance, security, compatibility) are realistic.

## 3. Testability & Verification
- [ ] Each requirement has a defined verification method (unit test, E2E test, or inspection).
- [ ] Error conditions, negative paths, and fallbacks are defined.

## 4. Sign-Off & Approvals
- [ ] Specification reviewed and ready for Technical Planning (`/speckit-plan`).
