---
uid: api.inno.editor.playmode.ca14c24fbc73933a
symbol: "engine:Inno.Editor.PlayMode:T:Inno.Editor.PlayMode.EditorPlayModeController"
source: xml
reviewed: 8718350f3903a27f73102e06e254897f7944cd1bc510c5e9088d9ee31396b0e5
title: "EditorPlayModeController"
kind: api
owners: [Inno.Editor.PlayMode]
apiSurface: source-clr
contracts:
- project.inno-editor-playmode
aliases: []
---

Implements the deterministic state machine for one editor Play Mode workflow.

## Remarks

The editor host advances transitions at frame-safe points. Editable scenes remain owned by the scene workspace while the controller owns only the isolated runtime session.
