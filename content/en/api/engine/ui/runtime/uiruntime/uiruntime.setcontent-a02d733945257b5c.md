---
uid: api.a02d733945257b5cfe8ffd7cb602a81ebb88d363d75b94e5cec6616fce0a54c4
symbol: "engine:Inno.UI.Runtime:M:Inno.UI.Runtime.UiRuntime.SetContent(Inno.UI.UiContextHandle,Inno.UI.UiDocumentHandle,System.String,Inno.UI.UiDocumentFragment)"
source: xml
reviewed: 8ad6b37eeffd580bf973fb9d0a2aec40c61b3edfc24b75e6bd96900280c5bf0f
title: "UiRuntime.SetContent"
kind: api
owners: [Inno.UI.Runtime]
apiSurface: source-clr
---

Updates the content state and applies the resulting invariants.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `document`:** The document consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `elementId`:** The element id text validated by the set content operation.

**Parameter `content`:** The content consumed by set content; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
