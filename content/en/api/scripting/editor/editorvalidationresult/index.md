---
uid: api.inno.editor.interactions.editor-script.f04b2777fe3acf66
symbol: "scripting:Inno.Editor.Interactions:T:InnoEditor.Interactions.EditorValidationResult"
source: xml
reviewed: d8ab69cc6d70bd12e532dbdb9ff91202c8116c2edf7653050b488d884ac3a8a5
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
