---
uid: api.51eca88942af287099ba39858aaf10fb6e85f36ce4b3b1f03d15c8edfbdb11bb
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Present(System.String,System.Object)"
source: xml
reviewed: d7072209506fef3e588d595a8315a87204c30310d535228f9e62d9348b245a2d
title: "EditorInteraction.Present"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Presents an active action in place of this target's normal content.

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

## Returns

`true` when the action presented content; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
