---
uid: api.0c5f68fdd61acbd91414342b1db0793af6a755e8e77412d337f661d41b1858b8
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UI.SetContent(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,InnoEngine.UI.UiDocumentFragment)"
source: xml
reviewed: ecb8c3de48036031821ce59cb70b1dc54c442d1b1a26948ce21ae6ec9e44f9e2
title: "UI.SetContent"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Replaces an element's children with an explicitly tagged source-language fragment.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `fragment`:** The fragment consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
