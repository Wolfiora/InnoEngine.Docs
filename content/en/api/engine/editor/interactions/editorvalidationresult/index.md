---
uid: api.inno.editor.interactions.26b5af875a996ae9
symbol: "engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorValidationResult"
source: xml
reviewed: 8c3f0ffe6bf7476bd1e4a6862789725663498b0336b576b0780fd77be348a111
title: "EditorValidationResult"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
aliases: []
---

Describes whether a requested editor operation is valid and carries a diagnostic when it is rejected.

## Parameters

**Parameter `isValid`:** Whether the requested operation may proceed.

**Parameter `message`:** The user-facing validation diagnostic, or an empty string for a valid result.
