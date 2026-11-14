---
uid: api.4590f8722e74b7ddd6a9f6d0e03b8ff959370431ee0d298fc2a2b265bf80ed5a
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TryGetPanelState(System.String,System.Boolean@)"
source: xml
reviewed: eaeae5c995234bf7b20dba5156730f07a632ddc9f2543464734fbf9906dc8fda
title: "EditorInteractions.TryGetPanelState"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Reads whether one available panel is currently open.

## Parameters

**Parameter `panelId`:** The stable panel identity.

**Parameter `isOpen`:** Receives the open state, or false when the panel is unavailable.

## Returns

True when the current generation contains the requested available panel.
