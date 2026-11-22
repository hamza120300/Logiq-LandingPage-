---
name: speckit-clarify
description: Detect and resolve ambiguities, missing decisions, or edge cases in the active feature specification (spec.md) before technical planning.
---

# /speckit-clarify

Identify underspecified requirements, ambiguities, or missing edge cases in `spec.md` and resolve them with the user.

## Workflow

1. **Verify Prerequisites**:
   - Check active feature and verify `spec.md` exists:
     ```powershell
     powershell.exe -ExecutionPolicy Bypass -File .specify\scripts\powershell\check-prerequisites.ps1 -RequireSpec -Json
     ```

2. **Audit Active `spec.md`**:
   - Read the active `spec.md` file.
   - Scan for:
     - Explicit `[NEEDS CLARIFICATION]` tags.
     - Ambiguous requirements (e.g. "fast", "intuitive", "appropriate", "etc.").
     - Missing edge cases (network failure, empty states, boundary values, permission errors).
     - Missing acceptance criteria or non-testable statements.

3. **Formulate Clarification Questions**:
   - Present up to 3–5 targeted questions to the user.
   - For each question, provide 2–3 recommended options and highlight the default.
   - Use `ask_question` tool if multiple-choice format fits best.

4. **Update `spec.md`**:
   - Once the user responds, update `spec.md` immediately with the resolved decisions.
   - Remove any resolved `[NEEDS CLARIFICATION]` tags.

5. **Report to User**:
   - Confirm that the specification has been clarified and is ready for `/speckit-plan`.
