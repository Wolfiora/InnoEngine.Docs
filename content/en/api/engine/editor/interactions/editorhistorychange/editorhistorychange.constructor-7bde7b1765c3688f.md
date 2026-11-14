---
uid: api.7bde7b1765c3688fce1d78a2831b7b21858c233d2da9db90defc2bcbcc5e17fa
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryChange.#ctor(System.String,Inno.Editor.Interactions.EditorHistoryPayload,System.String)"
source: xml
reviewed: 466c0e2593496023587be8253c66d307bbb08250cea41c5eb60b4bd47e48c110
title: "EditorHistoryChange.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a neutral history change.

## Parameters

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kind` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `payload` is `null`.
