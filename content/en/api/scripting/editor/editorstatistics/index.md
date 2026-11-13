---
uid: api.inno.editor.core.editor-script.77e7fa0c830e6b2e
symbol: "scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorStatistics"
source: xml
reviewed: 6cdfadfcf03e019ccdc488c6d661c7b3b51521a96a006476d2361d8a43d4cdc0
title: "EditorStatistics"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
contracts:
- api.projects.inno-editor-core#lifecycle-and-failure-contracts
- manual.scripting.use-script-api
aliases: []
---

Exchanges frame-scoped, reload-safe statistics between independent editor features and viewers.

## Remarks

Contributions contain only stable identifiers and strings. A contribution is retained for the current frame and one completed-frame handoff so panel draw order cannot lose data.
