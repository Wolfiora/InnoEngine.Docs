---
uid: api.f42d549b7dc957b65fe1c3044c80b486dd9aa5b2e8de91b0aa5a39bd7b387d06
symbol: "engine:Inno.UI:M:Inno.UI.UI.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 14e50fea1e8b1b6ef9d6995ff8499c216698a42ed15b7b0b1858d525dc0c75bb
title: "SetAttribute"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Sets one element attribute.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
