---
uid: api.5a095a44ae70c5688a666f4d5e6a907cee85904febcfe8befe156bf4150a3774
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UI.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: 903216101e6106ce51b7edf74efd5a887af27614237321722899fd71f6979c28
title: "SetAttribute"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Sets one element attribute.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
