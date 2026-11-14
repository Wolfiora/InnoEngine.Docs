---
uid: api.888d9ac5eb5e5dc831abff0e0319e2a1c68b770afcfa28a1bb55e10589bb791b
symbol: "engine:Inno.UI.Runtime:M:Inno.UI.Runtime.UiRuntime.SetAttribute(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 30229df9f639482f359d4e3ba433c940a564b908f3e7028e47391921bf7cc051
title: "UiRuntime.SetAttribute"
kind: api
owners: [Inno.UI.Runtime]
apiSurface: source-clr
---

Updates the attribute state and applies the resulting invariants.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
