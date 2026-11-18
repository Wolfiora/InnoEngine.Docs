---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.rendering.fea9e636707bb349
symbol: engine:Inno.Editor.Rendering:T:Inno.Editor.Rendering.EditorShaderDraftCompilationSnapshot
title: EditorShaderDraftCompilationSnapshot
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
sourceFingerprint: 827f01e45622e0c18ced02e950d751facbeac14d6b1784e36ea9117f088da897
contracts:
- project.inno-editor-rendering

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `state`:** Latest draft compilation state.

**Parameter `usingLastGood`:** Whether the preview artifact belongs to an earlier successful draft.

**Parameter `diagnostics`:** Latest detached preview diagnostics, separate from project diagnostics.

**Parameter `artifact`:** Preview-only complete shader candidate, or null before the first success.
