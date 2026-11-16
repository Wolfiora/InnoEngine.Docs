---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14181b6681e6ab3864ec613de3f6967d60291b00453f71caa0cbb19df74661df
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.TryGetShortcut(System.String,InnoEditor.Interactions.HotKeyGesture@)
title: EditorInteraction.TryGetShortcut
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: decc5547b295744708b41bc5ddd33de5a1d952f1794dc5e4a65b32ab08ebfbc1
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
