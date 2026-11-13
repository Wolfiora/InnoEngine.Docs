---
uid: api.inno.editor.interactions.26b5af875a996ae9
symbol: "engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorValidationResult"
source: xml
reviewed: 5d2c9205582998584d9dd7d8efe7821b69581ec805d5c44c60e14991074bba9e
title: "EditorValidationResult"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
aliases: []
---

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.
