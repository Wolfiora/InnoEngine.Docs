---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.41a8264a8557ce592ae95d85d901f12e0f86763651c56497eb69a750ce379e4b
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryAvailability.Unavailable(System.String)
title: EditorHistoryAvailability.Unavailable
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: cdd87502c59a182eae42525372a917b1f828533e951422cde035d418ef84c06e
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
