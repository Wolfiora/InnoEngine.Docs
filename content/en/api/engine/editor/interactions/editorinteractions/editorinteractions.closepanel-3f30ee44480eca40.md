---
uid: api.3f30ee44480eca405b70e1234abf6b90222b1bbf94ef254d5e3aabff6b49dfa2
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.ClosePanel(System.String)"
source: xml
reviewed: e73eb840b9f38c9cc8e0fca063ffda1b9cf04a8b47fb881c3593778ca56c89d0
title: "EditorInteractions.ClosePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Closes one panel in the active extension generation without toggling its current state.

## Parameters

**Parameter `panelId`:** The stable panel identifier to resolve.

## Returns

`true` when an available panel was found.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
