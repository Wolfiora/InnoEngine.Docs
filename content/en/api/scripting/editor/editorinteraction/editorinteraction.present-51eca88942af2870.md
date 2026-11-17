---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.51eca88942af287099ba39858aaf10fb6e85f36ce4b3b1f03d15c8edfbdb11bb
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteraction.Present(System.String,System.Object)
title: EditorInteraction.Present
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 1ed23b1d37e4a6a919dae3a203579cc77d1d6441965ca26cdbacbbca1ae8d66c
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
