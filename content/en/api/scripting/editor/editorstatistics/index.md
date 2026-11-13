---
uid: api.inno.editor.core.editor-script.77e7fa0c830e6b2e
symbol: "scripting:Inno.Editor.Core:T:InnoEditor.Core.EditorStatistics"
source: xml
reviewed: 7cd3c7b03bff5ef76f8bed3001211746e67520ffc9a6f16344854f1017d0f9ef
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
