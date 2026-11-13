---
uid: api.14181b6681e6ab3864ec613de3f6967d60291b00453f71caa0cbb19df74661df
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.TryGetShortcut(System.String,InnoEditor.Interactions.HotKeyGesture@)"
source: xml
reviewed: d25e3699b7664504f5cc67b6867321111a7ab05b2344266822343ff35cbb2127
title: "TryGetShortcut"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves the shortcut displayed for an action in this area.

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

**Returns:** `true` when a compatible shortcut exists; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
