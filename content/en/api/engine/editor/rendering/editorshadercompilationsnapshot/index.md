---
uid: api.inno.editor.rendering.f146a58ba70aa862
symbol: "engine:Inno.Editor.Rendering:T:Inno.Editor.Rendering.EditorShaderCompilationSnapshot"
source: xml
reviewed: 674ed9e67195f5583e65bfc80b07a3f746780c6311ec590337286586712d05ba
title: "EditorShaderCompilationSnapshot"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
contracts:
- project.inno-editor-rendering
aliases: []
---

Contains detached compiler state without retaining assets, tasks or extension instances.

**Parameter `state`:** Latest requested semantic candidate state.

**Parameter `usingLastGood`:** Whether rendering still uses a previous successful candidate.

**Parameter `diagnostics`:** Immutable latest completed compiler diagnostics.
