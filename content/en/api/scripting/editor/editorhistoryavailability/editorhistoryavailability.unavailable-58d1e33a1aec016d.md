---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.58d1e33a1aec016dabf4fc084c1c7588261687c0da2690ad060c42f51085ac05
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryAvailability.Unavailable(System.String)
title: EditorHistoryAvailability.Unavailable
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 832da28ffee97c43401b18803c1d2f3ca512c9a80648ea088af17063b1fa4df6
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
