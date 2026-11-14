---
uid: api.ef167108738304cb7c83492a76b288e4a10f265905625b35f7f75dee2b17df8b
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.TryGetActiveDragIdentity(InnoEngine.Core.RuntimeIdentity@)"
source: xml
reviewed: 117f063f1b5818a2f4cc852f9675a6205c5de4f3711880c230dbaee576a2284b
title: "EditorInteraction.TryGetActiveDragIdentity"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Gets the currently active drag identity, if its source remains registered.

## Parameters

**Parameter `identity`:** The active domain-qualified runtime identity when available.

## Returns

`true` when a live drag source exists; otherwise, `false`.
