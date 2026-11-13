---
uid: api.inno.editor.core.b7254ac55c2ccaae
symbol: "engine:Inno.Editor.Core:T:Inno.Editor.Core.EditorStatistics"
source: xml
reviewed: 4703e92035a50662fabea699bb985d605469d08b2cefbdf95e1e76bc2f7eb65d
title: "EditorStatistics"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
aliases: []
---

Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers.

## Remarks

Contributions contain only stable identifiers and strings. A contribution is retained for the current frame and one completed-frame handoff so panel draw order cannot lose data.
