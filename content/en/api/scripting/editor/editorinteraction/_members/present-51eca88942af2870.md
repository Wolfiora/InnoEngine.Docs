---
uid: api.51eca88942af287099ba39858aaf10fb6e85f36ce4b3b1f03d15c8edfbdb11bb
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Present(System.String,System.Object)"
source: xml
reviewed: 1c79981a5516403f0b3d7e7e983c8f8d6e54b5b999a72f4d4efc11aa405df0f4
title: "Present"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Presents an active action in place of this target's normal content.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

**Returns:** `true` when the action presented content; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
