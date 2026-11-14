---
uid: api.9b06fd3bf648bade8cdcb262bcd9c1eb9ce89f1e2083760501aed46343fdb290
symbol: "engine:Inno.UI:M:Inno.UI.UI.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)"
source: xml
reviewed: f9b0f0038ea1f49405517ebd812bd63f012ebe439b875256ade901c706c9f259
title: "UI.SetContent"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Replaces an element's children with an explicitly tagged source-language fragment.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `fragment`:** The fragment consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
