---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58d1e33a1aec016dabf4fc084c1c7588261687c0da2690ad060c42f51085ac05
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(System.String)
title: EditorHistoryAvailability.Unavailable
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: d3beaa6cb12fbb93542fe45ef9a3020ec21b4cdaadfa8b5cbfda43d5b8ca4ed8
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
