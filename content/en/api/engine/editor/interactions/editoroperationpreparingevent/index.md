---
uid: api.inno.editor.interactions.bd7716c28b1c9b1b
symbol: "engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorOperationPreparingEvent"
source: xml
reviewed: ece3ae30236c58c84181fdb175dcd7e0063b96ec921653ed9bc96b9bb1510270
title: "EditorOperationPreparingEvent"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
contracts:
- api.projects.inno-editor-interactions#generation-and-lifetime-contracts
aliases: []
---

Synchronously closes transient edits before command execution or an extension-handler generation switch.

## Remarks

A handler failure aborts the boundary. Subscribers must use owned Core Event hubs and release them during retirement.
