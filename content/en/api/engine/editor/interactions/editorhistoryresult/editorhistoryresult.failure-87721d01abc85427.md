---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.87721d01abc85427ed675b54d492e04bdbb45ea0521a4516edd7e45072f8193a
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryResult.Failure(System.String)
title: EditorHistoryResult.Failure
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 8297485c334dfa52baed078dac4a79e72f5b70e35f14fa087787a8d754019cb9
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
