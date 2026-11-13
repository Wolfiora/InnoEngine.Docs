---
uid: api.inno.editor.interactions.editor-script.f04b2777fe3acf66
symbol: "scripting:Inno.Editor.Interactions:T:InnoEditor.Interactions.EditorValidationResult"
source: xml
reviewed: fbdada120234234a8b56ecd0c30eb139a4c4cee69c0c2368714f1c4c02f23302
title: "EditorValidationResult"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
- manual.scripting.use-script-api
aliases: []
---

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.
