---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bdfcbc0fef8ac955d22611cb96a2f020d1efd0ba88fc680e1cd14f09ebbcb56a
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryResult.Failure(System.String)
title: EditorHistoryResult.Failure
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 1bf48fedc878bfea54799b24d911df51c2aa9c8e1fc64821d8c2f51acf0f7b3e
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `message`:** The non-empty diagnostic explaining why the transition could not complete.

## Returns

A result representing a rejected or failed transition.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
