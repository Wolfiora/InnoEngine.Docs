---
uid: api.14181b6681e6ab3864ec613de3f6967d60291b00453f71caa0cbb19df74661df
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.TryGetShortcut(System.String,InnoEditor.Interactions.HotKeyGesture@)"
source: xml
reviewed: 2a5116b881d35849c2a2b3ad89cebc951a9d6bc058cba1f1985eb759c7b5bd8e
title: "EditorInteraction.TryGetShortcut"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Resolves the shortcut displayed for an action in this area.

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

## Returns

`true` when a compatible shortcut exists; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
