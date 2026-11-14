---
uid: api.41a8264a8557ce592ae95d85d901f12e0f86763651c56497eb69a750ce379e4b
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryAvailability.Unavailable(System.String)"
source: xml
reviewed: d4895c31cf60675758a5809891f98ba2e2098531fb5b619389c73350e0704238
title: "EditorHistoryAvailability.Unavailable"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an unavailable transition result.

## Parameters

**Parameter `message`:** The non-empty diagnostic explaining why the transition is unavailable.

## Returns

An availability value that rejects the transition.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `message` is empty.
