---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.14181b6681e6ab3864ec613de3f6967d60291b00453f71caa0cbb19df74661df
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.TryGetShortcut(System.String,InnoEditor.Interactions.HotKeyGesture@)
title: EditorInteraction.TryGetShortcut
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 7511867dedb56cd5a586e3482500e6b64aeda600db449b4915632774453abb22
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

## Returns

`true` when a compatible shortcut exists; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
