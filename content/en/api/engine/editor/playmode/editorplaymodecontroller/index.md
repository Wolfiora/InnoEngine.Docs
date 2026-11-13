---
uid: api.inno.editor.playmode.ca14c24fbc73933a
symbol: "engine:Inno.Editor.PlayMode:T:Inno.Editor.PlayMode.EditorPlayModeController"
source: xml
reviewed: 8328c3db084cc2f90ab0564d99f0c65f3c012e87fb9048b96153106c84ba2c13
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
