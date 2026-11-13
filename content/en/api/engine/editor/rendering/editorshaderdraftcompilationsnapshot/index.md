---
uid: api.inno.editor.rendering.fea9e636707bb349
symbol: "engine:Inno.Editor.Rendering:T:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot"
source: xml
reviewed: 784f186a3c5fdf7c5a77a99a56f40f8027ea41eadb14fbc30031518ecfaed04b
title: "EditorShaderDraftCompilationSnapshot"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
contracts:
- project.inno-editor-rendering
aliases: []
---

Contains a preview-only immutable candidate, never registered as a canonical asset artifact.

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
