---
uid: api.inno.editor.rendering.editor-script.2d0fd9bc539e6b00
symbol: "scripting:Inno.Editor.Rendering:T:InnoEditor.Rendering.EditorShaderDraftCompilationSnapshot"
source: xml
reviewed: b9bde7f893458d1959d81260c47f3039903a7e9017485d0d44de9381f64f0eea
title: "EditorShaderDraftCompilationSnapshot"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-rendering
aliases: []
---

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
