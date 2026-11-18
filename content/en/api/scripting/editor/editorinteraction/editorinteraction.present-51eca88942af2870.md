---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.51eca88942af287099ba39858aaf10fb6e85f36ce4b3b1f03d15c8edfbdb11bb
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Present(System.String,System.Object)
title: EditorInteraction.Present
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 12d14ba1198b2f1db26bdc6e9f65b812685ec0f63e783208f8f27975cf57efc7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `argument`:** Optional presentation data supplied by the current view.

## Returns

`true` when the action presented content; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
