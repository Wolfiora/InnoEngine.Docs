---
uid: api.7bde7b1765c3688fce1d78a2831b7b21858c233d2da9db90defc2bcbcc5e17fa
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryChange.#ctor(System.String,Inno.Editor.Interactions.EditorHistoryPayload,System.String)"
source: xml
reviewed: 98201755949fd2e948286537eb905a32fcebd50b6f3bdd851341a63df7695879
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a neutral history change.

**Parameter `kind`:** The stable globally unique handler protocol identifier.

**Parameter `payload`:** The immutable neutral payload interpreted by the handler.

**Parameter `mergeKey`:** An optional stable key used by the handler to merge adjacent changes.

**Exception `T:System.ArgumentException`:** Thrown when `kind` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `payload` is `null`.
