---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58d1e33a1aec016dabf4fc084c1c7588261687c0da2690ad060c42f51085ac05
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(System.String)
title: EditorHistoryAvailability.Unavailable
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 5bce39bfb1d7a69eac51db34be5e83ee53950027aa1fc86b9a397a5afdae7ee0
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

## Returns

An availability value that rejects the transition.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
