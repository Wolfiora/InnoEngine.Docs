---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.87721d01abc85427ed675b54d492e04bdbb45ea0521a4516edd7e45072f8193a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryResult.Failure(System.String)
title: EditorHistoryResult.Failure
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: c85162c15ee1cd5fcaf501489295cf23c6eab0031d53b999f7d29e125246c4ff
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
