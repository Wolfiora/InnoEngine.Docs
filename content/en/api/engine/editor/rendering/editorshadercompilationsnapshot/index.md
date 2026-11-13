---
uid: api.inno.editor.rendering.f146a58ba70aa862
symbol: "engine:Inno.Editor.Rendering:T:Inno.Editor.Rendering.EditorShaderCompilationSnapshot"
source: xml
reviewed: ddf9eaf66db1abfe6e213798e44188056a69edd661947a30b267a3bfdd7b34bb
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
