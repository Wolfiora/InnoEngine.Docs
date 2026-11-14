---
uid: api.5a095a44ae70c5688a666f4d5e6a907cee85904febcfe8befe156bf4150a3774
symbol: "scripting:Inno.UI:M:InnoEngine.UI.UI.SetAttribute(InnoEngine.UI.UiContextHandle,InnoEngine.UI.UiDocumentHandle,System.String,System.String,System.String)"
source: xml
reviewed: ea805ce0de31756615ca7fbdab192ffc227582f3e168126a84f7d769c7cc96d8
title: "UI.SetAttribute"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Sets one element attribute.

## Parameters

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set attribute; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set attribute operation.

**Parameter `name`:** The human-readable name used for presentation and diagnostics.

**Parameter `value`:** The concrete value read or transformed by this operation.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
