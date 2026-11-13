---
uid: api.inno.editor.interactions.bd7716c28b1c9b1b
symbol: "engine:Inno.Editor.Interactions:T:Inno.Editor.Interactions.EditorOperationPreparingEvent"
source: xml
reviewed: 30c14b7891206e46d4daef3f07d8612689a197a5b7774d7f835efd831efff07f
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
